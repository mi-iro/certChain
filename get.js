//node v8.12.0
//npm v6.4.1
//npm install web3@0.20.7
//npm install sloc@0.4.25
//npm install ganache-cli@6.1.8

//使用配置文件
var conf=require(__dirname+'/config.js')

//使用web3模块
var Web3 = require('web3');

//创建web3实例，并连接私有链
var web3 = new Web3(new Web3.providers.HttpProvider(conf.provider));

//创建智能合约，参数为solc编译后生成的abi
var certContract = web3.eth.contract(conf.ABI);

//创建一个变量用于指代主账户，方便后续的操作
var creator = web3.eth.accounts[conf.creator];

//连接合约
var cert = certContract.at(conf.address);

//查看数据
var email=process.argv[2];
certStr=cert.getCert.call(email);
if(certStr.length==0)certStr='null';
console.log("Email:",email,"\t Cert:",certStr);