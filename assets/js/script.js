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
var GAME_HIGH_SCORE = 7;

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

// Check if there no more time on the timer
var CheckTimeOnTheTimer = function()
{
    if (timerQuiz <= 0)
    {
        timerQuiz = 0;
        game_state = GAME_HIGH_SCORE;
    }
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
        // CheckGameIsOver
        if (game_state == GAME_HIGH_SCORE)
        {
            break;
        }
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
        CheckTimeOnTheTimer();
    } while (menu_choice < STRINGS || menu_choice > NUMBERS);

}

var Output_Data_Types_Menu = function()
{
    GetAnswers_Menu_Data();
}

// Menu condition
var ShowQuestion_Condition = function()
{
    console.log("The condition in and if / else statement is enclosed with _________.");
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
// CheckGameIsOver
         if (game_state == GAME_HIGH_SCORE)
         {
             break;
         }             
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
        CheckTimeOnTheTimer();
    } while (menu_choice < QUOTES || menu_choice > SQUARE_BRACKETS);

}

var Output_Conditon_Menu = function()
{
    GetAnswers_Menu_Condition();
}

// Menu Array
var ShowQuestion_Array= function()
{
    console.log("Arrays in JavaScript can be used to store _________.");
}

var ShowChoiceMenu_Array = function()
{
    var arrays = [ "numbers and strings", "other arrays", "booleans", "all of the above" ] ;
     
    for(var i = 0; i < arrays.length; i++) 
    {
        console.log((i + 1)  + " . " + arrays[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_Array = function()
{
    var NUMBERS_AND_STRINGS = 1;
    var OTHER_ARRAYS = 2;
    var BOOLEANS = 3;
    // all of the above is the right answer
    var ALL_OF_THE_ABOVE = 4;

    var menu_choice = 0;
    
    do
    {
        console.clear();
// CheckGameIsOver
         if (game_state == GAME_HIGH_SCORE)
         {
             break;
         }             
        ShowCurrentHighScoreTimerState();
        ShowQuestion_Array();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_Array());
        if (menu_choice == ALL_OF_THE_ABOVE)
        {
            ShowCorrectMessage();
            break;
        }
        else if (menu_choice == NUMBERS_AND_STRINGS || menu_choice == OTHER_ARRAYS || menu_choice == BOOLEANS)
        {
            ShowWrongMessage();
            PenalizeScore();
            menu_choice = 0;
        }
        CheckTimeOnTheTimer();
    } while (menu_choice < NUMBERS_AND_STRINGS || menu_choice > ALL_OF_THE_ABOVE);

}

var Output_Array_Menu = function()
{
    GetAnswers_Menu_Array();
}

// String value menu
var ShowQuestion_String_Value= function()
{
    console.log("String values must be enclosed within_________ when being assigned to variables.");
}

var ShowChoiceMenu_String_Value = function()
{
    var string_Value = [ "commas", "curly brackets", "quotes", "parenthesis" ] ;
     
    for(var i = 0; i < string_Value.length; i++) 
    {
        console.log((i + 1)  + " . " + string_Value[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_String_Value = function()
{
    var COMMAS = 1;
    // curly bracket is the right answer
    var CURLY_BRACKETS = 2;
    var QUOTES = 3;
    var PARENTHESIS = 4;

    var menu_choice = 0;
    
    do
    {
        console.clear();
// CheckGameIsOver
         if (game_state == GAME_HIGH_SCORE)
         {
             break;
         }             
        ShowCurrentHighScoreTimerState();
        ShowQuestion_String_Value();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_String_Value());
        if (menu_choice == CURLY_BRACKETS)
        {
            ShowCorrectMessage();
            break;
        }
        else if (menu_choice == COMMAS || menu_choice == QUOTES || menu_choice == PARENTHESIS)
        {
            ShowWrongMessage();
            PenalizeScore();
            menu_choice = 0;
        }
        CheckTimeOnTheTimer();
    } while (menu_choice < COMMAS  || menu_choice > PARENTHESIS);

}

var Output_String_Value_Menu = function()
{
    GetAnswers_Menu_String_Value();
}

// useful tool Menu
var ShowQuestion_Useful_Tool = function()
{
    console.log("A very useful tool used during development and debugging for printing content to the debugger is:");
}

var ShowChoiceMenu_Useful_Tool = function()
{
    var useful_Tool = [ "JavaScript", "terminal/Bash", "for loops", "console.log" ] ;
     
    for(var i = 0; i < useful_Tool.length; i++) 
    {
        console.log((i + 1)  + " . " + useful_Tool[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_Useful_Tool = function()
{
    var JAVASCRIPT = 1;
    var TERMINAL_BASH = 2;
    // FOR LOOPS is the right answer
    var FOR_LOOPS = 3;
    var CONSOLE_LOG = 4;

    var menu_choice = 0;
    
    do
    {
        console.clear();
// CheckGameIsOver
         if (game_state == GAME_HIGH_SCORE)
         {
             break;
         }             
        ShowCurrentHighScoreTimerState();
        ShowQuestion_Useful_Tool();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_Useful_Tool());
        if (menu_choice == FOR_LOOPS)
        {
            ShowCorrectMessage();
            break;
        }
        else if (menu_choice == JAVASCRIPT || menu_choice == TERMINAL_BASH || menu_choice == CONSOLE_LOG)
        {
            ShowWrongMessage();
            PenalizeScore();
            menu_choice = 0;
        }
        CheckTimeOnTheTimer();
    } while (menu_choice < JAVASCRIPT  || menu_choice > CONSOLE_LOG);

}

var Output_Useful_Tool = function()
{
    GetAnswers_Menu_Useful_Tool();
}

// ALL DONE Menu
var ShowQuestion_All_Done = function()
{
    console.log("All done!");
    console.log("Your final score is : " +timerQuiz + ".");
    
}

var ShowChoiceMenu_All_Done = function()
{
    console.log("Enter intials : ");
}

var GetAnswers_Menu_All_Done = function()
{
    var menu_choice;
    do
    {
        console.clear();
 // CheckGameIsOver
        if (timerQuiz <= high_Score)
        {
            game_state = GAME_HIGH_SCORE;
            return;
        }            
        ShowCurrentHighScoreTimerState();
        ShowQuestion_All_Done();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_All_Done());
       if(menu_choice != "")
       {
         high_Score_Name = menu_choice;
         high_Score = timerQuiz;
       }
        
    } while (!menu_choice);

}

var Output_All_Done_Menu = function()
{
    GetAnswers_Menu_All_Done();
}

// High scores menu
var ShowQuestion_High_Scores = function()
{
    console.log("High scores");
    console.log("1. " + high_Score_Name + " - " + high_Score + ".");
}

var ShowChoiceMenu_High_Scores = function()
{
    var high_Scores = [ "Go back", "Clear high scores" ] ;
     
    for(var i = 0; i < high_Scores.length; i++) 
    {
        console.log((i + 1)  + " . " + high_Scores[i]);
    }    
    var answer_Choice = "Please enter your choice :";
    return answer_Choice;
}

var GetAnswers_Menu_High_Scores = function()
{
    var GO_BACK = 1;
    var CLEAR_HIGH_SCORES = 2;

    var menu_choice = 0;
    
    do
    {
        console.clear();
        ShowCurrentHighScoreTimerState();
        ShowQuestion_High_Scores();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenu_High_Scores());
        if (menu_choice == GO_BACK)
        {
            game_state = GAME_RESTART;
            break;
        }
        else if (menu_choice == CLEAR_HIGH_SCORES)
        {
            high_Score = 0;
            high_Score_Name = "Nobody";
            menu_choice = 0;
        }
    } while (menu_choice !=  GO_BACK);

}

var Output_High_Scores_Menu = function()
{
    GetAnswers_Menu_High_Scores();
}

// Game Logic
var GameLogic = function()
{
    while(timerQuiz >= 0 && game_state != GAME_OVER)
    {
    Output_Data_Types_Menu();
    Output_Conditon_Menu();
    Output_Array_Menu();
    Output_String_Value_Menu();
    Output_Useful_Tool();
    if (game_state == GAME_HIGH_SCORE)
    {
        break;   
    }
    game_state = GAME_OVER;
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
            GameLogic();
            break;
        case GAME_OVER:
            Output_All_Done_Menu();
            game_state = GAME_HIGH_SCORE;
            break;
        case GAME_HIGH_SCORE:
            Output_High_Scores_Menu();
            break;
            default:break;
    }

}


