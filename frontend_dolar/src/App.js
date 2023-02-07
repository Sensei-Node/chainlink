import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import './App.css';
import abi from './abi.json';
import abieth from './abieth.json';

const LOGO_GRAY_URL = 'https://strapi.senseinode.com/uploads/logo_gray_e1200b6d0f.png?614888';

const HELPER_LINKS = [
	{ name: 'Github', url: 'https://github.com/Sensei-Node/chainlink' },
	{
		name: 'Client Contract Dollar',
		url: 'https://goerli.etherscan.io/address/0xe2906800Ad5FB3df2FB25dc7bCCC4ABc3fa0591',
	},
	{
		name: 'Client Contract ETH',
		url: 'https://goerli.etherscan.io/address/0xB00D88867825ADb50aa4E4A85925E6ACca307Aba',
	},
	{
		name: 'Oracle Contract',
		url: 'https://goerli.etherscan.io/address/0x17899bA594F1bdf789c29ce145158A8Be642b9dD',
	},
];

const SENSEINODE_WEBSITE_URL = 'https://www.senseinode.com';

const CONTACT_US_URL =
	'https://us5.list-manage.com/contact-form?u=9a345a8d92f88e03240efcfb6&form_id=d832bc00fc84c97d62fa9aa05161379d';

const ABOUT_US_URL = 'https://www.senseinode.com/#aboutus';

function App() {
	let [priceDolar, setPriceDolar] = useState('');
	let [priceEth, setPriceEth] = useState('');
	let [lasttimestampDolar, setLasttimestampDolar] = useState('');
	let [lasttimestampEth, setLasttimestampEth] = useState('');

	useEffect(() => {
		console.log('running...');
		async function getPrice() {
			try {
				const { ethereum } = window;
				if (ethereum) {
					try {
						await ethereum.request({
							method: 'wallet_switchEthereumChain',
							params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
						});
						if (ethereum.chainId != '0x5') {
							window.location.reload(false);
						}
					} catch (error) {
						console.error(error);
					}
					const provider = new ethers.providers.Web3Provider(ethereum);
					if (ethereum.chainId == '0x5' || ethereum.chainId == '0x05') {
						const signer = provider.getSigner();
						// Dolar
						const contractDolar = new ethers.Contract(
							process.env.REACT_APP_CONTRACT_ADDRESS_DOLAR,
							abi,
							provider
						);
						const _priceDolar = await contractDolar.currentPrice();
						setPriceDolar(_priceDolar);
						const lastTimestampDolar = await contractDolar.lastTimeStamp();
						setLasttimestampDolar(lastTimestampDolar);

						// Eth
						const contractEth = new ethers.Contract(
							process.env.REACT_APP_CONTRACT_ADDRESS_ETH,
							abieth,
							provider
						);
						const _priceEth = await contractEth.currentPrice();
						setPriceEth(_priceEth);
						const lastTimestampEth = await contractEth.lastTimeStamp();
						setLasttimestampEth(lastTimestampEth);
						console.log('ETH' + lastTimestampEth);
					} else {
						console.log('Need chain 5, has %o', ethereum.chainId);
					}
				} else {
					alert(
						'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
					);
				}
			} catch (error) {
				console.log('error', error);
			}
		}

		if (!priceDolar) {
			getPrice();
		}
		const { ethereum } = window;
		if (ethereum) {
			//const provider = new ethers.providers.Web3Provider(ethereum);
			ethereum.on('chainChanged', (newNetwork, oldNetwork) => {
				if (newNetwork != '0x5') {
					switchNetwork(ethereum);
				}
			});
		}

		async function switchNetwork(ethereum) {
			await ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
			});
		}
	}, []);

	return (
		<div className='App bg-main bg-center bg-contain bg-no-repeat flex flex-col justify-between min-h-screen'>
			<header className='flex justify-center sm:justify-end p-10'>
				<div className='px-4 border-2 border-brand-blue-primary bg-brand-blue-secondary rounded-lg'>
					<span className='text-lg  text-brand-blue-primary'>Demo - Updated Hourly!</span>
				</div>
			</header>

			<section className='flex justify-center'>
				<img
					src='https://strapi.senseinode.com/uploads/Frame_bbcbed197b.png'
					className='h-24 sm:h-32'
					alt='logo'
				/>
			</section>

			<section className='w-full sm:max-w-4xl flex flex-col sm:flex-row mx-auto gap-2 sm:gap-8 mt-16 px-4'>
				<div className='w-full sm:w-1/2 flex justify-between items-center pl-4 h-16 border-2 border-gray-100 rounded-lg overflow-hidden'>
					<span className='sm:text-xl'>Dollar blue Price</span>
					<div className='w-28 flex items-center bg-brand-green-primary text-white px-4 h-full'>
						<span className='sm:text-xl'>
							${(parseInt(priceDolar.toString()) / 100).toFixed(2)}
						</span>
					</div>
				</div>
				<div className='w-full sm:w-1/2 flex justify-between items-center pl-4 h-16 border-2 border-gray-100 rounded-lg overflow-hidden'>
					<span className='sm:text-xl'>Ethereum USD Price</span>
					<div className='w-28 flex items-center bg-brand-green-primary text-white px-4 h-full'>
						<span className='sm:text-xl'>${(parseInt(priceEth.toString()) / 100).toFixed(2)}</span>
					</div>
				</div>
			</section>

			<section className='px-4 sm:px-0 mt-6'>
				<p className='my-2'>
					<span className='text-gray-400 sm:text-xl'>Date Dollar:</span>
					<span className='sm:text-xl ml-2'>
						{new Date(parseInt(lasttimestampDolar.toString()) * 1000).toString()}
					</span>
				</p>
				<p className='my-2'>
					<span className='text-gray-400 sm:text-xl'>Date ETH:</span>
					<span className='sm:text-xl ml-2'>
						{new Date(parseInt(lasttimestampEth.toString()) * 1000).toString()}
					</span>
				</p>
			</section>

			<section className='flex flex-col gap-1 mt-8'>
				{HELPER_LINKS.map(({ name, url }) => (
					<a key={url} className='text-lg text-gray-400' href={url}>
						{name}
					</a>
				))}
			</section>

			<footer className='px-4 sm:px-14 py-6 flex justify-between'>
				<a href={SENSEINODE_WEBSITE_URL} target='_blank' className='inline-block'>
					<img src={LOGO_GRAY_URL} alt='Logo' />
				</a>
				<div className='flex gap-4'>
					<a href={ABOUT_US_URL} target='_blank' className='inline-block text-lg text-gray-400'>
						About SenseiNode
					</a>
					<a href={CONTACT_US_URL} target='_blank' className='inline-block text-lg text-gray-400'>
						Contact Us
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
