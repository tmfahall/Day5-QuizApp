var arrayOfQuizes = [];

var arrayOfQuizObjects = [];

var chosenColor;

var quizObj1;

var quizObj2;

var quizObj3;

var quizObj4;

var quizObj5;

var quizNameG

var quizQuestionG1;

var quizQuestionG2;

var quizQuestionG3;

var quizQuestionG4;

var quizQuestionG5;

var quizAnswerG1;

var quizAnswerG2;

var quizAnswerG3;

var quizAnswerG4;

var quizAnswerG5;

var quizThemeG;

var quizObj;

var score = [];

var right;

var wrong;

var x = 0;

var test;

var turnerRight = function () {
    if (document.getElementById("question1-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "active";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question2-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "active";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question3-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "active";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question4-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "active";
    };

    if (document.getElementById("question5-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

};

var turnerLeft = function () {
    if (document.getElementById("question1-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "active";
    };

    if (document.getElementById("question2-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question3-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "active";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question4-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "active";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question5-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "active";
        document.getElementById("question5-Nav-li").className = "";
    };

};

var adjuster = function () {
    if (document.getElementById("question1-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "item active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question2-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "item active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question3-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "item active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question4-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "item active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };

    if (document.getElementById("question5-Car-div").className == "item active") {
        document.getElementById("question1-Nav-li").className = "item active";
        document.getElementById("question2-Nav-li").className = "";
        document.getElementById("question3-Nav-li").className = "";
        document.getElementById("question4-Nav-li").className = "";
        document.getElementById("question5-Nav-li").className = "";
    };
};

var forQuizObject1 = function () {
    quizNameG = "5 Questions From Project Euler";

    quizQuestionG1 = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.";

    quizAnswerG1 = 233168;

    quizQuestionG2 = "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.";

    quizAnswerG2 = 4613732;

    quizQuestionG3 = "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.";

    quizAnswerG3 = 906609;

    quizQuestionG4 = "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?";

    quizAnswerG4 = 232792560;

    quizQuestionG5 = "If the numbers 1 to 5 are written out in words: one, two, three, four, five, there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total. If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? <br /> <br /> <em> NOTE:</em><small> Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of 'and' when writing out numbers is in compliance with British usage.</small>";

    quizAnswerG5 = 21124;
};

var forQuizObject2 = function () {
    quizNameG = "5 Random Geography Questions";

    quizQuestionG1 = "On a map, what are the lines that run parallel to the equator called?";

    quizAnswerG1 = "latitude";

    quizQuestionG2 = "What is the only continent without a desert?";

    quizAnswerG2 = "europe";
  
    quizQuestionG3 = "What is the worlds largest body of water?";

    quizAnswerG3 = "pacific ocean";
    
    quizQuestionG4 = "In terms of continent size, where does Antarctica stand? Third, fourth or fifth largest?";

    quizAnswerG4 = "fifth";

    quizQuestionG5 = "Which American state has more active volcanoes than all other states combined?";

    quizAnswerG5 = "alaska";

};

var forQuizObject3 = function () {
    quizNameG = "5 Random Questions";

    quizQuestionG1 = "What is a hockey puck made of?";

    quizAnswerG1 = "rubber";

    quizQuestionG2 = "How many squares are on a chess board?";

    quizAnswerG2 = "64";

    quizQuestionG3 = "What is Canada's national animal?";

    quizAnswerG3 = "beaver";

    quizQuestionG4 = "On TV, who did the character Lurch work for?";

    quizAnswerG4 = "the addams family";

    quizQuestionG5 = "What is the common name for a black leopard?";

    quizAnswerG5 = "panther";
};

var forQuizObject4 = function () {
    quizNameG = "States and Capitals";

    quizQuestionG1 = "What is the capital of Alabama?";

    quizAnswerG1 = "montgomery";

    quizQuestionG2 = "What state's capital is Carson City?";

    quizAnswerG2 = "nevada";

    quizQuestionG3 = "What is the capital of Ohio";

    quizAnswerG3 = "columbus";

    quizQuestionG4 = "What state's capital is Des Moines?";

    quizAnswerG4 = "iowa";

    quizQuestionG5 = "What is the capital of Wyoming";

    quizAnswerG5 = "cheyenne";
};

var forQuizObject5 = function () {
    quizNameG = "5 Web Development Questions";

    quizQuestionG1 = "If you wrote the following lines of code in HTML, what would you see on your page?<br /> <xmp><html></xmp><br /><xmp><body></xmp><br /><xmp><h1></xmp>The Daily Quiz<xmp></h1></xmp><br /><xmp></body></xmp><br/><xmp></html></xmp>";

    quizAnswerG1 = "the daily quiz";

    quizQuestionG2 = "What does HTML stand for?";

    quizAnswerG2 = "hyper text markup language";

    quizQuestionG3 = "What is the C in CRUD?";

    quizAnswerG3 = "create";

    quizQuestionG4 = "What is the R in  CRUD?";

    quizAnswerG4 = "read";

    quizQuestionG5 = "What is the U in CRUD?";

    quizAnswerG5 = "update";
};

//Create constructor
//quiz should have been capitalized
function quiz(name, question1, answer1, question2, answer2, question3, answer3, question4, answer4, question5, answer5) {
    this.quizName = name;
    this.quizQuestion1 = question1;
    this.quizAnswer1 = answer1;
    this.quizQuestion2 = question2;
    this.quizAnswer2 = answer2;
    this.quizQuestion3 = question3;
    this.quizAnswer3 = answer3;
    this.quizQuestion4 = question4;
    this.quizAnswer4 = answer4;
    this.quizQuestion5 = question5;
    this.quizAnswer5 = answer5;
};

var pageChangeToHome = function () {
    document.getElementById("landingPage").className = "container";
    document.getElementById("quizPage").className = "container hidden";
    document.getElementById("adminPage").className = "container hidden";

};

var pageChangeToQuiz = function () {
    document.getElementById("landingPage").className = "container hidden";
    document.getElementById("quizPage").className = "container"
    document.getElementById("adminPage").className = "container hidden";

    setUpForSelecter();

};

var pageChangeToAdmin = function () {
    document.getElementById("landingPage").className = "container hidden";
    document.getElementById("quizPage").className = "container hidden"
    document.getElementById("adminPage").className = "container";
};

var changeButtonToSubmit = function () {
    document.getElementById("quizSubmitButton1").className = "submit btn btn-default";
    document.getElementById("quizSubmitButton2").className = "submit btn btn-default";
    document.getElementById("quizSubmitButton3").className = "submit btn btn-default";
    document.getElementById("quizSubmitButton4").className = "submit btn btn-default";
    document.getElementById("quizSubmitButton5").className = "submit btn btn-default";

    document.getElementById("q1Answer").className = "form-control";
    document.getElementById("q2Answer").className = "form-control";
    document.getElementById("q3Answer").className = "form-control";
    document.getElementById("q4Answer").className = "form-control";
    document.getElementById("q5Answer").className = "form-control";

    document.getElementById("quizSelectButton1").className = "select btn btn-default hidden";
    document.getElementById("quizSelectButton2").className = "select btn btn-default hidden";
    document.getElementById("quizSelectButton3").className = "select btn btn-default hidden";
    document.getElementById("quizSelectButton4").className = "select btn btn-default hidden";
    document.getElementById("quizSelectButton5").className = "select btn btn-default hidden";

};

var changeButtonToTakeIt = function () {
    document.getElementById("quizSubmitButton1").className = "submit btn btn-default hidden";
    document.getElementById("quizSubmitButton2").className = "submit btn btn-default hidden";
    document.getElementById("quizSubmitButton3").className = "submit btn btn-default hidden";
    document.getElementById("quizSubmitButton4").className = "submit btn btn-default hidden";
    document.getElementById("quizSubmitButton5").className = "submit btn btn-default hidden";

    document.getElementById("q1Answer").className = "form-control hidden";
    document.getElementById("q2Answer").className = "form-control hidden";
    document.getElementById("q3Answer").className = "form-control hidden";
    document.getElementById("q4Answer").className = "form-control hidden";
    document.getElementById("q5Answer").className = "form-control hidden";

    
    document.getElementById("quizSelectButton1").className = "takeit btn btn-default";
    document.getElementById("quizSelectButton2").className = "takeit btn btn-default";
    document.getElementById("quizSelectButton3").className = "takeit btn btn-default";
    document.getElementById("quizSelectButton4").className = "takeit btn btn-default";
    document.getElementById("quizSelectButton5").className = "takeit btn btn-default";

};

var setUpForQuiz = function () {
    document.getElementById("statButtons").className = "";

    renameSlideHeaderToQuestion();

    renameNavTabToQuestion();

    changeButtonToSubmit();

};

var setUpForSelecter = function () {
    clearer();

    populateSelecter();

    document.getElementById("statButtons").className = "hidden";

    renameSlideHeaderToQuiz();

    renameNavTabToQuiz();

    changeButtonToTakeIt();

};

var renameSlideHeaderToQuestion = function () {
    document.getElementById("slideHeader1").innerHTML = "Question 1";
    document.getElementById("slideHeader2").innerHTML = "Question 2";
    document.getElementById("slideHeader3").innerHTML = "Question 3";
    document.getElementById("slideHeader4").innerHTML = "Question 4";
    document.getElementById("slideHeader5").innerHTML = "Question 5";

};

var renameSlideHeaderToQuiz = function () {
    document.getElementById("slideHeader1").innerHTML = "Quiz 1";
    document.getElementById("slideHeader2").innerHTML = "Quiz 2";
    document.getElementById("slideHeader3").innerHTML = "Quiz 3";
    document.getElementById("slideHeader4").innerHTML = "Quiz 4";
    document.getElementById("slideHeader5").innerHTML = "Quiz 5";

};

var renameNavTabToQuestion = function () {
    document.getElementById("navTab1").innerHTML = "Question 1";
    document.getElementById("navTab2").innerHTML = "Question 2";
    document.getElementById("navTab3").innerHTML = "Question 3";
    document.getElementById("navTab4").innerHTML = "Question 4";
    document.getElementById("navTab5").innerHTML = "Question 5";

};

var renameNavTabToQuiz = function () {
    document.getElementById("navTab1").innerHTML = "Quiz 1";
    document.getElementById("navTab2").innerHTML = "Quiz 2";
    document.getElementById("navTab3").innerHTML = "Quiz 3";
    document.getElementById("navTab4").innerHTML = "Quiz 4";
    document.getElementById("navTab5").innerHTML = "Quiz 5";

};

var slideFiller = function () {
    document.getElementById("location1").innerHTML = quizObj.quizQuestion1;
    document.getElementById("location2").innerHTML = quizObj.quizQuestion2;
    document.getElementById("location3").innerHTML = quizObj.quizQuestion3;
    document.getElementById("location4").innerHTML = quizObj.quizQuestion4;
    document.getElementById("location5").innerHTML = quizObj.quizQuestion5;

    document.getElementById("loc1").innerHTML = "";
    document.getElementById("loc2").innerHTML = "";
    document.getElementById("loc3").innerHTML = "";
    document.getElementById("loc4").innerHTML = "";
    document.getElementById("loc5").innerHTML = "";

    document.getElementById("quizName").innerHTML = quizObj.quizName;

};

var populateSelecter = function () {
    document.getElementById("loc1").innerHTML = quizObj1.quizName;
    document.getElementById("loc2").innerHTML = quizObj2.quizName;
    document.getElementById("loc3").innerHTML = quizObj3.quizName;
    document.getElementById("loc4").innerHTML = quizObj4.quizName;
    document.getElementById("loc5").innerHTML = quizObj5.quizName;

    document.getElementById("quizName").innerHTML = "Quiz Selecter";
};

var globalArrayObjectFiller = function () {
    populateQuiz1();
    populateQuiz2();
    populateQuiz3();
    populateQuiz4();
    populateQuiz5();
    clearer();
    populateSelecter();

}

var populateQuiz1 = function () {
    forQuizObject1();

    //Create quiz object
    quizObj = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    quizObj1 = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    arrayOfQuizObjects.push(quizObj1);

    //Populate slides with questions
    slideFiller();

    setUpForQuiz();

    var quiz1Num = 1;

    renameSlideHeaderToQuestion();

};

var populateQuiz2 = function () {
    forQuizObject2();

    //Create quiz object
    quizObj = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    quizObj2 = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    arrayOfQuizObjects.push(quizObj2)

    //Populate slides with questions
    slideFiller();

    setUpForQuiz();

    var quiz3Num = 2;

    renameSlideHeaderToQuestion();

};

var populateQuiz3 = function () {
    forQuizObject3();

    //Create quiz object
    quizObj = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    quizObj3 = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    arrayOfQuizObjects.push(quizObj3)

    //Populate slides with questions
    slideFiller();

    setUpForQuiz();

    var quiz3Num = 3;

    renameSlideHeaderToQuestion();

};

var populateQuiz4 = function () {
    forQuizObject4();

    //Create quiz object
    quizObj = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    quizObj4 = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    arrayOfQuizObjects.push(quizObj4)

    //Populate slides with questions
    slideFiller();

    setUpForQuiz();

    var quiz4Num = 4;

    renameSlideHeaderToQuestion();

};

var populateQuiz5 = function () {
    forQuizObject5();

    //Create quiz object
    quizObj = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    quizObj5 = new quiz(quizNameG, quizQuestionG1, quizAnswerG1, quizQuestionG2, quizAnswerG2, quizQuestionG3, quizAnswerG3, quizQuestionG4, quizAnswerG4, quizQuestionG5, quizAnswerG5);

    arrayOfQuizObjects.push(quizObj5)

    //Populate slides with questions
    slideFiller();

    setUpForQuiz();

    var quiz5Num = 5;

    renameSlideHeaderToQuestion();

};

var updateScores = function () {
    right = score.reduce(function (n, val) {return n + (val === 1); }, 0);
    wrong = score.reduce(function (n, val) {return n + (val === 0); }, 0);
    x = Math.round(((right / (right + wrong)) * 10000) / 100);


    document.getElementById('corModal').innerHTML = right;

    document.getElementById('incorModal').innerHTML = wrong;
    document.getElementById('pctCorModal').innerHTML = x;

    document.getElementById("numCorrect").innerHTML = right;
    document.getElementById("numIncorrect").innerHTML = wrong;
    document.getElementById('pctCorrect').innerHTML = x;

    document.getElementById('finalPctCorrect').innerHTML = x;

};

var correct = function () {
    $('#modal-container-4').modal('show');
    updateScores();
};

var incorrect = function () {
    $('#modal-container-5').modal('show');
    updateScores();
};

var checker1 = function () {

    if (typeof document.getElementById("q1Answer").value == "string") {

        if (document.getElementById("q1Answer").value.toLowerCase() == quizObj.quizAnswer1) {
            score.push(1)
            correct();
            document.getElementById("navTab1").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab1").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }
        
    }
        
    else if (typeof document.getElementById("q1Answer").value == "undefined") {
        score.push(0)
        incorrect();
        document.getElementById("navTab1").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }

    else {
        if (document.getElementById("q1Answer").value == quizObj.quizAnswer1) {
            score.push(1)
            correct();
            document.getElementById("navTab1").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab1").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    turnerRight();
    document.getElementById("q1Answer").value = "";
};

var checker2 = function () {

    if (typeof document.getElementById("q2Answer").value == "string") {

        if (document.getElementById("q2Answer").value.toLowerCase() == quizObj.quizAnswer2) {
            score.push(1)
            correct();
            document.getElementById("navTab2").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab2").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    else if (typeof document.getElementById("q2Answer").value == "undefined") {
        score.push(0)
        incorrect();
        document.getElementById("navTab2").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }

    else {
        if (document.getElementById("q2Answer").value == quizObj.quizAnswer2) {
            score.push(1)
            correct();
            document.getElementById("navTab2").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab2").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    turnerRight();
    document.getElementById("q2Answer").value = "";

};

var checker3 = function () {
    if (typeof document.getElementById("q3Answer").value == "string") {

        if (document.getElementById("q3Answer").value.toLowerCase() == quizObj.quizAnswer3) {
            score.push(1)
            correct();
            document.getElementById("navTab3").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab3").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    else if (typeof document.getElementById("q3Answer").value == "undefined") {
        score.push(0)
        incorrect();
        document.getElementById("navTab3").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }

    else {
        if (document.getElementById("q3Answer").value == quizObj.quizAnswer3) {
            score.push(1)
            correct();
            document.getElementById("navTab3").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab3").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    turnerRight();
    document.getElementById("q3Answer").value = "";

};

var checker4 = function () {
    if (typeof document.getElementById("q4Answer").value == "string") {

        if (document.getElementById("q4Answer").value.toLowerCase() == quizObj.quizAnswer4) {
            score.push(1)
            correct();
            document.getElementById("navTab4").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab4").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    else if (typeof document.getElementById("q4Answer").value == "undefined") {
        score.push(0)
        incorrect();
        document.getElementById("navTab4").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }

    else {
        if (document.getElementById("q4Answer").value == quizObj.quizAnswer4) {
            score.push(1)
            correct();
            document.getElementById("navTab4").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
        }

        else {
            score.push(0)
            incorrect();
            document.getElementById("navTab4").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        }

    }

    turnerRight();
    document.getElementById("q4Answer").value = "";

};

var checker5 = function () {
    if (typeof document.getElementById("q5Answer").value == "string") {

        if (document.getElementById("q5Answer").value.toLowerCase() == quizObj.quizAnswer5) {
            score.push(1)
            document.getElementById("navTab5").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
            correct();
        }

        else {
            score.push(0)
            document.getElementById("navTab5").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
            incorrect();
        }

    }

    else if (typeof document.getElementById("q5Answer").value == "undefined") {
        score.push(0)
        document.getElementById("navTab5").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
        incorrect();
    }

    else {
        if (document.getElementById("q5Answer").value == quizObj.quizAnswer5) {
            score.push(1)
            document.getElementById("navTab5").innerHTML = "<i class='glyphicon glyphicon-ok'></i>";
            correct();
        }

        else {
            score.push(0)
            document.getElementById("navTab5").innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
            incorrect();
        }

    }

    $('#modal-container-6').modal('show');
    document.getElementById("q5Answer").value = "";

};

var clearer = function () {
    document.getElementById("location1").innerHTML = "";
    document.getElementById("location2").innerHTML = "";
    document.getElementById("location3").innerHTML = "";
    document.getElementById("location4").innerHTML = "";
    document.getElementById("location5").innerHTML = "";

    document.getElementById("loc1").innerHTML = "";
    document.getElementById("loc2").innerHTML = "";
    document.getElementById("loc3").innerHTML = "";
    document.getElementById("loc4").innerHTML = "";
    document.getElementById("loc5").innerHTML = "";

};

globalArrayObjectFiller();

var changeColor = function () {
    switch (document.getElementById("colorSelecter").value) {
        case "#000000":
            var chosenColor = document.getElementById("colorSelecter1").value;
            document.getElementsByClassName("colorer").value = chosenColor;
            document.getElementById("body").style.backgroundColor = chosenColor;
            document.getElementById("colorSelecter").value = "#000000";
            document.getElementById("colorSelecter1").value = "#000000";
            break;
        default:
            var chosenColor = document.getElementById("colorSelecter").value;
            document.getElementsByClassName("colorer").value = chosenColor;
            document.getElementById("body").style.backgroundColor = chosenColor;
            document.getElementById("colorSelecter").value = "#000000";
            document.getElementById("colorSelecter1").value = "#000000";
            break;
    }

};

var resetter = function () {

    test = Math.floor(Math.random() * 4);

    switch (test) {
        case 0:
            document.getElementById("randomer").className = "";

            document.getElementById("navTab6").className = "hidden";
            document.getElementById("navTab6a").className = "";
            document.getElementById("navTab6b").className = "hidden";
            document.getElementById("navTab6c").className = "hidden";
            document.getElementById("navTab6d").className = "hidden";
            document.getElementById("navTab6e").className = "hidden";

            document.getElementById("question1-Nav-li").className = "active";
            document.getElementById("question2-Nav-li").className = "";
            document.getElementById("question3-Nav-li").className = "";
            document.getElementById("question4-Nav-li").className = "";
            document.getElementById("question5-Nav-li").className = "";

            break;

        case 1:

            document.getElementById("randomer").className = "";

            document.getElementById("navTab6").className = "hidden";
            document.getElementById("navTab6a").className = "hidden";
            document.getElementById("navTab6b").className = "";
            document.getElementById("navTab6c").className = "hidden";
            document.getElementById("navTab6d").className = "hidden";
            document.getElementById("navTab6e").className = "hidden";

            document.getElementById("question1-Nav-li").className = "";
            document.getElementById("question2-Nav-li").className = "active";
            document.getElementById("question3-Nav-li").className = "";
            document.getElementById("question4-Nav-li").className = "";
            document.getElementById("question5-Nav-li").className = "";

            break;

        case 2:
            
            document.getElementById("randomer").className = "";

            document.getElementById("navTab6").className = "hidden";
            document.getElementById("navTab6a").className = "hidden";
            document.getElementById("navTab6b").className = "hidden";
            document.getElementById("navTab6c").className = "";
            document.getElementById("navTab6d").className = "hidden";
            document.getElementById("navTab6e").className = "hidden";

            document.getElementById("question1-Nav-li").className = "";
            document.getElementById("question2-Nav-li").className = "";
            document.getElementById("question3-Nav-li").className = "active";
            document.getElementById("question4-Nav-li").className = "";
            document.getElementById("question5-Nav-li").className = "";

            break;

        case 3:

            document.getElementById("randomer").className = "";

            document.getElementById("navTab6").className = "hidden";
            document.getElementById("navTab6a").className = "hidden";
            document.getElementById("navTab6b").className = "hidden";
            document.getElementById("navTab6c").className = "hidden";
            document.getElementById("navTab6d").className = "";
            document.getElementById("navTab6e").className = "hidden";

            document.getElementById("question1-Nav-li").className = "";
            document.getElementById("question2-Nav-li").className = "";
            document.getElementById("question3-Nav-li").className = "";
            document.getElementById("question4-Nav-li").className = "active";
            document.getElementById("question5-Nav-li").className = "";

            break;

        case 4:

            document.getElementById("randomer").className = "";
            
            document.getElementById("navTab6").className = "hidden";
            document.getElementById("navTab6a").className = "hidden";
            document.getElementById("navTab6b").className = "hidden";
            document.getElementById("navTab6c").className = "hidden";
            document.getElementById("navTab6d").className = "hidden";
            document.getElementById("navTab6e").className = "";

            document.getElementById("navTab1").className = "hidden";
            document.getElementById("navTab2").className = "hidden";
            document.getElementById("navTab3").className = "hidden";
            document.getElementById("navTab4").className = "hidden";
            document.getElementById("navTab5").className = "";

            document.getElementById("question1-Nav-li").className = "";
            document.getElementById("question2-Nav-li").className = "";
            document.getElementById("question3-Nav-li").className = "";
            document.getElementById("question4-Nav-li").className = "";
            document.getElementById("question5-Nav-li").className = "active";

            break;

        default:
            alert("Randomizer error.  Fall through.  Var test = " + test);
            break;
    }
    test = Math.floor(Math.random() * 4);
};

