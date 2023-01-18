import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import abi from "./abi.json";
import React, { useState, useEffect } from 'react';

function App() {
  
  let [price, setPrice] = useState('');

  useEffect(() => {
    console.log("running...")
    async function getPrice() {
      const CONTRACT_ADDRESS = "0xd6C53d501e160851f061984576cd5364046a8c88";
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            abi,
            provider
          );
          const _price = await contract.currentPrice() 
          setPrice(_price)
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
        <p>Dolar price : { (parseInt(price.toString()) / 100).toFixed(2)  }</p>
        {/* <img src={"https://uploads-ssl.webflow.com/62c45e4db6125c609200cf9e/634ed27ccdb39d3e1f197970_Mapa_Nodos.png"} className="App-logo" alt="logo" /> */}
        
         
        
      </header>
    </div>
  );
}

export default App;