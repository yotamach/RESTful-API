//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').find({name: "yotam"}).toArray().then((docs) => {
        console.log('Here are Todos');
        console.log(JSON.stringify(docs,undefined,2));
    } 
    , (err) => { console.log('Unable to fetch Todos', err); });

    client.close();
});
