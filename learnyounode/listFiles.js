//print a list of files in a given directory, filtered by the ext. of files
// ie givn txt, print that to the console
// async i/o process
//no '.'
//one file/line


//the way the program works: index 2 = path name index 3 = filter by ie txt...
// we need to add a '.' to argv[3]: '.' + argv[3]

var fs = require('fs');
var path = require('path');
pathname = process.argv[2];

// function readit(cb) {
// 	fs.readir(path, function (err, list) {
// 		if (err) return cb(err);
// 	})
// }

// readit(function (err, list) {
// 	if (err) return cb(err);
// })

fs.readdir(pathname, function (err, list){
	if (err) {
		return console.error(new Error(err));
	}

	function logger(file) {
		if (path.extname(file) === '.' + process.argv[3]) {
			console.log(file);
		}
	}

	list.forEach(logger);
});

//------------------- second way to write it --------------
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })



//get filename, strip for / 
// add '.' to the last file name as the argument inste. of txt, -->.txt
//use the extname
//search list

