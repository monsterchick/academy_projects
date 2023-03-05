/** 
* @file APP JS Lab 2: Selection and Loops 
* @author Tim Orman
* @author Suzy Atfield-Cutts
* @version 2021
* @description JS file containing functions for students to complete. Fill in the blanks.
*/
//Try writing code with strict mode on and off (comment it out).
//"use strict";


/** @function workoutTax001() - write code in this function that takes the salary 
 * amount as a parameter, and calculates the tax payable at a rate of 30%. If 
 * the salary is over £45000 add an extra £5000 to the tax. Subtract the tax from 
 * the original salary to get the net salary amount. The function should return an 
 * array containing the total amount of tax at index 0 and the net salary at index 1.
 * @param	{number}   numSalary 	amount of salary as a number
 * @return	{number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax001(numSalary) {

	//write your code here
	var taxRate = 0.3;
	var extra = 0;
	var taxPayable;
	var netSalary;
	var arrReturn = [];

	if (numSalary > 45000){
		extra = 5000;
	}
	taxPayable = (numSalary * taxRate) + extra;
	netSalary = numSalary - taxPayable;
	arrReturn[0] = taxPayable;
	arrReturn[1] = netSalary;
	//arrReturn needs declaring and populating
	return arrReturn;
}


/** @function calculateTax001() - write code in this function to prompt a user to enter 
 * their salary. Call the workoutTax001 function to calculate the total tax and 
 * net salary. Display the results in an alert message to the user. 
 * NOTE: This function is not tested, it just provides user interaction. 
 * i.e.: DONT FORGET to call the function!!
*/
function calculateTax001() {

	var askSalary;
	var arrReturn = [];
	 //DONT FORGET to call the function!!
	askSalary = prompt('How much is your salary?');
	arrReturn = workoutTax001(askSalary);
	//arrReturn = alert(result);
	return alert(arrReturn);
}
//call the calcTax001 function to run it!
calculateTax001();

/** @function workoutTax002() - write code in this function to take salary amount 
 * as a parameter. Calculate the tax payable at a rate of 30% if the salary is less 
 * than £45000. Calculate the tax at a rate of 50% if the salary is £45000 or more. 
 * The function should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param  {number}   numSalary amount of salary as a number
 * @return {number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax002(numSalary) {
	var taxRate;
	var taxPayable;
	var netSalary;
	var arrReturn = [];
	if (numSalary < 45000){
		taxRate = 0.3;
	}else if (numSalary >= 45000){
		taxRate = 0.5;
	}
	taxPayable = numSalary * taxRate;
	netSalary = numSalary - taxPayable;
	arrReturn[0] = taxPayable;
	arrReturn[1] = netSalary;
	return arrReturn;
}


/** @function workoutTax003() - write code in this function to take the salary 
 * amount as a parameter, and calculate payable tax at rates of:
 *  - 15% if salary is below £30000
 *  - 30% if salary is in the range from £30000 up to but below £45000
 *  - 50% if salary is £45000 or more. 
 * It should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param  {number}   numSalary amount of salary as a number
 * @return {number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax003(numSalary) {
	var taxRate;
	var taxPayable;
	var netSalary;
	var arrReturn = [];
	if (numSalary < 30000){
		taxRate = 0.15;
	}else if(numSalary >= 30000 && numSalary < 45000){
		taxRate = 0.3;
	}else if(numSalary >= 45000){
		taxRate = 0.5;
	}
	taxPayable = numSalary * taxRate;
	netSalary = numSalary - taxPayable;
	arrReturn[0] = taxPayable;
	arrReturn[1] = netSalary;
	return arrReturn;
}


/** @function checkSwitch() - write code in this function to use a switch statement 
 * to return a message based on the number passed in:
 *  1 - returns "SNAP"
 *  2 - returns "CRACKLE"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * @param  {number} numChoice message selector as a number
 * @return {string}	message to be returned (determined by value of parameter)
*/
function checkSwitch(numChoice) {
	var msgReturn;
	switch(numChoice){
		case 1:
			msgReturn = "SNAP";
			break;
		case 2:
			msgReturn = "CRACKLE";
			break;
		case 3:
			msgReturn = "POP";
			break;
		case 4:
			msgReturn = "EXIT";
			break;
		default:
			msgReturn = "DEFAULT";
			break;
	}
	return msgReturn;
}
checkSwitch(2)


/** @function whileLoop() - write code in this function to remove all the elements 				//dont understand
 * beyond the 5th element from the array (which is passed in to the function as a 
 * parameter). 
 * @param	arrToProcess 	the original array to be processed
 * @return					an array which is a copy of the first 5 elements of the 
 * 							original.
*/
function whileLoop(arrToProcess) {
	var arrToProcess = [];
	while (arrToProcess.length > 5)
		print('hello')

	//use passed array as we want to shorten the same array passed in
	return arrToProcess;
}


/** @function doLoop() - write code in this function to return an array filled with
 *  numbers ordered consecutively from 1, up to and including, the value of the 
 *  parameter (numElements).
 *  @param	{number}   numElements number of elements to be stored in the array
 *  @return {number[]} an array which contains numbers from 1 to numElements in order.
 */
function doLoop(numElements) {
	var arrToProcess = [];
	//push method, push index
	var index = 1;
	do{
		arrToProcess.push(index);
		index += 1;
	}while(index <= numElements);
	return arrToProcess;
}

/** @function forLoop() - write code in this function to iterate through the array
 *  and to add 1 to each numeric element of the array (which is passed in as a parameter).
 * NOTE: In the first test: The array contains only numeric elements. 
 * However, in the second test: The array contains some numeric elements, and some 
 * non-numeric elements. 
 * HINT:the typeof operator might come in handy! 
 * 		https://www.w3schools.com/js/js_type_conversion.asp
 * @param  {*[]} arrToProcess 	array to be processed
 * @return {*[]} array after processing, with the value of all numerical 
 * 							elements being 1 greater than in the original array.
*/
function forLoop(arrToProcess) {			//didnt finish

	var index = 0
	for (var index = 0; index <= arrToProcess.length; index++){

		if(typeof(arrToProcess[index]) === "number"){
			arrToProcess[index] += 1
		}	
    }
	return arrToProcess;
}


/** @function splitString() - write code in this function to process the parameter. 
 *  The parameter is a comma separated string of words. Call a function to split  
 *  the words of the comma searated string, and place each piece into an element 
 *  of the array, and return the array. 
 *  Then use a loop to add an order number followed by a "." in front of each 
 *  element item e.g. "1.Dog" (no space). 
 *  Which loop should you use? See the lecture slides (Going loopy) 
 *  to help you select the best type of loop to use.
 *  @param	{string}   arrToProcess 	comma separated string of words
 *  @return	{string[]} array of strings
*/
function splitString(arrToProcess) {
	
	//use a function to split elements into an array
	var strSplit;

	strSplit = arrToProcess.split(',')
	//loop to add numbers
		for(var i = 0; i < strSplit.length; i++){
			strSplit[i] = (i+1) + "." + strSplit[i];
		}
	//return processed array
	return strSplit;
}

/** @function makeString() - write code in this function to concatenate the elements 
 *  of an array (parameter) into a string, and return the new string. 
 *  Put a space between each element (string) in the return string. 
 *  The sentence should start with a capital letter and end with a full stop.
 *  @param	{string[]} arrToProcess array of strings
 *  @return {string}   formatted string
*/
function makeString(arrToProcess) {
	let strReturn = '';
	arrToProcess.forEach(function(item,index) {
		if(index==0){
			strReturn += item.charAt(0).toUpperCase() + item.slice(1); 
		}else{
			if(index == arrToProcess.length - 1){
				strReturn += ' ' + item + '.';
			}else{
				strReturn += ' ' + item;
			}
		}
	})
	//return processed array
	return strReturn;
}


/** @function displayObject() - write code in this function to print out the 
 * contents of the object which is passed in as a parameter. Use a loop 
 * to complete the task (rather than casting the object to a string). 
 * Which loop should you be using for iterating through objects?
 *  @param	{object}  objInventor object containing data about a person who 
 * 					  is an inventor of a programming language.
 *  @return	{string}  String representing an Object
*/
function displayObject(objInventor) {
	var strObject = '';
	var counter = 0;
	for(let key in objInventor){
		if(counter == 0){
			strObject += objInventor[key];
		}else{
			strObject += ' ' + objInventor[key];
		}
		counter++;
	}
	//return processed array
	return strObject;
}


/** @function makeString2() - write code in this function to concatenate the 
 *  elements of the array (passed in as a parameter) into a string, and return 
 *  the new string. Put a space between each element in the return string. 
 *  If none of the punctuation marks in the second array (parameter)
 *  are found at the end of the string, add a full stop at the end of the string.
 *  If punctuation is found at the end of the string remove any spaces before it 
 *  eg: so that "the sentence !" becomes "the sentence!".
 *  @param	{string[]} arrToProcess 	array of strings
 * 	@param	{string[]} arrPunctMarks	array of puntuation marks
 *  @return {string}   reformatted string
*/

function makeString2(arrToProcess, arrPunctMarks){

	let strReturn = '';
	arrToProcess.forEach(function(item,index) {
		if(index==0){
			strReturn += item.charAt(0).toUpperCase() + item.slice(1); 
		}else{
			if(index == arrToProcess.length - 1){
				let isExitMark = false;
				arrPunctMarks.forEach(function(mark){
					if(item.charAt(item.length-1) == mark){
						isExitMark = true;
					}
				})
				if(!isExitMark){
					strReturn += ' ' + item + '.';
				}else{
					if(item.length == 1){
						strReturn += item.replace(/\s*/g,"");
					}else{
						strReturn += ' ' + item.replace(/\s*/g,"");
					}
				}
				
			}else{
				strReturn += ' ' + item;
			}
		}
	})
	
	//return processed array
	return strReturn;
}

/***********************************************************************/
/** @function advancedFunction() - NOT TESTED. 
 * 	write code in this function to get the user to input between 3 and 6 numbers.
 *  Then use these numbers to select words from a list of words 
 *  eg: arrWordList = ["once", "upon", "a", "car", "boat", "train", "tree", "bird", "cat", "elephant", "their", "mine"]; 
 *  and make a 'sentence' (String) with them. The first letter of a sentence 
 *  should be uppercase and a full stop should be added to the end. Syntax and 
 *  meaning is not important. The function should use the length of the list of 
 *  words to help prompt users avoid putting in values higher than the last word  
 *  the list. 
**/
/* uncomment to use
function advancedFunction(){
	
	//return strReturn; 
}
*/
//advancedFunction();

/*
/** @function checkSwitchAdvanced() - NOT TESTED
 * Just like in checkSwitch() function - write code in this function to use a
 * switch statement return a message based on the passed number:
 * This time ...
 *  1 - returns "SNAP CRACKLE POP"
 *  2 - returns "CRACKLE POP"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * REMEMBER THE DRY PRINCIPLE - You can only use the words 'SNAP' 'CRACKLE' and
 * 'POP' once in the code.
 * You need to call the function to run it.
 * The function calls are below the function with a variety of values for testing.
 * Just remove the comments notation when you are ready to test.
*/
/*
function checkSwitchAdvanced(numChoice){


}
*/

//checkSwitchAdvanced(1);
//checkSwitchAdvanced(2);
//checkSwitchAdvanced(4);
//checkSwitchAdvanced(111);

