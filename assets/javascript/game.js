//make the game an object

//make each question an object inside of the game with:
	//question
	//answer choices
	//picture

//timer counting down, restarts with each question

//on load, start button
//press start for first question
//questions are buttons with hover
//click an answer question replaced with if correct or incorrect, answer choices replaced with a gif (if the answer was wrong displays "The Correct Answer was: XXX" over the gif)
//setTimeout function to display revealed answer

//automatically goes to the next question

//when the timer runs out of time, automatically reveals answer page

//when game is over, no more timer shows number of correct answers, number of wrong answers, number of unanswered questions and a start over button 
//click on the start game over button (doesn't reload page, resets game) 
$("#startButton").on("click", function() {
	$("#startButton").attr("style", "display: none");
	$("#time, #question, #answers").attr("style", "display: block");
});