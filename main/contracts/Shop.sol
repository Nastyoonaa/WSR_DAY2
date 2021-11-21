// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Shop {
  address public owner;
  uint256 currentBlock;
  Bank public bank;

  enum Roles {
    Customer,
    Seller,
    Admin
  }

  struct User {
    uint256 id;
    string givenName;
    string familyName;
    string login;
    bytes32 password;
    uint256 role; // роли пользователя 0 - покупатель, 1 - продавец, 2 - администратор
    uint256 balance;
  }

  struct Market {
    uint256 id;
    string name;
    uint256 rating;
    uint256 balance;
    string city;
  }

  struct Feedback {
    uint256 id;
    address marketId;
    address userId;
    uint256 score;
    string text;
    string answer;
    uint256 like;
    uint256 dislike;
  }

  struct RequestRoles {
    uint256 userId;
    uint256 role;
    bool isActive;
  }

  struct RequestRmRoles {
    uint256 userId;
    bool isActive;
  }

  struct RequestMoney {
    uint256 marketId;
    bool isActive;
  }

  struct Bank {
    string login;
    bytes32 password;
    address bankAddr;
    uint256 balance;
  }

  struct Provider {
    string login;
    bytes32 password;
    address providerAddr;
    uint256 balance;
  }

  User[] public users;
  Market[] public markets;
  Feedback[] public feedbacks;
  RequestRoles[] public rroles;
  RequestMoney[] public rmoney;
  RequestRmRoles[] public rrmroles;

  address[] market_ids;

  mapping(address => uint256) public userId;
  mapping(address => uint256) public marketId;
  mapping(address => User[]) public sellersToMarket;
  mapping(address => uint256) public marketCoast;

  event CreateUser(
    uint256 id,
    string givenName,
    string familyName,
    string login,
    bytes32 password,
    uint256 role,
    uint256 balance
  );

  modifier onlyOwner() {
    require(msg.sender == owner, "Must be owner");
    _;
  }

  modifier onlyAdmin() {
    require(users[userId[msg.sender]].role == 2, "Can only admin");
    _;
  }

  modifier onlySeller() {
    require(users[userId[msg.sender]].role == 1, "Can only seller");
    _;
  }

  modifier onlyCustomer() {
    require(users[userId[msg.sender]].role == 0, "Can only customer");
    _;
  }

  constructor() {
    owner = msg.sender;

    bank.login = "bank";
    bank.password = keccak256(abi.encodePacked("1223456789"));
    // bank.bankAddr = address(0xc30e73548f2daaa10950be7b51affc69fce0dbd3);
    bank.balance = 100000;

    Provider memory golden_fish;
    golden_fish.login = "goldfish";
    // golden_fish.providerAddr = address(
    //   0xb25afb438ae3be47f879cffc84432aef05d628e8
    // );
    golden_fish.balance = 100;
    golden_fish.password = keccak256(abi.encodePacked("1223456789"));
  }

  function register(
    string memory _givenName,
    string memory _familyName,
    string memory _password,
    string memory _login
  ) public onlyOwner {
    require(
      keccak256(abi.encodePacked(_givenName)) !=
        keccak256(abi.encodePacked("")),
      "givenName is required"
    );
    require(
      keccak256(abi.encodePacked(_familyName)) !=
        keccak256(abi.encodePacked("")),
      "familyName is required"
    );
    require(
      keccak256(abi.encodePacked(_password)) != keccak256(abi.encodePacked("")),
      "Password is required"
    );
    require(
      keccak256(abi.encodePacked(_login)) != keccak256(abi.encodePacked("")),
      "login is required"
    );
    require(
      keccak256(abi.encodePacked(users[userId[msg.sender]].login)) ==
        keccak256(abi.encodePacked(_login)),
      "User not found"
    );

    User memory newUser;
    uint256 _userId = userId[msg.sender] = users.length + 1;
    newUser.id = _userId;
    newUser.login = _login;
    newUser.givenName = _givenName;
    newUser.familyName = _familyName;
    newUser.password = keccak256(abi.encodePacked(_password));
    newUser.balance = 0;
    newUser.role = 0;

    emit CreateUser(
      newUser.id,
      newUser.givenName,
      newUser.familyName,
      newUser.login,
      newUser.password,
      newUser.role,
      newUser.balance
    );
  }

  function getSellerRole() public {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    uint256 _userId = userId[msg.sender];
    rroles.push(RequestRoles(_userId, 1, true));
  }

  function getAdminRole() public {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    uint256 _userId = userId[msg.sender];
    rroles.push(RequestRoles(_userId, 2, true));
  }

  function setSellerRole(uint256 _userId) public onlyAdmin {
    for (uint256 i = 0; i < rroles.length; i++) {
      if (rroles[i].userId == _userId) {
        users[_userId].role = 1;
        rroles[i].isActive = false;
      }
    }
  }

  function requestRemoveRole() public onlyOwner {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    uint256 _userId = userId[msg.sender];
    rrmroles.push(RequestRmRoles(_userId, true));
  }

  function setAdminRole(uint256 _userId) public onlyAdmin {
    for (uint256 i = 0; i < rroles.length; i++) {
      if (rroles[i].userId == _userId) {
        users[_userId].role = 2;
        rroles[i].isActive = false;
      }
    }
  }

  function removeRole(uint256 _userId) public onlyOwner onlyAdmin {
    users[_userId].role = 0;
  }

  function getMoney(address _marketAddr) public onlySeller {
    rmoney.push(RequestMoney(marketId[_marketAddr], true));
    marketCoast[_marketAddr] += 1;
  }

  function auth(string memory _login, string memory _password) public view {
    require(
      keccak256(abi.encodePacked(_login)) ==
        keccak256(abi.encodePacked(users[userId[msg.sender]].login)) &&
        keccak256(abi.encodePacked(_password)) ==
        users[userId[msg.sender]].password,
      "Check your input data"
    );
  }

  function addFeedback(
    address _marketAddress,
    uint256 _score,
    string memory _text
  ) public onlyCustomer {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    feedbacks.push(
      Feedback(
        feedbacks.length + 1,
        _marketAddress,
        msg.sender,
        _score,
        _text,
        "",
        0,
        0
      )
    );
  }

  function switchToAdmin() public returns (bool result) {
    require(users[userId[msg.sender]].role < 2, "Access denied");
    users[userId[msg.sender]].role = 2;
    return true;
  }

  function switchToSeller() public returns (bool result) {
    require(users[userId[msg.sender]].role < 1, "Access denied");
    users[userId[msg.sender]].role = 1;
    return true;
  }

  function switchToCustomer() public returns (bool result) {
    users[userId[msg.sender]].role = 0;
    return true;
  }

  function addAnswer(uint256 _feedbackId, string memory _text) public {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    feedbacks[_feedbackId].text = _text;
  }

  function addLike(uint256 _feedbackId) public {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    feedbacks[_feedbackId].like++;
  }

  function addDislike(uint256 _feedbackId) public {
    require(users[userId[msg.sender]].role >= 0, "User must be registered");
    feedbacks[_feedbackId].dislike++;
  }
}
