window.addEventListener("load", setupPage);

function setupPage(){
    //alert("setup");
    document.getElementById("xmlOK").value = "false";
    document.getElementById("jsonOK").value = "false";
    document.getElementById("csvOK").value = "false";
}

//global object to hold loaded data for testing purposes
var objTest = {
    xmlData: [],
    jsonData: [],
    csvData: [],
    addXMLRecord: function(objRecord){
        this.xmlData.push(objRecord);
    },
    checkXMLRecord: function (objToMatch) {
        objFound = false;
        //console.log("obj to match: " + objToMatch)
        //console.log(this.xmlData);
        for(var i = 0; i < this.xmlData.length; i++) {
            //console.log("obj data: " + this.xmlData[i].booktitle);
            //console.log("obj compare: " + objToMatch.booktitle);
            if (JSON.stringify(this.xmlData[i]) === JSON.stringify(objToMatch)) {
                objFound = true;
            }
        }
        return objFound;
    },
    addJSONRecord: function (objRecord) {
        //console.log(objRecord);
        this.jsonData.push(objRecord);
        //console.log(this.jsonData);
    },
    checkJSONRecord: function (objToMatch) {
        objFound = false;
        //console.log("obj to match: " + objToMatch)
        //console.log(this.jsonData);
        for (var i = 0; i < this.jsonData.length; i++) {
            //console.log("obj data: " + this.jsonData[i].booktitle);
            //console.log("obj compare: " + objToMatch.booktitle);
            if (JSON.stringify(this.jsonData[i]) === JSON.stringify(objToMatch)) {
                objFound = true;
            }
        }
        return objFound;
    },
    addCSVRecord: function (objRecord) {
        this.csvData.push(objRecord);
        //console.log(this.csvData);
    },
    checkCSVRecord: function (objToMatch) {
        objFound = false;
        //console.log("obj to match: " + objToMatch)
        //console.log(this.csvData);
        for (var i = 0; i < this.csvData.length; i++) {
            //console.log("obj data: " + this.csvData[i].booktitle);
            //console.log("obj compare: " + objToMatch.booktitle);
            if (JSON.stringify(this.csvData[i]) === JSON.stringify(objToMatch)) {
                objFound = true;
            }
        }
        return objFound;
    }
};

//set-up vars to hold HTML input elements 
const inputXMLElement = document.getElementById("inputXML");
const inputJSONElement = document.getElementById("inputJSON");
const inputCSVElement = document.getElementById("inputCSV");


//add event listeners to fire handlers when file choice changes
inputXMLElement.addEventListener("change", handleXMLFiles, false);
inputJSONElement.addEventListener("change", handleJSONFiles, false);
inputCSVElement.addEventListener("change", handleCSVFiles, false);

//add event listeners for other buttons
btnQUnit.addEventListener("click", startQunit, false);

//Handle XML file input
function handleXMLFiles() {
    //console.log("handle XML");
    const fileList = this.files; /* now you can work with the file list */
    //console.log(fileList);
    //put first (only) file contents into a var 
    var fileXML = fileList[0];
    //console.log(fileXML.type);
    //check for correct content type
    if (fileXML.type == "text/xml") {
        //set-up reader
        var reader = new FileReader();
        //file read handler
        reader.onload = function (evt) {
            //console.log(evt.target.result);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(evt.target.result, "text/xml");
            //console.log(xmlDoc)
            //pass 
            renderXML(xmlDoc);
        };
        //read file data as text
        reader.readAsText(fileXML, "text/xml");
    } else {
        alert("Wrong content type selected, please choose a different file.");
    }
}

function renderXML(xmlInput) {
    x = xmlInput.childNodes[0].getElementsByTagName("book");
    //console.log(x);
    var type, txt, booktitle, author, year, price, category;
    txt = "<h2>XML DATA</h2><table id='books'><tr><th>Title</th> <th>Author</th> <th>Year</th> <th>Price</th> <th>Category</th></tr>";
    //console.log(txt);
    for (i = 0; i < x.length; i++) {

        //type = x[i].nodeName;
        //console.log(type);
        
        booktitle = x[i].getElementsByTagName("title")[0].innerHTML;
        author = x[i].getElementsByTagName("author")[0].innerHTML;
        year = x[i].getElementsByTagName("year")[0].innerHTML;
        price = x[i].getElementsByTagName("price")[0].innerHTML;
        category = x[i].getAttribute("category");
        txt += "<tr><td>" + booktitle + "</td><td>" + author + "</td><td>" + year + "</td><td>" + price + "</td><td>" + category + "</tr>";
        //set-up test object
        var objTemp = {}
        
        objTemp.booktitle = booktitle;
        objTemp.author = author;
        objTemp.year = year;
        objTemp.price = price;
        objTemp.category = category;
        objTest.addXMLRecord(objTemp);
    }
    txt += "</table>";
    //console.log(txt);
    document.getElementById("xmlData").innerHTML = txt;
    //testXMLObjPresent();
    testXMLObjPresent(objTest1);
}

function handleJSONFiles() {
    //console.log("handle JSON");
    const fileList = this.files; /* now you can work with the file list */
    //console.log(fileList);
    //put file contents into an object
    var fileJSON = fileList[0];
    //console.log(fileJSON.type);
    //check for correct content type
    if (fileJSON.type == "application/json") {
        //set-up reader
        var reader = new FileReader();
        //file read handler
        reader.onload = function (evt) {
            //console.log(evt.target.result);
            var jsonText = evt.target.result;
            var arrJSON = JSON.parse(jsonText);
            //console.log(arrJSON)
            //pass to renderer
            renderJSON(arrJSON);
        };
        //read file data as text
        reader.readAsText(fileJSON, "application/JSON");
    } else {
        alert("Wrong content type selected, please choose a different file.");
    }


}

function renderJSON(arrInput) {
    //x = xmlInput.childNodes[0].getElementsByTagName("book");
    //console.log(arrInput);
    var type, txt, booktitle, author, year, price, category;
    txt = "<h2>JSON DATA</h2><table id='books'><tr><th>Title</th> <th>Author</th> <th>Year</th> <th>Price</th> <th>Category</th></tr>";
    //console.log(txt);
    for (i = 0; i < arrInput.length; i++) {

        category = arrInput[i]["@category"];
        booktitle = arrInput[i].title["#text"];
        author = arrInput[i].author;
        year = arrInput[i].year;
        price = arrInput[i].price;
        txt += "<tr><td>" + booktitle + "</td><td>" + author + "</td><td>" + year + "</td><td>" + price + "</td><td>" + category + "</tr>";
        //add to json data array
        //set-up test object
        var objTemp = {}

        objTemp.booktitle = booktitle;
        objTemp.author = author;
        objTemp.year = year;
        objTemp.price = price;
        objTemp.category = category;
        objTest.addJSONRecord(objTemp);
    }
    txt += "</table>";
    //console.log(txt);
    document.getElementById("jsonData").innerHTML = txt;
    testJSONObjPresent(objTest1);
}

function handleCSVFiles() {
    //console.log("handle CSV");
    const fileList = this.files; /* now you can work with the file list */
    //console.log(fileList);
    //put file contents into a var
    var fileCSV = fileList[0];
    //console.log(fileCSV.type);
    //check for correct content type
    //if (fileCSV.type == "text/csv") {
        var reader = new FileReader();

        reader.onload = function (evt) {
            //console.log(evt.target.result);
            var allText = evt.target.result;
            var allTextLines = allText.split(/\r\n|\n/);
            //console.log(allText)
            //console.log(allTextLines)
            renderCSV(allTextLines);
        };

        reader.readAsText(fileCSV, "text/csv");
    /*} else {
        alert("Wrong content type selected, please choose a different file.");
    }*/

}

function renderCSV(csvLines) {
    x = csvLines;
    //console.log(x);
    var type, txt, booktitle, author, year, price, category;
    txt = "<h2>CSV DATA</h2><table id='books'><tr><th>Title</th> <th>Author</th> <th>Year</th> <th>Price</th> <th>Category</th></tr>";
    //console.log(txt);
    for (i = 1; i < x.length; i++) {
        //split out individual items in each line
        var lineItems = x[i];
        //console.log(lineItems);
        var arrItems = lineItems.split(",");
        //console.log(arrItems);

        //type = x[i][1];
        //console.log(type);

        booktitle = arrItems[1];
        author = arrItems[2];
        year = arrItems[3];
        price = arrItems[4];
        category = arrItems[5];

        txt += "<tr><td>" + booktitle + "</td><td>" + author + "</td><td>" + year + "</td><td>" + price + "</td><td>" + category + "</tr>";

        //add to json data array
        //set-up test object
        var objTemp = {}

        objTemp.booktitle = booktitle;
        objTemp.author = author;
        objTemp.year = year;
        objTemp.price = price;
        objTemp.category = category;
        objTest.addCSVRecord(objTemp);
    }

    txt += "</table>";
    //console.log(txt);
    document.getElementById("csvData").innerHTML = txt;
    testCSVObjPresent(objTest1);
}


// set-up stuff for unit tests
var objTest1 = {
    booktitle: "The Joy of Web Development",
    author: "Lee Berners-Tim",
    year: "2019",
    price: "25.00",
    category: "web"
}

function testXMLObjPresent(objToTest) {
    var xmlOK = objTest.checkXMLRecord(objToTest);
    console.log("xmlOK = " + xmlOK);
    if (xmlOK == true) {
        document.getElementById("xmlOK").value = "true";
    } else {
        document.getElementById("xmlOK").value = "false";
    }
}

function testJSONObjPresent(objToTest) {
    var jsonOK = objTest.checkJSONRecord(objToTest);
    console.log("jsonOK = " + jsonOK);
    if (jsonOK == true) {
        document.getElementById("jsonOK").value = "true";
    } else {
        document.getElementById("jsonOK").value = "false";
    }
}

function testCSVObjPresent(objToTest) {
    var csvOK = objTest.checkCSVRecord(objToTest);
    console.log("csvOK = " + csvOK);
    if (csvOK == true) {
        document.getElementById("csvOK").value = "true";
    } else {
        document.getElementById("csvOK").value = "false";
    }
}



function startQunit(){
    btnQUnit.hidden = true;
    QUnit.start()
}




