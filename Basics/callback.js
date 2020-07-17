console.log("Sequential call");
console.log("User 1 requested data from server");
console.log("Database operation takes 5s - query execution");
console.log("Data sent back to user");

console.log("User 2 requested data from server");
console.log("Database operation takes 5s - query execution");
console.log("Data sent back to user");

console.log("User 3 requested data from server");
console.log("Database operation takes 5s - query execution");
console.log("Data sent back to user");

console.log("Asynchronous");
console.log("User 1 requested data from server");
setTimeout(callback,5000);

console.log("User 2 requested data from server");
setTimeout(callback,5000);

console.log("User 3 requested data from server");
setTimeout(callback,5000);

function callback(){
	console.log("Time taken to query DB and return data");
}