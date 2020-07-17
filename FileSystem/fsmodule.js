var fs = require('fs');

fs.readFile('input.txt',function(error,data){
	if(error){
		console.log("Error");	
	}
	else{
		console.log("Async : "+ data.toString());
	}
});


var data = fs.readFileSync('input.txt');
console.log("Sync : "+ data.toString());
