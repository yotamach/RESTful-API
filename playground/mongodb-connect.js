//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'To get a shower',
    //     conpleted: true
    // }, (err , result) => {
    //     if(err)
    //     {
    //        return console.log('Unable to insert Todo');
    //     }console.log(JSON.stringify(result.ops));
    // });

    db.collection('Users').insertOne({
        name: "yotam",
        age: 22,
        location: "BeerSheba"
    }, (err , result) => {
        if(err)
        {
            return console.log('Unable to insert a document');
        }
        //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    })

    client.close();
});
