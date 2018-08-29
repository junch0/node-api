var mongoose = require('mongoose');

var User = mongoose.model('User', {
        email: {
            required: true,
            trim: true,
            type: String,
            minlength: 1
        }
});

// var User = new User({
//     email:'123@gmail.com'
// })
//
// User.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save new user.');
// });

module.exports = {User};
