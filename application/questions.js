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
  name = '';
}`,
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
    questionInstructions: ``,
    question: ``,
    answer: ``,
    timeCorrect: 0,
    questionLanguage: ''
}, {
    questionNum: 19,
    questionInstructions: ``,
    question: ``,
    answer: ``,
    timeCorrect: 0,
    questionLanguage: ''
}, {
    questionNum: 20,
    questionInstructions: ``,
    question: ``,
    answer: ``,
    timeCorrect: 0,
    questionLanguage: ''
}];




//Sample question to copy and paste
//{
//    questionNum: 73,
//    questionInstructions: ``,
//    question: ``,
//    answer: ``,
//    timeCorrect: 0,
//   questionLanguage: ''
//},
