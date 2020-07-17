var http =require('http');

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world http module");
	response.end();
}).listen(8888);


//http://localhost:8888/