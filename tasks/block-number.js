const {task} = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    // async function getBlockNumber(taskArgs, hre) {}
    // const getBlockNumber = async(taskArgs, hre) => {}
    // and the third way to define a function 
    // this is a anonyms function type
    async(taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`current block number : ${blockNumber}`);
    }
)

module.exports = {}