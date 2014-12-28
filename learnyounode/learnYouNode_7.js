//simple HTTP.get()

var url = process.argv[2];
var http = require('http');

http.get(url, function(response)
{
	var stringCharacters = "";
	response.setEncoding("utf8");
	response.on("data", function(data)
	{
		console.log(data)
	});
	
});


// another way of writing this code: 
   // var http = require('http')
    
   //  http.get(process.argv[2], function (response) {
   //    response.setEncoding('utf8')
   //    response.on('data', console.log)
   //    response.on('error', console.error)
   //  })