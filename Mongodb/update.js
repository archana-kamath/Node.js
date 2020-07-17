var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, function(err,db){
	if(err){
		console.log("Error in connection");
	}else{
		console.log("Connected to "+url);

const mydb = db.db('myDatabase'); 
var collection = mydb.collection('apples');	

collection.update({'name':'Red apple'},{$set:{'color':'blue'}},(function(err,res){
	if(err){
		console.log("Error in update");
	}else{
		console.log("Updated successfully");
	}
	db.close();
	}));	
    }
});
