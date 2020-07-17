var fs = require('fs');

var readStream = fs.createReadStream('input.txt');

var data ='';

readStream.setEncoding('UTF8');
readStream.on('data',function(chunk){

	data += chunk;
});

readStream.on('end',function(){
	console.log("Stream data "+ data);
});

//--------------------------------------------------

var writeStream = fs.createWriteStream('output.txt');
var myData ="This the data that is written in file - try2"; 

writeStream.write(myData,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
	console.log("Message written to output file");
});