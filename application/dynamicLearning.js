// Copyright Scot Pfleghaar 2017
//IIFE to protect code
(function () {
    // Global Variables:
    var Current = 0,
        index = 0,
        attemptNumber = 0; //Keeps track of each question attempts

    // The question bank:
    const qBank = frontEndDevelopment; // Pulls in question bank
    var question = qBank;
    $('.resetBank').on('click', function () {
        localStorage.clear();
        var question = question;
        window.location.reload();
    });
    if (localStorage.questions) {
        var items = localStorage.questions;
        question = JSON.parse(items);
        console.log('Sorting Answers from Json');
        question.sort(function (a, b) {
            if (a.timeCorrect > b.timeCorrect) {
                return 1;
            } else if (a.timeCorrect < b.timeCorrect) {
                return -1;
            }

            // Else go to the 2nd item
            if (a.questionNum < b.questionNum) {
                return -1;
            } else if (a.questionNum > b.questionNum) {
                return 1;
            } else {
                return 0;
            }
        });

    } else {
        question = qBank;

    }

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
    // shuffle(question); // Uncomment this for random.

    //Custom Functions
    function trimmer(value) {
        if (value != undefined) {
            value = value.replace(/\s/g, '');
            value = value.replace(/[\t\n]+/g, '');
            value = value.replace(/(\r\n|\n|\r)/gm, '');
            value = value.replace(/'/g, '"');
            value = value.replace(/;/g, ''); // Giving Grace on Semi-colons
            return value;
        }
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
    var editor = ace.edit("editor"),
        editor2 = ace.edit("editor2");

    //Turns of errors and helpers
    editor.session.setOption("useWorker", false);
    editor2.session.setOption("useWorker", false);


    // Keeps track of total questions in html
    $('.totalQuestions').text('Total Number of Questions: ' + question.length);

    /////////////////////// Here is where the content becomes dynamic
    function loadQuestion(index) {


        // Load Question Variables
        var currentInstruction = question[index].questionInstructions,
            currentQuestion = question[index].question,
            currentAnswer = question[index].answer,
            currentAnswer2 = question[index].answer,
            timeCorrect = question[index].timeCorrect,
            questionNumber = question[index].questionNum,
            questionCodeLanguage = question[index].questionLanguage, // Controls weather to beautfy file or not.
            totalCorrect = 0;


        if (currentAnswer == "") {
            currentAnswer = undefined;
        }

        //Multiple Choice set up
        $('.choices').empty();

        var currentMCexplination = question[index].explination;
        var currentMCquestions = question[index].questions;



        $('.speech').off('click').on('click', function () {
            var msg = new SpeechSynthesisUtterance(currentMCexplination);
            window.speechSynthesis.speak(msg);
        });
        $('.instructions').off('click').on('click', function () {
            var msg = new SpeechSynthesisUtterance(currentInstruction);
            window.speechSynthesis.speak(msg);
        });



        //Multiple Choice set up and deploy

        var currentMCanswer1 = question[index].answer1;
        var currentMCanswer2 = question[index].answer2;
        var currentMCquestion1 = question[index].choice1;
        var currentMCquestion2 = question[index].choice2;
        var currentMCquestion3 = question[index].choice3;
        var currentMCquestion4 = question[index].choice4;
        var currentMCquestion5 = question[index].choice5;

        function multipleChoiceSetUp(currentMc) {
            if (currentMc.length > 0) {
                $('.choices').append('<li class="choice list-group-item">' + currentMc + '</li>');
            }
        }

        multipleChoiceSetUp(currentMCquestion1);
        multipleChoiceSetUp(currentMCquestion2);
        multipleChoiceSetUp(currentMCquestion3);
        multipleChoiceSetUp(currentMCquestion4);
        multipleChoiceSetUp(currentMCquestion5);
        multipleChoiceSetUp(currentMCanswer1);
        multipleChoiceSetUp(currentMCanswer2);

        $(".choice").on("click", function () {
            $(this).toggleClass("selectedChoice");
        });

        var isMCCorrect = false;
        if (currentMCquestions == "") {
            currentMCquestions = undefined;
        }


        //Random rearrange:

        /*
         * Shuffle jQuery array of elements - see Fisher-Yates algorithm
         */
        jQuery.fn.shuffle = function () {
            var j;
            for (var i = 0; i < this.length; i++) {
                j = Math.floor(Math.random() * this.length);
                $(this[i]).before($(this[j]));
            }
            return this;
        };
        $('.choice').shuffle();


        $('.explination').text("");
        $('.explination').hide();




        //Updating html to reflect the language working in the ace.js editor
        $('.programmingLanguage').text('Current Programming Language/Framework: ' + questionCodeLanguage);

        // Tracks the total correct questions
        function countCorrect() {
            for (var i = 0; i < question.length; i++) {
                if (question[i].timeCorrect > 0) {
                    totalCorrect += 1;

                }
            }
            return totalCorrect;
        }
        countCorrect();
        $('.correctNum').text('Total Correct: ' + totalCorrect);
        var percentCompletedNow = (Math.round((totalCorrect / question.length) * 100));
        $('.progress-bar').width(percentCompletedNow + "%");
        $('.percentCompleted').text(percentCompletedNow + '% Completed');

        // Setting up the Ace environment each time the question loads
        function aceBeautify(editorNumber) {
            var val = editorNumber.session.getValue();
            //Remove leading spaces
            var array = val.split(/\n/);
            array[0] = array[0].trim();
            val = array.join("\n");
            //Actual beautify (prettify) 
            val = js_beautify(val);
            //Change current text to formatted text
            editorNumber.session.setValue(val);
        }

        editor.session.setMode(`ace/mode/${questionCodeLanguage}`);
        //This function beautifys the code in the editor 
        function beatify() {
            aceBeautify(editor);
        }
        editor2.session.setMode(`ace/mode/${questionCodeLanguage}`);
        //This function beautifys the code in the editor 
        function beatify2() {
            aceBeautify(editor2);
        }

        //Hide editors
        $("#editor2").hide();

        //Ensures that the question is formated correct to compare against
        var currentInstruction = $.trim(currentInstruction);
        //var currentQuestion = trimmer(currentQuestion); //Don't uncomment this it messes up the format of the code;
        var currentAnswer = trimmer(currentAnswer);

        // Sort Elements by timeCorrect (puts incorrect answers to the top)
        console.log("Index before the sort: " + index);
        if (index === 7) {
            question.sort(function (a, b) {
                if (a.timeCorrect > b.timeCorrect) {
                    return 1;
                } else if (a.timeCorrect < b.timeCorrect) {
                    return -1;
                }

                // Else go to the 2nd item
                if (a.questionNum < b.questionNum) {
                    return -1;
                } else if (a.questionNum > b.questionNum) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }

        //Set the value of the html to the values of the object.
        $('.instructions').text("Number " + questionNumber + ': ' + currentInstruction);

        //Add the questions to the editor
        editor.insert(currentQuestion);


        $("#editor").show();


        $("iframe").attr("srcdoc", " ");
        var code1 = editor.getValue();

        editor.session.on('change', function () {
            code1 = editor.getValue();
            $("iframe").attr("srcdoc", code1);
        });

        //Inset code into iframe;
        $("iframe").attr("srcdoc", code1);

        if (code1.length < 1) {
            $("#editor").hide();
        }

        $('.result').text('');
        $('.next').css('display', 'none');
        $('.submit').css('display', 'none');

        if (questionCodeLanguage === 'javascript') {
            beatify();
            beatify2();
        }

        //Tests the contents of the editor against the answer
        $('.test').off('click').on('click', function () { ////////NOTE: unbinding is a major issue I do not understand here.

            //Inset code into iframe;
            var code1 = editor.getValue();
            $("iframe").attr("srcdoc", code1);

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

            //MC Evaluation

            var mCattempt = trimmer($(".selectedChoice").text());
            console.log("mCattempt: " + mCattempt);
            var mCanswer = trimmer(currentMCanswer1 + currentMCanswer2);
            console.log("mCanswer: " + mCanswer);

            isMCCorrect = (mCattempt.length === mCanswer.length && mCattempt.split("").sort().join() == mCanswer.split("").sort().join());
            if (mCanswer == "") {
                isMCCorrect = false;
            }
            console.log(isMCCorrect);



            //Doing check on code challange
            if ((attempt == currentAnswer) || isMCCorrect) { // "==="" is unnecesary as both items should be a type
                console.log('Correct!');
                $('.explination').show();
                $('.explination').text(currentMCexplination);
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
                question[index].timeCorrect = question[index].timeCorrect - 0.75;
                console.log(question[index].timeCorrect);
                attemptNumber += 1;
                console.log("Inside attemptNumber:" + attemptNumber);

                //When the code is incorrect to many times, this block gives the answers
                // and allows user to enter correct answer
                if (attemptNumber > 1) {
                    $('.explination').show();
                    $('.explination').text(currentMCexplination);
                    $('.result').css('background-color', '#80dfff');
                    $('#editor').css('border', 'solid 2px #80dfff');
                    $('.result').text('Incorrect! Below is the correct answer.');
                    editor2.insert(currentAnswer2);

                    //Only show editor when it's needed
                    $("#editor2").show();
                    var code = editor2.getValue();
                    if (code.length < 1) {
                        $("#editor2").hide();
                    }


                    if (questionCodeLanguage === 'javascript') {
                        beatify2();
                    }
                    $('.submit').css('display', 'inline');
                    $('.test').hide();

                    // When the submit button is clicked, evauluate the answer without decrementing timeCorrect
                    $('.submit').on('click', function () {
                        //Inset code into iframe;
                        var code1 = editor.getValue();
                        $("iframe").attr("srcdoc", code1);

                        //MC Evaliation
                        var mCattempt = trimmer($(".selectedChoice").text());
                        console.log("mCattempt: " + mCattempt);
                        var mCanswer = trimmer(currentMCanswer1 + currentMCanswer2);
                        console.log("mCanswer: " + mCanswer);

                        isMCCorrect = (mCattempt.length === mCanswer.length && mCattempt.split("").sort().join() == mCanswer.split("").sort().join());
                        if (mCanswer == "") {
                            isMCCorrect = false;
                        }
                        console.log(isMCCorrect);

                        //Getting the content from ace box
                        var attempt = editor.getValue();
                        var attempt = trimmer(attempt);
                        $('.result').text('');
                        $('.result').text('Incorrect! Below is the correct answer.');
                        //when answer is correct reset these elements
                        if ((attempt == currentAnswer) || isMCCorrect) {
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
        $('.next').off('click').on('click', function () {
            //Resets the editor and values for next question
            editor.setValue("");
            editor2.setValue("");
            index += 1;
            attemptNumber = 0;
            $('.test').show();
            $('#editor').css('border', '');

            console.log("Index before returning to zero" + index);
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

})();