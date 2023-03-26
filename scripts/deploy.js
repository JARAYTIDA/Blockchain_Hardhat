//imports
const {ethers, run, network} = require("hardhat"); 

//main function 
async function main() {

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying contract ......");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed contract to : ${simpleStorage.address}`);
  console.log(network.config);
}

async function varify(contractAddress, args){
  console.log("verifying contract ......");

  try {  
    await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args,
  })
  } catch (e) {
    if(e.message.toLower().include("already verified")){
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