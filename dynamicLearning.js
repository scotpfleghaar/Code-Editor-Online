// Copyright Scot Pfleghaar 2017
//IIFE to protect code
(function () {


    var question = [{
        questionNum: 1,
        questionInstructions: `Select all elements inside the document: (Use Double Quotes)`,
        question: ``,
        answer: `$("*");`,
        timeCorrect: 0
        }, {
        questionNum: 2,
        questionInstructions: `Select the element with the id "intro": (Use Double Quotes)`,
        question: ``,
        answer: `$("#intro");`,
        timeCorrect: 0
        }, {
        questionNum: 3,
        questionInstructions: `Select all elements with class "intro": (Use Double Quotes)`,
        question: ``,
        answer: `$(".intro");`,
        timeCorrect: 0
        }, {
        questionNum: 4,
        questionInstructions: `Select all elements with class "intro", "demo" or "end": (Use Double Quotes)`,
        question: ``,
        answer: `$(".intro, .demo, .end");`,
        timeCorrect: 0
        }, {
        questionNum: 5,
        questionInstructions: `Select all <p> elements: (Use Double Quotes)`,
        question: ``,
        answer: `$("p");`,
        timeCorrect: 0
        }, {
        questionNum: 6,
        questionInstructions: `Select the first <p> element: (Use Double Quotes)`,
        question: ``,
        answer: `$("p:first");`,
        timeCorrect: 0
        }, {
        questionNum: 7,
        questionInstructions: `Select the last <p> element: (Use Double Quotes)`,
        question: ``,
        answer: `$("p:last");`,
        timeCorrect: 0
        }, {
        questionNum: 8,
        questionInstructions: `Select every other (even) <tr> element: (Use Double Quotes)`,
        question: ``,
        answer: `$("tr:even");`,
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

    // Appears to only work with php
    // var beautify = ace.require("ace/ext/beautify"); // get reference to extension
    // beautify.beautify(editor.session);
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
    $('.test').on('click', function () {
        beatify();
    })

    var editor2 = ace.edit("editor2");
    //editor2.setTheme("ace/theme/twilight");
    editor2.session.setMode("ace/mode/javascript");

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
    $('.test').on('click', function () {
        beatify2();
    })

    var attemptNumber = 0;
    console.log('attemptNumber: ' + attemptNumber);

    /////////////////////// Here is where the content becomes dynamic
    function loadQuestion(index) {
        console.log("Inside loadQuestion attemptNumber:" + attemptNumber);
        // Display the first question
        var currentInstruction = question[index].questionInstructions
        var currentQuestion = question[index].question
        var currentAnswer = question[index].answer
        var timeCorrect = question[index].timeCorrect

        var currentInstruction = $.trim(currentInstruction);
        var currentQuestion = trimmer(currentQuestion);
        var currentAnswer = trimmer(currentAnswer);

        // Sort Elements by timeCorrect
        if (index === 6) {
            console.log('Sorting Incorrect Answers')
            question.sort(function (a, b) {
                if (a.timeCorrect < b.timeCorrect) return -1;
                if (a.timeCorrect > b.timeCorrect) return 1;
                return 0;
            });
        }


        console.log(currentInstruction);
        console.log(currentQuestion);
        console.log(currentAnswer);


        //Set the value of the html to the values of the object.
        $('.instructions').text(currentInstruction);
        editor.insert(currentQuestion);
        $('.result').text('');
        $('.next').css('display', 'none');
        $('.submit').css('display', 'none');
        $('.test').unbind('click').on('click', function () { ////////NOTE: unbinding is a major issue I do not understand here.
            //Reset Border
            $('.result').text('');
            //Getting the content from ace box
            var attempt = $('#editor .ace_content').text();
            var attempt = trimmer(attempt);
            console.log(attempt);
            editor2.setValue("");




            //Doing check
            if (attempt === currentAnswer) {
                console.log('Correct!');
                //Change result color and text based on result
                $('.result').css('background-color', 'green');
                $('#editor').css('border', 'solid 2px green');
                $('.result').text('Correct!');
                $('.next').css('display', 'inline');
                question[index].timeCorrect = question[index].timeCorrect + 1;
                $('.test').hide();
                $('.submit').css('display', 'none');

            } else {
                console.log('Not Correct');
                //Change result color and text based on result
                $('.result').css('background-color', '#ff8566');
                $('.result').text('incorrect, give it one more attempt');
                $('#editor').css('border', 'solid 2px #ff8566');
                question[index].timeCorrect = question[index].timeCorrect - 1;
                console.log(question[index].timeCorrect)
                attemptNumber += 1;
                console.log("Inside attemptNumber:" + attemptNumber);
                if (attemptNumber > 1) {
                    $('.result').css('background-color', '#80dfff');
                    $('#editor').css('border', 'solid 2px #80dfff');
                    $('.result').text('incorrect, below is the correct answer');
                    editor2.insert(question[index].answer);
                    beatify2();
                    $('.submit').css('display', 'inline');
                    $('.test').hide();
                    $('.submit').on('click', function () {
                        $('.result').text('');
                        //Getting the content from ace box
                        var attempt = $('#editor .ace_content').text();
                        var attempt = trimmer(attempt);
                        console.log(attempt);
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
    loadQuestion(index)
    $('.next').on('click', function () {
        editor.setValue("")
        editor2.setValue("");
        index += 1;
        console.log(index);
        attemptNumber = 0;
        $('.test').show();
        $('#editor').css('border', '');


        if (index <= 6) {
            loadQuestion(index)
        } else {
            console.log('Reseting Index')
            index = 0;
            loadQuestion(index)
        }
        beatify();

    });

})()
