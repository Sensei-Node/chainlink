// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {

  const clContract = await hre.ethers.getContractAt("TestnetConsumerDolar", "0xd6C53d501e160851f061984576cd5364046a8c88");
  clContract.requestDolarBluePrice("0x17899bA594F1bdf789c29ce145158A8Be642b9dD","f17d5589cf90471ea9dd1e8b4ce59ed8")

  console.log(
    `The requestDolarBluePrice was called`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
