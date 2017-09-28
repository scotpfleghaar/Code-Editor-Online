// Copyright Scot Pfleghaar 2017
//IIFE to protect code
(function () {

    var question = [{
        questionNum: 1,
        questionInstructions: `Require Node.js' https module and assign it to the variable https. (Use Double Quotes)`,
        question: ``,
        answer: `var https = require("https");`,
        timeCorrect: 0
        }, {
        questionNum: 2,
        questionInstructions: `On a new line, call the get method on the https object you created. Pass in the string of https://teamtreehouse.com/person.json. (Use Double Quotes)`,
        question: `https = require("https");`,
        answer: `https = require("https");https.get("https://teamtreehouse.com/person.json");`,
        timeCorrect: 0
        }, {
        questionNum: 3,
        questionInstructions: `in the https.get() call pass in an anonymous function as a callback with the parameter of response. This function is the second parameter in the get call. (Use Double Quotes)`,
        question: `https = require("https");https.get("https://teamtreehouse.com/person.json");`,
        answer: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {});`,
        timeCorrect: 0
        }, {
        questionNum: 4,
        questionInstructions: `In the callback function, log out the response's statusCode. (Use Double Quotes)`,
        question: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {});`,
        answer: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {console.log(response.statusCode);});`,
        timeCorrect: 0
        }, {
        questionNum: 5,
        questionInstructions: `Without renaming any of the variables, modify the data callback to concatenate the stream of data to the responseBody. (Use Double Quotes)`,
        question: `const https = require("https");const request = https.get("https://teamtreehouse.com/person.json", response => {let responseBody = "";response.on("data", dataChunk => {});response.on("", () => {console.log(responseBody);});});request.on("error", error => {console.error(error.message);});`,
        answer: `const https = require("https");const request = https.get("https://teamtreehouse.com/person.json", response =>{ let responseBody = "";response.on("data", dataChunk => {responseBody = responseBody + dataChunk;});response.on("", () =>{console.log(responseBody);});});request.on("error", error =>{console.error(error.message);});`,
        timeCorrect: 0
        }, {
        questionNum: 6,
        questionInstructions: `See the console.log(responseBody); in that callback around line 10? Fix the listener so that the callback gets executed when the response has fully finished.`,
        question: `const https = require("https");const request = https.get("https://teamtreehouse.com/chalkers.json", function(response){let responseBody = "";response.on("data", function(dataChunk) {responseBody = responseBody + dataChunk;});response.on("", function(){console.log(responseBody);});});request.on("error", function(error){console.error(error.message);});`,
        answer: `const https = require("https");const request = https.get("https://teamtreehouse.com/chalkers.json", function(response){let responseBody = "";response.on("data", function(dataChunk) {responseBody = responseBody + dataChunk;});response.on("end", function(){
        console.log(responseBody);});});request.on("error", function(error){console.error(error.message);});`,
        timeCorrect: 0
        }, {
        questionNum: 7,
        questionInstructions: `Create a new variable jsonObject and then use the native JSON object to parse the jsonString and assign it to jsonObject.`,
        question: `const jsonString = "{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}";`,
        answer: `const jsonString = "{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}";var jsonObject = JSON.parse(jsonString);`,
        timeCorrect: 0
        }, {
        questionNum: 8,
        questionInstructions: `Create a variable request that stores the result of the get method.`,
        question: `const https = require("https");https.get("https://teamtreehouse.com/person.json", response => {console.log(response.statusCode);});`,
        answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/person.json", response => {console.log(response.statusCode);});`,
        timeCorrect: 0
        }, {
        questionNum: 9,
        questionInstructions: `On a new line use the on method to listen for the error event.(Don't use an Arrow function) Pass in a callback function with one parameter of error.`,
        question: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});`,
        answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){});`,
        timeCorrect: 0
        }, {
        questionNum: 10,
        questionInstructions: `Finally, in the error callback, use the error method on the console to print out the error message.`,
        question: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){});`,
        answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){console.error(error.message);});`,
        timeCorrect: 0
        }, {
        questionNum: 11,
        questionInstructions: `Something bad is going to happen. Use a try block in the appropriate place to catch an error. Include a catch block with error as the parameter.`,
        question: `const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);`,
        answer: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){}`,
        timeCorrect: 0
        }, {
        questionNum: 12,
        questionInstructions: `In the catch block, call console.error to print out the error's message property.`,
        question: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){}`,
        answer: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){console.error(error.message);}`,
        timeCorrect: 0
        }, {
        questionNum: 13,
        questionInstructions: `Just like the other two functions create an about function for a /about route. Have it print out "About" to the response. Remember to make this accessible by other files.`,
        question: `function root(request, response) {if(request.url == "/") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Home");}}function contact(request, response) {if(request.url == "/contact") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Contact");}}module.exports.root = root;module.exports.contact = contact;`,
        answer: `function root(request, response){if(request.url == "/") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Home");}}function contact(request, response) {if(request.url == "/contact") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Contact");}}function about(request, response) {if(request.url == "/about") {response.writeHead(200, {"Content-type": "text/plain"});response.end("About");}}module.exports.root = root;module.exports.contact = contact;module.exports.about = about;`,
        timeCorrect: 0
}, {
        questionNum: 14,
        questionInstructions: `Change the parameter names for the request and response objects to req and res.`,
        question: `const express = require("express");const app = express();app.get("/", (request, response) => {response.send("I Love Treehouse!");});app.listen(3000);`,
        answer: `const express = require("express");const app = express();app.get("/", (req, res) => { res.send("I Love Treehouse!");});app.listen(3000);`,
        timeCorrect: 0
}, {
        questionNum: 15,
        questionInstructions: `Respond with "I Love Treehouse!" as an <h2> tag.`,
        question: `const express = require("express");const app = express();app.get("/", (req, res) => {res.send("I Love Treehouse!");});app.listen(3000);`,
        answer: `const express = require("express");const app = express();app.get("/", (req, res) => {res.send("<h2>I Love Treehouse!</h2>");});app.listen(3000);`,
        timeCorrect: 0
}]

    var Current = 0
    var index = 0

    /////////////////////Setting the stage
    //Custom Functions
    function trimmer(value) {
        value = value.replace(/\s/g, '');
        value = value.replace(/[\t\n]+/g, '')
        value = value.replace(/(\r\n|\n|\r)/gm, '')
        value = value.replace(/'/g, '"');
        return value;
    }
    // Next array item
    function nextItem() {
        if (Current == question.length - 1)
            Current = 0
        else
            Current++;
        console.log(Current);
        return question[Current];
    }


    ////////////////////////////ace.js dependencies

    var editor = ace.edit("editor");
    //editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/javascript");
    //This function beautifys the code in the editor 
    function beatify() {
        var val = editor.session.getValue();
        //Remove leading spaces
        var array = val.split(/\n/);
        array[0] = array[0].trim();
        val = array.join("\n");
        //Actual beautify (prettify) 
        val = js_beautify(val);
        //Change current text to formatted text
        editor.session.setValue(val);
    }
    beatify();
    //When test is pressed it beautifys the code in the editor
    $('.test').on('click', function () {
        beatify();
    })

    var editor2 = ace.edit("editor2");
    //editor2.setTheme("ace/theme/ambiance");
    editor2.session.setMode("ace/mode/javascript");

    //This function beautifys the code in the editor2 
    function beatify2() {
        var val = editor2.session.getValue();
        //Remove leading spaces
        var array = val.split(/\n/);
        array[0] = array[0].trim();
        val = array.join("\n");
        //Actual beautify (prettify) 
        val = js_beautify(val);
        //Change current text to formatted text
        editor2.session.setValue(val);
    }
    beatify2();



    //When test is pressed it beautifys the code in the editor2
    $('.test').on('click', function () {
        beatify2();
    })

    //Keeps track of each question attempts
    var attemptNumber = 0;

    /////////////////////// Here is where the content becomes dynamic
    function loadQuestion(index) {

        // Display the question index
        var currentInstruction = question[index].questionInstructions
        var currentQuestion = question[index].question




        var currentAnswer = question[index].answer

        var timeCorrect = question[index].timeCorrect
        //Ensures that the question is formated correct to compare against
        var currentInstruction = $.trim(currentInstruction);
        //var currentQuestion = trimmer(currentQuestion); //Don't uncomment this it messes up the format of the code;
        var currentAnswer = trimmer(currentAnswer);

        // Sort Elements by timeCorrect (puts incorrect answers to the top)
        if (index === 6) {
            console.log('Sorting Incorrect Answers')
            question.sort(function (a, b) {
                if (a.timeCorrect < b.timeCorrect) return -1;
                if (a.timeCorrect > b.timeCorrect) return 1;
                return 0;
            });
        }

        //Set the value of the html to the values of the object.
        $('.instructions').text(currentInstruction);

        //Add the questions to the editor
        editor.insert(currentQuestion);

        $('.result').text('');
        $('.next').css('display', 'none');
        $('.submit').css('display', 'none');

        //Tests the contents of the editor against the answer
        $('.test').unbind('click').on('click', function () { ////////NOTE: unbinding is a major issue I do not understand here.

            //Reset Border
            $('.result').text('');
            //Getting the content from ace box
            // var attempt = $('#editor .ace_content').text();
            var attempt = editor.getValue();
            console.log("Attempt:" + attempt);
            //Ensuring the attempt will be removed of formating 
            var attempt = trimmer(attempt);
            console.log(attempt);
            editor2.setValue("");

            //Doing check
            if (attempt == currentAnswer) { // === is unnecesary as both items should be a type
                console.log('Correct!');
                //Change result color and text based on result
                $('.result').css('background-color', 'green');
                $('#editor').css('border', 'solid 2px green');
                $('.result').text('Correct!');
                $('.next').css('display', 'inline');

                //Adds the corrected amount to the question object
                question[index].timeCorrect = question[index].timeCorrect + 1;
                $('.test').hide();
                $('.submit').css('display', 'none');

            } else {
                console.log('Not Correct');
                //Change result color and text based on result
                $('.result').css('background-color', '#ff8566');
                $('.result').text('Incorrect! Give it another try.');
                $('#editor').css('border', 'solid 2px #ff8566');

                //Moves the timeCorrect down based on incorrect answer
                question[index].timeCorrect = question[index].timeCorrect - 1;
                console.log(question[index].timeCorrect)
                attemptNumber += 1;
                console.log("Inside attemptNumber:" + attemptNumber);

                //When the code is incorrect to many times, this block gives the answers
                // and allows user to enter correct answer
                if (attemptNumber > 1) {
                    $('.result').css('background-color', '#80dfff');
                    $('#editor').css('border', 'solid 2px #80dfff');
                    $('.result').text('Incorrect! Below is the correct answer.');
                    editor2.insert(question[index].answer);
                    beatify2();
                    $('.submit').css('display', 'inline');
                    $('.test').hide();

                    // When the submit button is clicked, evauluate the answer without decrementing timeCorrect
                    $('.submit').on('click', function () {
                        //Getting the content from ace box
                        var attempt = editor.getValue();
                        var attempt = trimmer(attempt);
                        $('.result').text('');
                        $('.result').text('Incorrect! Below is the correct answer.');
                        //when answer is correct reset these elements
                        if (attempt === currentAnswer) {
                            console.log('Correct!');
                            //Change result color and text based on result
                            $('.result').css('background-color', 'green');
                            $('#editor').css('border', 'solid 2px green');
                            $('.result').text('Correct!');
                            $('.next').css('display', 'inline');
                            $('.test').hide();
                            $('.submit').css('display', 'none');
                        }
                    });
                }
            }
        });
    }
    //Initial loading of the first question
    loadQuestion(index)

    //initiate next questions and reset some elements
    $('.next').on('click', function () {
        editor.setValue("")
        editor2.setValue("");
        index += 1;
        console.log(index);
        attemptNumber = 0;
        $('.test').show();
        $('#editor').css('border', '');

        //Every 7 questions move the index to zero (to review missed answers)
        if (index <= 7) {
            loadQuestion(index)
        } else {
            console.log('Reseting Index')
            index = 0;
            loadQuestion(index)
        }
        beatify();
        console.log(question);

    });

})()
