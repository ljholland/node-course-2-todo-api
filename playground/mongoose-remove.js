const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findByIdAndRemove('5823c9669e7ca5d47bbd7b56').then((todu) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5823c9f49e7ca5d47bbd7b57').then((todu) => {
//   console.log(todo);
// });
