var questionSet = [{
    questionNum: 1,
    questionInstructions: `In the app.js file, create a variable named request and assign it a new XMLHttpRequest object.`,
    question: ``,
    answer: `var request = new XMLHttpRequest();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 2,
    questionInstructions: `In app.js, we've added an AJAX callback function. You need to complete the request. Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.`,
    question: `var request = new XMLHttpRequest();request.onreadystatechange = function () {if (request.readyState === 4) {document.getElementById("footer").innerHTML = request.responseText;}};`,
    answer: `var request = new XMLHttpRequest();request.onreadystatechange = function () {if (request.readyState === 4) {document.getElementById("footer").innerHTML = request.responseText;}};request.open("GET", "footer.html");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 3,
    questionInstructions: `Add the code to send the AJAX request.`,
    question: `var request = new XMLHttpRequest();request.onreadystatechange = function () {if (request.readyState === 4) {document.getElementById("footer").innerHTML = request.responseText;}};request.open("GET", "footer.html");`,
    answer: `var request = new XMLHttpRequest();request.onreadystatechange = function () {if (request.readyState === 4) {document.getElementById("footer").innerHTML = request.responseText;}};request.open("GET", "footer.html");request.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 4,
    questionInstructions: `On line 2 of the app.js file, add an onreadystatechange event handler. Add an anonymous function, but don't put any code inside it.`,
    question: `var xhr = new XMLHttpRequest();xhr.open('GET', 'sidebar.html');xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {xhr.open('GET', 'sidebar.html');xhr.send();};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 5,
    questionInstructions: `Add a conditional statement inside the onreadystatechange event handler that tests to make sure the server has sent back its complete response. Also test to make sure the return status from the server is OK.`,
    question: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {};xhr.open('GET', 'sidebar.html');xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {   if (xhr.readyState === 4 && xhr.status === 200) {  }};xhr.open('GET', 'sidebar.html');xhr.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 6,
    questionInstructions: `Now that the server has responded with the data, you need to add it to the page. First select the div with the ID of 'sidebar'. You can select page elements with IDs like this: document.getElementById('idName');`,
    question: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {   if (xhr.readyState === 4 && xhr.status === 200) {  }};xhr.open('GET', 'sidebar.html');xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {   if (xhr.readyState === 4 && xhr.status === 200) {    document.getElementById('sidebar');  }};xhr.open('GET', 'sidebar.html');xhr.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 7,
    questionInstructions: `Now use a DOM element's innerHTML property to set the HTML inside the sidebar div to the server's response.`,
    question: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {   if (xhr.readyState === 4 && xhr.status === 200) {    document.getElementById('sidebar');  }};xhr.open('GET', 'sidebar.html');xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {   if (xhr.readyState === 4 && xhr.status === 200) {    document.getElementById('sidebar').innerHTML = xhr.responseText;  }};xhr.open('GET', 'sidebar.html');xhr.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 8,
    questionInstructions: `In this challenge, you'll create a JSON file containing a string that's formatted as an array of JavaScript objects. The file will contain an array of songs, each with a song title and artist. Start by creating an empty array.`,
    question: ``,
    answer: `[]`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 9,
    questionInstructions: `Inside the array, add an empty JavaScript object. This will hold our song.`,
    question: `[]`,
    answer: `[{}]`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 10,
    questionInstructions: `This object represents one song. Add a "title" property to this object. Set the property's value to "Song"`,
    question: `[{}]`,
    answer: `[{"title": "Song"}]`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 11,
    questionInstructions: `Add an "artist" property to this object. Use the name "Coldplay".`,
    question: `[{"title": "Song"}]`,
    answer: `[{"title": "Song","artist": "Coldplay"}]`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 12,
    questionInstructions: `Load the contents of the file 'footer.html' using jQuery's load() method.`,
    question: `$('#footer')`,
    answer: `$('#footer').load("footer.html");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 13,
    questionInstructions: `You'll be using jQuery's $.get() method to achieve the same result as the .load() function. Start by adding the $.get() method to 'app.js'. You don't need to pass any arguments to the function yet.`,
    question: ``,
    answer: `$.get();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 14,
    questionInstructions: `The first argument to the $.get() method is a URL to a resource. In this case you want to load the 'footer.html' file, so pass that as the argument.`,
    question: `$.get();`,
    answer: `$.get('footer.html');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 15,
    questionInstructions: `You've got the $.get() method and first argument in place. The second argument to the $.get() method is a callback function. Pass an anonymous function as the second argument to the method. Don't forget to set a parameter for that function to catch the server's incoming response.`,
    question: `$.get("footer.html");`,
    answer: `$.get("footer.html", function (response) { });`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 16,
    questionInstructions: `Inside the anonymous function, use jQuery to select the footer div. It has an ID of 'footer'.`,
    question: `$.get("footer.html", function (response) { });`,
    answer: `$.get("footer.html", function (response) {$('#footer');});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 17,
    questionInstructions: `Use jQuery's html() method to insert the server response into the footer of the page.`,
    question: `$.get("footer.html", function (response) {$('#footer');});`,
    answer: `$.get("footer.html", function (response) {$('#footer').html(response);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 18,
    questionInstructions: `jQuery's $.get() method doesn't do anything if the server returns an error. You can chain jQuery's fail() method to the $.get() method and pass it a function to handle any errors. Start by adding the fail() method to the $.get() method.`,
    question: `$.get("missing.html", function(data) {  $("#footer").html(data);});`,
    answer: `$.get("missing.html", function(data) {  $("#footer").html(data);}).fail();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 19,
    questionInstructions: `jQuery's fail() method takes a callback function as an argument. The function is run when there's an error in the AJAX response. Pass an anonymous function as an argument to the method. Don't forget to set a parameter for that function. Use the name jqXHR for the parameter -- this parameter will hold a jQuery XHR object passed by the fail() method to the function.`,
    question: `$.get("missing.html", function(data) { $("#footer").html(data);}).fail();`,
    answer: `$.get("missing.html", function(data) {  $("#footer").html(data);}).fail(function(jqXHR) {});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 20,
    questionInstructions: `When the AJAX response fails, we should alert the user. Pop up an alert box with the XHR object's statusText property.`,
    question: `$.get("missing.html", function(data) {  $("#footer").html(data);}).fail(function(jqXHR) {});`,
    answer: `$.get("missing.html", function(data) {  $("#footer").html(data);}).fail(function(jqXHR) {  alert(jqXHR.statusText);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 21,
    questionInstructions: `In the next series of code challenges, you'll write the code to talk to the Open Weather Map API. It provides weather information for cities around the world. Start by creating a variable named weatherAPI.`,
    question: `$(document).ready(function() {});`,
    answer: `$(document).ready(function() {var weatherAPI;});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 22,
    questionInstructions: `Assign the URL of the API to the variable weatherAPI. The URL is 'http://api.openweathermap.org/data/2.5/weather'.`,
    question: `$(document).ready(function() {var weatherAPI;});`,
    answer: `$(document).ready(function() {var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 23,
    questionInstructions: `Create a variable named data. Assign it an empty JavaScript object. Hint: an object in JavaScript is created with a pair of braces like this: { }`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  });`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {};});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 24,
    questionInstructions: `To use the Open Weather Map API, you need to specify a city name and state or country. Add a property to the data object. The name of the property should be q and the value should be a string with the name of a city, followed by a comma, and a state or country name. For example: q : "Portland,OR"`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {};});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {q: "Portland,OR"};});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 25,
    questionInstructions: `You can get the temperature back from the Open Weather Map API in metric (Celsius) or imperial (Farenheit) units. Add another property named units to the data object. Set its value to "imperial"`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {q: "Portland,OR"};});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {q: "Portland,OR", units: "imperial"};});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 26,
    questionInstructions: `Create an empty function named showWeather. It should have 1 parameter named weatherReport. You don't need to put any code inside the function yet.`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport){};});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 27,
    questionInstructions: `Now you'll add programming to the callback function: you'll display the current temperature of the city you picked. Start by using jQuery to select the element with the ID of temperature.`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",   units : "metric"  };  function showWeather(weatherReport){};});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport){  $('#temperature');  };});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 28,
    questionInstructions: `Finally, to insert the temperature into the div, use jQuery's text() method. You'll need to pass the temperature into this method. The Open Weather Map API returns an object with the property main; that property holds another object with the property "temp". To access the temperature, use dot syntax, like this: weatherReport.main.temp`,
    question: `$(document).ready(function() { var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport){  $('#temperature');  };});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport){  $('#temperature').text(weatherReport.main.temp); };});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 29,
    questionInstructions: `Everything's in place to send the AJAX request: you've specified the URL, a data object, and a callback function. Use jQuery's $.getJSON() method to make the AJAX call.`,
    question: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport) {    $('#temperature').text(weatherReport.main.temp); }});`,
    answer: `$(document).ready(function() {  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';  var data = {    q : "Portland,OR",    units : "metric"  };  function showWeather(weatherReport) {    $('#temperature').text(weatherReport.main.temp);  }  $.getJSON(weatherAPI, data, showWeather); });`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 31,
    questionInstructions: `Require Node.js' https module and assign it to the variable https. (Use Double Quotes)`,
    question: ``,
    answer: `var https = require("https");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 32,
    questionInstructions: `On a new line, call the get method on the https object you created. Pass in the string of https://teamtreehouse.com/person.json. (Use Double Quotes)`,
    question: `https = require("https");`,
    answer: `https = require("https");https.get("https://teamtreehouse.com/person.json");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 33,
    questionInstructions: `In the https.get() call pass in an anonymous function as a callback with the parameter of response. This function is the second parameter in the get call. (Use Double Quotes)`,
    question: `https = require("https");https.get("https://teamtreehouse.com/person.json");`,
    answer: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 34,
    questionInstructions: `In the callback function, log out the response's statusCode. (Use Double Quotes)`,
    question: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {});`,
    answer: `https = require("https");https.get("https://teamtreehouse.com/person.json", function(response) {console.log(response.statusCode);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 35,
    questionInstructions: `Without renaming any of the variables, modify the data callback to concatenate the stream of data to the responseBody. (Use Double Quotes)`,
    question: `const https = require("https");const request = https.get("https://teamtreehouse.com/person.json", response => {let responseBody = "";response.on("data", dataChunk => {});response.on("", () => {console.log(responseBody);});});request.on("error", error => {console.error(error.message);});`,
    answer: `const https = require("https");const request = https.get("https://teamtreehouse.com/person.json", response =>{ let responseBody = "";response.on("data", dataChunk => {responseBody = responseBody + dataChunk;});response.on("", () =>{console.log(responseBody);});});request.on("error", error =>{console.error(error.message);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 36,
    questionInstructions: `See the console.log(responseBody); in that callback around line 10? Fix the listener so that the callback gets executed when the response has fully finished.`,
    question: `const https = require("https");const request = https.get("https://teamtreehouse.com/chalkers.json", function(response){let responseBody = "";response.on("data", function(dataChunk) {responseBody = responseBody + dataChunk;});response.on("", function(){console.log(responseBody);});});request.on("error", function(error){console.error(error.message);});`,
    answer: `const https = require("https");const request = https.get("https://teamtreehouse.com/chalkers.json", function(response){let responseBody = "";response.on("data", function(dataChunk) {responseBody = responseBody + dataChunk;});response.on("end", function(){
        console.log(responseBody);});});request.on("error", function(error){console.error(error.message);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 37,
    questionInstructions: `Create a new variable jsonObject and then use the native JSON object to parse the jsonString and assign it to jsonObject.`,
    question: `const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';`,
    answer: `const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';var jsonObject = JSON.parse(jsonString);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 38,
    questionInstructions: `Create a variable request that stores the result of the get method.`,
    question: `const https = require("https");https.get("https://teamtreehouse.com/person.json", response => {console.log(response.statusCode);});`,
    answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/person.json", response => {console.log(response.statusCode);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 39,
    questionInstructions: `On a new line use the on method to listen for the error event. Pass in a callback function (Don't use an Arrow function) with one parameter of error.`,
    question: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});`,
    answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 40,
    questionInstructions: `Finally, in the error callback, use the error method on the console to print out the error message.`,
    question: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){});`,
    answer: `const https = require("https");var request = https.get("https://teamtreehouse.com/chalkers.json", function(response){console.log(response.statusCode);});request.on("error", function(error){console.error(error.message);});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 41,
    questionInstructions: `Something bad is going to happen. Use a try block in the appropriate place to catch an error. Include a catch block with error as the parameter.`,
    question: `const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);`,
    answer: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 42,
    questionInstructions: `In the catch block, call console.error to print out the error's message property.`,
    question: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){}`,
    answer: `try {const jsonString = "This is not a JSON String";const jsonObject = JSON.parse(jsonString);} catch (error){console.error(error.message);}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 43,
    questionInstructions: `Just like the other two functions create an about function for a /about route. Have it print out "About" to the response. Remember to make this accessible by other files.`,
    question: `function root(request, response) {if(request.url == "/") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Home");}}function contact(request, response) {if(request.url == "/contact") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Contact");}}module.exports.root = root;module.exports.contact = contact;`,
    answer: `function root(request, response){if(request.url == "/") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Home");}}function contact(request, response) {if(request.url == "/contact") {response.writeHead(200, {"Content-type": "text/plain"});response.end("Contact");}}function about(request, response) {if(request.url == "/about") {response.writeHead(200, {"Content-type": "text/plain"});response.end("About");}}module.exports.root = root;module.exports.contact = contact;module.exports.about = about;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 44,
    questionInstructions: `Change the parameter names for the request and response objects to req and res.`,
    question: `const express = require("express");const app = express();app.get("/", (request, response) => {response.send("I Love Treehouse!");});app.listen(3000);`,
    answer: `const express = require("express");const app = express();app.get("/", (req, res) => { res.send("I Love Treehouse!");});app.listen(3000);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 45,
    questionInstructions: `Respond with "I Love Treehouse!" as an <h2> tag.`,
    question: `const express = require("express");const app = express();app.get("/", (req, res) => {res.send("I Love Treehouse!");});app.listen(3000);`,
    answer: `const express = require("express");const app = express();app.get("/", (req, res) => {res.send("<h2>I Love Treehouse!</h2>");});app.listen(3000);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 46,
    questionInstructions: `In the root route, render the "main.pug" template.`,
    question: `const express = require('express');const posts = require('./mock/posts.json');const app = express();app.set('view engine', 'pug');app.set('views', __dirname + '/templates');app.get('/', (req, res) => {res.render('index');});app.listen(3000, () => {console.log("The frontend server is running on port 3000!");});`,
    answer: `const express = require('express');const posts = require('./mock/posts.json');const app = express();app.set('view engine', 'pug');app.set('views', __dirname + '/templates');app.get('/', (req, res) => {res.render('main');});app.listen(3000, () => {console.log("The frontend server is running on port 3000!");});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 47,
    questionInstructions: `Pass the posts object to your template, naming it "posts".`,
    question: `const express = require('express');const posts = require('./mock/posts.json');const app = express();app.set('view engine', 'pug');app.set('views', __dirname + '/templates');app.get('/', (req, res) => {res.render('main');});app.listen(3000, () => {console.log("The frontend server is running on port 3000!");});`,
    answer: `const express = require('express');const posts = require('./mock/posts.json');const app = express();app.set('view engine', 'pug');app.set('views', __dirname + '/templates');app.get('/', (req, res) => {res.render('main',{posts});});app.listen(3000, () => {console.log("The frontend server is running on port 3000!");});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 48,
    questionInstructions: `Create an object literal with no properties and assign it to the variable contact.`,
    question: ``,
    answer: `var contact = { };`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 49,
    questionInstructions: `Assign "name" to the fullName property on the contact object literal.`,
    question: `var contact = { };`,
    answer: `var contact = {fullName: "name" };`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 50,
    questionInstructions: `Create a method on the contact object called fullName, use the programming from the printFullName function.`,
    question: `function printFullName() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);}var contact = {}`,
    answer: `function printFullName() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);}var contact = {  fullName: function printFullName() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);  }  }`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 51,
    questionInstructions: `Make the fullName method an anonymous function.`,
    question: `function printFullName() {var firstName = "Andrew"; var lastName = "Chalkley";  console.log(firstName + " " + lastName);}var contact = {  fullName: function printFullName() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);  }  }`,
    answer: `function printFullName() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);}var contact = {  fullName: function() {  var firstName = "Andrew";  var lastName = "Chalkley";  console.log(firstName + " " + lastName);  }  }`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 53,
    questionInstructions: `Modify this object so it uses two properties firstName and lastName and remove their variable declarations from the fullName method. Don't do anything to the console.log() call right now.`,
    question: `var contact = {  fullName: function() {    var firstName = "Andrew";    var lastName = "Chalkley";   console.log(firstName + " " + lastName);}}`,
    answer: `var contact = {  firstName : "Andrew",  lastName : "Chalkley",  fullName: function() {   console.log(firstName + " " + lastName); }}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 54,
    questionInstructions: `Finally, finish off the code to correctly access the properties on the contact with the this keyword.`,
    question: `var contact = {  firstName : "Andrew",  lastName : "Chalkley",  fullName: function() {    console.log(firstName + " " + lastName);  }}`,
    answer: `var contact = {  firstName : "Andrew",  lastName : "Chalkley",  fullName: function() {    console.log(this.firstName + " " + this.lastName); }}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 55,
    questionInstructions: `Instead of logging out the full name, modify the code so it returns the string instead.`,
    question: `var contact = {  firstName: "Andrew",  lastName: "Chalkley",  fullName: function(){    console.log(this.firstName + " " + this.lastName);  }};`,
    answer: `var contact = {  firstName: "Andrew",  lastName: "Chalkley",  fullName: function(){   return this.firstName + " " + this.lastName;}};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 56,
    questionInstructions: `Implement the subtract method.`,
    question: `var calculator = {sum: 0,add: function(value) {this.sum += value;},  subtract: function(value) {  },  multiply: function(value) {    },  divide: function(value) {    },  clear: function() {    this.sum = 0;  },   equals: function() {    return this.sum;  }}`,
    answer: `var calculator = {  sum: 0,  add: function(value) {    this.sum += value;  },  subtract: function(value) {    this.sum -= value;  },  multiply: function(value) {    },  divide: function(value) {    },  clear: function() {    this.sum = 0;  },   equals: function() {    return this.sum;  }}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 57,
    questionInstructions: `Now, implement the multiply method.`,
    question: `var calculator = {  sum: 0,  add: function(value) {    this.sum += value;  },  subtract: function(value) {    this.sum -= value;  },  multiply: function(value) {    },  divide: function(value) {    },  clear: function() {    this.sum = 0;  },   equals: function() {    return this.sum;  }}`,
    answer: `var calculator = {  sum: 0,  add: function(value) {    this.sum += value;  },  subtract: function(value) {    this.sum -= value;  },  multiply: function(value) {   this.sum *= value;  },  divide: function(value) {    },  clear: function() {    this.sum = 0;  },   equals: function() {    return this.sum; }}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 58,
    questionInstructions: `Create a constructor function for a Monster. Don't include any parameters or properties yet.`,
    question: ``,
    answer: `function Monster (){}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 59,
    questionInstructions: `Modify the Monster constructor to take one parameter of name. Inside the constructor function, when it creates a new instance assign the parameter name to the property of name on the new instance.`,
    question: `function Monster (){}`,
    answer: `function Monster (name){
  this.name = name;}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 60,
    questionInstructions: `Finally, Monsters have a health property. When they take damage from the player, their health will reduce. All new Monster instances should have 100 health by default. It should be a number not a string.`,
    question: `function Monster (name){this.name = name;}`,
    answer: `function Monster (name){ this.name = name;  this.health = 100;}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 61,
    questionInstructions: `We're adding a new method to every instance when a Monster is created. Use a prototype instead for the takeDamage method.`,
    question: `function Monster(name) {this.name = name; this.health = 100;  this.takeDamage = function (){    this.health--;  }}`,
    answer: `function Monster(name) {  this.name = name;  this.health = 100;}Monster.prototype.takeDamage = function (){    this.health--;  }`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 62,
    questionInstructions: `You're going to modify the Teacher code to inherit from the Person. First, in the Teacher constructor function, call the Person constructor, using the call method and pass in the common attributes.`,
    question: `function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}Person.prototype.fullName = function() { return this.firstName + " " + this.lastName; };function Teacher(firstName, lastName, roomNumber) {  this.firstName = firstName;  this.lastName = lastName;  this.room = roomNumber;}`,
    answer: `function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}Person.prototype.fullName = function() { return this.firstName + " " + this.lastName; };function Teacher(firstName, lastName, roomNumber) {  Person.call(this, firstName, lastName);  this.room = roomNumber;}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 63,
    questionInstructions: `Now set up the prototype chain for the Teacher prototype to inherit from the Person prototype.`,
    question: `function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}Person.prototype.fullName = function() { return this.firstName + " " + this.lastName; };function Teacher(firstName, lastName, roomNumber) {  Person.call(this, firstName, lastName);  this.room = roomNumber;}`,
    answer: `function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}Person.prototype.fullName = function() { return this.firstName + " " + this.lastName; };function Teacher(firstName, lastName, roomNumber) {  Person.call(this, firstName, lastName);  this.room = roomNumber;}Teacher.prototype = Object.create(Person.prototype);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 64,
    questionInstructions: `Add a new route at the "/blog" url. The callback function should take req and res as parameters. Leave the callback's body blank for now.`,
    question: `const express = require('express');const posts = require("./mock/posts.json");const app = express();app.get('/', (req, res) => {  res.send("<h1>I Love Treehouse!</h1>");});app.listen(3000, () => {  console.log("The frontend server is running on port 3000!")});`,
    answer: `const express = require('express');const posts = require("./mock/posts.json");const app = express();app.get('/', (req, res) => {  res.send("<h1>I Love Treehouse!</h1>");});app.get('/blog', (req, res) => {});app.listen(3000, () => {  console.log("The frontend server is running on port 3000!")});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 65,
    questionInstructions: `Use the send method on the response object to return the posts object when the /blog route is requested.`,
    question: `const express = require('express');const posts = require("./mock/posts.json");const app = express();app.get('/', (req, res) => {  res.send("<h1>I Love Treehouse!</h1>");});app.get('/blog', (req, res) => {  });app.listen(3000, () => {  console.log("The frontend server is running on port 3000!")});`,
    answer: `const express = require('express');const posts = require("./mock/posts.json");const app = express();app.get('/', (req, res) => {  res.send("<h1>I Love Treehouse!</h1>");});app.get('/blog', (req, res) => {  res.send(posts);});app.listen(3000, () => {  console.log("The frontend server is running on port 3000!")});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, ]




var questionSet2 = [{
    questionNum: 1,
    questionInstructions: `We created a new component named ServerComponent, add it so angular knows it exist. The file will be in: "./server/server.component"`,
    question: `import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';

import {
    AppComponent
} from './app.component';


@NgModule({
    declarations: [
    AppComponent
  ],
    imports: [
    BrowserModule,
    FormsModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}`,
    answer: `import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';

import {
    AppComponent
} from './app.component';
import {
    ServerComponent
} from "./server/server.component";

@NgModule({
    declarations: [
    AppComponent,
    ServerComponent
  ],
    imports: [
    BrowserModule,
    FormsModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 2,
    questionInstructions: `Using NPM, add angular Cli (@angular/cli) to our global node package.`,
    question: ``,
    answer: `npm install -g @angular/cli`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 3,
    questionInstructions: `Using Angular Cli created a new project name "my-app"`,
    question: ``,
    answer: `ng new my-app`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 4,
    questionInstructions: `Now serve "my-app" to a local host server`,
    question: ``,
    answer: `ng serve`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 5,
    questionInstructions: `There is a posiblity that 'ng serve' will not work, we can specify the port and host ip. Do so here using port 4000 and host 0.0.0.0`,
    question: ``,
    answer: `ng serve --port 4000 --host 0.0.0.0`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 6,
    questionInstructions: `In the app.component.html file, we want to use our app-server component we created earlier, we let angular know we want it to look for a custom html tag called app-server, implement that below.`,
    question: ``,
    answer: `<app-server></app-server>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 7,
    questionInstructions: `Using angular Cli create a new component called 'servers' using the cmd command`,
    question: ``,
    answer: `ng generate component servers`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 8,
    questionInstructions: `In our servers.components.ts instead of calling a templateUrl, lets just add Html directly to the template, make the changes and add '<h1>Welcome!</h1>'`,
    question: `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}`,
    answer: `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<h1>Welcome!</h1>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 9,
    questionInstructions: `In our html we want to select our app not by a custom html element by rather by giving our element the class app-root, how can we do this?`,
    question: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
}`,
    answer: `import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 10,
    questionInstructions: `Give an example of the way Angular does string interpolation by interpolating the variable 'data'`,
    question: ``,
    answer: `{{data}}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 11,
    questionInstructions: `Give an example of the way Angular does property binding by binding the variable 'data'`,
    question: `[property]`,
    answer: `[property] = 'data'`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 12,
    questionInstructions: `We want to use a variable name "serverNum" in our html file, make this variable and set it to 20.`,
    question: `import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline"
}`,
    answer: `import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline";
    serverNum = 10;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 13,
    questionInstructions: `Lets call a method named 'getServerStatus' that returns its serverStatus`,
    question: `import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline"
}`,
    answer: `import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline"
    getServerStatus(){
        return this.serverStatus;
    }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 14,
    questionInstructions: `Rather than delcaring the serverStatus variable, lets use a function named getServerStatus`,
    question: `<p>Server {{ serverId }} is {{ serverStatus }}</p>`,
    answer: `<p>Server {{ serverId }} is {{ getServerStatus() }}</p>`,
    timeCorrect: 0,
    questionLanguage: ''
}, {
    questionNum: 15,
    questionInstructions: `We are trying to use two way binding with ngModel, but it's not working, import FormsModule from @angular/forms`,
    question: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
    answer: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 16,
    questionInstructions: `Using a directive, add a directive on the p element that will check if "serverCreated" boolean is true.`,
    question: `<label>Server Name</label>
<input type='text' class='form-control' [(ngModel)]='serverName'>
<button [disabled]="!allowNewServer" class="btn btn-primary" (click)="onCreateServer()">Add Server</button>

<p>Server was created, server name is {{serverName}}</p>
<br>
<app-server></app-server>
<app-server></app-server>`,
    answer: `<label>Server Name</label>
<input type='text' class='form-control' [(ngModel)]='serverName'>
<button [disabled]="!allowNewServer" class="btn btn-primary" (click)="onCreateServer()">Add Server</button>

<p *ngIf='serverCreated'>Server was created, server name is {{serverName}}</p>
<br>
<app-server></app-server>
<app-server></app-server>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 17,
    questionInstructions: `Lets add an else statement to our code using angular syntax, use a paragraph wraped by ng-template and the appropiate else statment using the variable noServer`,
    question: `<label>Server Name</label>
<input type='text' class='form-control' [(ngModel)]='serverName'>
<button [disabled]="!allowNewServer" class="btn btn-primary" (click)="onCreateServer()">Add Server</button>
// Your Code Goes Below
<p *ngIf='serverCreated'>Server was created, server name is {{serverName}}</p>

  <p>Server was created, server name is {{serverName}}</p>
<br>
<app-server></app-server>
<app-server></app-server>`,
    answer: `<label>Server Name</label>
<input type='text' class='form-control' [(ngModel)]='serverName'>
<button [disabled]="!allowNewServer" class="btn btn-primary" (click)="onCreateServer()">Add Server</button>

<p *ngIf='serverCreated; else noServer'>Server was created, server name is {{serverName}}</p>
<ng-template #noServer>
  <p>Server was created, server name is {{serverName}}</p>
</ng-template>

<br>
<app-server></app-server>
<app-server></app-server>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 18,
    questionInstructions: `We are starting a new project, we are already in the correct directory and already have the Angular Cli, lets make a new projected named 'invoice-maker'`,
    question: ``,
    answer: `ng new invoice-maker`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 19,
    questionInstructions: `Our project 'invoice-maker' has been created, lets add a new component named "invoice" using the short hand commands in terminal`,
    question: ``,
    answer: `ng g c invoice`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 20,
    questionInstructions: `Our project 'invoice-maker' has been created, lets add a new component named "invoice-edit" in side the already created "invoice" component using the short hand commands in terminal`,
    question: ``,
    answer: `ng g c invoice/invoice-edit`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 20,
    questionInstructions: `We are in our project directory, but we haven't added bootstrap to our project, using npm add bootstrap`,
    question: ``,
    answer: `npm install bootstrap --save`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 20,
    questionInstructions: `We are in our project directory, but we haven't added bootstrap to our project, using npm add bootstrap`,
    question: ``,
    answer: `npm install bootstrap --save`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 20,
    questionInstructions: `We have created two components in out project, lets add them to our app.component.html file. Place app-recipe-list in the col-md-5 div, and the app-recipe-detail in the col-md-7 div.`,
    question: `<div class='row'>
  <div class='col-md-5'>
    
  </div>
  <div class='col-md-7'>
   
  </div>
</div>`,
    answer: `<div class='row'>
  <div class='col-md-5'>
    <app-recipe-list></app-recipe-list>
  </div>
  <div class='col-md-7'>
    <app-recipe-detail></app-recipe-detail>
  </div>
</div>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}];





questionSet4 = [{
    questionNum: 1,
    questionInstructions: `Add code inside the <script> tags to write the words "Welcome to my site" onto the web page.`,
    question: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>

<body>
</body>

<script>
// Write your code here.

</script>

</html>`,
    answer: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>

<body>
</body>

<script>
// Write your code here.
document.write('Welcome to my site');
</script>

</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 2,
    questionInstructions: `Add opening and closing script tags inside the body of the page.`,
    question: `<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!--Add Code Below -->
  
</body>
</html>`,
    answer: `<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!--Add Code Below -->
  <script></script>
</body>
</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 3,
    questionInstructions: `Inside the script tags, write a function that will open an alert dialog with the message 'Warning!'`,
    question: `<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!--Add Code Below -->
  <script></script>
</body>
</html>`,
    answer: `<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!--Add Code Below -->
  <script>
  alert('Warning!');
  </script>
</body>
</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 4,
    questionInstructions: `There are two files: a web page, index.html, and a JavaScript file, shout.js. To run any programming in the shout.js file, you first need to load it into the index.html file. Add the required HTML to load the external JavaScript file into the web page. Make sure to add your code inside the <body> of the page.`,
    question: `<!-- index.html -->
<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!-- Add Code Directly Below This Comment -->


</body>
</html>`,
    answer: `<!-- index.html -->
<!DOCTYPE HTML>
<html>
<head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
  <!-- Add Code Directly Below This Comment -->
  <script src='shout.js'></script> 

</body>
</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 5,
    questionInstructions: `Inside the shout.js file, write the code for an alert dialog with the message 'I DID IT!'`,
    question: `// shout.js
// Add Code Below`,
    answer: `// shout.js
// Add Code Below
alert('I DID IT!');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 6,
    questionInstructions: `At the beginning of this script on line 10, type the code required to print 'Begin program' to the browser's JavaScript console.`,
    question: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
<script>
  //Add Code Directly Below this comment

document.write("Welcome to JavaScript Basics");

</script>
</body>
</html>`,
    answer: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
<script>
  //Add Code Directly Below this comment
console.log('Begin program');
document.write("Welcome to JavaScript Basics");

</script>
</body>
</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 7,
    questionInstructions: `At the end of this script after the document.write(), type the code required to print 'End program' to the browser's JavaScript console.`,
    question: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
<script>
console.log('Begin program');
document.write("Welcome to JavaScript Basics");

</script>
</body>
</html>`,
    answer: `<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JavaScript Basics</title>
</head>
<body>
<script>
console.log('Begin program');
document.write("Welcome to JavaScript Basics");
console.log('End program');
</script>
</body>
</html>`,
    timeCorrect: 0,
    questionLanguage: 'html'
}, {
    questionNum: 8,
    questionInstructions: `Create a variable named myName but don't put anything in it yet.`,
    question: ``,
    answer: `var myName;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 9,
    questionInstructions: `Assign the string 'name' (as a string) to the myName variable.`,
    question: `var myName;`,
    answer: `var myName = 'name';`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 10,
    questionInstructions: `Create a player variable with the string 'Jasmine' in it.`,
    question: ``,
    answer: `var player = 'Jasmine';`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 11,
    questionInstructions: `Use the document.write() function to print the contents of the player variable to the page.`,
    question: `var player = 'Jasmine';`,
    answer: `var player = 'Jasmine';
document.write(player);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 12,
    questionInstructions: `Create a variable named answer but don't put a value in it yet.`,
    question: ``,
    answer: `var answer;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 13,
    questionInstructions: `Use the prompt() method to ask the user "What day is it?" and store the result in the answer variable.`,
    question: `var answer;`,
    answer: `var answer = prompt('What day is it?');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 14,
    questionInstructions: `Use the document.write() method to write the variable answer to the page.`,
    question: `var answer = prompt('What day is it?');`,
    answer: `var answer = prompt('What day is it?');
document.write(answer);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 15,
    questionInstructions: `Create a variable named firstName and put 'Mary' in the variable.`,
    question: ``,
    answer: `var firstName = 'Mary';`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 16,
    questionInstructions: `Create another variable named lastName and put 'Jones' in it.`,
    question: `var firstName = 'Mary';`,
    answer: `var firstName = 'Mary';
var lastName = 'Jones';`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 17,
    questionInstructions: `Create a variable named fullName that combines both the first and last name variables to create a string like "Mary Jones".`,
    question: `var firstName = 'Mary';
var lastName = 'Jones';`,
    answer: `var firstName = 'Mary';
var lastName = 'Jones';
var fullName = firstName + ' ' + lastName;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 18,
    questionInstructions: `Use the JavaScript .toUpperCase() string method to assign an all uppercase version of the id variable to the userName variable.`,
    question: `var id = "23188xtr";
var lastName = "Smith";

var userName`,
    answer: `var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 19,
    questionInstructions: `Add a # symbol and lastName in uppercase to the end of the userName string. The final value of userName is "23188XTR#SMITH".`,
    question: `var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase();`,
    answer: `var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase() +'#' + lastName.toUpperCase();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 20,
    questionInstructions: `Create a variable named age and store the age of '32' in the variable.`,
    question: ``,
    answer: `var age = 32;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 21,
    questionInstructions: `Add a second variable named price and store the floating point value of 2.99 in it.`,
    question: `var age = 32;`,
    answer: `var age = 32;
var price = 2.99;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 22,
    questionInstructions: `Create a new variable salesTotal that contains the total of the retailPrice multiplied by the quantity variable.`,
    question: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;`,
    answer: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 23,
    questionInstructions: `Create another variable named profit. It should hold the value of the salesTotal variable minus the wholesalePrice multiplied by the quantity. In other words, if you sold 47 items for 9.99 but only paid 5.45 for each item, how much money did you make?`,
    question: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;`,
    answer: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;
var profit = salesTotal - wholesalePrice * quantity;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 24,
    questionInstructions: `Create one last variable name profitPerUnit. In that variable store the amount of profit you made for each unit. You can calculate this by dividing the profit by the quantity.`,
    question: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;
var profit = salesTotal - wholesalePrice * quantity;`,
    answer: `var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;
var profit = salesTotal - wholesalePrice * quantity;
var profitPerUnit = profit / quantity;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 25,
    questionInstructions: `Imagine you have 10 <div> tags on a web page. Each div is 190 pixels wide. Using the two variables in this script, create a new variable named totalWidth that multiplies the width by the numOfDivs variable. Because the width variable is a string, you'll need to use a JavaScript function to retrieve the number value.`,
    question: `var width = '190px';
var numOfDivs = 10;`,
    answer: `var width = '190px';
var numOfDivs = 10;
var totalWidth = parseInt(width) * numOfDivs;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 26,
    questionInstructions: `For this Code Challenge you need to use JavaScript's Math methods. Open an alert dialog and display the temperature variable rounded to the nearest integer.`,
    question: `var temperature = 37.5;`,
    answer: `var temperature = 37.5;
alert(Math.round(temperature));`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 27,
    questionInstructions: `Open an alert dialog a second time and display the temperature variable rounded downward to the nearest integer. You'll need to check the Mozilla Developer Network to find the proper Math method for this (hint: down is toward the "floor".)`,
    question: `var temperature = 37.5;
alert(Math.round(temperature));`,
    answer: `var temperature = 37.5;
alert(Math.round(temperature));
alert(Math.floor(temperature));`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 28,
    questionInstructions: `Add a variable named answer and use the prompt() method to ask the question 'What is the best programming language?'`,
    question: ``,
    answer: `var answer = prompt('What is the best programming language?');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 29,
    questionInstructions: `Add a conditional statement that opens an alert dialog box with the message "You are correct" when the answer is the string 'JavaScript'.`,
    question: `var answer = prompt('What is the best programming language?');`,
    answer: `var answer = prompt('What is the best programming language?');
if (answer === 'JavaScript'){
  alert('You are correct');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 30,
    questionInstructions: `Add an else clause to complete the conditional statement. Inside the else clause add another alert that says "JavaScript is the best language!"`,
    question: `var answer = prompt('What is the best programming language?');
if (answer === 'JavaScript'){
  alert('You are correct');
}`,
    answer: `var answer = prompt('What is the best programming language?');
if (answer === 'JavaScript'){
  alert('You are correct');
} else {
  alert('JavaScript is the best language!');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 31,
    questionInstructions: `Add a conditional statement that tests if the value in the variable a is greater than the value in variable b. If it is, pop up an alert with the message 'a is greater than b'; also add an else clause that pops up the message 'a is not greater than b'.`,
    question: `var a = 10;
var b = 20;
var c = 30;`,
    answer: `var a = 10;
var b = 20;
var c = 30;
if (a > b){
  alert('a is greater than b');
} else {
  alert('a is not greater than b');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 32,
    questionInstructions: `Place a Boolean value between the parenthesis for the condition in this conditional statement. Use the boolean value that will result in the message "This is true" appearing in an alert box.`,
    question: `if ( ) {
    alert('This is true');
} else {
    alert('This is false');
}`,
    answer: `if (true) {
    alert('This is true');
} else {
    alert('This is false');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 33,
    questionInstructions: `Add a conditional statement that tests to see if the isAdmin variable is true. If it is then open an alert with the message "Welcome administrator".`,
    question: `var isAdmin = true;
var isStudent = false;`,
    answer: `var isAdmin = true;
var isStudent = false;
if (isAdmin){
  alert('Welcome administrator');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 34,
    questionInstructions: `Add an else if clause that tests to see if the isStudent variable is true. If it is then open an alert dialog with the message 'Welcome student'.`,
    question: `var isAdmin = false;
var isStudent = true;
if ( isAdmin ) {
    alert('Welcome administrator');
}`,
    answer: `var isAdmin = false;
var isStudent = true;
if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent){
  alert('Welcome student');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 35,
    questionInstructions: `Add a final else clause to this conditional statement so that if the isAdmin variable and isStudent variables are both false an alert opens with the message "Who are you?"`,
    question: `var isAdmin = false;
var isStudent = false;

if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent) {
    alert('Welcome student');
}`,
    answer: `var isAdmin = false;
var isStudent = false;

if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent) {
    alert('Welcome student');
} else {
    alert('Who are you?');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 36,
    questionInstructions: `Something's wrong with this script. The value in the variable money is only 9. But if you preview this script you'll see the "Time to go to the theater" message. Fix this script so that it correctly tests the money and today variables and prints out the proper alert message: "It's Friday, but I don't have enough money to go out"`,
    question: `var money = 9;
var today = 'Friday'

if ( money >= 100 || today === 'Friday' ) {
  alert("Time to go to the theater");    
} else if ( money >= 50 || today === 'Friday' ) {
  alert("Time for a movie and dinner");    
} else if ( money > 10 || today === 'Friday' ) {
  alert("Time for a movie");   
} else if ( today !== 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out");   
} else {
  alert("This isn't Friday. I need to stay home.");
}`,
    answer: `var money = 9;
var today = 'Friday'

if ( money >= 100 && today === 'Friday' ) {
  alert("Time to go to the theater");    
} else if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner");    
} else if ( money > 10 && today === 'Friday' ) {
  alert("Time for a movie");   
} else if ( today === 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out");   
} else {
  alert("This isn't Friday. I need to stay home.");
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 37,
    questionInstructions: `Create a function named sayHi. Don't put any code inside the function yet, just create the basic structure with an empty code block.`,
    question: ``,
    answer: `function sayHi (){
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 38,
    questionInstructions: `Inside the sayHi() function add the code to make an alert appear with the word "Hi" in it. The alert command should go inside the function's code block.`,
    question: `function sayHi (){
}`,
    answer: `function sayHi (){
  alert('Hi');
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 39,
    questionInstructions: `Call the new sayHi function you just created.
`,
    question: `function sayHi (){
  alert('Hi');
}`,
    answer: `function sayHi (){
  alert('Hi');
}
sayHi();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 40,
    questionInstructions: `Create a function named getYear -- don't add any code inside the function yet.`,
    question: ``,
    answer: `function getYear(){
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 41,
    questionInstructions: `Inside the function's code block add this line of code 'var year = new Date().getFullYear();' This creates a new variable and stores the current year in it. Now, add a statement that returns this variable from the function.`,
    question: `function getYear(){
}`,
    answer: `function getYear(){
  var year = new Date().getFullYear();
  return year;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 42,
    questionInstructions: `Call the getYear function: store the returned value of the function in a new variable named yearToday.`,
    question: `function getYear(){
  var year = new Date().getFullYear();
  return year;
}`,
    answer: `function getYear(){
  var year = new Date().getFullYear();
  return year;
}
var yearToday = getYear();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 43,
    questionInstructions: `Create a function named returnValue that accepts a single argument 'a' (you can name it anything), then immediately returns that argument. 

This isn't that useful of a function, but we want to make sure that you know all of the important parts of creating a function that can accept parameters when it is called, before moving on to bigger functions.`,
    question: ``,
    answer: `function returnValue(a){
  return a;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 44,
    questionInstructions: `After your newly created returnValue function, create a new variable named echo. Set the value of echo to be the results from calling the returnValue function. When you call the returnValue function, make sure to pass in the string 'Cats' for the parameter. 

The function will accept the string you pass to it and return it back (using the return statement). Then your echo variable will be set with what is returned, the results.`,
    question: `function returnValue(a){
  return a;
}`,
    answer: `function returnValue(a){
  return a;
}
var echo = returnValue('Cats');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 45,
    questionInstructions: `Create a new function named max which accepts two numbers ('a' and 'b') as arguments. The function should return the larger of the two numbers.

HINT: You'll need to use a conditional statement to test the 2 parameters to see which is the larger of the two.`,
    question: ``,
    answer: `function max(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 46,
    questionInstructions: `Beneath the max function you just created, call it with two numbers and display the results in an alert dialog. Pass the result of the function to the alert method.

For example, to display the results of the Math.random() method in an alert dialog you could type this: 'alert( Math.random( ) );'`,
    question: `function max(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}`,
    answer: `function max(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}
alert(max(Math.random(), Math.random()));`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 47,
    questionInstructions: `This is a nearly complete while loop, but something is missing. The loop should run 10 times, but it's not working at all. Can you fix it? (Use '<=')`,
    question: `var counter = 1;
while ( ) {
    document.write("<p>Now in loop #" + counter + "</p>");
    counter += 1;
}`,
    answer: `var counter = 1;
while ( counter <= 10 ) {
    document.write("<p>Now in loop #" + counter + "</p>");
    counter += 1;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 48,
    questionInstructions: `In this challenge, you will create a while loop that prints to the document 26 times. We've added a variable named count, use it to track the number of times the loop runs. Don't forget to use the document.write() method inside the loop. (use <=, ++)`,
    question: `var count = 0;`,
    answer: `var count = 0;
while (count <= 25){
  document.write(count);
  count ++;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 49,
    questionInstructions: `The code in app.js just opens a prompt, asks for a password and stores it in a variable secret. It also writes to the document. The current code only checks the password once. Remove the if statement and add a while loop, so that a prompt keeps appearing until the user types "sesame" into the prompt.`,
    question: `var secret = prompt("What is the secret password?");

if(secret !== "sesame") {
  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");`,
    answer: `var secret = prompt("What is the secret password?");

while(secret !== "sesame") {
  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 50,
    questionInstructions: `This is the code we used in the last code challenge. After learning about do...while loops, don't you think this would work better in the do...while style? 
Re-write the code to use a do...while loop.`,
    question: `var secret = prompt("What is the secret password?");
while ( secret !== "sesame" ) {
  secret = prompt("What is the secret password?");    
}
document.write("You know the secret password. Welcome.");`,
    answer: `var secret;
do {
  secret = prompt("What is the secret password?");    
} while ( secret !== "sesame" );
document.write("You know the secret password. Welcome.");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 51,
    questionInstructions: `Create a for loop that logs the numbers 4 to 156 to the console. To log a value to the console use the console.log( ) method. (use i and the index, <= as the comparason, and ++ as the increment)`,
    question: ``,
    answer: `for(var i = 4; i <= 156; i++  ){
  console.log(i);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 52,
    questionInstructions: `The code below logs all of the even numbers from 2 to 24 to the JavaScript console. However, there's a lot of redundant code here. Re-write this using a loop. (use i and the index, <= as the comparason, and += as the increment)`,
    question: `console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
console.log(14);
console.log(16);
console.log(18);
console.log(20);
console.log(22);
console.log(24);
`,
    answer: `for (var i = 2; i <= 24; i += 2){
  console.log(i);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 53,
    questionInstructions: `Create an array named data and store the numbers '1,2,3' in it.`,
    question: ``,
    answer: `var data = [1,2,3];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 54,
    questionInstructions: `The script.js file contains an array of string values -- the names of players in a game. Let's practice using array indices to access individual names in the array. Log the first name of the array using the console.log() method.`,
    question: `var players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];`,
    answer: `var players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
console.log(players[0]);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 55,
    questionInstructions: `Now, use console.log() to log out the last item in the array.`,
    question: `var players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
console.log(players[0]);`,
    answer: `var players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
console.log(players[0]);
console.log(players[5]);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 56,
    questionInstructions: `The script.js file contains an array called guestList. It contains a list of names. Add two new names (John, Sarah) to the end of the list using the array push( ) method. Do not attempt to display the names - only add them to the array.`,
    question: `var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];`,
    answer: `var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
guestList.push('John', 'Sarah');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 57,
    questionInstructions: `Now, leaving the code from the last task in place, add 3 names (Chris, Toby, Jacob) to the beginning of the list using the unshift( ) array method. The final array should have 9 names in it. Do not attempt to display the names - only add them to the array.`,
    question: `var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
guestList.push('John', 'Sarah');`,
    answer: `var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
guestList.push('John', 'Sarah');
guestList.unshift('Chris', 'Toby', 'Jacob');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 58,
    questionInstructions: `The orderQueue array contains a list of customer orders. Create a new variable named shipping -- remove the first item from the array and place it in the shipping variable.`,
    question: `var orderQueue = ['1XT567437','1U7857317','1I9222528'];`,
    answer: `var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift(0);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 59,
    questionInstructions: `Now create a new variable named cancelled. Remove the last item from the orderQueue array and store it in the variable cancelled. Use the array method '.pop()'`,
    question: `var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift(0);`,
    answer: `var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift(0);
var cancelled = orderQueue.pop();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 60,
    questionInstructions: `Use a for loop to iterate through the values in the temperatures array from the first item -- 100 -- to the last -- 10. Inside the loop, log the current array value to the console. (use 'i' as the index, ++ as the increment)`,
    question: `var temperatures = [100,90,99,80,70,65,30,10];`,
    answer: `var temperatures = [100,90,99,80,70,65,30,10];
for (var i = 0; i <= temperatures.length; i++){
  console.log(temperatures[i]);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 61,
    questionInstructions: `Use the array method that combines all of the items in an array into a single string. In the final string, the array items should be separated by a comma AND a space. Finally, log the final string value to the console.`,
    question: `var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];`,
    answer: `var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
console.log(months.join(', '));`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 62,
    questionInstructions: `In this code challenge you need to create a two-dimensional array -- an array of arrays. Start by creating an empty array literal named coordinates.`,
    question: ``,
    answer: `var coordinates = [];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 63,
    questionInstructions: `A two-dimensional Array is an array of arrays. Add 1 array to the coordinates array. That new array should have two items (1.11, 2.22) in it.`,
    question: `var coordinates = [];`,
    answer: `var coordinates = [[1.11, 2.22]];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 64,
    questionInstructions: `Add three more arrays to the coordinates array. The coordinates array should have 4 arrays in it -- each of those arrays should have 2 items (the numbers in each item should be 1.11, 2.22) in it.`,
    question: `var coordinates = [[1.11, 2.22]];`,
    answer: `var coordinates = [[1.11, 2.22],[1.11, 2.22], [1.11, 2.22], [1.11, 2.22]];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 65,
    questionInstructions: `Create an object named paris. To start, just create a new, empty object literal and assign it to the variable paris.`,
    question: ``,
    answer: `var paris = {};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 66,
    questionInstructions: `Add three properties to this object: population with a value of 2.211e6 (that's 2.211 million using exponential notation), a latitude property with a value of '48.8567 N', and a longitude property with a value of '2.3508 E'.`,
    question: `var paris = {};`,
    answer: `var paris = {
  population: 2.211e6,
  latitude: '48.8567 N',
  longitude: '2.3508 E'
};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 67,
    questionInstructions: `The newYork variable contains an object, but the population is wrong. Add a line of code that sets the population property to 8.406e6. Don't change the original declaration of the object.`,
    question: `var newYork = {
  population: 100, 
  latitude: '40.7127 N',
  longitude: '74.0059 W'
};`,
    answer: `var newYork = {
  population: 100, 
  latitude: '40.7127 N',
  longitude: '74.0059 W'
};
newYork.population = 8.406e6;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 68,
    questionInstructions: `Add a new property -- country -- to newYork. Don't change the original object, just add this new property using a = sign to assign the country property to USA.`,
    question: `var newYork = {
  population: 100, 
  latitude: '40.7127 N',
  longitude: '74.0059 W'
};
newYork.population = 8.406e6;`,
    answer: `var newYork = {
  population: 100, 
  latitude: '40.7127 N',
  longitude: '74.0059 W'
};
newYork.population = 8.406e6;
newYork.country = 'USA';`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 69,
    questionInstructions: `Use a for in loop to log each of the property names of the shanghai object to the console.`,
    question: `var shanghai = {
  population: 14.35e6,
  longitude: '31.2000 N',
  latitude: '121.5000 E',
  country: 'CHN'
};`,
    answer: `var shanghai = {
  population: 14.35e6,
  longitude: '31.2000 N',
  latitude: '121.5000 E',
  country: 'CHN'
};
for (var property in shanghai) {
  console.log(property);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 70,
    questionInstructions: `Now that you are logging out the property names, include the property values too. In other words you want to log out 4 lines that include both the property name and value. For example: "population: 14.35e6"`,
    question: `var shanghai = {
  population: 14.35e6,
  longitude: '31.2000 N',
  latitude: '121.5000 E',
  country: 'CHN'
};
for (var property in shanghai) {
  console.log(property);
}`,
    answer: `var shanghai = {
  population: 14.35e6,
  longitude: '31.2000 N',
  latitude: '121.5000 E',
  country: 'CHN'
};
for (var property in shanghai) {
  console.log(property + ": " + shanghai[property]);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 71,
    questionInstructions: `Create an array literal named objects. Don't add anything to the array yet.`,
    question: ``,
    answer: `var objects = [];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 72,
    questionInstructions: `Inside the array literal, add three object literals ({name: 'John', age: 55},{name: 'Susan', age: 25},{name: 'Jammie', age: 56}). In other words, the objects array should have three values. Each object should have 2 property/value pairs.`,
    question: `var objects = [];`,
    answer: `var objects = [{name: 'John', age: 55},{name: 'Susan', age: 25},{name: 'Jammie', age: 56}];`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 73,
    questionInstructions: `There is a variable named button in app.js. Set its value to contain a reference to the button element in index.html with the ID of sayPhrase.`,
    question: `// app.js
let button;
let input;

button.addEventListener('click', () => {
  alert(input.value);
});

// index.html
//<!DOCTYPE html>
//<html>
//  <head>
//    <title>Phrase Sayer</title>
//  </head>
//  <body>
//    <p><input type="text" id="phraseText"></p>
//    <p><button id="sayPhrase">Say Phrase</button></p>
//    <script src="js/app.js"></script>
//  </body>
//</html>`,
    answer: `// app.js
let button = document.getElementById("sayPhrase");
let input;

button.addEventListener('click', () => {
  alert(input.value);
});

// index.html
//<!DOCTYPE html>
//<html>
//  <head>
//    <title>Phrase Sayer</title>
//  </head>
//  <body>
//    <p><input type="text" id="phraseText"></p>
//    <p><button id="sayPhrase">Say Phrase</button></p>
//    <script src="js/app.js"></script>
//  </body>
//</html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 74,
    questionInstructions: `There is a variable named input in app.js. Set its value to contain a reference to the input element in index.html with the ID of phraseText.`,
    question: `// app.js
let button = document.getElementById("sayPhrase");
let input;

button.addEventListener('click', () => {
  alert(input.value);
});

// index.html
//<!DOCTYPE html>
//<html>
//  <head>
//    <title>Phrase Sayer</title>
//  </head>
//  <body>
//    <p><input type="text" id="phraseText"></p>
//    <p><button id="sayPhrase">Say Phrase</button></p>
//    <script src="js/app.js"></script>
//  </body>
//</html>`,
    answer: `// app.js
let button = document.getElementById("sayPhrase");
let input = document.getElementById("phraseText");

button.addEventListener('click', () => {
  alert(input.value);
});

// index.html
//<!DOCTYPE html>
//<html>
//  <head>
//    <title>Phrase Sayer</title>
//  </head>
//  <body>
//    <p><input type="text" id="phraseText"></p>
//    <p><button id="sayPhrase">Say Phrase</button></p>
//    <script src="js/app.js"></script>
//  </body>
//</html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 75,
    questionInstructions: `We have some JavaScript code that will cycle over list items and apply colors from an array called colors. The code will apply the first color to the first list item, the second color to the second list item and so on. But the code is not complete. On line 1 of app.js, set the variable listItems to refer to a collection. The collection should contain all list items in the unordered list element with the id of rainbow.`,
    question: `let listItems;
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}


// Index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Rainbow!</title>
//   </head>
//   <body>
//     <ul id="rainbow">
//       <li>This should be red</li>
//       <li>This should be orange</li>
//       <li>This should be yellow</li>
//       <li>This should be green</li>
//       <li>This should be blue</li>
//       <li>This should be indigo</li>
//       <li>This should be violet</li>
//     </ul>
//     <script src="js/app.js"></script>
//   </body>
// </html>`,
    answer: `let listItems = document.querySelectorAll("#rainbow li");
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}


// Index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Rainbow!</title>
//   </head>
//   <body>
//     <ul id="rainbow">
//       <li>This should be red</li>
//       <li>This should be orange</li>
//       <li>This should be yellow</li>
//       <li>This should be green</li>
//       <li>This should be blue</li>
//       <li>This should be indigo</li>
//       <li>This should be violet</li>
//     </ul>
//     <script src="js/app.js"></script>
//   </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 76,
    questionInstructions: `In the following tasks you'll be required to select various elements on the index.html page.
In the app.js file on line 1, select all links in the nav element and assign them to navigationLinks.`,
    question: `// app.js
let navigationLinks;
let galleryLinks;
let footerImages;

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    answer: `// app.js
let navigationLinks = document.querySelectorAll("nav ul li a"); ;
let galleryLinks;
let footerImages;

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 77,
    questionInstructions: `On line 2 of app.js, select all links in the unordered list with the id of "gallery" and assign them to galleryLinks.`,
    question: `// app.js
let navigationLinks = document.querySelectorAll("nav ul li a"); ;
let galleryLinks;
let footerImages;

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    answer: `// app.js
let navigationLinks = document.querySelectorAll("nav ul li a"); ;
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages;

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 78,
    questionInstructions: `On line 3 of app.js, select all images in the footer element and assign them to footerImages.`,
    question: `// app.js
let navigationLinks = document.querySelectorAll("nav ul li a"); ;
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages;

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    answer: `// app.js
let navigationLinks = document.querySelectorAll("nav ul li a"); ;
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages = document.querySelectorAll(".social-icon");

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Nick Pettit | Designer</title>
//     <link rel="stylesheet" href="css/normalize.css">
//     <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
//     <link rel="stylesheet" href="css/main.css">
//     <link rel="stylesheet" href="css/responsive.css">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   </head>
//   <body>
//     <header>
//       <a href="index.html" id="logo">
//         <h1>Nick Pettit</h1>
//         <h2>Designer</h2>
//       </a>
//       <nav>
//         <ul>
//           <li><a href="index.html" class="selected">Portfolio</a></li>
//           <li><a href="about.html">About</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//     <div id="wrapper">
//       <section>
//         <ul id="gallery">
//           <li>
//             <a href="img/numbers-01.jpg">
//               <img src="img/numbers-01.jpg" alt="">
//               <p>Experimentation with color and texture.</p>
//             </a>
//           </li>
//           <li>
//             <a href="img/numbers-02.jpg">
//               <img src="img/numbers-02.jpg" alt="">
//               <p>Playing with blending modes in Photoshop.</p>
//             </a>
//           </li>
//         </ul>
//       </section>
//       <footer>
//         <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
//         <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
//         <p>&copy; 2016 Nick Pettit.</p>
//       </footer>
//     </div>
//   <script src="js/app.js"></script>
//   </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 79,
    questionInstructions: `Store the value of the text input element in the variable inputValue. `,
    question: `let inputValue;
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
//             <label>Link Name:</label>
//             <input type="text" id="linkName">
//             <a id="link" href="https://teamtreehouse.com"></a>
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let inputValue = document.getElementById("linkName").value;
    
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
//             <label>Link Name:</label>
//             <input type="text" id="linkName">
//             <a id="link" href="https://teamtreehouse.com"></a>
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 80,
    questionInstructions: `Set the text content of the a tag to be the value stored in the variable inputValue.`,
    question: `let inputValue = document.getElementById("linkName").value;
let anchor = document.querySelector("#link");

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
//             <label>Link Name:</label>
//             <input type="text" id="linkName">
//             <a id="link" href="https://teamtreehouse.com"></a>
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let inputValue = document.getElementById("linkName").value;
let anchor = document.querySelector("#link");

anchor.innerText = inputValue;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
//             <label>Link Name:</label>
//             <input type="text" id="linkName">
//             <a id="link" href="https://teamtreehouse.com"></a>
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 81,
    questionInstructions: `On line 2 of app.js, create a paragraph element and assign it to the newParagraph variable.`,
    question: `const contentDiv = document.getElementById("content");
let newParagraph;

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const contentDiv = document.getElementById("content");
var newParagraph = document.createElement("p");

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 82,
    questionInstructions: `Set the class of panel to the newParagraph.`,
    question: `const contentDiv = document.getElementById("content");
var newParagraph = document.createElement("p");

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const contentDiv = document.getElementById("content");
var newParagraph = document.createElement("p");
newParagraph.className = "panel";

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 83,
    questionInstructions: `Append the newParagraph element to the content DIV element.`,
    question: `const contentDiv = document.getElementById("content");
var newParagraph = document.createElement("p");
newParagraph.className = "panel";

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const contentDiv = document.getElementById("content");
var newParagraph = document.createElement("p");
newParagraph.className = "panel";
contentDiv.appendChild(newParagraph);

//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="content">
            
//         </div>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 84,
    questionInstructions: `Select the unordered list element and store it in the variable myList`,
    question: `let myList;
let firstListItem;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let myList = document.getElementsByTagName('ul')[0];
let firstListItem;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 85,
    questionInstructions: `Select the first list item element and store it in the variable firstListItem`,
    question: `let myList = document.getElementsByTagName('ul')[0];


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let myList = document.getElementsByTagName('ul')[0];
let firstListItem = document.getElementById('first');


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 86,
    questionInstructions: `Remove the list item element stored in firstListItem from the DOM.`,
    question: `let myList = document.getElementsByTagName('ul')[0];
let firstListItem = document.getElementById('first');


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let myList = document.getElementsByTagName('ul')[0];
let firstListItem = document.getElementById('first');
myList.removeChild(firstListItem);

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Manipulation</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li id="first">First Item</li>
//             <li id="second">Second Item</li>
//             <li id="third">Third Item</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 87,
    questionInstructions: `Select the button with the ID "makeItRed" and assign it to the button variable.`,
    question: `const warning = document.getElementById("warning");
let button;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const warning = document.getElementById("warning");
let button = document.getElementById('makeItRed')

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 88,
    questionInstructions: `Add a click event listener on the button. Pass an empty function in as the second parameter.`,
    question: `const warning = document.getElementById("warning");
let button = document.getElementById('makeItRed')

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const warning = document.getElementById("warning");
let button = document.getElementById('makeItRed')
button.addEventListener('click', function(){});

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 89,
    questionInstructions: `In the button click handler apply the background color of "red" to the warning div.`,
    question: `const warning = document.getElementById("warning");
let button = document.getElementById('makeItRed')
button.addEventListener('click', function(){});

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const warning = document.getElementById("warning");
let button = document.getElementById('makeItRed')
button.addEventListener('click', function(){
  warning.style.backgroundColor = 'red';
});

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Adding an Event Listener</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <div id="warning">
//             Warning: My background should be red!
//         </div>
//         <button id="makeItRed">Make It Red!</button>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 90,
    questionInstructions: `In the listener that has been added to the section element, ensure that the text input elements are the only children that trigger the background-changing behavior.`,
    question: `let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'rgb(255, 255, 0)';
});

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>JavaScript and the DOM</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <section>
//             <h1>Making a Webpage Interactive</h1>
//             <p>JavaScript is an exciting language that you can use to power web servers, create desktop programs, and even control robots. But JavaScript got its start in the browser way back in 1995.</p>
//             <hr>
//             <p>Things to Learn</p>
//             <ul>
//                 <li>Item One: <input type="text"></li>
//                 <li>Item Two: <input type="text"></li>
//                 <li>Item Three: <input type="text"></li>
//                 <li>Item Four: <input type="text"></li>
//             </ul>
//             <button>Save</button>
//         </section>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
    if (e.target.tagName != "INPUT") return;
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
});

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>JavaScript and the DOM</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <section>
//             <h1>Making a Webpage Interactive</h1>
//             <p>JavaScript is an exciting language that you can use to power web servers, create desktop programs, and even control robots. But JavaScript got its start in the browser way back in 1995.</p>
//             <hr>
//             <p>Things to Learn</p>
//             <ul>
//                 <li>Item One: <input type="text"></li>
//                 <li>Item Two: <input type="text"></li>
//                 <li>Item Three: <input type="text"></li>
//                 <li>Item Four: <input type="text"></li>
//             </ul>
//             <button>Save</button>
//         </section>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 91,
    questionInstructions: `On line 2 of app.js, traverse to the parent element of the removeMe element.`,
    question: `const removeMe = document.querySelector('.remove_me');
let parent;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Parent Traversal</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li>Hello</li>
//             <li>Hi</li>
//             <li class="remove_me">Good bye!</li>
//             <li>Howdy</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const removeMe = document.querySelector('.remove_me');
let parent = removeMe.parentNode;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Parent Traversal</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li>Hello</li>
//             <li>Hi</li>
//             <li class="remove_me">Good bye!</li>
//             <li>Howdy</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 92,
    questionInstructions: `Remove the removeMe element from the parent element.`,
    question: `const removeMe = document.querySelector('.remove_me');
let parent = removeMe.parentNode;


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Parent Traversal</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li>Hello</li>
//             <li>Hi</li>
//             <li class="remove_me">Good bye!</li>
//             <li>Howdy</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const removeMe = document.querySelector('.remove_me');
let parent = removeMe.parentNode;
parent.removeChild(removeMe);

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Parent Traversal</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <ul>
//             <li>Hello</li>
//             <li>Hi</li>
//             <li class="remove_me">Good bye!</li>
//             <li>Howdy</li>
//         </ul>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 93,
    questionInstructions: `A delegated click event listener has been attached to the selected ul element, which is stored in the variable list. The handler is targeting each button in the list. When any one of the buttons is clicked, a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element. Add the code to create this behavior on line 5.`,
    // </html>
    question: `const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    
  }
});


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>JavaScript and the DOM</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <section>
//             <h1>Making a Webpage Interactive</h1>
//             <p>Things to Learn</p>
//             <ul>
//                 <li><p>Element Selection</p><button>Highlight</button></li>
//                 <li><p>Events</p><button>Highlight</button></li>
//                 <li><p>Event Listening</p><button>Highlight</button></li>
//                 <li><p>DOM Traversal</p><button>Highlight</button></li>
//             </ul>
//         </section>
//         <script src="app.js"></script>
//     </body>`,
    answer: `const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let p = e.target.previousElementSibling
    p.className = "highlight";
  }
});


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>JavaScript and the DOM</title>
//     </head>
//     <link rel="stylesheet" href="style.css" />
//     <body>
//         <section>
//             <h1>Making a Webpage Interactive</h1>
//             <p>Things to Learn</p>
//             <ul>
//                 <li><p>Element Selection</p><button>Highlight</button></li>
//                 <li><p>Events</p><button>Highlight</button></li>
//                 <li><p>Event Listening</p><button>Highlight</button></li>
//                 <li><p>DOM Traversal</p><button>Highlight</button></li>
//             </ul>
//         </section>
//         <script src="app.js"></script>
//     </body>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 94,
    questionInstructions: `On line 2 of app.js, get all the paragraph elements within section and assign them to the paragraphs variable.`,
    question: `const section = document.querySelector('section');
let paragraphs;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Child Traversal</title>
//     </head>
//     <body>
//         <section>
//             <p>This is the first paragraph</p>
//             <p>This is a slightly longer, second paragraph</p>
//             <p>Shorter, last paragraph</p>
//         </section>
//         <footer>
//             <p>&copy; 2016</p> 
//         </footer>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const section = document.querySelector('section');
let paragraphs = section.children;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Child Traversal</title>
//     </head>
//     <body>
//         <section>
//             <p>This is the first paragraph</p>
//             <p>This is a slightly longer, second paragraph</p>
//             <p>Shorter, last paragraph</p>
//         </section>
//         <footer>
//             <p>&copy; 2016</p> 
//         </footer>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 95,
    questionInstructions: `For every paragraph element change the color to be blue. 

(Hint: remember, paragraphs contains a collection of elements, so you'll need to use a loop and access each element inside.)`,
    question: `const section = document.querySelector('section');
let paragraphs = section.children;

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Child Traversal</title>
//     </head>
//     <body>
//         <section>
//             <p>This is the first paragraph</p>
//             <p>This is a slightly longer, second paragraph</p>
//             <p>Shorter, last paragraph</p>
//         </section>
//         <footer>
//             <p>&copy; 2016</p> 
//         </footer>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    answer: `const section = document.querySelector('section');
let paragraphs = section.children;
for (let i = 0; i < paragraphs.length; i++) {
     paragraphs[i].style.color = 'blue';
}

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Child Traversal</title>
//     </head>
//     <body>
//         <section>
//             <p>This is the first paragraph</p>
//             <p>This is a slightly longer, second paragraph</p>
//             <p>Shorter, last paragraph</p>
//         </section>
//         <footer>
//             <p>&copy; 2016</p> 
//         </footer>
//         <script src="app.js"></script>
//     </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 96,
    questionInstructions: `In the app.js file, create a variable named request and assign it a new XMLHttpRequest object.`,
    question: ``,
    answer: `var request = new XMLHttpRequest();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 97,
    questionInstructions: `In app.js, we've added an AJAX callback function. You need to complete the request. Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.`,
    question: `var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};`,
    answer: `var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open("GET", "footer.html");
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 98,
    questionInstructions: `Add the code to send the AJAX request.`,
    question: `var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open("GET", "footer.html");`,
    answer: `var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open("GET", "footer.html");
request.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 99,
    questionInstructions: `Use a <song> tag to add a new 'song' to this XML document. You don't need to put anything inside the tags.`,
    question: `<?xml version="1.0" encoding="UTF-8"?>
<songs>

</songs>
`,
    answer: `<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song></song>
</songs>`,
    timeCorrect: 0,
    questionLanguage: 'xml'
}, {
    questionNum: 100,
    questionInstructions: `Add the song title 'Winds' by inserting a <title> tag inside the <song> tag. Put the name of any song you'd like inside it.`,
    question: `<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song></song>
</songs>`,
    answer: `<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song><title>Winds</title></song>
</songs>
`,
    timeCorrect: 0,
    questionLanguage: 'xml'
}, {
    questionNum: 101,
    questionInstructions: `Add an <artist> tag inside the song and provide the name of the musician which is 'Blue Bird'.`,
    question: `<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song>
    <title>Winds</title>
  </song>
</songs>
`,
    answer: `<?xml version="1.0" encoding="UTF-8"?>
<songs>
  <song>
    <title>Winds</title>
    <artist>Blue Bird</artist>
  </song>
</songs>`,
    timeCorrect: 0,
    questionLanguage: 'xml'
}, {
    questionNum: 102,
    questionInstructions: `On line 2 of the app.js file, add an onreadystatechange event handler. Add an anonymous function, but don't put any code inside it.`,
    question: `var xhr = new XMLHttpRequest();

xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    answer: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {};
  xhr.open('GET', 'sidebar.html');
  xhr.send();
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 103,
    questionInstructions: `Add a conditional statement inside the onreadystatechange event handler that tests to make sure the server has sent back its complete response.`,
    question: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

};
xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    answer: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 104,
    questionInstructions: `In the conditional statement you just created, also test to make sure the return status from the server is OK.`,
    question: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    xhr.responseText;
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 105,
    questionInstructions: `Now that the server has responded with the data, you need to add it to the page. First select the div with the ID of 'sidebar'. You can select page elements with IDs like this: document.getElementById('idName');`,
    question: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    xhr.responseText;
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    answer: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('sidebar') = xhr.responseText;
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 106,
    questionInstructions: `Now use a DOM element's innerHTML property to set the HTML inside the sidebar div to the server's response.`,
    question: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('sidebar') = xhr.responseText;
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();`,
    answer: `var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('sidebar').innerHTML = xhr.responseText;
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 107,
    questionInstructions: `In this challenge, you'll create a JSON file containing a string that's formatted as an array of JavaScript objects. The file will contain an array of songs, each with a song title and artist. Start by creating an empty array.`,
    question: ``,
    answer: `[]`,
    timeCorrect: 0,
    questionLanguage: 'json'
}, {
    questionNum: 108,
    questionInstructions: `Inside the array, add an empty JavaScript object. This will hold our song.`,
    question: `[]`,
    answer: `[{}]`,
    timeCorrect: 0,
    questionLanguage: 'json'
}, {
    questionNum: 109,
    questionInstructions: `This object represents one song. Add a "title" property to this object. Set the property's value to 'Winds'`,
    question: `[{}]`,
    answer: `[{"title": "Winds"}]`,
    timeCorrect: 0,
    questionLanguage: 'json'
}, {
    questionNum: 110,
    questionInstructions: `Add an "artist" property to this object. Use a musician 'Blue Bird' for the property's value.`,
    question: `[{"title": "Winds"}]`,
    answer: `[{"title": "Winds", "artist": "Blue Bird"}]`,
    timeCorrect: 0,
    questionLanguage: 'json'
}, {
    questionNum: 111,
    questionInstructions: `In the app.js file, use jQuery to select the footer div of the web page. Look at the index.html file to see how the HTML is structured.`,
    question: `//Your code goes directly below this comment.
    
    //index.hmtl
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>AJAX with JavaScript</title>
// </head>
// <body>
//   <div id="main">
//     <h1>AJAX with jQuery</h1>
//   </div>
//   <div id="footer"></div>
//   <script src="jquery.js"></script>
//   <script src="app.js"></script>
// </body>
// </html>`,
    answer: `//Your code goes directly below this comment.
    $('#footer')
    //index.hmtl
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>AJAX with JavaScript</title>
// </head>
// <body>
//   <div id="main">
//     <h1>AJAX with jQuery</h1>
//   </div>
//   <div id="footer"></div>
//   <script src="jquery.js"></script>
//   <script src="app.js"></script>
// </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 112,
    questionInstructions: `Load the contents of the file 'footer.html' using jQuery's load() method.`,
    question: `//Your code goes directly below this comment.
$('#footer')

//index.hmtl
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>AJAX with JavaScript</title>
// </head>
// <body>
//   <div id="main">
//     <h1>AJAX with jQuery</h1>
//   </div>
//   <div id="footer"></div>
//   <script src="jquery.js"></script>
//   <script src="app.js"></script>
// </body>
// </html>`,
    answer: `//Your code goes directly below this comment.
$('#footer').load('footer.html');

//index.hmtl
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>AJAX with JavaScript</title>
// </head>
// <body>
//   <div id="main">
//     <h1>AJAX with jQuery</h1>
//   </div>
//   <div id="footer"></div>
//   <script src="jquery.js"></script>
//   <script src="app.js"></script>
// </body>
// </html>`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 113,
    questionInstructions: `You'll be using jQuery's $.get() method to achieve the same result as the .load() function. Start by adding the $.get() method to 'app.js'. You don't need to pass any arguments to the function yet.`,
    question: ``,
    answer: `$.get();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 114,
    questionInstructions: `The first argument to the $.get() method is a URL to a resource. In this case you want to load the 'footer.html' file, so pass that as the argument.`,
    question: `$.get();`,
    answer: `$.get('footer.html');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 115,
    questionInstructions: `You've got the $.get() method and first argument in place. The second argument to the $.get() method is a callback function. Pass an anonymous function as the second argument to the method. Don't forget to set a parameter (use 'data') for that function to catch the server's incoming response.`,
    question: `$.get("footer.html");`,
    answer: `$.get("footer.html", function(data){});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 116,
    questionInstructions: `Inside the anonymous function, use jQuery to select the footer div. It has an ID of 'footer'.`,
    question: `$.get("footer.html", function(data){});`,
    answer: `$.get("footer.html", function(data){
  $('#footer');
});
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 117,
    questionInstructions: `Use jQuery's html() method to insert the server response into the footer of the page.`,
    question: `$.get("footer.html", function(data){
  $('#footer');
});`,
    answer: `$.get("footer.html", function(data){
  $('#footer').html(data);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 118,
    questionInstructions: `jQuery's $.get() method doesn't do anything if the server returns an error. You can chain jQuery's fail() method to the $.get() method and pass it a function to handle any errors. Start by adding the fail() method to the $.get() method.`,
    question: `$.get("missing.html", function(data) {
  $("#footer").html(data);
});
`,
    answer: `$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail();`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 119,
    questionInstructions: `jQuery's fail() method takes a callback function as an argument. The function is run when there's an error in the AJAX response. Pass an anonymous function as an argument to the method. Don't forget to set a parameter for that function. Use the name jqXHR for the parameter -- this parameter will hold a jQuery XHR object passed by the fail() method to the function.`,
    question: `$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail();`,
    answer: `$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail(function(jqXHR) {
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 120,
    questionInstructions: `When the AJAX response fails, we should alert the user. Pop up an alert box with the XHR object's statusText property.`,
    question: `$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail(function(jqXHR) {
});`,
    answer: `$.get("missing.html", function(data) {
  $("#footer").html(data);
}).fail(function(jqXHR) {
  alert(jqXHR.statusText);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 121,
    questionInstructions: `In the next series of code challenges, you'll write the code to talk to the Open Weather Map API. It provides weather information for cities around the world. Start by creating a variable named weatherAPI.`,
    question: `$(document).ready(function() {

});`,
    answer: `$(document).ready(function() {
  var weatherAPI;
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 122,
    questionInstructions: `Assign the URL of the API to the variable weatherAPI. The URL is 'http://api.openweathermap.org/data/2.5/weather'.`,
    question: `$(document).ready(function() {
  var weatherAPI;
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 123,
    questionInstructions: `Create a variable named data. Assign it an empty JavaScript object. Hint: an object in JavaScript is created with a pair of braces like this: { }`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {};
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 124,
    questionInstructions: `To use the Open Weather Map API, you need to specify a city name and state or country. Add a property to the data object. The name of the property should be q and the value should be a string with the name of a city, followed by a comma, and a state or country name. For example: q : "Portland,OR"`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {};
});
`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {q : "Portland,OR"}
});
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 125,
    questionInstructions: `You can get the temperature back from the Open Weather Map API in metric (Celsius) or imperial (Farenheit) units. Add another property named units to the data object. Set its value to "imperial"`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR"
  }
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units: "imperial"
  }
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 126,
    questionInstructions: `Create an empty function named showWeather. It should have 1 parameter named weatherReport. You don't need to put any code inside the function yet.`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
  var showWeather = function(weatherReport){};
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 127,
    questionInstructions: `Now you'll add programming to the callback function: you'll display the current temperature of the city you picked. Start by using jQuery to select the element with the ID of temperature.`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
  var showWeather = function(weatherReport){
  
  };
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
  var showWeather = function(weatherReport){
  $('#temperature');
  };
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 128,
    questionInstructions: `Finally, to insert the temperature into the span, use jQuery's text() method. You'll need to pass the temperature into this method. The Open Weather Map API returns an object with the property main; that property holds another object with the property "temp". To access the temperature, use dot syntax, like this: weatherReport.main.temp`,
    question: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
  var showWeather = function(weatherReport){
  $('#temperature')
  };
});`,
    answer: `$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  // Your code goes directly below this comment
  var showWeather = function(weatherReport){
  $('#temperature').text(weatherReport.main.temp);;
  };
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 129,
    questionInstructions: `Everything's in place to send the AJAX request: you've specified the URL, a data object, and a callback function. Use jQuery's $.getJSON() method to make the AJAX call.`,
    question: `$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  // Your code goes directly below this comment
   
});
`,
    answer: `$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  // Your code goes directly below this comment
   $.getJSON(weatherAPI, data, showWeather);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 130,
    questionInstructions: `Create an object literal with no properties and assign it to the variable contact.`,
    question: ``,
    answer: `var contact = {};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 131,
    questionInstructions: `Assign the name 'Jonh Smith' to the fullName property on the contact object literal.`,
    question: `var contact = {
      
    };`,
    answer: `var contact = {
  fullName: 'John Smith'
};`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 132,
    questionInstructions: `Create a method on the contact object called fullName, use the programming from the printFullName function.`,
    question: `function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
}

var contact = {
 
}`,
    answer: `function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
}

var contact = {
  fullName: function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
  }  
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 133,
    questionInstructions: `Make the fullName method an anonymous function.`,
    question: `function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
}

var contact = {
  fullName: function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
  }  `,
    answer: `function printFullName() {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
}

var contact = {
  fullName: function () {
  var firstName = "Andrew";
  var lastName = "Chalkley";
  console.log(firstName + " " + lastName);
  }  
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 134,
    questionInstructions: `Modify this object so it uses two properties firstName and lastName and remove their variable declarations from the fullName method. Don't do anything to the console.log() call right now.`,
    question: `var contact = {
  fullName: function() {
    var firstName = "Andrew";
    var lastName = "Chalkley";
    console.log(firstName + " " + lastName);
  }
}`,
    answer: `var contact = {
  firstName : "Andrew",
  lastName : "Chalkley",
  fullName: function() {
    console.log(firstName + " " + lastName);
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 135,
    questionInstructions: `Finally, finish off the code to correctly access the properties on the contact with the this keyword.`,
    question: `var contact = {
  firstName : "Andrew",
  lastName : "Chalkley",
  fullName: function() {
    console.log(firstName + " " + lastName);
  }
}`,
    answer: `var contact = {
  firstName : "Andrew",
  lastName : "Chalkley",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 136,
    questionInstructions: `Instead of logging out the full name, modify the code so it returns the string instead.`,
    question: `var contact = {
  firstName: "Andrew",
  lastName: "Chalkley",
  fullName: function(){
    console.log(this.firstName + " " + this.lastName);
  }
}`,
    answer: `var contact = {
  firstName: "Andrew",
  lastName: "Chalkley",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 137,
    questionInstructions: `Implement the subtract method.`,
    question: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
  
  },
  multiply: function(value) {
  
  },
  divide: function(value) {
  
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    answer: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
    this.sum -= value;
  },
  multiply: function(value) {
  
  },
  divide: function(value) {
  
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 138,
    questionInstructions: `Now, implement the multiply method.`,
    question: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
    this.sum -= value;
  },
  multiply: function(value) {
  
  },
  divide: function(value) {
  
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    answer: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
    this.sum -= value;
  },
  multiply: function(value) {
    this.sum *= value;
  },
  divide: function(value) {
  
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 139,
    questionInstructions: `Finally, implement the divide method.`,
    question: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
    this.sum -= value;
  },
  multiply: function(value) {
    this.sum *= value;
  },
  divide: function(value) {
    
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    answer: `var calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  subtract: function(value) {
    this.sum -= value;
  },
  multiply: function(value) {
    this.sum *= value;
  },
  divide: function(value) {
    this.sum /= value;
  },
  clear: function() {
    this.sum = 0;
  }, 
  equals: function() {
    return this.sum;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 140,
    questionInstructions: `Create a constructor function for a Monster. Don't include any parameters or properties yet.`,
    question: ``,
    answer: `function Monster() {

}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 141,
    questionInstructions: `Modify the Monster constructor to take one parameter of name. Inside the constructor function, when it creates a new instance assign the parameter name to the property of name on the new instance.`,
    question: `function Monster() {

}`,
    answer: `function Monster(name) {
  this.name = name;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 142,
    questionInstructions: `Finally, Monsters have a health property. When they take damage from the player, their health will reduce. All new Monster instances should have 100 health by default. It should be a number not a string.`,
    question: `function Monster(name) {
  this.name = name;
}`,
    answer: `function Monster(name) {
  this.name = name;
  this.health = 100;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 143,
    questionInstructions: `We're adding a new method to every instance when a Monster is created. Use a prototype instead for the takeDamage method.`,
    question: `function Monster(name) {
  this.name = name;
  this.health = 100;
  this.takeDamage = function (){
    this.health--;
  }
}`,
    answer: `function Monster(name) {
  this.name = name;
  this.health = 100;
}
Monster.prototype.takeDamage = function(){
  this.health--;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 144,
    questionInstructions: `You're going to modify the Teacher code to inherit from the Person. First, in the Teacher constructor function, call the Person constructor, using the call method and pass in the common attributes.`,
    question: `// person.js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

// teacher.js
function Teacher(firstName, lastName, roomNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.room = roomNumber;
}`,
    answer: `// person.js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

// teacher.js
function Teacher(firstName, lastName, roomNumber) {
  Person.call(this, firstName, lastName);
  this.room = roomNumber;
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 145,
    questionInstructions: `Now set up the prototype chain for the Teacher prototype to inherit from the Person prototype.`,
    question: `// person.js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

// teacher.js
function Teacher(firstName, lastName, roomNumber) {
  Person.call(this, firstName, lastName);
  this.room = roomNumber;
}`,
    answer: `// person.js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

// teacher.js
function Teacher(firstName, lastName, roomNumber) {
  Person.call(this, firstName, lastName);
  this.room = roomNumber;
}

Teacher.prototype = Object.create(Person.prototype);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 146,
    questionInstructions: `Review the code in app.js.
Use the log method on the console object to print out the name variable.`,
    question: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";`,
    answer: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";

console.log(name);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 147,
    questionInstructions: `Review the code in app.js.
Use the appropriate console method to print out the details object.`,
    question: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";

console.log(name);`,
    answer: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";

console.log(name);
console.dir(details);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 148,
    questionInstructions: `Review the code in app.js.
Use the appropriate console method to print out the errorMessage variable.`,
    question: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";

console.log(name);
console.dir(details);`,
    answer: `const name = "Andrew";
const details = { favouriteLanguage: "JavaScript", age: 33, children: 3 } 
const errorMessage = "Something bad has occurred";

console.log(name);
console.dir(details);
console.error(errorMessage);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 149,
    questionInstructions: `Require Node.js' https module and assign it to the variable https.`,
    question: ``,
    answer: `var https = require('https');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 150,
    questionInstructions: `On a new line, call the get method on the https object you created. Pass in the string of https://teamtreehouse.com/chalkers.json.`,
    question: `var https = require('https');`,
    answer: `var https = require('https');
https.get("https://teamtreehouse.com/chalkers.json");`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 151,
    questionInstructions: `Now, in the https.get() call pass in an anonymous function as a callback with the parameter of response. This function is the second parameter in the get call.`,
    question: `var https = require('https');
https.get("https://teamtreehouse.com/chalkers.json");`,
    answer: `var https = require('https');
https.get("https://teamtreehouse.com/chalkers.json", function(response){
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 152,
    questionInstructions: `In the callback function, log out the response's statusCode.`,
    question: `var https = require('https');
https.get("https://teamtreehouse.com/chalkers.json", function(response){
});`,
    answer: `var https = require('https');
https.get("https://teamtreehouse.com/chalkers.json", function(response){
  console.log(response.statusCode);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 153,
    questionInstructions: `Without renaming any of the variables, modify the data callback to concatenate the stream of data to the responseBody.`,
    question: `const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {

    });

    response.on("", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});`,
    answer: `const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
        responseBody += dataChunk;
    });

    response.on("", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 154,
    questionInstructions: `See the console.log(responseBody); in that callback around line 10? Fix the listener so that the callback gets executed when the response has fully finished.`,
    question: `const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
        responseBody += dataChunk;
    });

    response.on("", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});`,
    answer: `const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
        responseBody += dataChunk;
    });

    response.on("end", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 155,
    questionInstructions: `Create a new variable jsonObject and then use the native JSON object to parse the jsonString and assign it to jsonObject.`,
    question: `const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';`,
    answer: `const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';
var jsonObject = JSON.parse(jsonString);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 156,
    questionInstructions: `Create a variable request that stores the result of the get method.`,
    question: `const https = require("https");

https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});`,
    answer: `const https = require("https");

 var request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 157,
    questionInstructions: `On a new line use the on method to listen for the error event. Pass in a callback function with one parameter of error.`,
    question: `const https = require("https");

 var request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});`,
    answer: `const https = require("https");

 var request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});
request.on('error', function(error){});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 158,
    questionInstructions: `Finally, in the error callback, use the error method on the console to print out the error message.`,
    question: `const https = require("https");

 var request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});
request.on('error', function(error){});`,
    answer: `const https = require("https");

 var request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});
request.on('error', function(error){
  console.error(error.message);
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 159,
    questionInstructions: `Something bad is going to happen. Use a try block in the appropriate place to catch an error. Include a catch block with error as the parameter.`,
    question: `const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);`,
    answer: `try {
const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);
} catch (error){}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 160,
    questionInstructions: `In the catch block, call console.error to print out the error's message property.`,
    question: `try {
const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);
} catch (error){}`,
    answer: `try {
const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);
} catch (error){
  console.error(error.message);
}`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 161,
    questionInstructions: `We've been tasked to continue with this prototype site. Have a look in the index.js and routes.js file and familiarize yourself. In the routes.js, just like the other two functions create an about function for a /about route. Have it print out "About" to the response. Remember to make this accessible by other files.`,
    question: `function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact");
    }
}

module.exports.root = root;
module.exports.contact = contact;`,
    answer: `function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact");
    }
}
function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("About");
    }
}

module.exports.root = root;
module.exports.contact = contact;
module.exports.about = about;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 162,
    questionInstructions: `Finally, in the index.js file, make sure that the about route is being handled by the HTTP server.`,
    question: `// routes.js
function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact");
    }
}
function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("About");
    }
}

module.exports.root = root;
module.exports.contact = contact;
module.exports.about = about;


// index.js
var http = require("http");
var routes = require("./routes.js");

http.createServer(function(request, response){
    routes.root(request, response);
    routes.contact(request, response);
}).listen(3000);`,
    answer: `// routes.js
function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home\n");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact\n");
    }
}
function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("About\n");
    }
}

module.exports.root = root;
module.exports.contact = contact;
module.exports.about = about;


// index.js
var http = require("http");
var routes = require("./routes.js");

http.createServer(function(request, response){
    routes.root(request, response);
    routes.contact(request, response);
    routes.about(request, response);
}).listen(3000);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 163,
    questionInstructions: `Complete the implementation of the merge method in utilities.js file. You should be able to pass in a string with placeholders with percent signs (%) surrounding them. The second parameter should be an object with values to be inserted in to the placeholders. Look at index.js to see how it should work.`,
    question: `// index.js
var utilities = require("./utilities");

var mailValues = {};

mailValues.first_name = "Janet";

var emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

var mergedContent = utilities.merge(emailTemplate, mailValues);

//mergedContent === "Hi Janet! Thanks for completing this code challenge :)";

// utilities.js
function merge(content, values) {

  return content;
}


module.exports.merge = merge;`,
    answer: `// index.js
var utilities = require("./utilities");

var mailValues = {};

mailValues.first_name = "Janet";

var emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

var mergedContent = utilities.merge(emailTemplate, mailValues);

//mergedContent === "Hi Janet! Thanks for completing this code challenge :)";

// utilities.js
function merge(content, values) {
for (key in values) {
    content = content.replace("%"+key+"%", values[key]);
  }
  return content;
}

module.exports.merge = merge;`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 164,
    questionInstructions: `Install the npm package "express".`,
    question: ``,
    answer: `npm install express`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 165,
    questionInstructions: `Install the npm package, coffee-script, globally.`,
    question: ``,
    answer: `npm install -g coffee-script`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 166,
    questionInstructions: `Initialize a package.json file with the npm command line application.`,
    question: ``,
    answer: `npm init`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 167,
    questionInstructions: `Use npm to update the packages in your package.json file.`,
    question: ``,
    answer: `npm update`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 168,
    questionInstructions: `Update the global package npm.`,
    question: ``,
    answer: `npm update -g npm`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 169,
    questionInstructions: `Uninstall the global package coffee-script.`,
    question: ``,
    answer: `npm uninstall -g coffee-script`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 170,
    questionInstructions: `Install gulp globally using the node package manager - usually just called npm.`,
    question: ``,
    answer: `npm install -g gulp`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 171,
    questionInstructions: `Install gulp localy and only for development using the node package manager - usually just called npm.`,
    question: ``,
    answer: `npm install --save-dev gulp`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 172,
    questionInstructions: `require the gulp module, and assign it to the variable gulp.`,
    question: ``,
    answer: `var gulp = require('gulp');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 173,
    questionInstructions: `Using gulp's task method, create a new task called 'goodbye'.`,
    question: `var gulp = require('gulp');`,
    answer: `var gulp = require('gulp');
gulp.task('goodbye');`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 174,
    questionInstructions: `In the 'goodbye' task, create an anonymous callback function as the second parameter. In the body of the function, log the string "goodbye!".`,
    question: `var gulp = require('gulp');
gulp.task('goodbye');`,
    answer: `var gulp = require('gulp');
gulp.task('goodbye', function(){
  console.log('goodbye!');
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 175,
    questionInstructions: `Install express, version 4.15.2, and save it to the package.json file.`,
    question: ``,
    answer: `npm install --save express@4.15.2`,
    timeCorrect: 0,
    questionLanguage: 'text'
}, {
    questionNum: 176,
    questionInstructions: `Change the parameter names for the request and response objects to req and res.`,
    question: `const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send("I Love Treehouse!");
});

app.listen(3000);`,
    answer: `const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("I Love Treehouse!");
});

app.listen(3000);
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 177,
    questionInstructions: `Respond with "I Love Treehouse!" as an <h2> tag.`,
    question: `const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("I Love Treehouse!");
});

app.listen(3000);`,
    answer: `const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h2>I Love Treehouse!</h2>");
});

app.listen(3000);`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 178,
    questionInstructions: `In the root route, render the "main.pug" template.`,
    question: `const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});
`,
    answer: `const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 179,
    questionInstructions: `Pass the posts object to your template, naming it "posts".`,
    question: `const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});`,
    answer: `const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  res.render('main',{posts: posts});
  
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});
`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 180,
    questionInstructions: `Add a new route at the "/blog" url. The callback function should take req and res as parameters. Leave the callback's body blank for now.`,
    question: `const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});
//Add your code directly below this comment


app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});
`,
    answer: `const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});
//Add your code directly below this comment
app.get('/blog', (req, res) => {
  
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}, {
    questionNum: 181,
    questionInstructions: `Use the send method on the response object to return the posts object when the /blog route is requested.`,
    question: `const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});
//Add your code directly below this comment
app.get('/blog', (req, res) => {
  
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});`,
    answer: `const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});
//Add your code directly below this comment
app.get('/blog', (req, res) => {
  res.send(posts);
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});`,
    timeCorrect: 0,
    questionLanguage: 'javascript'
}];



var questionsJava = [{
    questionNum: 1,
    questionInstructions: `Define a string variable named firstName that stores the string "Mary".`,
    question: `// I have setup a java.io.Console object for you named console`,
    answer: `// I have setup a java.io.Console object for you named console
String firstName = "Mary";`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 2,
    questionInstructions: `Call the printf method on the console object and make it write out "Mary can code in Java!"`,
    question: `// I have setup a java.io.Console object for you named console
String firstName = "Mary";`,
    answer: `// I have setup a java.io.Console object for you named console
String firstName = "Mary";
console.printf("Mary can code in Java!");`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 3,
    questionInstructions: `Now replace "Mary" in the console.printf expression with the firstName variable using the string formatter.`,
    question: `// I have setup a java.io.Console object for you named console
String firstName = "Mary";
console.printf("Mary can code in Java!");`,
    answer: `// I have setup a java.io.Console object for you named console
String firstName = "Mary";
console.printf("%s can code in Java!",firstName);
`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 4,
    questionInstructions: `Declare a variable that is named the camel-cased version of "first name". Store the user's first name into this new variable using console.readLine.`,
    question: `// I have imported java.io.Console for you.  It is a variable called console.`,
    answer: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 5,
    questionInstructions: `Declare another variable, naming this one the camel-cased version of "last name". Use console.readLine to store the user's last name into this new variable.`,
    question: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();`,
    answer: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();
String lastName = console.readLine();`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 6,
    questionInstructions: `Using the console's printf method, display a message that says, "First Name: ", followed by the first name that the user has entered.`,
    question: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();
String lastName = console.readLine();`,
    answer: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();
String lastName = console.readLine();
console.printf("First Name: %s",firstName);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 7,
    questionInstructions: `Using the console's printf method, display a message that says, "Last Name: " followed by the last name that the user has entered.`,
    question: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();
String lastName = console.readLine();
console.printf("First Name: %s",firstName);`,
    answer: `// I have imported java.io.Console for you.  It is a variable called console.
String firstName = console.readLine();
String lastName = console.readLine();
console.printf("First Name: %s",firstName);
console.printf("Last Name: %s", lastName);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 8,
    questionInstructions: `Create a new variable called name and accept input from the console using the readLine method.`,
    question: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.`,
    answer: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.
String name = console.readLine();`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 9,
    questionInstructions: `Create a new variable to store a past tense verb, so in camel case that is pastTenseVerb. Accept input from the console using the readLine method.`,
    question: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.
String name = console.readLine();`,
    answer: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.
String name = console.readLine();
String pastTenseVerb = console.readLine();`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 10,
    questionInstructions: `Output (using the console object) a sentence that takes both the name and past tense verb using a single statement. It should look like this: 
"*name* really *past tense verb* this coding exercise."`,
    question: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.
String name = console.readLine("");
String pastTenseVerb = console.readLine("");`,
    answer: `// I've imported java.io.Console for you.  It is stored in a variable called console for you.
String name = console.readLine("");
String pastTenseVerb = console.readLine("");
console.printf("%s really %s this coding exercise.", name, pastTenseVerb);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 11,
    questionInstructions: `Fix the error(s).`,
    question: `Sting firstName = "Gordon";`,
    answer: `String firstName = "Gordon";`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 12,
    questionInstructions: `Fix the error(s).`,
    question: `string lastName = "Sumner";`,
    answer: `String lastName = "Sumner";`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 14,
    questionInstructions: `Fix the error(s).`,
    question: `console.printf("Hello", firstName);`,
    answer: `console.printf("Hello %s", firstName);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 15,
    questionInstructions: `Fix the error(s).`,
    question: `band = console.readLine("Which band?  ");`,
    answer: `String band = console.readLine("Which band?  ");`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 16,
    questionInstructions: `Create an integer that stores "number of people" ( Use camel case). Set the value to 3.`,
    question: ``,
    answer: `int numberOfPeople = 3;`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 17,
    questionInstructions: `Add an if statement to see if there are less than 4 people. Using the console's printf method, write out to the console, “Your table is ready”`,
    question: `int numberOfPeople = 3;`,
    answer: `int numberOfPeople = 3;
if(numberOfPeople < 4){
  console.printf("Your table is ready");
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 18,
    questionInstructions: `Inside your if block, after printing, exit the program.`,
    question: `int numberOfPeople = 3;
if(numberOfPeople < 4){
  console.printf("Your table is ready");
}`,
    answer: `int numberOfPeople = 3;
if(numberOfPeople < 4){
  console.printf("Your table is ready");
  System.exit(0);
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 19,
    questionInstructions: `Create a new int variable that is named answer. Store the integer version of answerToLife in it.`,
    question: `String answerToLife = "42";`,
    answer: `String answerToLife = "42";
int answer = Integer.parseInt(answerToLife);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 20,
    questionInstructions: `Add an if statement that checks to see if firstExample is equal to secondExample. If it is, print out (using the console object) "first is equal to second".`,
    question: `// I have imported a java.io.Console for you, it is named console. 
String firstExample = "hello";
String secondExample = "hello";
String thirdExample = "HELLO";`,
    answer: `// I have imported a java.io.Console for you, it is named console. 
String firstExample = "hello";
String secondExample = "hello";
String thirdExample = "HELLO";

if(firstExample.equals(secondExample)){
  console.printf("first is equal to second");
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 21,
    questionInstructions: `Add another if statement that checks if the firstExample is equal ignoring case to thirdExample. If it, is print out (using the console object) "first and third are the same ignoring case".`,
    question: `// I have imported a java.io.Console for you, it is named console. 
String firstExample = "hello";
String secondExample = "hello";
String thirdExample = "HELLO";
if(firstExample.equals(secondExample)){
  console.printf("first is equal to second");
}`,
    answer: `// I have imported a java.io.Console for you, it is named console. 
String firstExample = "hello";
String secondExample = "hello";
String thirdExample = "HELLO";
if(firstExample.equals(secondExample)){
  console.printf("first is equal to second");
}
if(firstExample.equalsIgnoreCase(thirdExample)){
  console.printf("first and third are the same ignoring case");
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 22,
    questionInstructions: `Prompt the user (using the console object) with the question "Do you understand do while loops?" Store the result in a new String variable named response.`,
    question: `// I have initialized a java.io.Console for you. It is in a variable named console.`,
    answer: `// I have initialized a java.io.Console for you. It is in a variable named console.
String response = console.readLine("Do you understand do while loops?");`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 23,
    questionInstructions: `Now continually prompt the user in a do while loop. The loop should continue running as long as the response is No. Don't forget to declare response outside of the do while loop.`,
    question: `// I have initialized a java.io.Console for you. It is in a variable named console.
String response = console.readLine("Do you understand do while loops?");`,
    answer: `// I have initialized a java.io.Console for you. It is in a variable named console.
String response;
do {
 response = console.readLine("Do you understand do while loops?");
} while (response.equals("No"));`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 24,
    questionInstructions: `Finally, using console.printf print out a formatted string that says "Because you said <response>, you passed the test!"`,
    question: `// I have initialized a java.io.Console for you. It is in a variable named console.
String response;
do {
 response = console.readLine("Do you understand do while loops?");
} while (response.equals("No"));`,
    answer: `// I have initialized a java.io.Console for you. It is in a variable named console.
String response;
do {
 response = console.readLine("Do you understand do while loops?");
} while (response.equals("No"));
console.printf("Because you said %s, you passed the test!",response);`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 25,
    questionInstructions: `Create a new blueprint for Go Karts. Start by declaring a class named GoKart.`,
    question: ``,
    answer: `class GoKart {
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 26,
    questionInstructions: `Great! Now add a field named color of type String that will be used to store the color of the GoKart. Set the value to "red"`,
    question: `class GoKart {
}`,
    answer: `class GoKart {
  String color = "red";
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 27,
    questionInstructions: `Let's make the color field on our GoKart inaccessible to other classes. Add the proper access level modifier to the color field to ensure it's privacy.`,
    question: `class GoKart {
  String color = "red";
}`,
    answer: `class GoKart {
  private String color = "red";
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 28,
    questionInstructions: `Add a public getter method (with a return type String) named "getColor" that exposes the color field.
`,
    question: `class GoKart {
  private String color = "red";
}`,
    answer: `class GoKart {
  private String color = "red";
  public String getColor(){
    return color;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 29,
    questionInstructions: `Let's ensure that all GoKarts created have a color. We'll solve this over a few steps. First, define a public constructor that expects a String argument named color. (Don't worry about adding any code inside the constructor just yet, we'll do that next.)`,
    question: `class GoKart {
  private String color = "red";
    // Your code goes directly below this line
  public String getColor() {
    return color;
  }
  
}
`,
    answer: `class GoKart {
  private String color = "red";
    // Your code goes directly below this line
  public GoKart(String color){
  }
  public String getColor() {
    return color;
  }
  
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 30,
    questionInstructions: `Now in the body of your constructor, set the private field color to the value of the color argument passed into the constructor. (Make sure you are setting the right color*)`,
    question: `class GoKart {
  private String color = "red";
  public GoKart(String color){
    // Your code goes directly below this line
  }
  public String getColor() {
    return color;
  }
}`,
    answer: `class GoKart {
  private String color = "red";
  public GoKart(String color){
    // Your code goes directly below this line
    this.color = color;
  }
  public String getColor() {
    return color;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 31,
    questionInstructions: `Finally, since the color is being set in the constructor now, remove the initialization from the field definition. Just leave it declared, but not initialized to "red".`,
    question: `class GoKart {
  private String color = "red";
  public GoKart(String color){
    this.color = color;
  }
  public String getColor() {
    return color;
  }
}
`,
    answer: `class GoKart {
  private String color;
  public GoKart(String color){
    this.color = color;
  }
  public String getColor() {
    return color;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 32,
    questionInstructions: `Every one of these GoKarts run on rechargeable battery. The battery provides a display that shows how charged it can become. There are a total of 8 bars, and when all bars are lit on the display, the battery is fully charged. Create a constant that stores the maximum number of energy bars that can be filled. Use the proper naming structure for your new constant of "max bars". Ensure that the value is accessible from the class level, and cannot change, and is static. In that order.`,
    question: `class GoKart {
  private String color;
  //Add your code directly below this comment
  
  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

}`,
    answer: `class GoKart {
  private String color;
  //Add your code directly below this comment
  public final static int MAX_BARS = 8;
  
  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 33,
    questionInstructions: `Let's add some state to our GoKart. We'll store the current charge. We'll use the bars displayed on the battery as the way to know the current charge level. Create a new private field named barCount that will track how many bars of energy our GoKart battery currently has.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  //Add your code directly below this comment.

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  //Add your code directly below this comment.
  private int barCount;
  
  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 34,
    questionInstructions: `Now create a method named charge that sets the new barCount field to the maximum amount of bars available for each GoKart.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  
  //Add your code directly below this comment.
  
  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  
  //Add your code directly below this comment.
  public void charge(){
    barCount = MAX_BARS;
  }
  
  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 35,
    questionInstructions: `Let's expose some helpful properties that are computed using the current state. Create a new public method named isBatteryEmpty that returns true if the battery has 0 bars remaining, and false otherwise.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }
  // Write your Code directly below this comment
  
}
`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }
  // Write your Code directly below this comment
    public boolean isBatteryEmpty(){
      return barCount == 0;
    }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 36,
    questionInstructions: `Now let's create a similar method named isFullyCharged that checks to see if the current bar count is at the maximum charge.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }
  
  public boolean isBatteryEmpty(){
    return barCount == 0;
  }
  // Write your Code directly below this comment
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }
  
  public boolean isBatteryEmpty(){
    return barCount == 0;
  }
  // Write your Code directly below this comment
  public boolean isFullyCharged(){
    return barCount == MAX_BARS;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 37,
    questionInstructions: `It's finally time to start allowing our GoKart to drive! Let's keep track of how many laps each kart drives. First, create a new private int field named lapsDriven.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  //Add code directly below this comment
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  //Add code directly below this comment
  private int lapsDriven;
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 38,
    questionInstructions: `Now let's write a simple drive method. It should be public and not return anything. We'll start out basic, calling the drive method will make the GoKart drive a single lap. In your newly created drive method, increment the new lapsDriven variable by 1. Use the incrementing post-fix shorthand to increase lapsDriven.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  private int lapsDriven;
  //Add code directly below this comment
  
}
`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  private int lapsDriven;
  
  //Add code directly below this comment
  public void drive(){
    lapsDriven++;
  }
  
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 39,
    questionInstructions: `Each lap around the track takes exactly 1 energy bar from the battery. For this task, in your drive method, decrement the battery's status that we maintain in the private field barCount.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  private int lapsDriven;
  
  
  public void drive(){
    lapsDriven++;
    //Add code directly below this comment
    
  }
  
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }

  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }
  private int lapsDriven;
  
  
  public void drive(){
    lapsDriven++;
    //Add code directly below this comment
    barCount--;
  }
  
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 40,
    questionInstructions: `Some users of our GoKart class wrote and asked that our drive method accept a parameter to specify how many laps to go, instead of just one. It happens, well hey at least you can practice your addition and subtraction shortcuts. Modify the drive method to define a parameter of how many laps should be driven. Update the method body to handle the new parameter.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive() {
    lapsDriven++;
    barCount--;
  }
}
`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive(int laps) {
    lapsDriven += laps;
    barCount -= laps;
  }
}
`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 41,
    questionInstructions: `Of course, another user of the code just wrote and asked "Where'd that drive method go! I loved that method, can you put it back please?" Sigh...Well thanks to method overloading we can pretty easily bring the method back. Create a new method named drive that accepts no arguments. It should call the newer drive method passing in a 1 for the default.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive(int laps) {
    lapsDriven += laps;
    barCount -= laps;
  }
  //Add code directly below comment
  
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive(int laps) {
    lapsDriven += laps;
    barCount -= laps;
  }
  //Add code directly below comment
  public void drive(){
    drive(1);
  }
  
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 42,
    questionInstructions: `You probably already spotted the error in the drive method that accepts laps. You can drive way more laps than our battery can handle. Let's fix it. Add logic to the drive method so that it throws an IllegalArgumentException with the message ("Too many laps requested.") if the amount of laps is greater than the amount of laps requested. Remember it takes 1 bar of energy to go around a lap.`,
    question: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive() {
    drive(1);
  }

  public void drive(int laps) {
    
    lapsDriven += laps;
    barCount -= laps;
    
  }
}`,
    answer: `class GoKart {
  public static final int MAX_BARS = 8;
  private String color;
  private int barCount;
  private int lapsDriven;

  public GoKart(String color) {
    this.color = color;
  }

  public String getColor() {
    return color;
  }
  public void charge() {
    barCount = MAX_BARS;
  }

  public boolean isBatteryEmpty() {
    return barCount == 0;
  }

  public boolean isFullyCharged() {
    return MAX_BARS == barCount;
  }

  public void drive() {
    drive(1);
  }

  public void drive(int laps) {
    if(laps > barCount){
      throw new IllegalArgumentException("Too many laps requested.");
    }
    lapsDriven += laps;
    barCount -= laps;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 43,
    questionInstructions: `Example.java contains a program using the GoKart class we have been building. Protect the call to kart.drive by handling the IllegalArgumentException (with the name driveError) that is thrown when not enough battery remains. Print out the message "The Error was <Error Message>" from the exception to the screen as you catch the exception.`,
    question: `class Example {

  public static void main(String[] args) {
    GoKart kart = new GoKart("purple");
    if (kart.isBatteryEmpty()) {
      System.out.println("The battery is empty");
    }
    kart.drive(42);
  }

}
`,
    answer: `class Example {

  public static void main(String[] args) {
    GoKart kart = new GoKart("purple");
    if (kart.isBatteryEmpty()) {
      System.out.println("The battery is empty");
    }
    try {
      kart.drive(42);
    } catch(IllegalArgumentException driveError){
      System.out.printf("The Error was %s", driveError.getMessage());
    }
  }

}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 44,
    questionInstructions: `Making this Hangman game inspired me to try to write one of my favorite board games, Scrabble. Can you help me using the skills you've learned from the course thus far? I've modeled a ScrabblePlayer and decided to store their tiles in a String
For this first task, modify the addTile method so that it appends the tile that was passed in, to the player's tiles. Practice using the += shortcut method for string concatenation.`,
    question: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    // TODO: Add the tile to tiles

  }

  public boolean hasTile(char tile) {
    // TODO: Determine if user has the tile passed in
    return false;
  }

}
`,
    answer: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    // TODO: Add the tile to tiles
    tiles += tile;
  }

  public boolean hasTile(char tile) {
    // TODO: Determine if user has the tile passed in
    return false;
  }

}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 45,
    questionInstructions: `Okay great, now can you fix the hasTile method for me, right now it always returns false.
Correct the existing hasTile method to return true if the tile is in the tiles field, and false if it isn't. You can solve this a few ways, however, I'd like you to practice returning the result of the expression that uses the index of a char in a String.`,
    question: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    // TODO: Add the tile to tiles
    tiles += tile;
  }

  public boolean hasTile(char tile) {
    // TODO: Determine if user has the tile passed in
    return false;
  }

}
`,
    answer: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    // TODO: Add the tile to tiles
    tiles += tile;
  }

  public boolean hasTile(char tile) {
    // TODO: Determine if user has the tile passed in
    return (tiles.indexOf(tile) != -1);
  }

}
`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 46,
    questionInstructions: `I've created a tool to help manage lines at tech conferences. The organizers would like to split the attendees into two lines during the registration process. I've added notes, examples and a new lesson in the Example.java tab.


Fix the getLineNumberFor method to return a 1 if the first character of lastName is between A and M or else return 2 if it is between N and Z.`,
    question: `public class ConferenceRegistrationAssistant {

  /**
   * Assists in guiding people to the proper line based on their last name.
   *
   * @param lastName The person's last name
   * @return The line number based on the first letter of lastName
   */
  public int getLineNumberFor(String lastName) {
    int lineNumber = 0;
    /*
      lineNumber should be set based on the first character of the person's last name
      Line 1 - A thru M
      Line 2 - N thru Z

     */
    return lineNumber;
  }

}
`,
    answer: `public class ConferenceRegistrationAssistant {

  /**
   * Assists in guiding people to the proper line based on their last name.
   *
   * @param lastName The person's last name
   * @return The line number based on the first letter of lastName
   */
  public int getLineNumberFor(String lastName) {
    int lineNumber = 0;
    /*
      lineNumber should be set based on the first character of the person's last name
      Line 1 - A thru M
      Line 2 - N thru Z

     */
    if (lastName.charAt(0) <= 'M'){
      return lineNumber = 1;
    } else {
      return lineNumber = 2;
    }
  }

}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 47,
    questionInstructions: `Okay, so I need to count how many occurrences of a a specific letter is in the player's tiles. Let's build that over a couple of steps. I've added some example use cases in Example.java. Create a new method named getCountOfLetter that returns an int, and requires a parameter of type char named letter. For this task, just make it return 0.`,
    question: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    tiles += tile;
  }

  public boolean hasTile(char tile) {
    return tiles.indexOf(tile) != -1;
  }
  
  
}
`,
    answer: `public class ScrabblePlayer {
  // A String representing all of the tiles that this player has
  private String tiles;

  public ScrabblePlayer() {
    tiles = "";
  }

  public String getTiles() {
    return tiles;
  }

  public void addTile(char tile) {
    tiles += tile;
  }

  public boolean hasTile(char tile) {
    return tiles.indexOf(tile) != -1;
  }
  
  public int getCountOfLetter(char letter){
    return 0;
  }
}
`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 48,
    questionInstructions: `Oooh with the new skills we can build a little Twitter like app. I've created a new tweet class, let's write the 140 characters story.


Add a new constant that defines the max chars allowed and set it 140. Use proper case for constants. Ensure it is accessible off the class, static, and that it cannot be changed.`,
    question: `public class Tweet {
  //Add Code Directly Below this comment
  
  private String text;

  public Tweet(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}`,
    answer: `public class Tweet {
  //Add Code Directly Below this comment
  public static final int MAX_CHARS = 140;
  private String text;

  public Tweet(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 49,
    questionInstructions: `Let's let them know how many characters they have left to use...so they can jam them full of hashtags #jklol


Create a public method named getRemainingCharacterCount that returns an int representing how many characters they have left before they 140. Base your calculation on the field that stores the current text.`,
    question: `public class Tweet {
  //Add Code Directly Below this comment
  public static final int MAX_CHARS = 140;
  private String text;

  public Tweet(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}`,
    answer: `public class Tweet {
  //Add Code Directly Below this comment
  public static final int MAX_CHARS = 140;
  private String text;

  public Tweet(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
  public int getRemainingCharacterCount(){
    return MAX_CHARS - text.length();
  }
}`,
    timeCorrect: 0,
    questionLanguage: 'java'
}, {
    questionNum: 50,
    questionInstructions: ``,
    question: ``,
    answer: ``,
    timeCorrect: 0,
    questionLanguage: 'java'
}, ]



//Sample question to copy and paste
//{
//    questionNum: 73,
//    questionInstructions: ``,
//    question: ``,
//    answer: ``,
//    timeCorrect: 0,
//   questionLanguage: ''
//},


var QuestionsSQL = [{
    questionNum: 1,
    questionInstructions: `In this code challenge you have an eCommerce database full of tables that you might expect to see in a real database.
Write a SQL query to answer the following question. What are all the products in the "products" table?
`,
    question: ``,
    answer: `SELECT * FROM products;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 2,
    questionInstructions: `Write the SQL to retrieve all customer information from the 'users' table.
`,
    question: ``,
    answer: `SELECT * FROM users;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 3,
    questionInstructions: `Select all addresses from the 'customer_addresses' table.`,
    question: ``,
    answer: `SELECT * FROM customer_addresses;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 4,
    questionInstructions: `We're using a different database now. Did you know mobile phones have databases? Find all the contacts in this smartphone database. All the contacts are in a table called 'phone_book'.`,
    question: ``,
    answer: `SELECT * FROM phone_book;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 5,
    questionInstructions: `In the Yorkshire Division Four in Rugby, the team Hessle RUFC have a website that shows their latest matches. Their database holds a 'results' table that stores their latest wins and losses. Why not have a look at their latest results yourself!?`,
    question: ``,
    answer: `SELECT * FROM results;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 6,
    questionInstructions: `Here are the columns in a 'users' table in an e-commerce site: 'id', 'username', 'password', 'first_name', 'last_name'.
Run a SQL query to get the two columns you'd need to generate the full names of each customer.`,
    question: ``,
    answer: `SELECT first_name, last_name FROM users;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 7,
    questionInstructions: `We're still in the e-commerce database. This time, from the 'products' table, get the 'name' of every product.`,
    question: ``,
    answer: `SELECT name FROM products;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 8,
    questionInstructions: `In the e-commerce database there's a 'customer_addresses' table with the following columns: 'id', 'nickname', 'street', 'city', 'state', 'zip', 'user_id'. Select all the columns that are to do with the address (in an address format). For example, all columns except 'id', 'nickname' and 'user_id'.`,
    question: ``,
    answer: `SELECT street, city, state, zip FROM customer_addresses;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 9,
    questionInstructions: `We're using a database on a smartphone again. We have a 'phone_book' table. In here there's an 'id', 'first_name', 'last_name' and 'phone'. As the user types the phone number in we want to show possible autocomplete values. Bring back only the 'phone' numbers of each contact only. Our smartphone can work out which of the results to show.`,
    question: ``,
    answer: `SELECT phone FROM phone_book;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 10,
    questionInstructions: `We're still using the 'phone_book' table. Remember it has the columns of 'id', 'first_name', 'last_name' and 'phone'.
Imagine a user is typing someone's last name in a search facility on the phone. As the user types, suggestions will appear on the screen. Bring back both the first name and last name for every person in the phone book. The phone will filter the appropriate suggestions.`,
    question: ``,
    answer: `SELECT first_name, last_name FROM phone_book;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 11,
    questionInstructions: `We're back in our e-commerce database. There's a 'products' table with the columns 'id', 'name', 'description' and 'price'.
Can you retrieve both the 'name' and 'description' aliased as "Product Name" and "Product Description".`,
    question: ``,
    answer: `SELECT name AS "Product Name", description AS "Product Description" FROM products;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 12,
    questionInstructions: `In the 'users' table we have columns of 'id', 'username', 'password', 'first_name' and 'last_name'.
Select the username and the first and last names and alias them as "Username", "First Name" and "Last Name".`,
    question: ``,
    answer: `SELECT username AS Username, first_name AS "First Name", last_name AS "Last Name" FROM users;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 13,
    questionInstructions: `We're now back with the smartphone database. In the 'phone_book' we have the columns 'id', 'first_name', 'last_name' and 'phone'. Alias the first and last names and phone as "First Name", "Last Name" and "Phone Number".`,
    question: ``,
    answer: `SELECT first_name AS "First Name", last_name AS "Last Name", phone AS "Phone Number" FROM phone_book;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 14,
    questionInstructions: `In this sports team database there's a 'results' table with the columns of 'id', 'home_team', 'home_score', 'away_team', 'away_score' and 'played_on'.
Alias "Home Team", "Home Score", "Away Team", "Away Score" and "Date Played" to the appropriate columns.`,
    question: ``,
    answer: `SELECT home_team AS "Home Team", home_score AS "Home Score", away_team AS "Away Team", away_score AS "Away Score", played_on AS "Date Played" FROM results;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 15,
    questionInstructions: `In our e-commerce database we have a 'users' table with the columns 'id', 'username', 'password', 'first_name' and 'last_name'.
Write a SQL query that retrieves the first and last names only where the username is equal to "wig_lady".`,
    question: ``,
    answer: `SELECT first_name, last_name FROM users WHERE username = "wig_lady";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 16,
    questionInstructions: `In the 'products' table we have the columns 'id', 'name', 'description' and 'price'.
Find all products that don't have the price of 9.99. Include all columns.`,
    question: ``,
    answer: `SELECT * FROM products WHERE price != 9.99;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 17,
    questionInstructions: `From the 'users' table, find all the 'username' fields with the 'last_name' of "Pflegbaar". Only return the usernames.`,
    question: ``,
    answer: `SELECT username FROM users WHERE last_name = "Pfleghaar";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 18,
    questionInstructions: `We have a database that runs a sports team's website. In the 'results' table we have the columns 'id', 'home_team', 'home_score', 'away_team', 'away_score', 'played_on'. Find all results where the home team's score is above 12.`,
    question: ``,
    answer: `SELECT * FROM results WHERE home_score > 12;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 19,
    questionInstructions: `We're still using the sports team's database. In the 'results' table we have the columns 'id', 'home_team', 'home_score', 'away_team', 'away_score', 'played_on'. Find all results where the away team's score is lower than 10.`,
    question: ``,
    answer: `SELECT * FROM results WHERE away_score < 10;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 20,
    questionInstructions: `We're back using the e-commerce database. I only have 10.99 left in my bank account. Write a query that will return all products from the 'products' table that I can afford. The columns in the 'products' are 'id', 'name', 'description' and 'price'.
`,
    question: ``,
    answer: `SELECT * FROM products WHERE price <= 10.99;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 21,
    questionInstructions: `We're back in the sports team database. There's a 'results' table with the columns 'id', 'home_team', 'home_score', 'away_team', 'away_score' and 'played_on'. Find all the matches in the 'results' table where "Hessle" was playing away as the away team and their score was above 18 points.`,
    question: ``,
    answer: `SELECT * FROM results WHERE away_team = "Hessle" AND away_score > 18;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 22,
    questionInstructions: `Now we're in the e-commerce database. In the 'users' table we have the columns 'id', 'username', 'password', 'first_name' and 'last_name'. Find all users with either the last name "Hinkley" or "Pettit"`,
    question: ``,
    answer: `SELECT * FROM users WHERE last_name = "Hinkley" OR last_name = "Pettit";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 23,
    questionInstructions: `We're back in the sports team database. There's a 'results' table with the columns 'id', 'home_team', 'home_score', 'away_team', 'away_score' and 'played_on'. Find all the matches in the 'results' table where "Hessle" was playing away as the away team and if they played on or after October 1st 2015. Date format is "YYYY-MM-DD".`,
    question: ``,
    answer: `SELECT * FROM results WHERE away_team = "Hessle" AND played_on >= "2015-10-01";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 24,
    questionInstructions: `We have an e-commerce database. Inside the 'products' table we have the columns of 'id', 'name', 'description' and 'price'. Without using the OR keyword, find all products with the price of 7.99, 9.99 or 11.99.`,
    question: ``,
    answer: `SELECT * FROM products WHERE price IN (7.99, 9.99, 11.99);`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 25,
    questionInstructions: `We have an e-commerce database. Inside the 'users' table we have the columns of 'id', 'username', 'password', 'first_name' and 'last_name'. Without using the OR keyword, find all the users with the username of "2spooky4me" or "beard_man".`,
    question: ``,
    answer: `SELECT * FROM users WHERE username IN ("2spooky4me", "beard_man");`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 26,
    questionInstructions: `In the e-commerce database we have the 'products' table with the columns 'id', 'name', 'description' and 'price'. Find all the products in the database with the price including and between 10.99 and 12.99.`,
    question: ``,
    answer: `SELECT * FROM products WHERE price BETWEEN 10.99 AND 12.99;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 27,
    questionInstructions: `We're back in our sports team database with the 'results' table. The columns are 'id', 'home_team', 'home_score', 'away_team', 'away_score' and 'played_on'. There are 30 days in September. Find all the games played in the 'results' table in September 2015.(YYYY-MM-DD)`,
    question: ``,
    answer: `SELECT * FROM results WHERE played_on BETWEEN "2015-09-01" AND "2015-09-30";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 28,
    questionInstructions: `In the e-commerce database we have a 'products' table. The columns are 'id', 'name', 'description' and 'price'. Find all the products where the pattern 't-shirt' can be found anywhere in the product name.`,
    question: ``,
    answer: `SELECT * FROM products WHERE name LIKE "%t-shirt%";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 29,
    questionInstructions: `In the 'users' table we have the columns 'id', 'username', 'password', 'first_name' and 'last_name'. Find all users with the first name starting with the letter "L".`,
    question: ``,
    answer: `SELECT * FROM users WHERE first_name LIKE "L%";`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 30,
    questionInstructions: `We're back on the smartphone, but our 'phone_book' is a mess. There's a 'phone_book' table but there's missing information in a couple of the columns. The 'phone_book' has the following columns 'id', 'first_name', 'last_name' and 'phone'. Find all contacts in the 'phone_book' where the phone number is missing so we can go and ask them for their number.`,
    question: ``,
    answer: `SELECT * FROM phone_book WHERE phone IS NULL;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 31,
    questionInstructions: `We're still using the 'phone_book', with the columns 'id', 'first_name', 'last_name' and 'phone'.
Imagine we're implementing the autocomplete feature for a search facility on the phone where a user can start typing a last name and suggestions will appear. Write a query to retrieve all values from the last name column where the last name value is present. Only retrieve the 'last_name' column.
`,
    question: ``,
    answer: `SELECT last_name FROM phone_book WHERE last_name IS NOT NULL;`,
    timeCorrect: 0,
    questionLanguage: 'sql'
}, {
    questionNum: 32,
    questionInstructions: ``,
    question: ``,
    answer: ``,
    timeCorrect: 0,
    questionLanguage: 'sql',
    address: {
        city: "",
        state: "",
    }
}, ]
