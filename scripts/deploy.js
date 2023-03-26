//imports
const {ethers, run, network} = require("hardhat"); 

//main function 
async function main() {

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying contract ......");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed contract to : ${simpleStorage.address}`);
  // console.log(network.config);
  if(network.config.chainId == 80001 && process.env.ETHERSCAN_API_KEY){
    await simpleStorage.deployTransaction.wait(6);
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

//call function
main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})