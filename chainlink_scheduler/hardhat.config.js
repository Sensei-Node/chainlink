require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: require('find-config')('.env') })

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
