import React, { useState } from "react";
import "./App.css";
import { Container, Form, FormControl } from "react-bootstrap";
import { abi, CreateUsers, CreateStores } from "./contract_abi";
import Web3 from "web3";

function App() {
  const web3 = new Web3("http://127.0.0.1:8545");
  console.log(web3.currentProvider);
  const cntrct = new web3.eth.Contract(
    abi,
    "0x66f11516239254D18D74744d63810de3e7A5Ec09"
  );

  const currentUser = [];
  const newUsers = [];
  const [cUser, setCUser] = useState({});
  const [visibility, setVisibility] = useState(true);
  const [messages, setMessages] = useState([]);

  if (!cntrct) setVisibility(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.text.value.split(" ");
    let command = message[0];

    if (command === "/help") {
      if (currentUser) {
        setMessages([
          ...messages,
          [
            "1. /help -- команда для получния команд" +
              "2. /register [имя] [фамилия] [пароль] [логин] -- регистрация в системe" +
              "3. /auth [логин] [пароль]  -- авторизация в системe" +
              "4. /buyProduct [marketAddress] [prodId] [weight] -- покупка продукта" +
              "5. /getMarketProds [marketAddress] -- получение списка продуктов магазина",
          ],
        ]);
      }

      if (currentUser.role === 1) {
        setMessages([
          ...messages,
          [
            "1. /requestMBalance -- запрос средств для магазина" +
              "2. /getProviderProds -- получение списка продуктов поставщика" +
              "3. /requestProducts [marketAddress] [product id] [weight] -- запрос на поставку продуктов" +
              "4. /acceptRequestBuy [rpdId] [marketAddress] -- подтвердить поставку" +
              "5. /declineRequestBuy [rpdId] [marketAddress] -- отклонить поставку" +
              "6. /getRating -- просмотреть рейтинг магазина",
          ],
        ]);
      } else if (currentUser.role === 2) {
        setMessages([
          ...messages,
          [
            "1. /createProduct [product name] [creator name] [kg] [температура] [срок годности] [price]",
          ],
        ]);
      } else {
        setMessages([
          ...messages,
          [
            "1. /help -- команда для получния команд" +
              "2. /register [имя] [фамилия] [пароль] [логин] -- регистрация в системe" +
              "3. /auth [логин] [пароль]  -- авторизация в системe",
          ],
        ]);
      }
    } else if (command === "/register") {
      const givenName = message[1];
      const familyName = message[2];
      const password = message[3];
      const login = message[4];
      await cntrct.methods
        .register(givenName, familyName, password, login)
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then(async (result) => {
          currentUser[1] = CreateUsers(login);
          if (currentUser[1] != null)
            return setMessages([
              ...messages,
              "Пользователь с таким логином уже существует в системе",
            ]);
          newUsers.push({
            name: givenName,
            surname: familyName,
            role: 0,
            password,
            login,
            balance: "0 eth",
          });
          setMessages([
            ...messages,
            `${givenName} ${familyName} successfully registered`,
          ]);
        });
    } else if (command === "/auth") {
      const password = message[2];
      const login = message[1];
      if (!login || !password) {
        setMessages([...messages, `Логин и пароль обязательны к заполнению`]);
        return 1;
      }
      await cntrct.methods
        .auth(login, password)
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then((result) => {
          currentUser[0] = CreateUsers(login);
          if (password !== currentUser[0].password) {
            setMessages([...messages, `Вы ввели неправильный пароль.`]);
            return true;
          }
          if (currentUser != null) {
            setCUser(currentUser[0]);
            setMessages([
              ...messages,
              `${currentUser[0].name} ${
                currentUser[0].lastname ? currentUser[0].lastname : ""
              } successfully authorized`,
            ]);
          }
        })
        .catch((error) => {
          setMessages([...messages, "Something was wrong"]);
        });
    } else if (command === "/authMarket") {
      const password = message[2];
      const login = message[1];
      if (!login || !password) {
        setMessages([...messages, `Логин и пароль обязательны к заполнению`]);
        return 1;
      }
      await cntrct.methods
        .auth(login, password)
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then((result) => {
          currentUser[0] = CreateStores(login);
          if (password !== currentUser[0].password) {
            setMessages([...messages, `Вы ввели неправильный пароль.`]);
            return true;
          }
          if (currentUser != null) {
            setCUser(currentUser[0]);
            setMessages([
              ...messages,
              `${currentUser[0].name} ${
                currentUser[0].lastname ? currentUser[0].lastname : ""
              } successfully authorized`,
            ]);
          }
        })
        .catch((error) => {
          setMessages([...messages, "Something was wrong"]);
        });
    } else if (command === "/getBalance" && (cUser || currentUser[0])) {
      await cntrct.methods
        .getUserBalance()
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then((result) => {
          if (cUser.name === undefined) {
            setMessages([
              ...messages,
              `Авторизуйтесь для доступа к этой функции`,
            ]);
            return true;
          }
          setMessages([
            ...messages,
            `Баланс пользователя ${cUser.name} ${
              cUser.lastname ? cUser.lastname : ""
            } равен ${cUser.balance}`,
          ]);
        });
    } else if (command === "/getRating" && cUser.rating === 0) {
      await cntrct.methods
        .getUserBalance()
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then((result) => {
          if (cUser.name === undefined) {
            setMessages([
              ...messages,
              `Авторизуйтесь для доступа к этой функции`,
            ]);
            return true;
          }
          setMessages([
            ...messages,
            `Рейтинг магазина ${cUser.name} равен ${cUser.rating}`,
          ]);
        });
    } else if (command === "/getRating" && cUser.rating === 0) {
      await cntrct.methods
        .getUserBalance()
        .call({ from: "0x1b8a0175168259390cc7593a3aaf7238416b397a" })
        .then((result) => {
          if (cUser.name === undefined) {
            setMessages([
              ...messages,
              `Авторизуйтесь для доступа к этой функции`,
            ]);
            return true;
          }
          setMessages([
            ...messages,
            `Рейтинг магазина ${cUser.name} равен ${cUser.rating}`,
          ]);
        });
    } else {
      setMessages([...messages, "Command not found in system"]);
      e.target.text.value = "";
      return 1;
    }

    e.target.text.value = "";
  };

  return (
    <Container fluid>
      {visibility ? (
        <div className="app">
          {/* Header here */}

          <div className="header">
            <h3 className="text-center mt-3 mb-3">BLOCKMARKET</h3>
          </div>

          {/* Main content */}

          <div className="content mb-3">
            <div className="commands">
              <ul className="commandList">
                <li>
                  {">"} Добро пожаловать в BLOCKMARKET. Введите /help для
                  получения списка команд.
                </li>
                {messages.map((message) => (
                  <li key={1 + Math.random()}>
                    {">"} {message}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Input field */}

          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormControl
              type="text"
              name="text"
              id="text"
              className="text"
              placeholder="Enter command here"
            />
          </Form>
        </div>
      ) : (
        <div className="app">
          <div className="header">
            <h3 className="text-center mt-3 mb-3">Контракт не подключен!</h3>
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;
