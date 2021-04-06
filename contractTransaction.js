// This file depicts the contract transaction through web3. Please make sure to import contracttransactionfile in index 
//if you wish to run this javascript file. The contract addresses and private keys are from ganache quick startup so you have to change these if you want 
//to deploy and transact the contract 

const Web3 = require("web3");
//console.log(web3);
var ethjs = require("ethereumjs-tx");

const rpcUrl = "HTTP://127.0.0.1:8545";
const  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0x59b255fB79b6C9e9e62Fdcd3175100727526f2BC";
web3.eth.getBalance(address, (err, wei) => {
    console.log(wei, 'wie')
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance in ether", balance);
   
  })
let address1 = "0x59b255fB79b6C9e9e62Fdcd3175100727526f2BC";
const privateKey1 = "6bcef8bd3b7982f11b0cb04367b186ff3d638e2aea7cbddd34f9278b831796cd";

let address2 = "0x404Fe81F3329323bD1665a04145870c7912534Bc";
const privateKey2 = "b9cfd8c9037c33d4cc099d38d257b4401cf46797b0d39803c80e2c62c31b76ed";

const privateKeyBuffer1 = Buffer.from(privateKey1,'hex'); // converts hex to binary 
const privateKeyBuffer2 = Buffer.from(privateKey2,'hex');
web3.eth.getTransactionCount(address1, (err, txCount) => {
    let convertToHex = web3.utils.toHex;
    if(err){console.log('error',err)}
    else{
    const txObject ={
        nounce: convertToHex(txCount++),
        to: address2,
        value: convertToHex(web3.utils.toWei("1", "ether")),
        gaslimit: convertToHex(6721975),
        gasPrice: convertToHex(web3.utils.toWei("20000000000","gwei"))
    
    }

    const tx = new ethjs.Transaction(txObject);
    tx.sign(privateKeyBuffer1);
    const serialTx = tx.serialize();
    const raw = "0x" + serialTx.toString('hex');
    //console.log('tx', tx);
    
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
        console.log('Transaction hash is ', txHash);
    })}

    
    
   
  })