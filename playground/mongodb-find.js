// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');  // destructured version

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to Mongodb');
  }
  console.log ('Connected to Mongodb');

  // db.collection('Todos').find({
  //   _id: new ObjectID('581f299bc8ba7540c38c6c45')
  // }).toArray().then ((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log ('Unable to fetch data ', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos: ${count}`);
  // }, (err) => {
  //   console.log ('Unable to fetch data ', err);
  // });

  db.collection('Users').find({name: 'Lance Holland'}).toArray().then((docs) => {
       console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log ('Unable to fetch data ', err);
  });


  // db.close();
});
