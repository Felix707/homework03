
//-A function that takes at least three arguments and returns the result of some set of operations using those arguments
//counting the volume of any parallelepiped and explaining its size by 1(small) or 2(big) 
//and 0(if at least one of the entered numbers was incorrect, in other words negative)
//in this case function will return 2, as the volume will be bigger then 1

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
parallelepiped(2, 10, 4);
</script>


//-A function that takes no arguments and returns something
//no input, but the function will return Ferrari, as it will be executed

<script>
const model = function()
{
	return 'Ferrari';
};
model();
</script>


//-A function that takes arguments, does something but does not return anything
//Counts the rectangle's perimeter (in this case it will return 14 because 2*2 + 5*2 = 4+10 = 14)

<script>
const PerimeterOfRectangle = function(side1, side2)
{
	const perimeter = (side1 * 2) + (side2 * 2);
}
PerimeterOfRectangle(2, 5);
</script>


//-A function called fullName that takes as argument first name and last name and returns the full name of the person
//Takes full name and returns it with space between frist and last names (it will return Marshal Baghramyan)

<script>
const fullName = function('first_name', 'last_name')
{
	return 'first_name' + ' ' + 'last_name';
}
fullName('Marshal', 'Baghramyan')
</script>


//-A function that takes three strings and returns the string that is the longest.
//Returns the longest string (in this case it will return 5, as the longest string is "Throw" has 5 letters)
	
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
longestString('Run', 'Jump', 'Throw');
</script>


//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
//comparing of 2 given numbers (in this case function will return 1, as 3 > 1)

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
};
compare(3, 1);
</script>


//-A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1)
//Function which will return 3 - the first thruethy value (in this case number 3)

<script>

const firstTruethy = function(a, b, c)
{
if(NaN || 3 || undefined)
{
	return firstTruethy;
}
};
firstTruethy(NaN || 3 || undefined);
</script>
