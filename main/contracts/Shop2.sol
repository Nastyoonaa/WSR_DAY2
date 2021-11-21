// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Shop.sol";

contract Shop2 is Shop {
  struct Product {
    uint256 id;
    string name;
    string creator;
    uint256 kg;
    uint256 createdAt;
    uint256 destroyTime;
    uint256 temp;
    uint256 price;
  }

  struct RequestProducts {
    uint256 id;
    address market;
    uint256 productid;
    uint256 weight;
    uint256 price;
    bool isActive;
  }

  Product[] public products;
  RequestProducts[] public rProds;

  mapping(address => Product[]) public productsToMarket;
  mapping(address => RequestProducts[]) public requestsToMarket;
  mapping(address => RequestProducts[]) public providerRequests;

  event CreateProduct(
    uint256 id,
    string name,
    string creator,
    uint256 kg,
    uint256 createdAt,
    uint256 destroyTime,
    uint256 temp,
    uint256 price
  );
  event getShopRating(address shop, uint256 rating);
  event createRequestBuy(
    uint256 id,
    address market,
    uint256 productid,
    uint256 weight,
    uint256 price,
    bool isActive
  );
  event SendFinalPrice(uint256 finalPrice);
  event ReturnMoney(bool isSuccess);
  event AcceptBuy(uint256 marketId, bool isAcitve, uint256 price);
  event DeclineBuy(uint256 marketId, bool isAcitve, uint256 price);
  event BuyInMarket(
    string marketName,
    uint256 productId,
    uint256 weight,
    string productName
  );
  event ShowBalance(uint256 balance);

  constructor() {}

  function createProduct(
    string memory _name,
    string memory _creator,
    uint256 _kg,
    uint256 _temp,
    uint256 _destroyTime,
    uint256 _price
  ) public {
    uint256 _productId = products.length + 1;
    products.push(
      Product(
        _productId,
        _name,
        _creator,
        _kg,
        block.number,
        _destroyTime,
        _temp,
        _price
      )
    );
    emit CreateProduct(
      _productId,
      _name,
      _creator,
      _kg,
      block.number,
      _destroyTime,
      _temp,
      _price
    );
  }

  function getRating(address _shopAddress) private {
    uint256 rating = markets[marketId[_shopAddress]].rating;
    emit getShopRating(_shopAddress, rating);
  }

  function getProviderProducts()
    public
    view
    returns (Product[] memory productList)
  {
    return products;
  }

  function getMarketPrducts(address marketAddr)
    public
    view
    returns (Product[] memory productList)
  {
    return productsToMarket[marketAddr];
  }

  function requestProducts(
    address _currentMarket,
    uint256 _productId,
    uint256 _weight
  ) public onlySeller {
    rProds.push(
      RequestProducts(
        rProds.length + 1,
        _currentMarket,
        _productId,
        _weight,
        0,
        false
      )
    );
    emit createRequestBuy(
      rProds.length + 1,
      _currentMarket,
      _productId,
      _weight,
      0,
      false
    );
    // uint256 finalPrice = calculateFinalPrice();
    // _currentMarket,
    // rProds.length + 1,
    // _weight
    // rProds[rProds.length + 1].price = finalPrice;
    // emit SendFinalPrice(finalPrice);
  }

  // function calculateFinalPrice()
  //   private
  //   returns (
  //     // address _cMarket,
  //     // uint256 prodId,
  //     // uint256 _weight
  //     uint256 result
  //   )
  // {
  //   // uint256 marketRating = calculateRating(_cMarket);
  //   // Product storage prod = products[prodId];

  //   // markets[marketId[_cMarket]].rating = marketRating;

  //   // uint256 k;

  //   // if (_weight >= 100) {
  //   //   k = 100;
  //   // } else if (100 < _weight && _weight <= 1000) {
  //   //   k = 95;
  //   // } else if (_weight > 1000) {
  //   //   k = 9;
  //   // }

  //   // return
  //   //   prod.price - ((prod.price * marketRating) / 100) * (k / 100) * _weight;
  //   return 10;
  // }

  function getUserBalance() public {
    emit ShowBalance(users[userId[msg.sender]].balance);
  }

  function calculateRating(address market) private returns (uint256 result) {
    Market storage cMrkt = markets[marketId[market]];
    uint256 rating = cMrkt.rating = 1;
    return rating;
  }

  function acceptRequestBuy(uint256 rpdId, address _marketAddr) public {
    RequestProducts storage rprod = rProds[rpdId];
    Market storage mrkt = markets[marketId[_marketAddr]];
    rprod.isActive = true;
    mrkt.balance -= rprod.price;
    emit AcceptBuy(mrkt.id, rprod.isActive, rprod.price);
    // startDelivery();
  }

  function declineRequestBuy(uint256 rpdId, address _marketAddr) public {
    RequestProducts storage rprod = rProds[rpdId];
    Market storage mrkt = markets[marketId[_marketAddr]];
    emit DeclineBuy(mrkt.id, rprod.isActive, rprod.price);
  }

  function buyInMarket(
    address _marketAddr,
    uint256 productId,
    uint256 weight
  ) public {
    Product storage prod = productsToMarket[_marketAddr][productId];
    prod.kg -= weight;
    users[userId[msg.sender]].balance -= prod.price;

    emit BuyInMarket(
      markets[marketId[_marketAddr]].name,
      productId,
      weight,
      prod.name
    );
  }

  function returnMoney(address _marketAddr) public {
    require(marketCoast[_marketAddr] > 0, "Must be positive");
    Market storage cMarket = markets[marketId[_marketAddr]];
    cMarket.balance -= 1000;
    bank.balance += 1000;
    emit ReturnMoney(true);
  }

  function startDelivery(address marketId, uint256 prodId)
    private
    view
    returns (bool result)
  {
    RequestProducts memory rprod = requestsToMarket[marketId][prodId];
    if (rprod.isActive == true) {
      return true;
    }
  }
}
