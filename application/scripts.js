// A $( document ).ready() block.
$(document).ready(function () {

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
    //beatify();


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
    //beatify2();

});
