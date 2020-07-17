var http =require('http');

var url = require('url');

function startServer(route,handle){
	function onRequest(request,response){
		var reviewData ='';
		var pathname = url.parse(request.url).pathname;

		request.setEncoding("utf8");
		request.addListener("data",function(chunk){
			reviewData += chunk;
		});
		
		request.addListener("end", function(){
			route(pathname,handle,response,reviewData);
		});
		
		
	}
	http.createServer(onRequest).listen(8888);
}
exports.startServer = startServer;

//http://localhost:8888/