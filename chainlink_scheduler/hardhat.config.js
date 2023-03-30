require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: require("find-config")(".env") });

task("requestDolar", "Prints an account's balance")
  .addParam(
    "clientAddress",
    "The client contract's address. Ex.goerli. 0xe2906800Ad5FB3df2FB25dc7bCCC4ABc3fa05910"
  )
  .addParam(
    "operatorAddress",
    "The operator contract's address. Ex.goerli. 0x17899bA594F1bdf789c29ce145158A8Be642b9dD"
  )
  .addParam("jobId", "The job id. Ex.goerli. f17d5589cf90471ea9dd1e8b4ce59ed8")
  .setAction(async (taskArgs, hre) => {
    try {
      const clContract = await hre.ethers.getContractAt(
        "TestnetConsumerDolar",
        taskArgs.clientAddress
      );
      await clContract.requestDolarBluePrice(
        taskArgs.operatorAddress,
        taskArgs.jobId
      );
      console.log(`The requestDolarBluePrice was called`);
    } catch (error) {
      console.error(error);
    }
  });

task("requestEth", "Prints an account's balance")
  .addParam(
    "clientAddress",
    "The client contract's address. Ex.goerli. 0xB00D88867825ADb50aa4E4A85925E6ACca307Aba"
  )
  .addParam(
    "operatorAddress",
    "The operator contract's address. Ex.goerli. 0x17899bA594F1bdf789c29ce145158A8Be642b9dD"
  )
  .addParam("jobId", "The job id. Ex.goerli. 42edf614ead24f9c8dcd5f49e73a4e24")
  .setAction(async (taskArgs, hre) => {
    try {
      const clContract = await hre.ethers.getContractAt(
        "TestnetConsumerEth",
        taskArgs.clientAddress
      );
      await clContract.requestETHUSD(taskArgs.operatorAddress, taskArgs.jobId);
      console.log(`The request Eth Price was called`);
    } catch (error) {
      console.error(error);
    }
  });

task("getEth", "Prints an account's balance")
  .addParam(
    "clientAddress",
    "The client contract's address. Ex.goerli. 0xe2906800Ad5FB3df2FB25dc7bCCC4ABc3fa05910"
  )
  .setAction(async (taskArgs, hre) => {
    try {
      const clContract = await hre.ethers.getContractAt(
        "TestnetConsumerEth",
        taskArgs.clientAddress
      );
      valor = await clContract.currentPrice();
      console.log(`The eth price is ` + valor);
    } catch (error) {
      console.error(error);
    }
  });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  allowUnlimitedContractSize: true,
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      type: "hardhat",
      name: "hardhat",
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.ACCOUNT_PK_GOERLI],
      chainId: 5,
      type: "testnet",
      name: "goerli",
    },
    // mainnet: {
    //   url: process.env.MAINNET_RPC,
    //   accounts: [process.env.ACCOUNT_PK_MAINNET],
    //   chainId: 1,
    //   type: 'mainnet',
    //   name: 'mainnet'
    // },
  },
};
