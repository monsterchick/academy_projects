/** 
* @file APP JS Lab 3: Objects
* @author Tim Orman
* @author Suzy Atfield-Cutts
* @since 2020
* @description JS file containing functions for students to complete. Fill in the blanks.
*/
/**
 * Task
 * Declare a function named divideNum that takes two numbers as parameters. Divide the first number by the second number and
 * return the result.
 *
 * @param  	dividend 	number being divided
 * @param 	divisor		number the dividend is divided by
 * @return	quotient (result of division).
 */
function divideNum(dividend, divisor){
	var result = dividend / divisor;
	return result
}

/**
 * Task
 * Write a function named returnArray that accepts 3 car makes and returns them in an array.
 * Declare the array using LITERAL notation ie: not object notation.
	 * That means do not use new Array()
	 * see examples here https://www.w3schools.com/js/js_arrays.asp
 *
 * @param  	makeA 	make of car
 * @param 	makeB	make of car
 * @param 	makeB	make of car
 * @return	Array of car makes (strings).
 */
function returnArray(makeA, makeB, makeC){
	
	//declare the array using LITERAL notation
	var cars = [makeA, makeB, makeC];
	var carMakes = document.getElementById('banner').innerHTML = cars;

	return carMakes;
}

/**
 * Task
 * Write a function named student that has firstname, lastname and email parameters and returns an object 
 * containing the passed parameters as properties only. 
 * Use literal notation to declare your student object. 
 * See https://www.w3schools.com/js/js_object_definition.asp
 *
 * @param  	firstname 	Students first name
 * @param 	lastname	Students last name
 * @param 	email		Students email address
 * @return	Student object
 */
function student(firstname, lastname, email){
	
	//declare the student object using LITERAL notation
	var object = {firstname:firstname, lastname:lastname, email:email};
	var student = document.getElementById('banner').innerHTML = object;
	//return student
	return student;
}


/******************************************************************************************************
 *For the next set of tasks you may like to refer to the lecture slides about declaring objects, 
 *for example code, to start you off. 
/******************************************************************************************************/
/**
 * Task
 * Write a function named strungOut, that takes a string and a separate substring and returns and object, called stringInfo, 
 * that contains:
 * a property named original containing the string
 * a property called caps containing the string in uppercase
 * a property called subIndex containing the index value of the location of the substring in the string.
 *
 * @param  	strString 		Original string
 * @param  	strSubString 	A substring contained within the original string.
 * @return 	Object containing information about a string.
 */
function strungOut(strString, strSubString){

	//declare the stringInfo object using LITERAL notation
	var stringInfo = {
		original:strString, 
		caps:strString.toUpperCase(), 
		subIndex:strString.indexOf(strSubString)
	};
	return stringInfo;
}

/**
 * Task
 * Write a function named strungOut2 that takes a string and a separate substring and returns an object called stringInfo,  
 * that contains:
 * a property named original containing the string
 * a method (implemented as a function) named getUpper that returns the string in uppercase
 * a method (implemented as a function) called getIndex that returns the index value of the location of the substring 
 * in the string 
 * @param  	strString 		Original string
 * @param  	strSubString 	A substring contained within the original string.
 * @return 	Object containing information about a string.
 */
function strungOut2(strString, strSubString){
	
	//declare the stringInfo object using LITERAL notation
	
	var stringInfo = {
		original:strString,
		getUpper: function(){
			return strString.toUpperCase()
		},
		getIndex: function(){
			return strString.indexOf(strSubString)
		} 
	}
	return stringInfo
	
}

/******************************************************************************************************
/*For the next set of tasks you may like to refer to the lecture slides for examples to start you off. 
/******************************************************************************************************/
/** 
 * TASK : Write a function called 'Hotel' which defines a hotel object. It should have properties of 
 * name, number of rooms in total and the number of rooms currently occupied. 
 * Add a method (implemented as a function) to the object which determines the number of rooms the hotel currently has 
 * available.
 * NOTE:- There is NO TEST for this task specifically, however the next task will use this function to build a set of 
 * objects, and there is a test for that.
 * Properties available in each hotel are:-
 * * name - string
 * * totalRooms - number
 * * bookedRooms - number
 * @param  	name 		Name of the hotel.
 * @param  	totalRooms	Number of rooms in the hotel.
 * @param  	bookedRooms	Number of rooms in the hotel which are currently occupied.
 * @return 	newly created hotel object
 */

 function Hotel(name, totalRooms, bookedRooms){

	//declare the hotel object using LITERAL notation
	var stringInfo = {
		name:name, 
		totalRooms:totalRooms, 
		bookedRooms:bookedRooms
	};
	//return stringInfo;
	return stringInfo;
}

/**
 * TASK : Write a function called createHotels(). It should declare three hotel objects, each one with different numbers 
 * of rooms and different numbers of rooms booked. 
 * The largest hotel is called "The Grand Hotel", and it should have 421 rooms of which 398 are currently booked. 
 * The middle sized hotel is called "The Seaview Hotel", and it should have 222 rooms of which 189 are currently booked. 
 * The smallest sized hotel is called "The Quayside Hotel", and it should have 84 rooms of which 36 are currently booked.   
 * Use console.table to view and check the the object contents (Not tested but good practise for debugging objects).
 * Return an array containing all three hotels.
 * 
 * @return	An array containing the array of hotels
 */

function createHotels(name, rooms,bookAvailable) {
	
	//declare the hotel objects by calling the 'Hotel' function
	
	//Use console.table to view and check the the object contents 
	var hotel1 = Hotel('The Grand Hotel',421,398);
	var hotel2 = Hotel('The Seaview Hotel',222,189);
	var hotel3 = Hotel('The Quayside Hotel',84,36);

	return [hotel1,hotel2,hotel3]
}

/**
 * TASK : Write a function called totalAvailability(). It should take in an array of hotel objects as a parameter. 
 * Loop through the array. Use the method (implemented as a function) inside the hotel object, which determines 
 * the hotel room availablilty, to calculate the total numbers of rooms available across all of the hotels in the chain.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 *
 * @return The total numbers of rooms available across the chain.
 */ 
 function totalAvailability(chainOfHotels){
	 var chainTotalAvailability = 0;
	 chainOfHotels.forEach(function(item) {
		chainTotalAvailability += item.totalRooms - item.bookedRooms
	 })

	 return chainTotalAvailability
	 //return chainTotalAvailability;
 }
 
 /***************************************
 * TASKS ARE OPTIONAL BEYOND THIS POINT
 ***************************************

 /**
 * TASK : Write a function called addSwimmingPool. It should take in an array of hotel objects as a parameter. 
 * Add a 'swimmingPool' property to each hotel, and set it to true, for hotels which have more than 250 rooms. 
 * Set it to false for the others.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 *
 * @param	chainOfHotels	An array containing hotels in the same chain.
 * @return 	An array of hotels in the chain which have swimming pools.
 */ 

function addSwimmingPools(chainOfHotels){
	
	chainOfHotels.forEach(function(item,index){
		if(item.totalRooms >= 250){
			item.hotelsWithPools = true;
		}else{
			item.hotelsWithPools = false;
		}

	})

	return chainOfHotels.filter(function(item){

	//use console.table to check the values in the array
	
	//return hotelsWithPools;
	return item.hotelsWithPools
	})
}

/**
 * TASK : 
 * This time some hotels have pools and gyms, some have a pool or a gym, and others have neither.
 * Write a function called ratings. 
 * From the ratings function, call the calculateScore function (details below) to work out the score on 
 * which the rating is based.
 * If the hotel scores less than three they are awarded a Bronze rating.
 * If the hotel scores three or more, but less than 7, they are awarded a Silver rating.
 * If the hotel scores 7 or more they receive a Gold rating.
 * The average hotel customer wants a silver rated hotel, so the function 'ratings' should return the 
 * silver rated hotels in an array.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 * * hasSwimmingPool - boolean
 * * hasGym - boolean
 * * roomsAvailable - function
 * @param 	chainOfHotels 	Array of hotel objects belonging to the same hotel chain.
 * @return 	Array containing hotels with a Silver rating.
 */ 
function ratings(chainOfHotels){
	var silverHOtels = [];
	//use console.table to check the values in the array
	chainOfHotels.forEach(function(item){
		if(calculateScore(item)>=3 && calculateScore(item)<=7){
			silverHOtels.push(item)
		}
	})
	//return silverHOtels;
	return silverHOtels;
}

 /** TASK
 * Write a function called calculateScore to calculate the hotels score:
 * 1 point for each 100 rooms they have
 * 3 points for a pool 
 * 2 points for a gym
 * Call this method from 'ratings' to get the score, on which to base the ratings.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 * * hasSwimmingPool - boolean
 * * hasGym - boolean
 * * roomsAvailable - function
 *
 * @return 	score
 */
function calculateScore(hotelToScore){
	let score = 0;
	score += Math.floor(hotelToScore.totalRooms/100);
	score += hotelToScore.hasSwimmingPool ? 3 : 0;
	score += hotelToScore.hasGym ? 2 : 0;
	return score;
}

