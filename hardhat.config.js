require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number")
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

PRIVATE_KEY = process.env.PRIVATE_KEY;
POLYGON_MUMBAI_RPC  = process.env.POLYGON_MUMBAI_RPC;
POLYGON_MUMBAI_API = process.env.POLYGON_MUMBAI_API;
COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;


module.exports = {
  defaultNetwork: "hardhat",
  networks : {
    polygon : {
      url : POLYGON_MUMBAI_RPC,
      accounts: [PRIVATE_KEY],
      chainId : 80001,
    }, 

    localhost: {
      url : "http://127.0.0.1:8545/",
      chainId : 31337,
    },
  },

  solidity: "0.8.18",

  etherscan : {
    apiKey : POLYGON_MUMBAI_API,
  },
  gasReporter : {
    enabled : true,
    outputFile: "gas-report.txt",
    currency: "INR",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "BTC",
  },
};
