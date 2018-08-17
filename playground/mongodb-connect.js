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
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do.',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo.', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into Users {name, age, location}

    // db.collection('Users').insertOne({
    //     name: 'Jun Cho',
    //     age: 27,
    //     location: 'San Francisco'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to add user.', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});
