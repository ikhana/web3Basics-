// This file depicts the contract deplyement through web3. Please make sure to import contractCall file in index 
//if you wish to run this javascript file
// Please make a contract as well in remix and deploy it on ehtereum node through ropsten 

const rpcUrl = "https://ropsten.infura.io/v3/d160ab67ef424b158dd11080b2575809";
const  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0x0F73e6BD3Fc2728Df6a46c38A9780e6872Ba2cce";
  const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "updateAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let contract = new web3.eth.Contract(abi, address);
console.log("COntract", contract);
contract.methods.getAge().call((err,results)=>{
console.log("Age is ", results);
document.getElementById("main").innerHTML = `Age from contarct is  ${results}`;
})