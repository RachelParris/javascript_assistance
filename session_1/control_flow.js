
function A() {
	return 1;
}

function B() {
	return A() + 5;
}

function C() {
	return B() + 13;
}

console.log("What is C? ", C());


function animalValue(animal) {
	var value = 2;

	switch (animal) {
		case 'dog':
			value = value + 10;
		case 'cat':
			value += 15;
			break;
		case 'horse':
			value += 4;
			break;
		default :
			value += 1;
	}
	return value;
}

console.log("How much is a cat worth?", animalValue('cat'));
console.log("How much is a dog worth?", animalValue('dog'));
console.log("How much is a snake worth?", animalValue('snake'));
