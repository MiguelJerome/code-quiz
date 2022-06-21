var timerQuiz = 0;
var high_Score = 0;
var high_Score_Name = "Nobody";

// intialise the game state
 var INITIALISE_GAME = 0;
var GAME_MENU = 1;
var START_GAME = 2;
var GAME_RUN = 3;
var GAME_RESTART = 4;
var GAME_OVER = 5;
var GAME_EXIT = 6;

var game_state = INITIALISE_GAME;

// Message ask Enter your choice

var AskEnterYourChoice = function()
{
    console.log("Please enter your choice :");
}

// everything about timers
var ResetTimerQuiz= function()
{
    timerQuiz = 75;
    
}

var PenalizeScore = function()
{
    timerQuiz -= 10;
}

var ShowCurrentHighScoreTimerState= function()
{
    console.log("Leader High Scores : " + high_Score_Name + " = " + high_Score + "\t\t\t\t\t\t\t\t\t Time :" + timerQuiz);
}


// Message Comment Grade on Answer for a question
var ShowCorrectMessage = function()
{
    console.log("Correct!");
}

var ShowWrongMessage = function()
{
    console.log("Wrong!");
}

// main menu Quiz
var ShowQuestionMenuMain = function()
{
    console.log("Coding Quiz Challenge");
    console.log("Try to answer the following code related questions within the time limit.");
    console.log("Keep in mind that incorrect answers will penelize your score/time");
    console.log("by ten seconds!");
}

var ShowChoiceMenuMain = function()
{
    var answer_Choice = "Please press 1 to start the quiz :";
    return answer_Choice;
}

var GetAnswersMain = function()
{
    var START_QUIZ = 1;
    var menu_choice = START_QUIZ;
    do
    {   
        console.clear();
        ShowCurrentHighScoreTimerState();
        ShowQuestionMenuMain();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenuMain());
    }while(menu_choice != START_QUIZ);
}

var OutputMainMenu = function()
{
    GetAnswersMain(); 
}

// Menu data type
var ShowQuestion_Data_types = function()
{
    console.log("Common used data types DO Not Include");
}

var ShowChoiceMenu_Data_types = function()
{
    var data_Types = [ "strings", "booleans", "alerts", "numbers" ] ;
     
    for(var i = 0; i < data_Types.length; i++) 
    {
        console.log((i + 1) + " . " + data_Types[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_Data = function()
{
    var STRINGS = 1;
    // booleans is the right answer
    var BOOLEANS = 2;
    var ALERTS = 3;
    var NUMBERS = 4;

    var menu_choice = 0;
    
    do
    {
        console.clear();
        ShowCurrentHighScoreTimerState();
        ShowQuestion_Data_types();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_Data_types());
        if (menu_choice == BOOLEANS)
        {
            ShowCorrectMessage();
            break;
        }
        else if (menu_choice == STRINGS || menu_choice == ALERTS || menu_choice == NUMBERS)
        {
            ShowWrongMessage();
            PenalizeScore();
            menu_choice = 0;
        }
    } while (menu_choice < STRINGS || menu_choice > NUMBERS);

}

var Output_Data_Types_Menu = function()
{
    GetAnswers_Menu_Data();
}

// Menu condition
var ShowQuestion_Condition = function()
{
    console.log("The condition in and if / else statement is enclosed with _________.")
}

var ShowChoiceMenu_Condition = function()
{
    var condition = [ "quotes", "curly brackets", "parenthesis", "square brackets" ] ;
     
    for(var i = 0; i < condition.length; i++) 
    {
        console.log((i + 1)  + " . " + condition[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_Condition = function()
{
    var QUOTES = 1;
    var CURLY_BRACKETS = 2;
    // parenthesis is the right answer
    var PARENTHESIS = 3;
    var SQUARE_BRACKETS = 4;

    var menu_choice = 0;
    
    do
    {
        console.clear();
        ShowCurrentHighScoreTimerState();
        ShowQuestion_Condition();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_Condition());
        if (menu_choice == PARENTHESIS)
        {
            ShowCorrectMessage();
            break;
        }
        else if (menu_choice == QUOTES || menu_choice == CURLY_BRACKETS || menu_choice == SQUARE_BRACKETS)
        {
            ShowWrongMessage();
            PenalizeScore();
            menu_choice = 0;
        }
    } while (menu_choice < QUOTES || menu_choice > SQUARE_BRACKETS);

}

var Output_Conditon_Menu = function()
{
    GetAnswers_Menu_Condition();
}


var GameLogic = function()
{
    while(timerQuiz >= 0 && game_state != GAME_OVER)
    {
    Output_Data_Types_Menu();
    Output_Conditon_Menu();
    }
}

while(game_state != GAME_EXIT)
{
    switch (game_state)
    {
        case INITIALISE_GAME:
            ResetTimerQuiz();
            game_state = GAME_MENU;
            break;
        case GAME_MENU:
            OutputMainMenu();
            game_state = START_GAME;
            break;
        case START_GAME:
            game_state = GAME_RUN;
            break;
        case GAME_RESTART:
            game_state = INITIALISE_GAME;
            break;
        case GAME_RUN:
            console.clear();
            GameLogic();
            break;
        case GAME_OVER:
            game_state = GAME_RESTART;
            break;
            default:break;
    }

}


