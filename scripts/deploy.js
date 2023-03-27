const {ethers, network, run} = require("hardhat");
require("dotenv").config();

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying contract .....")
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // await simpleStorage.deployTransaction.wait(6);
  console.log(`contract deployed to address : ${simpleStorage.address}`);
  console.log(`contract deployed to network : ${network.name}`);

  if(network.config.chainId == 80001 && process.env.POLYGON_MUMBAI_API){
    console.log("waiting for blocks confirmation ..... ");
    await simpleStorage.deployTransaction.wait(6);
    console.log("-------deployment confirmed--------")
    await varify(simpleStorage.address, []);
  }

  // console.log("");

  // interacting with the contract
  console.log("\n-----------\ndone varifying\n-----------");
  const currentValue = await simpleStorage.retrieve();
  console.log(`\ncurrent value is : ${currentValue}`);

  // updatign the current value
  const transactionValue = await simpleStorage.store(800);
  await transactionValue.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`updated value is : ${updatedValue}`);
}

// these function notation and making function a variable, both are same for the purpose of this course
// const varify = async(contractAddress, args) => {}
async function varify(contractAddress, args){
  console.log("verifying contract ......");

  try {  
    await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args,
  })
  } catch (e) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already verified");
    }
    else{
      console.log(e);
    }
  }
}


main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})