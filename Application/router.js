function route(pathname,handle,response,reviewData){
	console.log("Routed request to "+pathname);
	console.log("check if this is fine "+(typeof handle[pathname]));
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,reviewData);
	}else{
		console.log("No handler for "+ pathname);
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("Error 404 not found");
		response.end();
	}
}

exports.route = route; 