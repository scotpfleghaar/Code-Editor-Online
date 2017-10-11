// Copyright Scot Pfleghaar 2017
//IIFE to protect code
(function () {
    // The question bank:
    if (localStorage.questions) {
        var items = localStorage.questions
        var question = JSON.parse(items);
        console.log(question)
    } else {
        var question = questionSet2;
        console.log(question)
    }
    //    var question = questionSet2;
    //    console.log(question)

    //Randomize (Fisher-Yates Shuffle) array for development
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    //shuffle(question); // Uncomment this for random.

    var Current = 0;
    var index = 0;

    /////////////////////Setting the stage
    //Custom Functions
    function trimmer(value) {
        value = value.replace(/\s/g, '');
        value = value.replace(/[\t\n]+/g, '');
        value = value.replace(/(\r\n|\n|\r)/gm, '');
        value = value.replace(/'/g, '"');
        return value;
    }
    // Next array item
    function nextItem() {
        if (Current == question.length - 1)
            Current = 0;
        else
            Current++;
        console.log(Current);
        return question[Current];
    }

    ////////////////////////////ace.js dependencies
    var editor = ace.edit("editor");

    // Keeps track of total questions
    $('.totalQuestions').text('Total Number of Questions: ' + question.length);



    //Keeps track of each question attempts
    var attemptNumber = 0;

    /////////////////////// Here is where the content becomes dynamic
    function loadQuestion(index) {

        // Display the question index
        var currentInstruction = question[index].questionInstructions;
        var currentQuestion = question[index].question;
        var currentAnswer = question[index].answer;
        var timeCorrect = question[index].timeCorrect;
        var questionNumber = question[index].questionNum;
        var questionCodeLanguage = question[index].questionLanguage; // Controls weather to beautfy file or not.

        var totalCorrect = 0;

        function countCorrect() {
            for (var i = 0; i < question.length; i++) {
                if (question[i].timeCorrect > 0) {
                    totalCorrect += 1;
                    console.log('checking');
                }
            }
            return totalCorrect;
        }
        countCorrect();
        $('.correctNum').text('Total Correct: ' + totalCorrect);

        // Update Number of Correct


        //////////////ACE
        editor.session.setMode(`ace/mode/${questionCodeLanguage}`);
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


        var editor2 = ace.edit("editor2");

        editor2.session.setMode(`ace/mode/${questionCodeLanguage}`);

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
        /////////END ACE



        //Ensures that the question is formated correct to compare against
        var currentInstruction = $.trim(currentInstruction);
        //var currentQuestion = trimmer(currentQuestion); //Don't uncomment this it messes up the format of the code;
        var currentAnswer = trimmer(currentAnswer);

        // Sort Elements by timeCorrect (puts incorrect answers to the top)
        if (index === 6) {
            console.log('Sorting Incorrect Answers');
            question.sort(function (a, b) {
                if (a.timeCorrect < b.timeCorrect) return -1;
                if (a.timeCorrect > b.timeCorrect) return 1;
                return 0;
            });
        }

        //Set the value of the html to the values of the object.
        $('.instructions').text("Number " + questionNumber + ': ' + currentInstruction);

        //Add the questions to the editor
        editor.insert(currentQuestion);

        $('.result').text('');
        $('.next').css('display', 'none');
        $('.submit').css('display', 'none');

        if (questionCodeLanguage === 'javascript') {
            beatify();
            beatify2();
        }

        //Tests the contents of the editor against the answer
        $('.test').off('click').on('click', function () { ////////NOTE: unbinding is a major issue I do not understand here.

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
                    if (questionCodeLanguage === 'javascript') {
                        beatify2();
                    }
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
        $('.next').on('click', function () {
            //Resets the editor and values for next question
            editor.setValue("");
            editor2.setValue("");
            index += 1;
            attemptNumber = 0;
            $('.test').show();
            $('#editor').css('border', '');

            //Every 7 questions move the index to zero (to review missed answers)
            if (index <= 7) {
                loadQuestion(index);
            } else {
                console.log('Reseting Index');
                index = 0;
                loadQuestion(index);
            }


            // Allows the question array to be saved so that later we can 
            // come back and load questions saved to continue where we left off.
            var questionSaved = question;
            localStorage.clear();
            localStorage.questions = JSON.stringify(questionSaved);

        });
    }
    //Initial loading of the first question
    loadQuestion(index);

    //initiate next questions and reset some elements
    //    $('.next').on('click', function () {
    //        //Resets the editor and values for next question
    //        editor.setValue("");
    //        editor2.setValue("");
    //        index += 1;
    //        attemptNumber = 0;
    //        $('.test').show();
    //        $('#editor').css('border', '');
    //
    //        //Every 7 questions move the index to zero (to review missed answers)
    //        if (index <= 7) {
    //            loadQuestion(index);
    //        } else {
    //            console.log('Reseting Index');
    //            index = 0;
    //            loadQuestion(index);
    //        }
    //
    //        // beatify();
    //
    //
    //        //Allows the question array to be saved so that later we can 
    //        // come back and load questions saved to continue where we left off.
    //        // question = questionSaved;
    //        // console.log(questionSaved);
    //    });


})();
