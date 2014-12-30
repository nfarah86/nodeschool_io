function repeat(operation, num)
{
	if (num<= 0)  //base case
	{
		return 
		// when we reach base case, return function
	}
	else 
	{
		operation(); // gets executed everytime --num happens
		return repeat(operation, --num); //recursive  call
	}
}	
module.exports = repeat


/