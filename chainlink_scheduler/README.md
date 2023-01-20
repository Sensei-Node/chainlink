# Scheduler Chainlink

This hardhat project is to call the chainlink oracle to get the dolar(blue - Argentina) and ether price in usd. 


## Environment 

```shell
cp env.default .env 
```

And set all the variables
```env
GOERLI_RPC=<url goerli client>
ACCOUNT_PK_GOERLI=<deployer private key >
CL_CLIENT_ADDRESS_DOLAR=<address of the dolar client>
CL_OPERATOR_ADDRESS_DOLAR=<operator address>
CL_JOB_ID_DOLAR=<external job id, comes from the node. You can do it in the operator chainlink dashboars>
LOG_FILE_DOLAR=/var/log/<file>.log

CL_CLIENT_ADDRESS_ETH=<idem eth>
CL_OPERATOR_ADDRESS_ETH=<idem eth could be the same as the dolar>
CL_JOB_ID_ETH=<idem eth>
LOG_FILE_ETH=/var/log/<file>.log
``` 

## compile the contract

```shell
npx hardhat compile 
```

## deploy 

If you want to deploy the contract with hardhat

```shell
npx hardhat run scripts/deploy.js
```

The script to make the dolar and ether price be updated is the scheduller_request_XXX.sh 
This bash call the hardhat task which is call the contract method.
This bash script must be added in cron. (`crontab -d`)

## Funding contracts

You have to fund the following contracts with [LINK](https://docs.chain.link/resources/link-token-contracts/):

### LINK 

- Clients contract
- Operator just minimum (0.5)
- Node address

### Goerli 

- Owner (the address who deplpoy the contract) to call the clients
- Node address (The node address is calling when a request is fullfilled)

**The operator address receives the fees in LINK from every request**

