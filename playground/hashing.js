// const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data,'secret123');
console.log(token);

var decoded = jwt.verify(token,'secret123');
console.log('decoded: ',decoded);
// var message = 'Im user 3';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };

// var result = SHA256(JSON.stringify(data.hash) + 'secret').toString();

// if(result === token.hash){
//     console.log('data isnt changed');
// }else{
//     console.log('data is changed');
// }