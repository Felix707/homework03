
//-A function that takes at least three arguments and returns the result of some set of operations using those arguments
//counting the volume of cub and explaining its size by 1(small) or 2(big)

<script>
const parallelepiped = function(num1, num2, num3)
{
	const volume = num1 * num2 * num3;
	
	if(volume > 0 && volume <= 1)
	{
		return 1;
	}

	else if(volume > 1)
	{
		return 2;
	}
	
	else 
	{
	return 0;	
	}
};
</script>


//-A function that takes no arguments and returns something - 5 points
//Actions with different mobile phones after receiving them

<script>
const model = function()
{
	
	if(model1)
	{
		return "Send it to the first shop";
	}
	else if(model2)
	{
		return "Send to the second shop";
	}
	else
	{
		return "Store the product on storage";	
	}
};
</script>


//-A function that takes arguments, does something but does not return anything - 6 points
//Counts the rectagle's perimeter

<script>
const PerimeterOfRectangle = function(side1, side2)
{
	const perimeter = (side1 * 2) + (side2 * 2);
}
console.log(perimeter);
</script>


//-A function called fullName that takes as argument first name and last name and returns the full name of the person - 6 points
//Takes full name and returns it with space btw

<script>
const fullName = function('first_name', 'last_name')
{
	return 'first_name' + ' ' + 'last_name';
}
</script>


//-A function that takes three strings and returns the string that is the longest.  - 6 points
//Returns the longest string
	
<script>
const longestString = function(str1, str2, str3)
{
	if(str1.length > str2.length && str1.length > str3.length)
	{
		return str1.length;
	}
	else if(str2.length > str1.length && str2.length > str3.length)
	{
		return str2.length;
	}
	else if(str3.length > str1.length && str3.length > str1.length)
	{
		return str3.length;
	}
};
</script>


//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
//comparing of 2 given numbers

<script>
const compare = function(num1, num2)
{
	if(num1 === num2)
	{
		return 0;
	}
	else if(num1 > num2)
	{
		return 1;
	}
	else 
	{
		return -1;
	}
}
</script>


//-A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1) - 6 points
//Function which will return 3 - the first thruethy value

<script>

const firstTruethy = NaN || 3 || undefined;

if(NaN || 3 || undefined)
{
	return firstTruethy;
}
</script>
