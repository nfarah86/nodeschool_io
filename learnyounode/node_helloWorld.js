//sum numbers if nums are given in a commandline (ie process.arg)

// console.log(process.argv);
var sum = 0;
for (var i = 2; i < (process.argv.length); i++){
	sum += Number(process.argv[i]); //we start at index2 because 
	//0 index = node; 1 index = filename; 2nd + index arguments passed
}
console.log(sum);