var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('anEvent',callme);

eventEmitter.emit('anEvent');

function callme(){
	console.log("when event- anEvent occurs function callme is called");
}


eventEmitter.on('newEvent',function(message){
	console.log("Received "+message)
});
eventEmitter.emit('newEvent',"Passing parameter");
