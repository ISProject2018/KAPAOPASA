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
                    html: "You are about to start knowledge test. <br/>You have 2 minutes for every page and 40 minutes for the whole test of 20 questions.<br/>Please click on <b>'Start'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 01",
                    title: "Which word is negative",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Optimistic", "Polite", "Diligent", "Rude"
                    ],
                    correctAnswer: "Rude"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 02",
                    title: "Which is not correct?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Can you tell me where the park is please?", "I have ever been to London", "Do you know where the tourist is?", "I'm sorry I haven't get a map"
                    ],
                    correctAnswer: "Can you tell me where the park is please?"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 03",
                    title: "_____ do you travel to the WSE centre?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "How", "Can", "Where", "Who"
                    ],
                    correctAnswer: "How"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 04",
                    title: "Accommodation and full board _____ $179 per participant.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "room rate", "is room rate", "is costing about", "cost about"
                    ],
                    correctAnswer: "cost about"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 05",
                    title: "Which one is incorrect?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "You have chosen a great café.", "Your answer was very good too.", "You spoke very well in the public speaking contest.", "The book was very intersted, especially the first part."
                    ],
                    correctAnswer: "The book was very intersted, especially the first part."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 06",
                    title: "Which sentence has no mistakes?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "I have been to high school from 2006-2010.", "We have studied English since 2 months.", "Have you ever taken time off school to go on holiday?", "Lena is here for about 2 months already."
                    ],
                    correctAnswer: "Lena is here for about 2 months already."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 07",
                    title: "Why exactly are islands so important for wildlife?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Because they are home to many birds and reptiles.", "Because islands have produced many different species.", "Because islands always suffer from most extinctions.", "Because evolution is inhibited on islands."
                    ],
                    correctAnswer: "Because they are home to many birds and reptiles."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 08",
                    title: "I gave the vital customer the wrong order so I had to _____.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "compliment him", "complement him", "confuse him", "compensate him"
                    ],
                    correctAnswer: "compensate him"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 09",
                    title: "In the year 2018 most people ____ have flying cars.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "must", "will", "would", "may"
                    ],
                    correctAnswer: "will"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 10",
                    title: "Can you ____ me through to Helen please?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "put", "pass", "ask", "give"
                    ],
                    correctAnswer: "put"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 11",
                    title: "Delegates are not _____",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "auditoriums", "attendees", "conference-goers", "representatives"
                    ],
                    correctAnswer: "auditoriums"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 12",
                    title: "We have wanted to go to Mexico ____ I saw a film about it.",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "when", "since", "owing to", "before"
                    ],
                    correctAnswer: "owing to"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 13",
                    title: "Which word doesn’t belong in the group?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Foreign", "Exotic", "Alien", "Extinct"
                    ],
                    correctAnswer: "Extinct"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 14",
                    title: "Which is not correct",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "The city is almost completely ruined.", "I'm interested in science.", "The restaurant makes you smoke.", "We've been on a wonderful trip today."
                    ],
                    correctAnswer: "I'm interested in science."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 15",
                    title: "____ a compliment",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Pay", "Earn", "Sell", "Borrow"
                    ],
                    correctAnswer: "Earn"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 16",
                    title: "Which of these words is negative?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Distinctive", "Intimate", "Terrifying", "Picturesque"
                    ],
                    correctAnswer: "Terrifying"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 17",
                    title: "Which is not a common phrase?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "The more the merrier.", "Better luck next time.", "Don't worry – my lips are sealed.", "Stop staring at me and take a photo."
                    ],
                    correctAnswer: "Stop staring at me and take a photo."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 18",
                    title: "Which means a mix of chemicals that can kill someone or something if eaten?",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Poison", "Campaign", "Ecologist", "Tonne"
                    ],
                    correctAnswer: "Poison"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 19",
                    title: "Which is a vegetable, not an animal:",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Aubergine", "Lobster", "Lamb", "Goose"
                    ],
                    correctAnswer: "Aubergine"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 20",
                    title: "Which is correct:",
                    choicesOrder: "random",
                    isRequired: true,
                    choices: [
                        "Before crossing the street look both ways.", "This is a one-direction street.", "Could you tell me how to get to Paris?", "Before to set off, have your car serviced."
                    ],
                    correctAnswer: "Could you tell me how to get to Paris?"
                }
            ]
        }
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
