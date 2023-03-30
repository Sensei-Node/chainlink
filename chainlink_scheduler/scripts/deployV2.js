const hre = require("hardhat");
const { tokenchainlink } = require("../helpers/variables");


async function main() {
    const TestnetConsumerDolar = await hre.ethers.getContractFactory("TestnetConsumerDolar");
    const testnetConsumerDolar = await TestnetConsumerDolar.deploy(tokenchainlink);

    await testnetConsumerDolar.deployed();
    console.log(testnetConsumerDolar.address)

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});