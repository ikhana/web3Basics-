//https://ropsten.infura.io/v3/d160ab67ef424b158dd11080b2575809
const Web3 = require("web3");
//console.log(web3);

const rpcUrl = "https://ropsten.infura.io/v3/d160ab67ef424b158dd11080b2575809";
let  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0x68ad060E7f52f96bA71fcD9A38ed40FAb39b43bf";
web3.eth.getBalance(address, (err, wei) => {
    console.log(wei, 'wie')
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance in ether", balance);
    document.getElementById("main").innerHTML = `this is balance in ether ${balance}`;
  })