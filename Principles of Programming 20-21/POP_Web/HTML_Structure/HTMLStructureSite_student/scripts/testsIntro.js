
QUnit.test("p element with id of greeting1 added successfully", function(assert){
    var elPresent = document.getElementById("greeting1");
    if(elPresent !== null){
        var elType = elPresent.nodeName; 
    }
    assert.ok((elPresent != null)&&(elType=="P"));
    //write out a failure message
    if ((elPresent == null) || (elType != "P")){
        var msg = "Unit Test Failed: ";

        if (elPresent === null){
            msg += "\n No element with id of greeting1 found";
        }else if(elType!="P"){
            msg += "\n Element with id of greeting1 is not a p element"
        }
        console.log(msg);
    }
    
})
QUnit.test("p element with id = greeting1 in right place i.e. child element of section with id of studentcode", function (assert) {
    var correctParent = document.getElementById("greeting1").parentElement.id;
    assert.ok(correctParent == "studentcode");
    if(correctParent!="studentcode"){
        console.log("Unit Test Fails: \n The p with an id of greeting1 does not seem to be inside the specified section element with an id of studentcode");
    }
})
QUnit.test("p element with id = greeting1 has the correct content", function (assert) {
    var paraContent = document.getElementById("greeting1").textContent;
    assert.ok(paraContent == "Hello World!");
    if (paraContent != "Hello World!") {
        console.log("Unit Test Fails: \n The paragraph id of greeting1 content is not correct");
    }
})

QUnit.test("p element with id of greeting2 added successfully", function (assert) {
    var elPresent = document.getElementById("greeting2");
    if (elPresent !== null) {
        var elType = elPresent.nodeName;
    }
    assert.ok((elPresent != null) && (elType == "P"));
    //write out a failure message
    if ((elPresent == null) || (elType != "P")) {
        var msg = "Unit Test Failed: ";

        if (elPresent === null) {
            msg += "\n No element with id of greeting2 found";
        } else if (elType != "P") {
            msg += "\n Element with id of greeting2 is not a p element"
        }
        console.log(msg);
    }

})
QUnit.test("p element with id = greeting2 in right place i.e. child element of section with id of studentcode", function (assert) {
    var correctParent = document.getElementById("greeting2").parentElement.id;
    assert.ok(correctParent == "studentcode", "greeting2 in correct place");
    if (correctParent != "studentcode") {
        console.log("Unit Test Fails: \n The p with an id of greeting2 does not seem to be inside the specified section element with an id of studentcode");
    }
})
QUnit.test("p element with id = greeting2 has the correct content", function (assert) {
    var paraContent = document.getElementById("greeting2").textContent;
    assert.ok(paraContent == "Hello Again!", "greeting2 has correct content");
    if (paraContent != "Hello Again!") {
        console.log("Unit Test Fails: \n The paragraph with id greeting2 content is not correct");
    }
})

