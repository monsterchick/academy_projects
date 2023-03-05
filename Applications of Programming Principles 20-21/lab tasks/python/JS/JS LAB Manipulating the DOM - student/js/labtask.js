/**
 * TASK
 * Change the title at the top of the page from 'APP JavaScript and the DOM' 
 * to the unitTitle parameter.
 * Some text between tags is the innerHTML attribute and for some tags its the 
 * innerText attribute. Which one is this? How do you know which to use?
 *
 * @param unitTitle	 	Unit title and topic as title of the page.
 */
function setUnitTitle(unitTitle){

	document.getElementById("unit_title").textContent = unitTitle;

}

/**
 * TASK
 * Declare a function named "changeClass" that accepts two inputs, an id and a class name. 
 * The function should find the element with the given ID attribute, and set the class attribute of that element to the given class. 
 * 
 * @param strID	 	ID of the page element to be found.
 * @param strClass	String containing the name of the class attribute. Set strID class attribute to this value.
 */
 
function changeClass(strID, strClass){
	
	document.getElementById(strID).className = strClass;

}

/**
 * TASK
 * Declare a function called "swapClass" that swaps the class of items in the groceries list, 
 * so that "hot" items have a class attribute of "cold" and originally "cold" items have a class attribute of "hot".
 */
function swapClass(){

	ulItem = document.getElementById("groceries");
	liItem = ulItem.getElementsByTagName("li");
	console.log(liItem[0])
	for (let i = 0;i <= liItem.length; i++){
		if (liItem[i].className == "hot"){
			liItem[i].setAttribute("class", "cold");
		}else{
			liItem[i].setAttribute("class", "hot");
		}
	}

}

/**
 * TASK
 * Declare a function called "appendItem" that takes a list and an item name as parameters. The function should 
 * append a new item with the passed name to the list.
 *
 * @param 	ulPassed	Unordered  list of groceries as a nodeList
 * @param	liPassed	A String, which is the name of the new item to add to the list.
 */
function appendItem(ulPassed, liPassed){
	
	//1. Create a new element with a tag of "li"
	let listItem = document.createElement("li");
	//2. Create a new text node and give it the name of the item (liPassed)
	let textNode = document.createTextNode(liPassed);
	//3. Attach the text node to the list item as a childNode of the list item
	listItem.appendChild(textNode);
	//4&5. attach the listItem to the List as a childNode of the list
	ulPassed.appendChild(listItem);
}

/**
 * TASK
 * Declare a function called "swapInnerHTML". The function should take each list item and concatenate a 
 * list item number with a "." and a space to the innerHTML of items in the passed list 
 * e.g.  if item 2 were listed as 'pine nuts', it would become '2. pine nuts'. 
 *
 *@param	ulPassed	Unordered  list of groceries
 */
function swapInnerHTML(ulPassed){

	idGroceries = ulPassed.getElementsByTagName("li")
	console.log(idGroceries)

	//console.log(typeof(item));
	for (let i = 0; i <= idGroceries.length; i++ ){
		idGroceries[i].innerHTML = (i + 1) + ". " + idGroceries[i];
		}
}

/**
 * TASK
 * Currently the shop slogan says 'Good value. Low prices'. This is an incredibly boring slogan. 
 * WITHOUT CHANGING THE HTML PAGE CONTENT Change the shop slogan to say eg:'A greener landscape of choice'.
 * WITHOUT CHANGING THE CSS CONTENT 
 *  * Change the colour of the slogan text to green. 
 *  * Change the font family to cursive.
 *  * Change the font size to 40px.
 */	
function shopSloganFormatted(){
	newSlogan = 'A greener landscape of choice';
	sloganID = document.getElementById('shop_usp');
	sloganID.textContent = newSlogan;
	sloganID.style.color = 'green';
	sloganID.style.fontFamily = 'cursive';
	sloganID.style.fontSize = '40px'
}

/**
 * GOING FREESTYLE
 * The Assignment is partly based on functional testing and partly freestyle.
 * The detail of these tasks are up to you. 
 * The details are all there, but if you want to change a bit of wording, a colour, a font, make your 
 * own image, you can. 
 * REMEMBER:
 * 	Just keep it decent - you may need to ask staff for help. (RULE OF THUMB: Would you show a future employer and grandparents?)
 * 	Think about the PARC principles while you do it. 
 * 	Call these functions, as there is no test to call them, otherwise they will never run. 
 **/
/**
 * Task
 * The name of the shop has changed from Bob's Groceries to 'The Greenest Grocer'.
 * It might be alright to use text for the slogan, but for the name we need something more fancy....like a logo. 
 * Therefore, WITHOUT CHANGING THE HTML PAGE CONTENT OR CSS
 * * Remove the old shop name
 * * Create a new element of type image. 
 * * Set the source attribute to point to an image in the images folder. You can make you own at various websites 
 *   eg CoolText.com, or you can use the one that is in the images folder.
 * * Set the width and height attributes so that it looks nice on the page,
 * * Give the image some suitable alternative text.
 * * Add the new element as a child element of the shop_name div.
 * * Center the slogan and image, which are both inside a parent div called shop_banner. 
 * * Call the function.
 */		
function shopBannerLogoImage(){
	//1.remove old shop name
	
	//2. Create a new element with a tag of "img"

	//3. Set the attributes

	
  	//4. attach the listItem to the List as a childNode of the list

}
//shopBannerLogoImage();

/**
 * TASK
 * The shop takes commission on a loan calculator that gets used to lead users through to the main loan company website
 * In the footer of the page add a link to the loan calculator which is in interest.html
 * Put the link to the interest.html page BEFORE the link to the javascript book. 
 * Therefore, WITHOUT CHANGING THE HTML PAGE CONTENT 
 * * Add a new element of type anchor. 
 * * Create a text node containing the appropriate text 
 * * Append the text node to the new anchor element.
 * * Set the href attribute of the anchor element to the url of the page.
 * * Add the anchor element as a child of the footer, but insert it before the current 
 *   first child of the footer (the link to the javascript book).
 * * Call the function.
 */	
function loanCalculator(){

}
//loanCalculator();
/**
 * TASK
 * The next tasks are contintued on the Brightspace checklist.
 */

