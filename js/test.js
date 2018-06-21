Survey.defaultBootstrapCss.navigationButton = "btn btn-danger";
Survey.Survey.cssType = "bootstrap";

var json = {
    title: "American History",
    showTitle: false,
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 120,
    maxTimeToFinish: 2400,
    firstPageIsStarted: true,
    startSurveyText: "Start",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start knowledge test. <br/>You have 2 minutes for every page and 40 minutes for the whole test of 15 questions.<br/>Please click on <b>'Start'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 01",
                    title: "Jacke's parents _______ and so I am sure they would love to go the exhibition.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "like very much Picasso's paintings", "like Picasso's paintings very much", "much Picasso's paintings like", "much like Picasso's painthings"
                    ],
                    correctAnswer: "like Picasso's paintings very much"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 02",
                    title: "Did you have any problems ________ our house?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "to find", "finding", "for finding", "find"
                    ],
                    correctAnswer: "finding"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 03",
                    title: "Please don't forget to ring me when you _________ home.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "get", "are going to get", "are getting", "will get"
                    ],
                    correctAnswer: "get"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 04",
                    title: "We __________ a lovely three weeks in the south of Spain last year.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "took", "did", "passed", "spent"
                    ],
                    correctAnswer: "spent"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 05",
                    title: "Suzie and John are planning to get married and ________ a lot of children.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "have", "bring", "get", "make"
                    ],
                    correctAnswer: "have"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 06",
                    title: "I must __________ for being so late.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "regret", "excuse", "apologise", "pardon"
                    ],
                    correctAnswer: "apologise"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 07",
                    title: "How ____________ have you and your family lived in this flat?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "much", "soon", "often", "long"
                    ],
                    correctAnswer: "long"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 08",
                    title: "Skye is a beautiful island off the west __________ of Scotland.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "border", "beach", "edge", "coast"
                    ],
                    correctAnswer: "coast"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 09",
                    title: "If you do well at school you will have the ________ to go to university.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "chance", "luck", "result", "hope"
                    ],
                    correctAnswer: "chance"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 10",
                    title: "We may have a picnic tomorrow but it will depend _________ the weather.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "in", "of", "on", "off"
                    ],
                    correctAnswer: "on"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 11",
                    title: "I love playing table tennis but I'm not very good ________ it.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "in", "with", "for", "at"
                    ],
                    correctAnswer: "at"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 12",
                    title: "It's hot in here - would you mind ______ the window?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "opening", "open", "opened", "to open"
                    ],
                    correctAnswer: "opening"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 13",
                    title: "One of my grandparents __________ born in South Africa.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "are", "is", "was", "were"
                    ],
                    correctAnswer: "is"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 14",
                    title: "Would you like to ________ shopping with me this afternoon?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "do", "go", "make", "get"
                    ],
                    correctAnswer: "go"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 15",
                    title: "I'm very _________ - could I have a glass of water,please?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "empty", "thirsty", "hungry", "dirty"
                    ],
                    correctAnswer: "thirsty"
                }
            ]
       },
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}%</b> </h4>"
};

window.survey = new Survey.Model(json);


// survey
//     .onComplete
//     .add(function (result) {
//         i=1;
//         for (question_n in result.data) {
//             $('#surveyResult').append(
//                 "<div class='container my-2'>"
//                     + question_n + " : " + json.pages[i].questions[0].title
//                     + "<ul class='list-group'>"
//                         + "<li class='list-group-item'>"  + "Your answer : " + result.data[question_n] + "</li>"
//                         + "<li class='list-group-item red'>" + "Correct answer : " + json.pages[i].questions[0].correctAnswer + "</li>"
//                     +"</ul>"
//                 + "</div>"
//             );
//             i += 1;
//         }

//     });

survey
    .onComplete
    .add(function (result) {
        choices="";
        i = 1;
        $('#surveyResult').append(
            "<p> <b>Bold</b> = Your answer</p>"
            + "<p> <span class='red'>Red</span> = Correct answer</p>"
            + "<hr>"
        );


        for(question_num in result.data){
            question_title = json.pages[i].questions[0].title;
            answer_correct = json.pages[i].questions[0].correctAnswer;
            answer = result.data[question_num];

            for (c_num in json.pages[i].questions[0].choices){
                choice = json.pages[i].questions[0].choices[c_num];

                if(choice == answer){
                    if(choice == answer_correct){
                        choices +=
                            "<li class='list-group-item red'>" + "<b>" + choice + "</b>" + "</li>"
                    }
                    else{
                        choices +=
                            "<li class='list-group-item'>" + "<b>" + choice + "</b>" + "</li>"
                    }
                }
                else if(choice == answer_correct){
                    choices +=
                        "<li class='list-group-item red'>" + choice + "</li>"
                }
                else {
                    choices +=
                        "<li class='list-group-item'>" + choice + "</li>"
                }
            }
            $('#surveyResult').append(
                "<div class='container my-3'>"
                + "<ul class='list-group'>"
                + question_num + " : " + question_title
                + choices
                + "</ul>"
                + "</div>"
            );
            i+=1;
            choices="";
        }

        $('#course').css('display','block');
        $('#course').addClass('animated fadeInUp');
        $('#resultElement').css('display','block');
    });
    

survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root = "sq-root sq-root-cb";
        }
    });

$("#surveyElement").Survey({ model: survey });
