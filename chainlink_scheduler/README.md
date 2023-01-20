# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.


## Environment 

```shell
cp env.default .env 
```

And set all the variables


Try running some of the following tasks:

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

