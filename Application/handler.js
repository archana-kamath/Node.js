var querystring = require('querystring');

function home(response){
	console.log("Handling home request");
	var htmlFile = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>'+
'</head>'+
'<body>'+
'<form action="/review" method="post">'+
'<textarea name="text" rows="10" column="40"></textarea>'+
'<input type="submit" value="Submit"/>'+
'</form>'+
'</body>'+
'</html>'

		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(htmlFile);
		response.end();
	
}

function review(response,reviewData){
	console.log("Handling review request");

		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("Your review is "+querystring.parse(reviewData).text);
		response.end();
}

exports.home = home;
exports.review = review;
