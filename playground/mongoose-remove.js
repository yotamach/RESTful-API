const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

// Todo.remove().then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();

Todo.findByIdAndRemove('5b670716b3f78b30a8983361').then((result) => {
    console.log(result);
});
