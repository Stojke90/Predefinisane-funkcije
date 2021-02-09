

// Task 1
console.log("Task " + 1)
/* Based on given string: "Lorem ipsum dolor sit amet" 
Create a function that should receive string, and transform all letters to lowercase. */


var someText = "Lorem ipsum dolor sit amet";

function transformLettersInLowercase(text) {
	var smallLetters = text.toLowerCase();

	console.log(smallLetters)
}

transformLettersInLowercase(someText);


// Task 2      /////////////////////////////////////////////////////////////////////////////////////
console.log("Task " +2)
/* Based on given string: "Lorem ipsum dolor sit amet" 
Create a function that should check if there is a word "sit" in the string, 
and console log sentence saying that it exist or not. */

var someRandomText = "Lorem ipsum dolor sit amet";

function checkWord(textCheck) {

	textCheck.indexOf("sit") > - 1 ? console.log("That it exist.") : console.log("That not exist.")

}

checkWord(someRandomText)


// Task 3      /////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 3)
/* Based on given string: "Lorem ipsum dolor sit amet" 
Create a function that should find and return index of the last letter in the sentence. */


var againSameRandomText = "Lorem ipsum dolor sit amet";

function lastIndex(textLast) {
	return textLast.length - 1;
}

console.log(lastIndex(againSameRandomText))


// Task 4     //////////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 4)
/* Based on given string: "Lorem ipsum dolor sit amet" 
Create a function that should split string based on empty space, 
and return first 3 results. */

var textInSomeString = "Lorem ipsum dolor sit amet";

function first3FromSentence(sentence) {
	var disassemble = sentence.split(" ");
	var resultOfTheFirstThree = [];
	for(var i = 0; i < 3; i++){
		resultOfTheFirstThree[resultOfTheFirstThree.length] = disassemble[i];
	}
	return resultOfTheFirstThree;
}


console.log(first3FromSentence(textInSomeString))


// Task 5    ///////////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 5)
/* Based on given string: "Piter is an actor." 
Create a function that should turn a string into the following string: "Pitor is an acter." */

var someString = "Piter is an actor.";

function replaceLetters(change) {
	var newString = change.replace("Piter is an actor.", "Pitor is an acter.");
	return newString;
}

console.log(replaceLetters(someString));

console.log("Task " + 5.1)

function replaceLettersSecond(changeS) {
changeS = changeS.split(''); // razdvaja svaki karater
	changeS[3] = 'o';		 // na mestu gde je indeks 3 menja se karakter u "o"
	changeS[15] = "e";		 // na mestu gde je indeks 15 menja se karakter u "e"
	changeS = changeS.join(''); // spaja razdvojeni string
	return changeS;
}

console.log(replaceLettersSecond(someString))



// Task 6     ///////////////////////////////////////////////////////////////////////////
console.log("Task " + 6)
/*Based on given array: var someData = [34, 23, 14, 56, 23, 44, 65]; 
Create a function that should remove number 56 from an array and return array without it.*/


var someData = [34, 23, 14, 56, 23, 44, 65];

function removeNumber(remove) {
	var removed = remove.splice(3,1);
	return remove;
}

console.log(removeNumber(someData))

console.log("Task " + 6.1)

var rez = someData.filter(function(removeOne){
	return removeOne !== 56;
})
console.log(rez)


// Task 7  ///////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 7)
/*Based on given array: var someData = [34, 23, 14, 56, 23, 44, 65]; 
Create a function that should turn it into following array: 
var otherData = [23, 14, 56, 65, 44, 23];*/

var someDataSecond = [34, 23, 14, 56, 23, 44, 65];

function newOrder(order) {
	order.shift();
	order.splice(3,6, 65, 44,23)
	return order;
}

console.log(newOrder(someDataSecond))

// Task 8     /////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 8)
/*Based on given array: var someData = [334, 233, 212, 199, 154, 122]; 
Create a function that should repack array to the new one, 
where each element should be current one, 
reduced by value of previous one from initial array.*/

var someDataWithNumbers = [334, 233, 212, 199, 154, 122];


var repackGiven = function(given) {
	return given.map(function(current,i){
		if(i > 0) {
			return current - given[i - 1];
		} else {
			return current;
		}
	})
}

var res = repackGiven(someDataWithNumbers);

console.log(res)



// Task 9      //////////////////////////////////////////////////////////////////////////////////
console.log("Task " + 9)
/*Based on given array:

var students = [ { name: "Jim", avgGrade: 8.5556 }, { name: "Mike", avgGrade: 8.5492 },

{ name: "Anna", avgGrade: 8.9322 },

{ name: "Jack", avgGrade: 8.6111 }

]

Create a function that should return new array with all students whose average grade
 is larger than 8.5. In new array, average grade should be formatted to 2 decimals.*/

var students = [ 
		{ 	name: "Jim",
			avgGrade: 8.5556 
		},
		{ 
			name: "Mike", 
			avgGrade: 8.5492 
		},
		{ 
			name: "Anna", 
			avgGrade: 8.9322 
		},
		{ 
			name: "Jack", 
			avgGrade: 8.6111 
		}
]

function over85(childrens) {
	childrens.forEach (function(child) {
		child.avgGrade = child.avgGrade.toFixed(2);
	})
	return childrens.filter(function(child) {
		return child.avgGrade > 8.5;
	})
}


var passedAvg = (over85(students));

console.log(passedAvg)