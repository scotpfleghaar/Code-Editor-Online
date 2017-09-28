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
