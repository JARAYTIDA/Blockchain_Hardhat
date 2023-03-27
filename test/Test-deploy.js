const {ethers} = require("hardhat");
const {assert, expect} = require("chai");

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function() {
  let simpleStorage, simpleStorageFactory;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a favourite number 0", async function() {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";

    assert.equal(currentValue.toString(), expectedValue);
    //expect(currentValue.toString()).to.equal(expectedValue)
    // these both lines means exactly same
  })

  it("Should update when we call store", async function() {
    const expectedVal = "89284";
    const transactionRes = await simpleStorage.store(expectedVal);
    await transactionRes.wait(1);

    const currVal = await simpleStorage.retrieve();
    assert.equal(currVal.toString(), expectedVal);
  })

})