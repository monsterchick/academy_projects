//Static positioning
QUnit.test("Element with ID of secStatic has the correct styles", function(assert){
    var elID = document.getElementById("secStatic");
    var testResult = false;
    var secPosition = false;
    var colorProperty = false;
    var bgColour = false
    var secWidth = false; 
    var borderColor = false;
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("position"));
    if(window.getComputedStyle(elID, null).getPropertyValue("position")=="static"){
        //console.log("position true");
        secPosition = true;
    }
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(30, 0, 200)"){
        //console.log("color true");
        colorProperty = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("background-color")=="rgb(139, 212, 246)"){
        //console.log("bgColor true");
        bgColour = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("width"));
    if(window.getComputedStyle(elID, null).getPropertyValue("width")=="300px"){
        //console.log("width true");
        secWidth = true;
    }

    //console.log("Border Colour: " + window.getComputedStyle(elID, null).getPropertyValue("border-top-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-color")=="rgb(0, 110, 255)"){
        //console.log("borderColor true");
        borderColor = true;
    }
    
    if((colorProperty == true)&&(secPosition == true)&&(borderColor == true)&&(secWidth == true)&&(bgColour == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID secStatic has the correct color (" + colorProperty + ") and position (" + secPosition + ") and border color (" + borderColor + ") and  width (" + secWidth + ") and background color (" + bgColour + ")");
  
})

//relative positioning
QUnit.test("Element with ID of secRelative has the correct styles", function(assert){
    var elID = document.getElementById("secRelative");
    var testResult = false;
    var secPosition = false;
    var secLeft = false;
    var colorProperty = false;
    var bgColour = false
    var secWidth = false; 
    var borderColor = false;
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("position"));
    if(window.getComputedStyle(elID, null).getPropertyValue("position")=="relative"){
        //console.log("position true");
        secPosition = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("left"));
    if(window.getComputedStyle(elID, null).getPropertyValue("left")=="100px"){
        //console.log("left true");
        secLeft = true;
    }
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(12, 68, 2)"){
        //console.log("color true");
        colorProperty = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("background-color")=="rgb(173, 246, 139)"){
        //console.log("bgColor true");
        bgColour = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("width"));
    if(window.getComputedStyle(elID, null).getPropertyValue("width")=="300px"){
        //console.log("width true");
        secWidth = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-color")=="rgb(115, 173, 33)"){
       // console.log("borderColor true");
        borderColor = true;
    }
    
    if((colorProperty == true)&&(secLeft == true)&&(secPosition == true)&&(borderColor == true)&&(secWidth == true)&&(bgColour == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID secStatic has the correct color (" + colorProperty + ") and position (" + secPosition + ") and left value correct (" + secLeft + ") and border color (" + borderColor + ") and  width (" + secWidth + ") and background color (" + bgColour + ")");
  
})

//fixed positioning
QUnit.test("Element with ID of secFixed has the correct styles", function(assert){
    var elID = document.getElementById("secFixed");
    var testResult = false;
    var secPosition = false;
    var secBottom = false;
    var secRight = false;
    var colorProperty = false;
    var bgColour = false
    var secWidth = false; 
    var borderColor = false;
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("position"));
    if(window.getComputedStyle(elID, null).getPropertyValue("position")=="fixed"){
        //console.log("position true");
        secPosition = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("bottom"));
    if(window.getComputedStyle(elID, null).getPropertyValue("bottom")=="300px"){
        //console.log("bottom true");
        secBottom = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("right"));
    if(window.getComputedStyle(elID, null).getPropertyValue("right")=="180px"){
        //console.log("botrighttom true");
        secRight = true;
    }
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(45, 2, 49)"){
        //console.log("color true");
        colorProperty = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("background-color")=="rgb(246, 139, 237)"){
        //console.log("bgColor true");
        bgColour = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("width"));
    if(window.getComputedStyle(elID, null).getPropertyValue("width")=="300px"){
        //console.log("width true");
        secWidth = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-color")=="rgb(173, 33, 126)"){
        //console.log("borderColor true");
        borderColor = true;
    }
    
    if((colorProperty == true)&&(secBottom == true)&& (secRight == true) &&(secPosition == true)&&(borderColor == true)&&(secWidth == true)&&(bgColour == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID secFixed has the correct color (" + colorProperty + ") and position (" + secPosition + ") and bottom value correct (" + secBottom + ") and right value correct (" + secRight + ") and border color (" + borderColor + ") and  width (" + secWidth + ") and background color (" + bgColour + ")");
  
})

//Absolute positioning
QUnit.test("Element with ID of secAbsolute has the correct styles", function(assert){
    var elID = document.getElementById("secAbsolute");
    var testResult = false;
    var secPosition = false;
    var secTop = false;
    var secLeft = false;
    var colorProperty = false;
    var bgColour = false
    var secWidth = false; 
    var borderColor = false;
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("position"));
    if(window.getComputedStyle(elID, null).getPropertyValue("position")=="absolute"){
        //console.log("position true");
        secPosition = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("top"));
    if(window.getComputedStyle(elID, null).getPropertyValue("top")=="240px"){
        //console.log("top true");
        secTop = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("left"));
    if(window.getComputedStyle(elID, null).getPropertyValue("left")=="330px"){
       //console.log("left true");
        secLeft = true;
    }
    
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(38, 39, 1)"){
        //console.log("color true");
        colorProperty = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("background-color")=="rgb(230, 248, 128)"){
        //console.log("bgColor true");
        bgColour = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("width"));
    if(window.getComputedStyle(elID, null).getPropertyValue("width")=="300px"){
        //console.log("width true");
        secWidth = true;
    }

    //console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-color")=="rgb(173, 140, 33)"){
        //console.log("borderColor true");
        borderColor = true;
    }
    
    if((colorProperty == true)&&(secTop == true)&& (secLeft == true) &&(secPosition == true)&&(borderColor == true)&&(secWidth == true)&&(bgColour == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID secAbsolute has the correct color (" + colorProperty + ") and position (" + secPosition + ") and top value correct (" + secTop + ") and left value correct (" + secLeft + ") and border color (" + borderColor + ") and  width (" + secWidth + ") and background color (" + bgColour + ")");
  
})

//Float left and right
QUnit.test("Float Left and right are correct", function(assert){
    var elLeft = document.getElementById("divFloatLeft");
    var elRight = document.getElementById("divFloatRight");
    var testResult = false;
    var divLeft = false;
    var divRight = false;

    
    //console.log(window.getComputedStyle(elLeft, null).getPropertyValue("float"));
    if(window.getComputedStyle(elLeft, null).getPropertyValue("float")=="left"){
        //console.log("float left true");
        divLeft = true;
    }

    //console.log(window.getComputedStyle(elRight, null).getPropertyValue("float"));
    if(window.getComputedStyle(elRight, null).getPropertyValue("float")=="right"){
        //console.log("float right true");
        divRight = true;
    }

    
    if((divLeft == true)&&(divRight == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Float Left (" + divLeft + ") and float right (" + divRight + ")" );

})

//Rotate
QUnit.test("Rotate value correct", function(assert){
    var elLID = document.getElementById("divRotate");
    var testResult = false;
    var divRotate = false;
 
    //console.log(window.getComputedStyle(elLID, null).getPropertyValue("transform"));
    if(window.getComputedStyle(elLID, null).getPropertyValue("transform")=="matrix(0.939693, 0.34202, -0.34202, 0.939693, 0, 0)"){
        //console.log("divRotate true");
        divRotate = true;
    }



    
    if((divRotate == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Rotate(" + divRotate + ")" );

})

//W3.css stlyes

//Container + color
QUnit.test("Add W3-Container and teal color to div divW3CSS", function(assert){
    //var elLID = document.getElementById("divW3CSS");
    var testResult = false;
    var divW3Container = false;
    var divW3Color = false;

    try{
        if(document.getElementsByClassName("w3-container")[0].getAttribute("id")=="divW3CSS"){
            //console.log("class true");
            divW3Container = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-teal")[0].getAttribute("id")=="divW3CSS"){
            //console.log("color true");
            divW3Color = true;
        }     
    } catch(err){
        //do nothing
    }

    if((divW3Container == true)&&(divW3Color==true)){
        testResult = true;
    }
    
    assert.strictEqual(testResult, true, "divW3CSS has the correct W3.CSS container class(" + divW3Container + ") and the W3.CSS color (" + divW3Color + ")" );   
})

//divCard w3-card-4 w3-margin w3-light-gray + divSubCard w3-container w3-center 
QUnit.test("Add W3 Card styles to divCard and W3 container styles to div divSubCard", function(assert){
    //var elLID = document.getElementById("divW3CSS");
    var testResult = false;
    var divW3Card = false;
    var divW3Margin = false;
    var divW3Color = false;
    var divW3Container2 = false;
    var divW3Center = false;
    

    try{
        if(document.getElementsByClassName("w3-card-4")[0].getAttribute("id")=="divCard"){
            //console.log("card true");
            divW3Card = true;
        }
    }catch(err){
            //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-light-gray")[0].getAttribute("id")=="divCard"){
            //console.log("card color true");
            divW3Color = true;
        }
    }catch(err){
            //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-margin")[0].getAttribute("id")=="divCard"){
            //console.log("margin true");
            divW3Margin = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-container")[1].getAttribute("id")=="divSubCard"){
            //console.log("subcard container true");
            divW3Container2 = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-center")[0].getAttribute("id")=="divSubCard"){
            //console.log("subcard center true");
            divW3Center = true;
        }
    }catch(err){
        //do nothing
    }

    if((divW3Card == true)&&(divW3Color==true)&&(divW3Margin==true)&&(divW3Container2==true)&&(divW3Center==true)){
        testResult = true;
    }
    
    assert.strictEqual(testResult, true, "divCard has the correct W3.CSS card class(" + divW3Card + ") and the W3.CSS color (" + divW3Color + ") and the correct margin (" + divW3Margin + ") and divSubCard has the correct container class (" + divW3Container2 + ") and the correct center class (" + divW3Center + ")" );   
})

//W3 Grid

//divW3Row set to w3-row
QUnit.test("W3 Grid - set divW3Row to a w3 row", function(assert){
    //var elLID = document.getElementById("divW3CSS");
    var testResult = false;
    var divW3Row = false;
    

    try{
        if(document.getElementsByClassName("w3-row")[0].getAttribute("id")=="divW3Row"){
            //console.log("Row true");
            divW3Row = true;
        }
    }catch(err){
        //do nothing
    }

    testResult = divW3Row;

    assert.strictEqual(testResult, true, "divW3Row has the correct  class(" + divW3Row + ")" );   
})

//W3 grid Columns
//divW3Col1 w3-col w3-container m4 l3 w3-blue
//divW3Col2 w3-col w3-container m8 l9 w3-amber
//ignore w3-container as coverred before and can be problematic to test if used previous classes (incorrectly)
QUnit.test("Add W3 Column styles to divW3Col1 and divW3Col2", function(assert){
    var testResult = false;
    var w3Col1 = false;
    var w3M4 = false;
    var w3L3 = false;
    var w3Blue = false;
    var w3Col2 = false;
    var w3M8 = false;
    var w3L9 = false;
    var w3Amber = false;
    

    try{
        if(document.getElementsByClassName("w3-col")[0].getAttribute("id")=="divW3Col1"){
            //console.log("divW3Col1 true");
            w3Col1 = true;
        }
    }catch(err){
            //do nothing
    }
    try{
        if(document.getElementsByClassName("m4")[0].getAttribute("id")=="divW3Col1"){
            //console.log("m4 true");
            w3M4 = true;
        }
    }catch(err){
            //do nothing
    }
    try{
        if(document.getElementsByClassName("l3")[0].getAttribute("id")=="divW3Col1"){
            //console.log("l3 true");
            w3L3 = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-blue")[0].getAttribute("id")=="divW3Col1"){
            //console.log("col1 color true");
            w3Blue = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-col")[1].getAttribute("id")=="divW3Col2"){
            //console.log("divW3Col2 true");
            w3Col2 = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("m8")[0].getAttribute("id")=="divW3Col2"){
            //console.log("m8 true");
            w3M8 = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("l9")[0].getAttribute("id")=="divW3Col2"){
            //console.log("l9 true");
            w3L9 = true;
        }
    }catch(err){
        //do nothing
    }
    try{
        if(document.getElementsByClassName("w3-amber")[0].getAttribute("id")=="divW3Col2"){
            //console.log("col2 color true");
            w3Amber = true;
        }
    }catch(err){
        //do nothing
    }

    if((w3Col1 == true)&&(w3L3==true)&&(w3M4==true)&&(w3Blue==true)&&(w3Col2==true)&&(w3L9==true)&&(w3M8==true)&&(w3Amber==true)){
        testResult = true;
    }
    
    assert.strictEqual(testResult, true, "divW3Col1 and divW3Col2 have the correct class(" + w3Col1 + ", " + w3Col2 + ") and the correct l3/l9 class (" + w3L3 + ", " + w3L9 + ") and the correct m4/m8 class (" + w3M4 + "," + w3M8 + ") and has the correct color class (" + w3Blue + ", " + w3Amber + ")." );   
})
