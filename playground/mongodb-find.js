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
    //toArry returns a promise
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b75b87943692cb016473e1b')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}` );
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Jun Cho'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    // db.collection('Todos').find({
    //     name: 'Jun Cho'
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // client.close();
});
