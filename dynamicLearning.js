// Copyright Scot Pfleghaar 2017
var question = [{
    questionNum: 1,
    questionInstructions: `Where does the $.ajax go?`,
    question: `$("button").click(function(){$.ajax({url: "demo_test.txt", success: function(result){$("#div1").html(result);}});});`,
    answer: `$("button").click(function(){$.ajax({url: "demo_test.txt", success: function(result){$("#div1").html(result);}});});`,
    timeCorrect: 0
}, {
    questionNum: 1,
    questionInstructions: `Where does the $.get go?`,
    question: `$("button").click(function(){ ("demo_test.asp", function(data, status){  alert("Data: " + data + "\nStatus: " + status); });});`,
    answer: `$("button").click(function(){ $.get("demo_test.asp", function(data, status){  alert("Data: " + data + "\nStatus: " + status); });});`,
    timeCorrect: 0
}, {
    questionNum: 1,
    questionInstructions: `Where does the $.post go?`,
    question: `$("button").click(function(){("demo_test.asp", function(data, status){alert("Data: " + data + "\nStatus: " + status);});});`,
    answer: `$("button").click(function(){$.post("demo_test.asp", function(data, status){alert("Data: " + data + "\nStatus: " + status);});});`,
    timeCorrect: 0
}, {
    questionNum: 1,
    questionInstructions: `Load the content of the file "demo_test.txt" into a specific <div> element:`,
    question: `$("button").click(function(){});`,
    answer: `$("button").click(function(){$("#div1").load("demo_test.txt");});`,
    timeCorrect: 0
}, {
    questionNum: 1,
    questionInstructions: `Output the result of serialized form values:`,
    question: `$("button").click(function(){$("div").text($("form"));});`,
    answer: `$("button").click(function(){$("div").text($("form").serialize());});`,
    timeCorrect: 0
}]

//Custom Functions
function trimmer(value) {
    value = value.replace(/\s/g, '');
    value = value.replace(/[\t\n]+/g, '')
    value = value.replace(/(\r\n|\n|\r)/gm, '')
    return value;
}

// Display the first question
var instructions = question[0].questionInstructions
var questions = question[0].question
var answers = question[0].answer

var instructions = trimmer(instructions);
var questions = trimmer(questions);
var answers = trimmer(answers);


console.log(instructions);
console.log(questions);
console.log(answers);

//Set the value of the html to the values of the object.

$('.instructions').text(instructions);
$('#editor').text(questions);



$('.test').on('click', function () {
    var attempt = $('.ace_content').text();
    var attempt = trimmer(attempt);



    console.log(attempt);
    if (attempt === answers) {
        console.log('Correct!');
    } else {
        console.log('Not Correct');
    }
})
