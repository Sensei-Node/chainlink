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
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://strapi.senseinode.com/uploads/Frame_bbcbed197b.png"} className="App-logo" alt="logo" />
        <p>Dollar blue price : { (parseInt(price.toString()) / 100).toFixed(2)  }</p>
        <p>Date : { new Date(parseInt(lasttimestamp.toString()) * 1000).toString()   }</p>
      </header>
    </div>
  );
}

export default App;
