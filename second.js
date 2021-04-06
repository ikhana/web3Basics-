//const web3 = require("web3");
//console.log(web3);

const rpcUrl = "HTTP://127.0.0.1:8545";
let  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0x819E9733319B444C0beA8893F4A1BD9E5dF14522";
web3.eth.getBalance(address, (err, wei) => {
    console.log(wei, 'wie')
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance in ether", balance);
    document.getElementById("main").innerHTML = `this is balance in ether ${balance}`;
  })