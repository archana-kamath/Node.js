function printStuff(stuff){
	console.log(stuff);
}

var printStuffAsVar = function(stuff){
	console.log(stuff);
}

function mainFunction(anotherFunction, value){
	anotherFunction(value);
}


mainFunction(printStuff,"Nameless Asynchronous function - function as parameter");

mainFunction(printStuffAsVar,"Nameless Asynchronous function - function as variable");

mainFunction(function(stuff){	console.log(stuff); },"Nameless Asynchronous function - function as variable - In a line");


console.log("Filename" + __filename);
console.log("Directory name"+__dirname);


function timeDemo01(){
	console.log("setTime works after 5 secs");
} 

setTimeout(timeDemo01,5000);

function timeDemo02(){
	console.log("setInterval works after every 2 secs");
}

setInterval(timeDemo02,2000);