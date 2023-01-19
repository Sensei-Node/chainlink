require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: require('find-config')('.env') })

task("requestDolar", "Prints an account's balance")
  .addParam("clientAddress", "The client contract's address. Ex.goerli. 0xd6C53d501e160851f061984576cd5364046a8c88")
  .addParam("operatorAddress", "The operator contract's address. Ex.goerli. 0x17899bA594F1bdf789c29ce145158A8Be642b9dD")
  .addParam("jobId", "The job id. Ex.goerli. f17d5589cf90471ea9dd1e8b4ce59ed8")
  .setAction(async (taskArgs, hre) => {
    try{
      const clContract = await hre.ethers.getContractAt("TestnetConsumerDolar", taskArgs.clientAddress);
      await clContract.requestDolarBluePrice(taskArgs.operatorAddress, taskArgs.jobId);
      console.log(
        `The requestDolarBluePrice was called`
      );  
    }catch(error){
      console.error(error)
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
      type: 'hardhat',
      name: 'hardhat'
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.ACCOUNT_PK_GOERLI],
      chainId: 5,
      type: 'testnet',
      name: 'goerli'
    },
    // mainnet: {
    //   url: process.env.MAINNET_RPC,
    //   accounts: [process.env.ACCOUNT_PK_MAINNET],
    //   chainId: 1,
    //   type: 'mainnet',
    //   name: 'mainnet'
    // },
  }
};

