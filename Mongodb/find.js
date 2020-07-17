var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, function(err,db){
	if(err){
		console.log("Error in connection");
	}else{
		console.log("Connected to "+url);

//var collection = db.collection('apples');

const mydb = db.db('myDatabase'); // just change with your db name (create a random name on the fly for this one)
var collection = mydb.collection('apples');

var doc1 = {name: 'Custurd apple', color: 'Green01'};
var doc2 = {name: 'Kashmiri apple', color: 'Red01'};	

collection.find().toArray(function(err,res){
	if(err){
		console.log("Error in find");
	}else if(res){
		console.log(res);
	}else{
		console.log("No docs found");
	}
db.close();
});
		
	}
});
