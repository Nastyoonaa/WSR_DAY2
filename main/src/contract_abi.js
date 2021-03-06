export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAcitve",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "AcceptBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "marketName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
    ],
    name: "BuyInMarket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "creator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "kg",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destroyTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "temp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "CreateProduct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "givenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "familyName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "login",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "CreateUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAcitve",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "DeclineBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isSuccess",
        type: "bool",
      },
    ],
    name: "ReturnMoney",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "finalPrice",
        type: "uint256",
      },
    ],
    name: "SendFinalPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "ShowBalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "productid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "createRequestBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "shop",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
    ],
    name: "getShopRating",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feedbackId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "addAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feedbackId",
        type: "uint256",
      },
    ],
    name: "addDislike",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_score",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "addFeedback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feedbackId",
        type: "uint256",
      },
    ],
    name: "addLike",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_login",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "auth",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bank",
    outputs: [
      {
        internalType: "string",
        name: "login",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "bankAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "feedbacks",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "marketId",
        type: "address",
      },
      {
        internalType: "address",
        name: "userId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "string",
        name: "answer",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "like",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dislike",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdminRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketAddr",
        type: "address",
      },
    ],
    name: "getMoney",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSellerRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "marketCoast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "marketId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "city",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "creator",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "kg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "destroyTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "temp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "productsToMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "creator",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "kg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "destroyTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "temp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "providerRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "productid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rProds",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "productid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_givenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_familyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
      {
        internalType: "string",
        name: "_login",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_userId",
        type: "uint256",
      },
    ],
    name: "removeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRemoveRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestsToMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "productid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rmoney",
    outputs: [
      {
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rrmroles",
    outputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rroles",
    outputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sellersToMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "givenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "familyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "login",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_userId",
        type: "uint256",
      },
    ],
    name: "setAdminRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_userId",
        type: "uint256",
      },
    ],
    name: "setSellerRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchToAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchToCustomer",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchToSeller",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "givenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "familyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "login",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_creator",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_kg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_temp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_destroyTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getProviderProducts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "creator",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "kg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destroyTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "temp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Shop2.Product[]",
        name: "productList",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketAddr",
        type: "address",
      },
    ],
    name: "getMarketPrducts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "creator",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "kg",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destroyTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "temp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Shop2.Product[]",
        name: "productList",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currentMarket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256",
      },
    ],
    name: "requestProducts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rpdId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_marketAddr",
        type: "address",
      },
    ],
    name: "acceptRequestBuy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rpdId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_marketAddr",
        type: "address",
      },
    ],
    name: "declineRequestBuy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    name: "buyInMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketAddr",
        type: "address",
      },
    ],
    name: "returnMoney",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const CreateStores = (name) => {
  switch (name) {
    case "mg1":
      return {
        name: "?????????????? 1",
        balance: "70 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg2":
      return {
        name: "?????????????? 2",
        balance: "0 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg3":
      return {
        name: "?????????????? 3",
        balance: "80 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg4":
      return {
        name: "?????????????? 4",
        balance: "0 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg5":
      return {
        name: "?????????????? 5",
        balance: "90 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg6":
      return {
        name: "?????????????? 6",
        balance: "0 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg7":
      return {
        name: "?????????????? 7",
        balance: "100 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg8":
      return {
        name: "?????????????? 8",
        balance: "150 eth",
        password: "123456789",
        rating: 0,
      };
    case "mg9":
      return {
        name: "?????????????? 9",
        balance: "0 eth",
        password: "123456789",
        rating: 0,
      };
    default:
      return null;
  }
};

export const CreateUsers = (username) => {
  switch (username) {
    case "ivan":
      return {
        name: " ????????",
        surname: "????????????",
        lastname: "????????????????",
        role: 2,
        password: "123456789",
        balance: "50 eth",
      };
    case "bank":
      return {
        name: "bank",
        password: "123456789",
        balance: "10000 eth",
      };
    case "goldfish":
      return {
        name: "?????????????? ??????????",
        password: "123456789",
        balance: "100 eth",
      };
    case "roman":
      return {
        name: "??????????",
        surname: "??????????????",
        lastname: "??????????????????",
        password: "123456789",
        role: 0,
        balance: "80 eth",
      };
    case "semen":
      return {
        name: "??????????",
        surname: "??????????????",
        password: "123456789",
        lastname: "??????????????????",
        role: 1,
        shop: "mag1",
        balance: "70 eth",
      };
    case "ugin":
      return {
        name: "??????????????",
        surname: "????????????????????",
        lastname: "????????????????????",
        password: "123456789",
        role: 1,
        shop: "mag3",
        balance: "80 eth",
      };
    case "dima":
      return {
        name: "????????????????",
        surname: "????????????????",
        password: "123456789",
        lastname: "????????????????",
        role: 1,
        shop: "mag5",
        balance: "90 eth",
      };
    case "vasya":
      return {
        name: "??????????????",
        password: "123456789",
        surname: "????????????????",
        lastname: "????????????????????",
        role: 1,
        shop: "mag7",
        balance: "100 eth",
      };
    case "igor":
      return {
        name: "??????????",
        surname: "????????????",
        lastname: "??????????????????",
        password: "123456789",
        role: 1,
        shop: "mag8",
        balance: "150 eth",
      };
    case "nikola":
      return {
        name: "??????????????",
        surname: "????????????????",
        password: "123456789",
        lastname: "????????????????????",
        role: 0,
        balance: "90 eth",
      };
    case "oleg":
      return {
        name: "????????",
        surname: "????????????",
        lastname: "????????????????",
        password: "123456789",
        role: 0,
        balance: "100 eth",
      };
    case "petr":
      return {
        name: "????????",
        surname: "????????????????",
        lastname: "????????????",
        password: "123456789",
        role: 0,
        balance: "110 eth",
      };
    case "alex":
      return {
        name: "????????????????????",
        surname: "??????????????????????",
        lastname: "??????????????????????????",
        password: "123456789",
        role: 0,
        balance: "120 eth",
      };
    default:
      return null;
  }
};
