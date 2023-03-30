# Dolar and eth price frontend 

This project is a demo to show how to get data from an oracle

## Download dependencies

`npm i` 

## Environment variables 

```bash
cp env.default .env
```
And set the address of the clients contracts.
You have this contract in [chainlink_scheduler](https://github.com/Sensei-Node/chainlink/tree/main/chainlink_scheduler)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

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


