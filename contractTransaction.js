// This file depicts the contract transaction through web3. Please make sure to import contracttransactionfile in index 
//if you wish to run this javascript file. The contract addresses and private keys are from ganache quick startup so you have to change these if you want 
//to deploy and transact the contract 

const Web3 = require("web3");
//console.log(web3);
var ethjs = require("ethereumjs-tx");

const rpcUrl = "HTTP://127.0.0.1:8545";
const  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0xA35F68ACD452627a1d46f4a6E00d63a26B3C68d4";
web3.eth.getBalance(address, (err, wei) => {
    console.log(wei, 'wie')
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance in ether", balance);
   
  })
let address1 = "0xA35F68ACD452627a1d46f4a6E00d63a26B3C68d4";
const privateKey1 = "42524b96b2bd3e1795f6f81507e8f8bbbd421624872a806dd541423d73b95b0c";

let address2 = "0xe4E0cC9bbE6BD670616b0fBF28F19322A82F1e78";
//const privateKey2 = "b9cfd8c9037c33d4cc099d38d257b4401cf46797b0d39803c80e2c62c31b76ed";

const privateKeyBuffer1 = Buffer.from(privateKey1,'hex'); // converts hex to binary 
//const privateKeyBuffer2 = Buffer.from(privateKey2,'hex');
web3.eth.getTransactionCount(address1, (err, txCount) => {
    let convertToHex = web3.utils.toHex;
    if(err){console.log('error',err)}
    else{
    const txObject ={
        nonce: convertToHex(txCount),
        to: address2,
        value: convertToHex(web3.utils.toWei("6", "ether")),
        gaslimit: convertToHex(2100000),
        gasPrice: convertToHex(web3.utils.toWei("10","gwei"))
    
    }

    const tx = new ethjs.Transaction(txObject);
    tx.sign(privateKeyBuffer1);
    const serialTx = tx.serialize();
    const raw = "0x" + serialTx.toString('hex');
    //console.log('tx', tx);
    
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
        console.log('Transaction hash is ', txHash);
        console.log(err)
    })}

    
    
   
  })