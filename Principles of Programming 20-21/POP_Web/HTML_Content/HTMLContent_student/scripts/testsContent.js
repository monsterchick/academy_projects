
QUnit.test("textSection added in Student Code section", function(assert){
    var elPresent = checkElementPresent("textSection");
    var elLocation = checkElementLocation("textSection", "studentcode")
    //alert(elLocation);
    var testResult = elPresent && elLocation;
   // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "textSection has been added to the studentcode section");
})
QUnit.test("h3 added to textSection", function (assert) {
    var elLocation = checkChildOf("H3", "textSection")
    //alert(elLocation);
    var testResult = elLocation;
    //alert("result = " + testResult);
    assert.strictEqual(testResult, true, "h3 has been added to textSection section");
})

QUnit.test("paraText1 added to textSection", function (assert) {
    var elPresent = checkElementPresent("paraText1");
    var elLocation = checkElementLocation("paraText1", "textSection")
    //alert(elLocation);
    var testResult = elPresent && elLocation;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "paraText1 added to textSection");
})

QUnit.test("paraText1 contains b and del elements", function (assert) {
    var elLocationb = checkChildOf("B", "paraText1");
    //alert(elLocationb);
    var elLocationdel = checkChildOf("DEL", "paraText1")
    //alert(elLocationdel);
    //alert(elLocation);
    var testResult = elLocationb && elLocationdel;
    //alert("result = " + testResult);
    assert.strictEqual(testResult, true, "paraText1 contains b and del elements");
})

QUnit.test("paraText2 contains i and sub elements", function (assert) {
    var elLocationb = checkChildOf("I", "paraText2");
    //alert(elLocationb);
    var elLocationdel = checkChildOf("SUB", "paraText2")
    //alert(elLocationdel);
    //alert(elLocation);
    var testResult = elLocationb && elLocationdel;
    //alert("result = " + testResult);
    assert.strictEqual(testResult, true, "paraText2 contains i and sub elements");
})

QUnit.test("listSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("listSection");
    var elLocation = checkElementLocation("listSection", "studentcode")
    //alert(elLocation);
    var listItems = document.getElementById("ol1");
    var noLi = listItems.getElementsByTagName("li");
    //alert(noLi.length);
    var correctNoLi = false;
    if(noLi.length == 3){
        correctNoLi = true;
    }
    var liType = listItems.getAttribute("type");
    //alert(liType);
    var correctType = false;
    if(liType=="I"){
        correctType = true;
    }

    var testResult = elPresent && elLocation && correctNoLi && correctType;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "listSection has been added (" + elPresent + ") to the studentcode section(" + elLocation + ") with three list items (" + correctNoLi + ") and a type of I (" + correctType + ")");
})

QUnit.test("linkSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("linkSection");
    var elLocation = checkElementLocation("linkSection", "studentcode");
    //alert(elLocation);
    var link1Present = false;
    var link2Present = false;
    var link1Href = false;
    var link2Href = false;

    var elLocationLink1 = checkElementLocation("link1", "linkSection")
    var elLocationLink2 = checkElementLocation("link2", "linkSection")
    //alert(elLocationLink1 + ":" + elLocationLink2)

    if(document.getElementById("link1").getAttribute("href")=="https://www.bournemouth.ac.uk"){
        link1Href = true;
    }
    //alert(document.getElementById("link2").getAttribute("href"));
    if (document.getElementById("link2").getAttribute("href")=="#textSection") {
        link2Href = true;
    }

    var testResult = elPresent && elLocation && elLocationLink1 && elLocationLink2 && link1Href && link2Href;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "linkSection has been added(" + elPresent + ") to the studentcode section(" + elLocation + ") and link1 inside linkSection (" + elLocationLink1 + ") with correct href (" + link1Href + ") and link2 inside linkSection (" + elLocationLink2 + ") with correct href (" + link2Href + ")")
})

QUnit.test("imageSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("imageSection");
    var elLocation = checkElementLocation("imageSection", "studentcode");
    //alert(elLocation);
    var imgPresent = false;
    var imgSCR = false;
    var imgWidth = false;

    var imgPresent = checkElementLocation("image1", "imageSection");
    //alert(imgPresent);
    if(imgPresent){
        if (document.getElementById("image1").getAttribute("src") == "images/sunset1.jpg") {
                imgSCR = true;
            }
        if(document.getElementById("image1").getAttribute("width")=="50%"){
            imgWidth = true;
        }
    }

    var testResult = elPresent && elLocation && imgPresent && imgSCR && imgWidth;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "imageSection has been added(" + elPresent + ") to the studentcode section(" + elLocation + ") and image1 inside imageSection (" + imgPresent + ") with correct src (" + imgSCR + ") with correct witdh attribute (" + imgWidth + ")");
    
})

QUnit.test("tableSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("tableSection");
    var elLocation = checkElementLocation("tableSection", "studentcode");
    //alert(elLocation);
    var tblPresent = false;
    var tblRows = false;
    var tblCells = false;

    var tblPresent = checkElementLocation("table1", "tableSection");
    //alert(imgPresent);
    if (tblPresent) { 
        var noRows = 0;
        var noCells = 0;
        var testRow;
        var tblChildren = document.getElementById("table1").childNodes[1].childNodes;
        //get rows in table
        for (i in tblChildren){
            //console.log(tblChildren[i].nodeName);
            if (tblChildren[i].nodeName=="TR"){
                noRows++;
                //console.log(noRows);
                testRow = tblChildren[i];
                //console.log(testRow.childElementCount);
                noCells += testRow.childElementCount
            }
        }

        //console.log("Rows = " + noRows);
        //console.log("Cells = " + noCells);

        if (noRows == 3) {
            //console.log("3 rows");
            tblRows=true;
            //console.log(tblRows);
        }
        if (noCells == 9) {
            tblCells = true;
        }    
        //console.log("tblRows = " + tblRows);
        //console.log("tblCells = " + tblCells);
    }
    var testResult = elPresent && elLocation && tblPresent && tblRows && tblCells;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "tableSection has been added(" + elPresent + ") to the studentcode section(" + elLocation + ") and table1 is inside tableSection (" + tblPresent + ") with the correct number of rows (" + tblRows + ") and with the correct number of cells per row (" + tblCells + ")");
})

QUnit.test("formSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("formSection");
    var elLocation = checkElementLocation("formSection", "studentcode");
    //alert(elLocation);
    var formPresent = false;
    var textInput = false;
    var selPresent = false;
    var optionsOK = false;
    var submitPresent = false;

    var formPresent = checkElementLocation("form1", "formSection");
    //alert(imgPresent);
    if (formPresent) {
      var formOptions = document.getElementById("form1").elements;
      //console.log(formOptions);
        //console.log(formOptions[0].value);
        if (formOptions[0].type == "text" && formOptions[0].name == "textInput" && formOptions[0].value == "Hello World!"){
           // console.log("text OK");
            textInput = true;
        }
        //console.log(formOptions[1].nodeName);
        if (formOptions[1].nodeName == "SELECT" && formOptions[1].name == "cards"){
            //console.log("Select present");
            selPresent = true;

            var opts = formOptions[1].options;
            if (opts[0].value == "hearts" && opts[1].value == "diamonds" && opts[2].value == "spades" && opts[3].value == "clubs"){
            //console.log("options OK");
            optionsOK = true;
            }
            //console.log(formOptions[2]);
            if(formOptions[2].type=="submit"){
                submitPresent = true;
            }
        }
    }

    var testResult = elPresent && elLocation && formPresent && textInput && selPresent && optionsOK && submitPresent;
    // alert("result = " + testResult);
    //selPresent = false;
    assert.strictEqual(testResult, true, "formSection has been added(" + elPresent + ") to the studentcode section(" + elLocation + ") and form1 inside formSection (" + formPresent + ") with rquired text input (" + textInput + ") and select (" + selPresent + ") with correct options (" + optionsOK + ") and submit input is present " + submitPresent);

})

QUnit.test("mediaSection added in Student Code section", function (assert) {
    var elPresent = checkElementPresent("mediaSection");
    var elLocation = checkElementLocation("mediaSection", "studentcode");
    //alert(elLocation);
    var videoControls = false;
    var source1 = false;
    var source2 = false;

    var videoPresent = checkElementLocation("video1", "mediaSection");
    //alert(videoPresent);
    if (videoPresent) {
        var vid = document.getElementById("video1");
        var sources = vid.childNodes;
        //console.log(sources.length);
        for(var i =0;i<sources.length; i++){
            //console.log(sources[i].nodeName);
            if (sources[i].nodeName == "SOURCE"){
                //console.log("source: " + sources[i].getAttribute("src"));
                if (sources[i].getAttribute("src")=="videos/video1.mp4"){
                    source1 = true;
                } else if (sources[i].getAttribute("src") == "videos/video1.ogg"){
                    source2 = true;
                }
            }
        }
    }

    var testResult = elPresent && elLocation && videoPresent && source1 && source2;
    // alert("result = " + testResult);
    assert.strictEqual(testResult, true, "videoSection has been added(" + elPresent + ") to the studentcode section(" + elLocation + ") and video1 is inside mediaSection (" + videoPresent + ") with correct source1 (" + source1 + ") with correct source2 (" + source2 + ")");

})

function checkElementPresent(el){
    if(document.getElementById(el)){
        return true;
    }else{
        return false;
    }
}

function checkChildOf(el, el2) {
    //alert("childOF");
    var parentEl = document.getElementById(el2);
    var childEls = parentEl.childNodes;
    var elFound = false; 
    for(i in childEls){
        //alert(childEls[i].nodeName);
        if(childEls[i].nodeName==el){
            //alert("found");
            elFound = true;
            break;
        }
        
    }
    return elFound;
}

function checkElementLocation(el, parent){
    var locationOK = false;
    var correctParent = document.getElementById(el);
    if (correctParent) {
        correctParent = correctParent.parentElement.id;
        if(correctParent==parent){
            locationOK = true;
        }else{
            locationOK = false;
        }
    }
    return locationOK;
}

