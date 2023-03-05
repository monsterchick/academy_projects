
QUnit.test( "change unit title", function( assert ) {
	let unitTitle = "Application of Programming Principles JavaScript and the DOM";
	setUnitTitle(unitTitle);
	assert.equal(document.getElementById('unit_title').innerText, unitTitle);
});

QUnit.test( "changeClass - id 1 to cold", function( assert ) {
	changeClass('one','cold')
	assert.equal(document.getElementById('one').className, 'cold');

});

QUnit.test( "changeClass - id 4 to hot", function( assert ) {
	changeClass('four','hot')
	assert.equal(document.getElementById('four').className, 'hot');

});	
	
QUnit.test( "Swap groceries list classes hot to cold and visa versa", function( assert ) {
	let classes =[];
	classes.push(document.getElementById('one').className);
	classes.push(document.getElementById('two').className);
	classes.push(document.getElementById('three').className);
	classes.push(document.getElementById('four').className);
	classes.push(document.getElementById('five').className);
	for(var i =0; i<classes.length; i++)
	{
		if(classes[i]=="hot"){ 
			classes[i]="cold"
		}
		else if(classes[i]=="cold"){ 
			classes[i]="hot"
		}
	}
	swapClass();
	assert.equal(document.getElementById('one').className, classes[0]);
	assert.equal(document.getElementById('two').className, classes[1]);
	assert.equal(document.getElementById('three').className, classes[2]);
	assert.equal(document.getElementById('four').className, classes[3]);
	assert.equal(document.getElementById('five').className, classes[4]);
});

QUnit.test( "Add a list item called lemon curd to a passed list", function( assert ) {
	//get current list length
	var currentLength = document.getElementById('groceries').getElementsByTagName('li').length;
	//add item 
	appendItem(document.getElementById('groceries'), 'lemon curd')
	assert.equal(document.getElementById('groceries').getElementsByTagName('li').length, (currentLength + 1));
	assert.equal(document.getElementById('groceries').lastChild.innerHTML, 'lemon curd', 'New item should be: lemon curd');
});
	
QUnit.test( "Add a list item called strawberry jam to a passed list", function( assert ) {
	//get current list length
	var currentLength = document.getElementById('groceries').getElementsByTagName('li').length;
	//add item 
	appendItem(document.getElementById('groceries'), 'strawberry jam')
	assert.equal(document.getElementById('groceries').getElementsByTagName('li').length, (currentLength + 1));
	assert.equal(document.getElementById('groceries').lastChild.innerHTML, 'strawberry jam','New item should be: strawberry jam');
});

QUnit.test( "Update innerHTML of li elements to include a list number", function( assert ) {
	swapInnerHTML(document.getElementById('groceries'))
	assert.equal(document.getElementById('one').innerHTML, '1. <em>new</em> range of paninis');
	assert.equal(document.getElementById('two').innerHTML, '2. soup');
	assert.equal(document.getElementById('three').innerHTML, '3. easy meal kits');
	assert.equal(document.getElementById('four').innerHTML, '4. <em>fresh</em> salad');
	assert.equal(document.getElementById('five').innerHTML, '5. yoghurt coated banana chips');
});
	
QUnit.test( "Shop slogan formatting ", function( assert ) {
	shopSloganFormatted();
	let result = 0;
	let message = "The slogan should read 'A greener landscape of choice' ";
	assert.equal(document.getElementById("shop_usp").innerHTML, "A greener landscape of choice", message );
	message = "The slogan text should appear in green. ";
	assert.equal(document.getElementById("shop_usp").style.color, "green", message );
	message = "The slogan text should appear in cursive font family. ";
	assert.equal(document.getElementById("shop_usp").style.fontFamily, "cursive", message );
	message = "The slogan text should be in size 40px. ";
	assert.equal(document.getElementById("shop_usp").style.fontSize, "40px", message );
});	