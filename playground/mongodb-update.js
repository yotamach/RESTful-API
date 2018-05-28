//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');
const db = client.db('TodoApp');

db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b0c3c6df5463a7a10b05ee6")
    },{
    $set: {
        name: "Joka",
        age: 120
    }},{
    returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
       console.log(err); 
    });
    //db.close();
});
