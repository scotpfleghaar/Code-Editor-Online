$(document).ready(function () {
    // $('.questions-display');

    const qBank = treehouseQuestions; // Pulls in question bank
    var question = qBank;

    var arrayOfQuestions = [];
    for (var index = 0; index < question.length; index++) {

        let j = index;
        var currentInstruction = question[index].questionInstructions,
            currentQuestion = question[index].question,
            currentAnswer = question[index].answer,
            timeCorrect = question[index].timeCorrect,
            questionNumber = question[index].questionNum,
            questionCodeLanguage = question[index].questionLanguage;
        var currentMCexplination = question[index].explination;
        var currentMCanswer1 = question[index].answer1;
        var currentMCanswer2 = question[index].answer2;
        var currentMCquestion1 = question[index].choice1;
        var currentMCquestion2 = question[index].choice2;
        var currentMCquestion3 = question[index].choice3;
        var currentMCquestion4 = question[index].choice4;
        var currentMCquestion5 = question[index].choice5;

        var insertQuestions = `
        <div class="container total-details">
        <div class="row">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <hr>
                    <h1 style="text-align: center;">Question ${(j + 1)}</h1>
                </div>

                <div class="col-md-10 col-md-offset-1">

                    <div class="wrapper">
                    <h2>Indstructions:</h2>
                        <div>
                            <pre contenteditable="true" class="instructions"><xmp>${currentInstruction}</xmp></pre>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 editor-display">
                            <h2>Starter Code:</h2>

                            <!-- Create a simple CodeMirror instance -->
                            <div>
                            <pre id="editor${j}" class="editor" style="height: 300px;"></pre>
                            </div>
                            
                           
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <p>
                                    <small class="programmingLanguage"></small>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                        </div>
                        <p></p>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                <h2>Answer Code:</h2>
                <pre id="editorAnswer${j}" class="editor" style="height: 300px;"></pre>
                </div>
                <div class="col-md-10 col-md-offset-1">
                <h2>Code Challenge Language:</h2>
                    <label>Select Language
                        <select id="ace-mode">
                            <option value="ABAP">ABAP</option>
                            <option value="ActionScript">ActionScript</option>
                            <option value="ADA">ADA</option>
                            <option value="Apache Conf">Apache Conf</option>
                            <option value="AsciiDoc">AsciiDoc</option>
                            <option value="Assembly x86">Assembly x86</option>
                            <option value="AutoHotKey">AutoHotKey</option>
                            <option value="BatchFile">BatchFile</option>
                            <option value="C/C++">C/C++</option>
                            <option value="C#">C#</option>
                            <option value="C9 Search Results">C9 Search Results</option>
                            <option value="Cirru">Cirru</option>
                            <option value="Clojure">Clojure</option>
                            <option value="Cobol">Cobol</option>
                            <option value="CoffeeScript">CoffeeScript</option>
                            <option value="ColdFusion">ColdFusion</option>
                            <option value="CSS">CSS</option>
                            <option value="Curly">Curly</option>
                            <option value="D">D</option>
                            <option value="Dart">Dart</option>
                            <option value="Diff">Diff</option>
                            <option value="Dockerfile">Dockerfile</option>
                            <option value="Dot">Dot</option>
                            <option value="EJS">EJS</option>
                            <option value="Erlang">Erlang</option>
                            <option value="Forth">Forth</option>
                            <option value="FreeMarker">FreeMarker</option>
                            <option value="Gherkin">Gherkin</option>
                            <option value="Gitignore">Gitignore</option>
                            <option value="Glsl">Glsl</option>
                            <option value="Go">Go</option>
                            <option value="Groovy">Groovy</option>
                            <option value="HAML">HAML</option>
                            <option value="Handlebars">Handlebars</option>
                            <option value="Haskell">Haskell</option>
                            <option value="haXe">haXe</option>
                            <option value="HTML" selected>HTML</option>
                            <option value="HTML (Ruby)">HTML (Ruby)</option>
                            <option value="INI">INI</option>
                            <option value="Jack">Jack</option>
                            <option value="Jade">Jade</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="JSON">JSON</option>
                            <option value="JSONiq">JSONiq</option>
                            <option value="JSP">JSP</option>
                            <option value="JSX">JSX</option>
                            <option value="Julia">Julia</option>
                            <option value="LaTeX">LaTeX</option>
                            <option value="LESS">LESS</option>
                            <option value="Liquid">Liquid</option>
                            <option value="Lisp">Lisp</option>
                            <option value="LiveScript">LiveScript</option>
                            <option value="LogiQL">LogiQL</option>
                            <option value="LSL">LSL</option>
                            <option value="Lua">Lua</option>
                            <option value="LuaPage">LuaPage</option>
                            <option value="Lucene">Lucene</option>
                            <option value="Makefile">Makefile</option>
                            <option value="Markdown">Markdown</option>
                            <option value="MATLAB">MATLAB</option>
                            <option value="MEL">MEL</option>
                            <option value="MUSHCode">MUSHCode</option>
                            <option value="MySQL">MySQL</option>
                            <option value="Nix">Nix</option>
                            <option value="Nix">Nix</option>
                            <option value="Objective-C">Objective-C</option>
                            <option value="OCaml">OCaml</option>
                            <option value="Pascal">Pascal</option>
                            <option value="Perl">Perl</option>
                            <option value="pgSQL">pgSQL</option>
                            <option value="PHP">PHP</option>
                            <option value="Plain Text">Plain Text</option>
                            <option value="Powershell">Powershell</option>
                            <option value="Prolog">Prolog</option>
                            <option value="Properties">Properties</option>
                            <option value="Protobuf">Protobuf</option>
                            <option value="Python">Python</option>
                            <option value="R">R</option>
                            <option value="RDoc">RDoc</option>
                            <option value="RHTML">RHTML</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Rust">Rust</option>
                            <option value="SASS">SASS</option>
                            <option value="SCAD">SCAD</option>
                            <option value="Scala">Scala</option>
                            <option value="Scheme">Scheme</option>
                            <option value="SCSS">SCSS</option>
                            <option value="SH">SH</option>
                            <option value="SJS">SJS</option>
                            <option value="Smarty">Smarty</option>
                            <option value="snippets">snippets</option>
                            <option value="Soy Template">Soy Template</option>
                            <option value="Space">Space</option>
                            <option value="SQL">SQL</option>
                            <option value="Stylus">Stylus</option>
                            <option value="SVG">SVG</option>
                            <option value="Tcl">Tcl</option>
                            <option value="Tex">Tex</option>
                            <option value="Text">Text</option>
                            <option value="Textile">Textile</option>
                            <option value="Toml">Toml</option>
                            <option value="Twig">Twig</option>
                            <option value="Typescript">Typescript</option>
                            <option value="Vala">Vala</option>
                            <option value="VBScript">VBScript</option>
                            <option value="Velocity">Velocity</option>
                            <option value="Verilog">Verilog</option>
                            <option value="XML">XML</option>
                            <option value="XQuery">XQuery</option>
                            <option value="YAML">YAML</option>
                        </select>
                    </label>
                </div>

                <div class="col-md-10 col-md-offset-1">
                <h2>Explination:</h2>
                    <div  class="alert alert-info explination"><pre contenteditable="true"><xmp>${currentMCexplination}</xmp></pre></div>
                    <!-- <input onclick='responsiveVoice.speak($(".explination").text());' type='button' value='🔊 Play' /> -->
                </div>
                <div class="col-md-10 col-md-offset-1">
                <h2>Multiple Choice Section:</h2>
                    <ul class="choices list-group">
                        <li class="choice list-group-item"><small>Answer 1: </small><pre contenteditable="true"><xmp>${currentMCanswer1}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Answer 2: </small><pre contenteditable="true"><xmp>${currentMCanswer2}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Choice 1: </small><pre contenteditable="true"><xmp>${currentMCquestion1}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Choice 2: </small><pre contenteditable="true"><xmp>${currentMCquestion2}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Choice 3: </small><pre contenteditable="true"><xmp>${currentMCquestion3}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Choice 4: </small><pre contenteditable="true"><xmp>${currentMCquestion4}</xmp></pre></li>
                        <li class="choice list-group-item"><small>Choice 5: </small><pre contenteditable="true"><xmp>${currentMCquestion5}</xmp></pre></li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
        </div>`;
        $('.qbank').append(insertQuestions);

        arrayOfQuestions.push(insertQuestions);

        var editor = ace.edit("editor" + j);
        editor.session.setOption("useWorker", false);
        editor.insert(currentQuestion);

        var editorAnswer = ace.edit("editorAnswer" + j);
        editorAnswer.session.setOption("useWorker", false);
        editorAnswer.insert(currentAnswer);
    }

    $('.qbank').append(`<div class="col-sm-10 col-sm-offset-1 total-details">
        <div style="text-align: center;">
            <button class='btn btn-lg'>Add Question</button>
        </div>
    </div>`);




    //get total number of students
    // const totalStudents = $(".student-details:visible").length;
    const totalStudents = $(".total-details:visible").length;
    console.log(totalStudents);

    // Returns Number of pages
    const numOfPageSelectors = (Math.ceil(totalStudents / 10));

    //Display Nothing on the page once loaded
    // $('.student-item').css('display', 'none');
    $('.total-details').hide();

    //Display first ten on page load:
    //This works really well for getting the index of all the div elements and getting the range.
    // $(".student-item").slice(((parseInt(1) - 1) * 10), (((parseInt(1) - 1) * 10) + 10)).css("display", "block");
    $(".total-details").slice(((parseInt(1) - 1) * 10), (((parseInt(1) - 1) * 10) + 10)).show();

    // Adds the div for the pages after all students
    $('.qbank').after('<div class="col-sm-10 col-sm-offset-1 text-center"><div class="pagination pagination-sm"></div></div>');

    // Adds the Page selection elements at the bottom of the document. 
    for (let i = 0; i < numOfPageSelectors; i++) {
        $('.pagination').append('<ul><li><a href="#" class="item">' + (i + 1) + '</a></li></ul> ');
    }

    //For the search element
    $('.total-details').addClass('picked');

    //Sets the first list item class to active when page loads:
    $('.item:first').addClass('active');

    //Waits for the page number to be selected
    $('.item').off('click').on('click', function () {

        //Gets the number from the actual element
        const number = $(this).text();

        //Removes all button classes
        $('a').removeClass('active');

        //Adds the class active the selected element
        $(this).addClass('active');

        //Makes Sure that all previus elements are now not being displayed
        $('.picked').hide();

        //Here is where the money is! This slices out the div elements based on the 
        // button number that is clicked, this then displays that section of divs. 
        //This works great because it really doesn't care how many divs are left 
        // over, for example, it will display 1 remaining div or nine. 
        //Also this is what makes it very scalable.
        $('.picked').slice(((parseInt(number) - 1) * 10), (((parseInt(number) - 1) * 10) + 10)).show();


        // debugger;
        var totalCycles = $('.editor').length / 2;
        for (var i = 0; i < totalCycles; i++) {
            let j = i;
            var editor = ace.edit("editor" + j);
            editor.insert('');
            editor.resize();
            editor.renderer.updateFull();

            var editorAnswer = ace.edit("editorAnswer" + j);
            editorAnswer.resize();
            editorAnswer.renderer.updateFull();
        }

    });
});