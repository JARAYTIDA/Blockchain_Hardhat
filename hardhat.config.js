require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_RPC = process.env.POLYGON_MUMBAI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks : {
    polygon : {
      url : POLYGON_RPC,
      accounts: [PRIVATE_KEY],
      chainId : 80001,
    }
  },
  solidity: "0.8.18",
  etherscan : {
    aniKey : ETHERSCAN_API_KEY,
  },
};
