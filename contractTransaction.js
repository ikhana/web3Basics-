// This file depicts the contract transaction through web3. Please make sure to import contracttransactionfile in index 
//if you wish to run this javascript file. The contract addresses and private keys are from ganache quick startup so you have to change these if you want 
//to deploy and transact the contract 

const Web3 = require("web3");
//console.log(web3);
var ethjs = require("ethereumjs-tx");

const rpcUrl = "HTTP://127.0.0.1:8545";
const  web3 = new Web3(rpcUrl);
//console.log("rpc", web);
let address = "0x81e50FF167268F5d21fD2792ABf8863448460aCD";
web3.eth.getBalance(address, (err, wei) => {
    console.log(wei, 'wie')
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("Balance in ether", balance);
   
  })
let address1 = "0x81e50FF167268F5d21fD2792ABf8863448460aCD";
const privateKey1 = "d02169cff65d30d5382ae355b23cb772d306482985110a84c5695c1d142741a6";

let address2 = "0x918499845c99adafD14aDE1aCA1c14F3C5068119";
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
        gasLimit: convertToHex(2100000),
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

    // In this case I made two trrsaction from local blockchain of  ganache and txHash whic is actually a transactio hash returned was Transaction hash was
    /*  0x6ecb6424d2124f781b37344ea4d8d25989a0c61f3ef691ffeaf42bc67ecad8f2 and 0xcf52fc3edec22e1780e6f6102f05d4997aeeed638c0d237dfa95be624bb6a69c. You 
    can not verify this because this was just on my machine not on ropsten or rinkeby. Just an example of how TxHash looks I put this.*/


    
    
   
  })