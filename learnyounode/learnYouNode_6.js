// modules 
//create 2 file systems
//print files; filtered extensions; 1st = dir name; 2nd = extensions
// async i/o; write module file to export a single fn that takes 3 arguments
// argu = dir name, filename ext, callback
//pass ext ie txt (without ".") to the module
// callback: function(err, data); data = array filtered list of files
// do not print to the console from the module file, only original program

var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, fileName, callback){
	var properExtension  = "." + fileName; 
	fs.readdir(directoryName, function(err, dataArray){
		if (err){
			return callback(err);  //callback(error, success)
		}
		else{
			arrayFiles = [];
		}
		dataArray.forEach(function(fileEntry){
		if (path.extname(fileEntry) == properExtension){
			arrayFiles.push(fileEntry);
		}
	});
		callback(null, arrayFiles); //successful callback
	});
}


//readdir = read files ie read directories.