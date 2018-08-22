// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {'name': 'jun', age: 27};
// var {name} = user;
// console.log(name);
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp')

    //findOneandUpdate

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b74b04af38e6121ed77902a')
    }, {
        $set: {
            name: 'Jun'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b7753cf649d03eccce60ab5')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    // client.close();
});
