import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import abi from "./abi.json";
import React, { useState, useEffect } from 'react';

function App() {
  
  let [price, setPrice] = useState('');
  let [lasttimestamp, setLasttimestamp] = useState('');

  useEffect(() => {
    console.log("running...")
    async function getPrice() {
      console.log("Contract %o, %o", process.env.REACT_APP_CONTRACT_ADDRESS, process.env.NODE_ENV)
      try {
        const { ethereum } = window;
        if (ethereum) {
          try {
            await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
            });
            if(ethereum.chainId != "0x5"){
              window.location.reload(false);
            }
          } catch (error) {
            console.error(error)
          }
          const provider = new ethers.providers.Web3Provider(ethereum);
          if(ethereum.chainId == "0x5" || ethereum.chainId == "0x05"){
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              process.env.REACT_APP_CONTRACT_ADDRESS,
              abi,
              provider
            );
            const _price = await contract.currentPrice()
            setPrice(_price)
            const lastTimestamp = await contract.lastTimeStamp() 
            setLasttimestamp(lastTimestamp)
          }else{
            console.log("Need chain 5, has %o",ethereum.chainId) 
          } 
        }else{
          alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    if (!price) {
      getPrice();
    }
    const { ethereum } = window;
    if (ethereum) {
      //const provider = new ethers.providers.Web3Provider(ethereum);
      ethereum.on("chainChanged", (newNetwork, oldNetwork) => {
        if(newNetwork != '0x5'){
          switchNetwork(ethereum);
        }
      });
    }

    async function switchNetwork(ethereum){
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
      });
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <small>For demo purpouses only (Updated hourly)</small>
        <img src={"https://strapi.senseinode.com/uploads/Frame_bbcbed197b.png"} className="App-logo" alt="logo" />
        <table>
          <tr>
          <td style="width:100">Dollar blue price </td>
          <td style="width:100">Eth usd price </td>
          </tr>
          <tr>
          <td> { (parseInt(price.toString()) / 100).toFixed(2)  }</td>
          <td> n/a</td>
          </tr>
        </table>
        <p>Date : { new Date(parseInt(lasttimestamp.toString()) * 1000).toString()   }</p>
        
       <a href="https://github.com/Sensei-Node/chainlink">Github</a>
       <a href="https://goerli.etherscan.io/address/0xe2906800Ad5FB3df2FB25dc7bCCC4ABc3fa05910">Client contract</a>
       <a href="https://goerli.etherscan.io/address/0x17899bA594F1bdf789c29ce145158A8Be642b9dD">Oracle Contract</a>
      </header>
    </div>
  );
}

export default App;
