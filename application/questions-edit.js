$(document).ready(function () {
    $('.questions-display');

    const qBank = treehouseQuestions; // Pulls in question bank
    var question = qBank;

    for (var index = 0; index < question.length; index++) {
        var currentInstruction = question[index].questionInstructions,
            currentQuestion = question[index].question,
            currentAnswer = question[index].answer,
            currentAnswer2 = question[index].answer,
            timeCorrect = question[index].timeCorrect,
            questionNumber = question[index].questionNum,
            questionCodeLanguage = question[index].questionLanguage;
    }

});