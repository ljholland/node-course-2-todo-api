// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');  // destructured version

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to Mongodb');
  }
  console.log ('Connected to Mongodb');

  // delete many

  // db.collection('Users').deleteMany({name: 'Lance Holland'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  // delete find one and delete
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('581f2af57569bc432e8030fc')}).then((result) => {
  //   console.log(JSON.stringify(result, undefined,2));
  // });


  // db.close();
});
