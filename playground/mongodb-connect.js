// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');  // destructured version

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to Mongodb');
  }
  console.log ('Connected to Mongodb');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, results) => {
  //   if (err) {
  //     return console.log ('Unable to insert Todo');
  //   }
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  // });

  // insert new doc into users (name, age, location)
  //
  db.collection('Users').insertOne({
      name: 'Lance Holland',
    age: 33,
    location: 'Troy'
  }, (err, results) => {
    if (err) {
      return console.log ('Unable to insert Users');
    }
    // console.log(JSON.stringify(results.ops, undefined, 2));

    // console.log(results.ops[0]._id.getTimestamp());
  });

  db.close();
});
