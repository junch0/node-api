const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b842f2a08d95a0488b9325d';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid');
}


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
// //nodemon playground/mongoose-queries.js


//User.findById
User.findById(id).then((user) => {
    if (!user) {
        return  console.log('User not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
