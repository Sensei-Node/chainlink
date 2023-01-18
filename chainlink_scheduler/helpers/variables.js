const { network } = require("hardhat");
require('dotenv').config({ path: require('find-config')('.env') })

const tokenchainlink = ['testnet'].includes(network.config.type)? "0x326C977E6efc84E512bB9C30f76E30c160eD06FB":"0x514910771AF9Ca656af840dff83E8264EcF986CA";

module.exports = { tokenchainlink }