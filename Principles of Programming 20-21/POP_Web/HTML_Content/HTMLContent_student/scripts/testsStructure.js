
QUnit.test("div element with id = mydiv added successfully", function(assert){
    var elPresent = document.getElementById("mydiv");
    if(elPresent !== null){
        var elType = elPresent.nodeName; 
    }
    assert.ok((elPresent != null)&&(elType=="DIV"));
    //write out a failure message
    if ((elPresent == null) || (elType != "DIV")){
        var msg = "Unit Test Failed: ";

        if (elPresent === null){
            msg += "\n No element with id of mydiv found";
        }else if(elType!="DIV "){
            msg += "\n Element with id of myid is not a div element"
        }
        console.log(msg);
    }
    
})
QUnit.test("div element with id = mydiv in right place i.e. child element of section with id of studentcode", function (assert) {
    var correctParent = document.getElementById("mydiv").parentElement.id;
    assert.ok(correctParent == "studentcode");
    if(correctParent!="studentcode"){
        console.log("Unit Tes Fails: \n The div with an id of mydiv does not seem to be inside the specified section element with an id of studentcode");
    }
})
QUnit.test("h2 element with id = myh2 added successfully", function (assert) {
    var elPresent = document.getElementById("myh2");
    if (elPresent !== null) {
        var elType = elPresent.nodeName; 
    }
    assert.ok((elPresent != null) && (elType == "H2"));
    //write out a failure message
    if ((elPresent == null) || (elType != "H2")) {
        var msg = "Unit Test Failed: ";

        if (elPresent === null) {
            msg += "\n No element with id of myh2 found";
        } else if (elType != "H2") {
            msg += "\n Element with id of myh2 is not an h2 element"
        }
        console.log(msg);
    }
})
QUnit.test("h2 element with id = myh2 in right place i.e. child element of div with id of mydiv", function (assert) {
    var correctParent = document.getElementById("myh2").parentElement.id;
    assert.ok(correctParent == "mydiv");
    if (correctParent != "mydiv") {
        console.log("Unit Test Fails: \n The h2 element with an id of myh2 does not seem to be inside the specified div element with an id of mydiv");
    }
})
QUnit.test("p element with id = mypara added successfully", function (assert) {
    var elPresent = document.getElementById("mypara");
    if (elPresent !== null) {
        var elType = elPresent.nodeName;
    }
    assert.ok((elPresent != null) && (elType == "P"));
    //write out a failure message
    if ((elPresent == null) || (elType != "P")) {
        var msg = "Unit Test Failed: ";

        if (elPresent === null) {
            msg += "\n No element with id of mypara found";
        } else if (elType != "P") {
            msg += "\n Element with id of mypara is not an p element"
        }
        console.log(msg);
    }
})
QUnit.test("p element with id = mypara in right place i.e. child element of section with id of div with id of mydiv", function (assert) {
    var correctParent = document.getElementById("mypara").parentElement.id;
    assert.ok(correctParent == "mydiv");
    if (correctParent != "mydiv") {
        console.log("Unit Test Fails: \n The p element with an id of mypara does not seem to be inside the specified div element with an id of mydiv");
    }
})
QUnit.test("p element with id = mypara in right sibling order i.e. after h2 element with id of myh2", function (assert) {
    var childrenofmydiv = document.getElementById("mydiv").childNodes;
    //strip text and other irrelevant nodes
    childrenofmydiv.forEach(checkSiblingOrder);
    assert.ok((childrenofmydiv[0].id == "myh2") && (childrenofmydiv[1].id == "mypara"));
    if ((childrenofmydiv[0].id != "myh2") || (childrenofmydiv[1].id != "mypara")){
        console.log("elements with ids myh2 and mypara to do not seem to be in the correct sibling order in the DOM tree");
    }
})
QUnit.test("div element with id = basicflow added successfully", function(assert){
    var elPresent = document.getElementById("basicflow");
    if(elPresent !== null){
        var elType = elPresent.nodeName; 
    }
    assert.ok((elPresent != null)&&(elType=="DIV"));
    //write out a failure message
    if ((elPresent == null) || (elType != "DIV")){
        var msg = "Unit Test Failed: ";

        if (elPresent === null){
            msg += "\n No element with id of basicflow found";
        }else if(elType!="DIV "){
            msg += "\n Element with id of basicflow is not a div element"
        }
        console.log(msg);
    }
    
})
QUnit.test("div element with id = basicflow in right place i.e. child element of section with id of studentcode", function (assert) {
    var correctParent = document.getElementById("basicflow").parentElement.id;
    assert.ok(correctParent == "studentcode");
    if(correctParent!="studentcode"){
        console.log("Unit Tes Fails: \n The div with an id of basicflow does not seem to be inside the specified section element with an id of studentcode");
    }
})
QUnit.test("p element with id = flowpara added successfully", function (assert) {
    var elPresent = document.getElementById("flowpara");
    if (elPresent !== null) {
        var elType = elPresent.nodeName;
    }
    assert.ok((elPresent != null) && (elType == "P"));
    //write out a failure message
    if ((elPresent == null) || (elType != "P")) {
        var msg = "Unit Test Failed: ";

        if (elPresent === null) {
            msg += "\n No element with id of flowpara found";
        } else if (elType != "P") {
            msg += "\n Element with id of flowpara is not an p element"
        }
        console.log(msg);
    }
})
QUnit.test("p element with id = flowpara in right place i.e. child element of section with id of div with id of basicflow", function (assert) {
    var correctParent = document.getElementById("flowpara").parentElement.id;
    assert.ok(correctParent == "basicflow");
    if (correctParent != "basicflow") {
        console.log("Unit Test Fails: \n The p element with an id of flowpara does not seem to be inside the specified div element with an id of basicflow");
    }
})

QUnit.test("b element with id = elinline added successfully", function (assert) {
    var elPresent = document.getElementById("elinline");
    if (elPresent !== null) {
        var elType = elPresent.nodeName;
    }
    assert.ok((elPresent != null) && (elType == "B"));
    //write out a failure message
    if ((elPresent == null) || (elType != "B")) {
        var msg = "Unit Test Failed: ";

        if (elPresent === null) {
            msg += "\n No element with id of elinline found";
        } else if (elType != "P") {
            msg += "\n Element with id of elinline is not an b element"
        }
        console.log(msg);
    }
})
QUnit.test("b element with id = elinline in right place i.e. child element of section with id of p with id of flowpara", function (assert) {
    var correctParent = document.getElementById("elinline").parentElement.id;
    assert.ok(correctParent == "flowpara");
    if (correctParent != "flowpara") {
        console.log("Unit Test Fails: \n The b element with an id of elinline does not seem to be inside the specified p element with an id of flowpara");
    }
})


function checkSiblingOrder(item, index) {
    if((item.id != "myh2") && (item.id != "mypara")){
        item.parentElement.removeChild(item.parentElement.childNodes[index]);
    }
} 