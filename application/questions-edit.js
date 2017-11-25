$(document).ready(function () {
    $('.questions-display');

    const qBank = treehouseQuestions; // Pulls in question bank
    var question = qBank;

    for (var index = 0; index < question.length; index++) {
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

        var insertQuestions = `<div class="row">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <hr>
                    <h1 style="text-align: center;">Question ${questionNumber}</h1>
                </div>

                <div class="col-md-10 col-md-offset-1">

                    <div class="wrapper">
                        <div>
                            <h4 contenteditable="true" class="instructions">${currentInstruction}</h4>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 editor-display">
                            <pre class="prettyprint">${''}</pre>
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
                <pre class="prettyprint">${''}</pre>
                </div>
                <div class="col-md-10 col-md-offset-1">
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
                            <option value="HTML">HTML</option>
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
                            <option value="SCSS" selected>SCSS</option>
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
                    <p contenteditable="true" class="alert alert-info explination">${currentMCexplination}</p>
                    <!-- <input onclick='responsiveVoice.speak($(".explination").text());' type='button' value='🔊 Play' /> -->
                </div>
                <div class="col-md-10 col-md-offset-1">
                    <p>Enter Answers and Choices:</p>
                    <ul class="choices list-group">
                        <li contenteditable="true" class="choice list-group-item">${currentMCanswer1}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCanswer2}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCquestion1}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCquestion2}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCquestion3}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCquestion4}</li>
                        <li contenteditable="true" class="choice list-group-item">${currentMCquestion5}</li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>`;
        $('.qbank').append(insertQuestions);
    }

});