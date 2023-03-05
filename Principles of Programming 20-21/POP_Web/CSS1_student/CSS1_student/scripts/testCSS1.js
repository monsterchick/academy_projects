//Element selector
QUnit.test("Bold tags have appropriate style added", function(assert){
    var elB = document.getElementsByTagName("b");
    var testResult = false;
    var colorProperty = false;
    var bgColorProperty = false;
    
    for(var i=0; i<elB.length; i++){
        if(window.getComputedStyle(elB[i], null).getPropertyValue("color")=="rgb(0, 0, 255)"){
            //console.log("color true");
            colorProperty = true;
        } else {
            //console.log("color false");
        }
        if(window.getComputedStyle(elB[i], null).getPropertyValue("background-color")=="rgb(255, 255, 0)"){
            //console.log("bgcolor true");
            bgColorProperty = true;
        } else {
            //console.log("bgcolor false");
        }
    }
    if((colorProperty == true)&&(bgColorProperty == true)){
        testResult = true;
    }
    assert.strictEqual(testResult, true, "Bold tags have the correct color (" + colorProperty + ") and background color (" + bgColorProperty + ")");
})
//ID selector
QUnit.test("Element with ID of cssID has the correct styles", function(assert){
    var elID = document.getElementById("cssID");
    var testResult = false;
    var colorProperty = false;
    var borderStyle = false;
    var borderColor = false;
    var borderWidth = false; 
    
    
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(127, 127, 127)"){
        //console.log("color true");
        colorProperty = true;
    }
    //firefox only supports full syntax not border-style!!!
    //console.log("Border style = " + window.getComputedStyle(elID, null).getPropertyValue("border-top-style") );
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-style")=="dashed"){
        //console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-style"));
        borderStyle = true;
    }

    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-color")=="rgb(0, 0, 255)"){
        //console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-color"));
        borderColor = true;
    }
	console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-width"));
    if(window.getComputedStyle(elID, null).getPropertyValue("border-top-width").includes("px")){
        console.log(window.getComputedStyle(elID, null).getPropertyValue("border-top-width"));
        borderWidth = true;
    }
    
    
    if((colorProperty == true)&&(borderStyle == true)&&(borderColor == true)&&(borderWidth == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID cssID has the correct color (" + colorProperty + ") and border style (" + borderStyle + ") and border color (" + borderColor + ") and border width (" + borderWidth + ")");
  
})

//Class Selector
QUnit.test("Class  cssArea1Class1 has the correct styles", function(assert){
    var elClass = document.getElementById("para001");
    var testResult = false;
    var classCenterred = false; 
    //console.log("bgcolor = " + window.getComputedStyle(elClass, null).getPropertyValue("text-align"));
    if(window.getComputedStyle(elClass, null).getPropertyValue("text-align")=="center"){
        //console.log("center true");
        classCenterred = true;
    }
    if((classCenterred == true)){
        testResult = true;
    }
    assert.strictEqual(testResult, true, "Class  p.cssArea1Class1 has the correct text alignment (" + classCenterred + ")");
})


//Element + Class
QUnit.test("Element + class  p.cssArea1Class2 has the correct styles", function(assert){
    var elComb = document.getElementById("para002");
    var testResult = false;
    var bgColorProperty = false; 
    //console.log("bgcolor = " + window.getComputedStyle(elComb, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elComb, null).getPropertyValue("background-color")=="rgba(0, 255, 0, 0.2)"){
        //console.log("color true");
        bgColorProperty = true;
    }
    if((bgColorProperty == true)){
        testResult = true;
    }
    assert.strictEqual(testResult, true, "Element + class  p.cssArea1Class2 has the correct background color (" + bgColorProperty + ")");
})

//Combinator
QUnit.test("Sibling p elements of divSibling have the correct styles", function(assert){
    var elSib1 = document.getElementById("parra003");
    var elSib2 = document.getElementById("parra004");
    var testResult = false;
    var fontFamily = false;
    var fontWeight = false;
    
    if((window.getComputedStyle(elSib1, null).getPropertyValue("font-family")=="monospace")&&(window.getComputedStyle(elSib2, null).getPropertyValue("font-family")=="monospace")){
        //console.log("font true");
        fontFamily = true;
    }

    //console.log(window.getComputedStyle(elSib1, null).getPropertyValue("font-weight"));
    if((window.getComputedStyle(elSib1, null).getPropertyValue("font-weight")=="700")&&(window.getComputedStyle(elSib2, null).getPropertyValue("font-weight")=="700")){
        //console.log("font weight true");
        fontWeight = true;
    }
    
    if((fontFamily == true)&&(fontWeight == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Elememt with ID cssID has the font family (" + fontFamily + ") and font weight (" + fontWeight + ")");
  
})

//pseudo element
QUnit.test("pseudo element first-line has the correct styles", function(assert){
   
    var elPseudoElement = document.getElementById("firstLine");
    var testResult = false;
    var pseudoElement = false;

    //console.log("Font-variant = " + window.getComputedStyle(elPseudoElement, ":first-line").getPropertyValue("font-variant"));
    
    if(window.getComputedStyle(elPseudoElement, ":first-line").getPropertyValue("font-variant")=="small-caps"){
        //console.log("small caps true");
        testResult = true;
    }

    assert.strictEqual(testResult, true, "Element with ID = firstLine has first-line pseudo element correctly set(" + pseudoElement + ")");
})

// Colors
QUnit.test("Color style have been set correctly", function(assert){
    
    var testResult = false;
    var namedColor = false;
    var hexColor = false;
    var rgbColor = false;
    var rgbaColor = false;
    var hslColor = false;
    var hslaColor = false;  
    
    var elID = document.getElementById("namedColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));
    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(255, 99, 71)"){
        //console.log("named color true");
        namedColor = true;
    }

    var elID = document.getElementById("hexColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));

    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(255, 0, 255)"){
        //console.log("hex color true");
        hexColor = true;
    }

    var elID = document.getElementById("rgbColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));

    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(33, 189, 6)"){
        //console.log("rgb color true");
        rgbColor = true;
    }

    var elID = document.getElementById("rgbaColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));

    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgba(33, 189, 6, 0.3)"){
        //console.log("rgba color true");
        rgbaColor = true;
    }

    var elID = document.getElementById("hslColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));

    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgb(111, 0, 255)"){
        //console.log("rgb color true");
        hslColor = true;
    }

    var elID = document.getElementById("hslaColor");
    //console.log(window.getComputedStyle(elID, null).getPropertyValue("color"));

    if(window.getComputedStyle(elID, null).getPropertyValue("color")=="rgba(111, 0, 255, 0.3)"){
        //console.log("rgba color true");
        hslaColor = true;
    }
    
    if((namedColor == true)&&(hexColor == true)&&(rgbColor == true)&&(rgbaColor == true)&&(hslColor == true)&&(hslaColor == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct Colors set using different methods: named color (" + namedColor + ") and hex color (" + hexColor + ") and rgb color (" + rgbColor + ") and rgba color (" + rgbaColor + ") and hsl color (" + hslColor + ") and hsla color (" + hslaColor + ")");
  
})

/* lists */

QUnit.test("List styles have been set correctly", function(assert){
    
    var testResult = false;
    var listFont = false;
    var listBGColor = false;
    var listPadding = false;
    var liBGColor = false;
    var liPadding = false;
    var liMargin = false;  
    var highlightedColor = false;
    var highlightedBGColor = false;
    
    var elList = document.getElementById("cssOL");
    //console.log(window.getComputedStyle(elList, null).getPropertyValue("font-family"));
    if(window.getComputedStyle(elList, null).getPropertyValue("font-family")=="Verdana"){
       // console.log("List font-family true");
        listFont = true;
    }

    //console.log(window.getComputedStyle(elList, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elList, null).getPropertyValue("background-color")=="rgb(102, 153, 119)"){
        //console.log("list background color true");
        listBGColor = true;
    }

    //console.log(window.getComputedStyle(elList, null).getPropertyValue("padding"));
    if(window.getComputedStyle(elList, null).getPropertyValue("padding-top")=="20px"){
        //console.log("list padding true");
        listPadding = true;
    }

    var elList = document.getElementsByTagName("li")[0];
    //console.log(window.getComputedStyle(elList, null).getPropertyValue("background-color"));

    if(window.getComputedStyle(elList, null).getPropertyValue("background-color")=="rgb(169, 224, 169)"){
        //console.log("li background-color true");
        liBGColor = true;
    }

    var elList = document.getElementsByTagName("li")[0];
   // console.log("Padding = " + window.getComputedStyle(elList, null).getPropertyValue("padding-top"));

    if(window.getComputedStyle(elList, null).getPropertyValue("padding-top")=="5px"){
        //console.log("li padding true");
        liPadding = true;
    }

    var elList = document.getElementsByTagName("li")[0];
    //console.log(window.getComputedStyle(elList, null).getPropertyValue("margin-left"));

    if(window.getComputedStyle(elList, null).getPropertyValue("margin-left")=="35px"){
        //console.log("li margin-left true");
        liMargin = true;
    }

    var elList = document.getElementsByClassName("highlighted")[0];
   //console.log(elList);

    if(window.getComputedStyle(elList, null).getPropertyValue("color")=="rgb(255, 255, 255)"){
        //console.log("highlighted class color true");
        highlightedColor = true;
    }

    if(window.getComputedStyle(elList, null).getPropertyValue("background-color")=="rgb(0, 0, 0)"){
        //console.log("highlighted class background color true");
        highlightedBGColor = true;
    }
    
    if((listFont == true)&&(listBGColor == true)&&(listPadding == true)&&(liPadding == true)&&(liMargin == true)&&(liBGColor == true)&&(highlightedColor==true)&&(highlightedBGColor==true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct List styles set: ol font-family (" + listFont + ") and ol bgcolor (" + listBGColor + ") and ol padding (" + listPadding + ") and li bgcolor (" + liBGColor + ") and li margin (" + liMargin + ") and li padding (" + liPadding + ") and highlighted class color (" + highlightedColor + ") and highlighted class bgcolor (" + highlightedBGColor + ")");
})

/* tables */
QUnit.test("Table styles have been set correctly", function(assert){
    
    var testResult = false;
    var tblFont = false;
    var tblBorder = false;
    var tblWidth = false;

    
    var elTable = document.getElementById("bands");
    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("font-family"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("font-family")=="sans-serif"){
        //console.log("table" font-family true");
        tblFont = true;
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("border-collapse"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("border-collapse")=="collapse"){
       // console.log("list collapse true");
        tblBorder = true;
    }

    //alert(window.getComputedStyle(elTable, null).getPropertyValue("width"));
    //alert(elTable.parentElement.clientWidth);
    //console.log(navigator.userAgent.indexOf("Chrome"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("width").includes("px")){
        //console.log("table width true");
        tblWidth = true;
    }

    
    if((tblBorder == true)&&(tblFont == true)&&(tblWidth == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct table styles set: border collapse font-family (" + tblBorder + ") and table font (" + tblFont + ") and table width (" + tblWidth + ")");
})

QUnit.test("Table data cells have been set correctly", function(assert){
    
    var testResult = false;
    var tdColor = false;
    var tdPadding = false;
    var tdBorderColor = false;
    var tdBorderWidth = false;
    
    var elTable = document.getElementById("bands").getElementsByTagName("td")[0];
    //console.log(elTable);
    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("color")=="rgb(102, 153, 119)"){
        //console.log("td color true");
        tdColor = true;
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("padding-top"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("padding-top")=="8px"){
        //console.log("td padding true");
        tdPadding = true;
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("border-color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-color")=="rgb(221, 221, 221)"){
        //console.log("td border color true");
        tdBorderColor = true;
    }

    if(navigator.userAgent.indexOf("Chrome") > -1){
        //console.log("Chrome");
        //console.log("Border Width = " + window.getComputedStyle(elTable, null).getPropertyValue("border-left-width"));
        if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-width").includes("px")){
            //console.log("td border width true");
            tdBorderWidth = true;
        }
    } else {
        //console.log("Not Chrome");
        if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-width").includes("px")){
            //console.log("td border width true");
            tdBorderWidth = true;
        }
    }
    

    
    if((tdColor == true)&&(tdPadding == true)&&(tdBorderColor == true)&&(tdBorderWidth == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct td styles set: color (" + tdColor + ") and td padding (" + tdPadding + ") and td border color (" + tdBorderColor + ") and td border width (" + tdBorderWidth + ")");
})

QUnit.test("Table header cells have been set correctly", function(assert){
    
    var testResult = false;
    var thColor = false;
    var thPadding = false;
    var thBorderColor = false;
    var thBorderWidth = false;
    var thTextAlign = false;
    var thBGColor = false;
    
    var elTable = document.getElementById("bands").getElementsByTagName("th")[0];
    //console.log(elTable);
    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("color")=="rgb(255, 255, 255)"){
        //console.log("th color true");
        thColor = true;
    }

    console.log(window.getComputedStyle(elTable, null).getPropertyValue("padding-top"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("padding-top")=="12px"){
        //console.log("th padding true");
        thPadding = true;
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("border-top-color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-color")=="rgb(221, 221, 221)"){
        //console.log("th border color true");
        thBorderColor = true;
    }

    if(navigator.userAgent.indexOf("Chrome") > -1){
        //console.log("Chrome");
        //console.log("Border Width = " + window.getComputedStyle(elTable, null).getPropertyValue("border-left-width"));
        if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-width").includes("px")){
            //console.log("td border width true");
            thBorderWidth = true;
        }
    } else {
        //console.log("Not Chrome");
        if(window.getComputedStyle(elTable, null).getPropertyValue("border-top-width").includes("px")){
            //console.log("td border width true");
            thBorderWidth = true;
        }
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("text-align"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("text-align")=="left"){
        //console.log("th text align true");
        thTextAlign = true;
    }

    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("background-color")=="rgb(102, 153, 119)"){
        //console.log("th bg color  true");
        thBGColor = true;
    }
    
    if((thColor == true)&&(thPadding == true)&&(thBorderColor == true)&&(thBorderWidth == true)&&(thBGColor == true)&&(thTextAlign == true)){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct th styles set: color (" + thColor + ") and th padding (" + thPadding + ") and th border color (" + thBorderColor + ") and th border width (" + thBorderWidth + ") and th text align (" + thTextAlign + ") and th BG color (" + thBGColor + ")");
})

QUnit.test("Table row banding cells has been set correctly", function(assert){
    
    var testResult = false;
    var thColor = false;
    var thPadding = false;
    var thBorderColor = false;
    var thBorderWidth = false;
    var thTextAlign = false;
    var thBGColor = false;
    
    var elTable = document.getElementById("bands").getElementsByTagName("tr")[1];
    //console.log(elTable);
    //console.log(window.getComputedStyle(elTable, null).getPropertyValue("background-color"));
    if(window.getComputedStyle(elTable, null).getPropertyValue("background-color")=="rgb(242, 242, 242)"){
        //console.log("alternate row color true");
        tdAlternateColor = true;
    }

    if(tdAlternateColor == true){
        testResult = true;
    }
  
    assert.strictEqual(testResult, true, "Correct alternate row styles set: BG color (" + tdAlternateColor + ")");
})