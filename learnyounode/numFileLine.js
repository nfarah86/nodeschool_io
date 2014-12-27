var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]) // read the whole content of file
var lines = contents.toString().split('\n').length -1; //turn to a string and split 
//when there is a new line.. array will have splits with new lines
console.log(lines) //output the array




// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1