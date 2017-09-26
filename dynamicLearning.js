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
    //editor2.setTheme("ace/theme/twilight");
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
        var currentQuestion = trimmer(currentQuestion);
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
            var attempt = $('#editor .ace_content').text();
            //Ensuring the attempt will be removed of formating 
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

                //Adds the corrected amount to the question object
                question[index].timeCorrect = question[index].timeCorrect + 1;
                $('.test').hide();
                $('.submit').css('display', 'none');

            } else {
                console.log('Not Correct');
                //Change result color and text based on result
                $('.result').css('background-color', '#ff8566');
                $('.result').text('incorrect, give it one more attempt');
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
                    $('.result').text('incorrect, below is the correct answer');
                    editor2.insert(question[index].answer);
                    beatify2();
                    $('.submit').css('display', 'inline');
                    $('.test').hide();

                    // When the submit button is clicked, evauluate the answer without decrementing timeCorrect
                    $('.submit').on('click', function () {
                        $('.result').text('');
                        //Getting the content from ace box
                        var attempt = $('#editor .ace_content').text();
                        var attempt = trimmer(attempt);
                        console.log(attempt);

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

    });

})()
