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

collection.remove({'name':'Custurd apple'},(function(err,res){
	if(err){
		console.log("Error in delete");
	}else{
		console.log("Deleted successfully - %s",res);
	}
	db.close();
	}));	
    }
});
