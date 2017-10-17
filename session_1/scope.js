
// .....

function functionOne() {
	var myGlobalVariable = 6;
	// ...
	return myGlobalVariable;
}

function functionTwo(number) {
	number = number + 1;
	return number;
}

// .....

console.log("functionOne is " + functionOne());
console.log("functionTwo is " + functionTwo(functionOne()));
