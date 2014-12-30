var numbers = [1,2,3]

function doubleAll(numbers) {
	//var map = Array.prototype.map();
	return numbers.map(function double(index) {
 		return index*2;
 	});
}

console.log(doubleAll(numbers))

// planet proto

//module.exports = doubleAll



// ORIGINALLY WRITTEN: 

// function doubleAll(numbers)
// {
// 	var result = numbers.map(function(index)
// 	{
// 		return index * 2;
// 	});
// }

// module.export = doubleAll

//  GIVEN PROBLEM TO FIX VIA MAP  // 
		// function doubleAll(numbers) {
		//     var result = []
		//     for (var i = 0; i < numbers.length; i++) {
		//       result.push(numbers[i] * 2)
		//     }
		//     return result
		//   }

		//   module.exports = doubleAll





//  	ANOTHER WAY OF WRITING IT //
		   // module.exports = function doubleAll(numbers) {
		   //      return numbers.map(function double(num) {
		   //        return num * 2
		   //      })
		   //    }



// QUESTIONS TO ASK:

// var map = Array.prototype.map;
// var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// why is there a return statement on map..exp don't show that