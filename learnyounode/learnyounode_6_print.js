//Task described:

//print out from learnYouNode_6.js
//first param = dir name
//second param = file name
//print 1 file/line
//asyn i/o

//recap: learnYouNode_6.js returns an array of files; files 
//can be iterated and indexed to print individual files on the console


var lyn_6 = require('./learnYouNode_6.js');
var directoryName = process.argv[2];  //commandline arguments
var filename = process.argv[3];  //commandline arguments

lyn_6(directoryName, filename, function(err, dataArray){

	for (var i = 0; i < dataArray.length; i++){
		console.log(dataArray[i]);
	}
});

//learnYouNode_6.js has three parameters, which are reflected here. 
//callback on learnYouNode_6.js is the function(err,data)
