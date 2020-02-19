
const {dbUrl} = require("./config");

const insertDocuments = (db, callback) => {
  const collection = db.collection('inventory');

  collection.insert(
    [ { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" }}],
    (error, result) => {
      if (error) return process.exit(1);
      callback(result);
    }
  );
};

const findDocuments = (db, callback) => {
  const collection = db.collection('inventory');

  collection.find({}).toArray((error, result) => {
      console.log(result)
      if (error) return process.exit(1);
      callback(result);
    }
  );
};

const MongoClient = require('mongodb');

const url = dbUrl;

MongoClient.connect(url, (error, database) => {
  if (error) return process.exit(1);
  console.log('Connection is okay');

  const db = database.db('edx-course-db');

  findDocuments(db, () => {
    console.log('find successful');
  });
});