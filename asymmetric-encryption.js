const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

let message = 'the british are coming!'

let encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
  );


console.log(encryptedData.toString('hex'))


let decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));