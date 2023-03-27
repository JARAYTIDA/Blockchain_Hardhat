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
}

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