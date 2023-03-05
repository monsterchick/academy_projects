/*
    Note that dataimport.js contains code to load data and setup the xmlOK etc. elements in the page that this
    set of tests utilize.
*/
QUnit.config.autostart = false;



QUnit.test("XML element added correctly", function (assert) {
    
    boolExists = document.getElementById("xmlOK").value;
    //console.log(boolExists)
    assert.ok(boolExists == "true", "The required XML element has been loaded = " + boolExists);
})

QUnit.test("JSON Object added correctly", function (assert) {

    boolExists = document.getElementById("jsonOK").value;
    //console.log(boolExists)
    assert.ok(boolExists == "true", "The required JSON element has been loaded = " + boolExists);
    
})

QUnit.test("CSV line added correctly", function (assert) {

    boolExists = document.getElementById("csvOK").value;
    //console.log(boolExists)
    assert.ok(boolExists == "true", "The required CSV element has been loaded = " + boolExists);
    
})
