//make the game an object
var quiz = {

	names: ["ralph", "lisa", "homer", "bart", "skinner", "marge", "burns", "lurleen", "flanders", "devilFlanders"],

	trivia: {
//make each question an object inside of the game with:
	//question
	//answer choices
	//picture
	//sound for correct/wrong
		 ralph: {
		 	question: "Who is Cheif Wiggum's son?",
		 	choices: {
		 		a: "Bart",
		 		b: "Milhouse",
		 		c: "Ralph",
		 		d: "Gerald"
		 	},
		 	answer: "c",
		 	gif: "assets/gifs/ralph.gif",
		 	correctSound: "assets/music/correct/chooseMe.mp3",
		 	wrongSound: "assets/music/wrong/failEnglish.mp3",
		 },

		 lisa: {
		 	question: "According to Homer, what musical instrument does Lisa play?",
		 	choices:{
		 		a: "Drums",
		 		b: "Saxaphone",
		 		c: "Trumpet",
		 		d: "Saxo-mo-phone"
		 	},		 	
		 	answer: "d",
		 	gif: "assets/gifs/lisa.gif",
		 	correctSound: "assets/music/correct/bartBigDeal.wav",
		 	wrongSound: "assets/music/wrong/doh2.mp3",
		 },

		 // homer: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // bart: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },		 
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // skinner: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // marge: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // burns: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // lurleen:  {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // flanders: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 // },

		 // devilFlanders: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	answer:
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 //},
	},

	correctAnswers: 0,
	wrongAnswers: 0,
	seconds: 30,

	startTimer: function() {
	$("#time").html("Time Remaining: " + quiz.seconds + " Seconds");
quiz.timer();
	},

	start:  function() {
	$("#startButton").attr("style", "display: none");
	$("#time, #question, #choices, #choice1, #choice2, #choice3, #choice4").attr("style", "display: block");
	quiz.startTimer();
			$("#question").html(quiz.trivia.ralph.question);
			$("#question").css("color", "black");
			$("#choice1").html("a. " + quiz.trivia.ralph.choices.a);
			$("#choice2").html("b. " + quiz.trivia.ralph.choices.b);
			$("#choice3").html("c. " + quiz.trivia.ralph.choices.c);
			$("#choice4").html("d. " + quiz.trivia.ralph.choices.d);
		
	},


		// for (var i = 0; i < quiz.names.length; i++) { 
		// 	var y = quiz.names[i];
		// 	$("#question").html(quiz.trivia[y].question);
		// 	$("#question").css("color", "black");
		// 	$("#choice1").html("a. " + quiz.trivia[y].choices.a);
		// 	$("#choice2").html("b. " + quiz.trivia[y].choices.b);
		// 	$("#choice3").html("c. " + quiz.trivia[y].choices.c);
		// 	$("#choice4").html("d. " + quiz.trivia[y].choices.d);
		// }

	timer: function() {
		var s = quiz.seconds--;

		$("#time").html("Time Remaining: " + s + " Seconds");
		setTimeout(quiz.timer, 1000);
	},

	
// This is not working correctly!!!!!!!!!!!!!!!!!!!!!!!!!!
	answerCheck: function() {
		var selected = this.value;

		for (var i = 0; i < quiz.names.length; i++) {

			var x = quiz.names[i];
		
			if (selected == quiz.trivia[x].answer) {
				quiz.correctAnswers++;
				$("#question").html("Correct!")
				$("#audio").attr("src", quiz.trivia[x].correctSound);
				$("#choices").html("<img src="+ quiz.trivia[x].gif +">");
			} else {
				quiz.wrongAnswers++;
				$("#question").html("Wrong! The correct answer was Ralph");
				$("#audio").attr("src", quiz.trivia[x].wrongSound);
				$("#choices").html("<img src="+ quiz.trivia[x].gif +">");
			};
			console.log(quiz.names[i]);
		};
	},

	togglePlay: function() {
	  return audio.paused ? audio.play() : audio.pause();
	}

}


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


//++++++++++Start Game++++++++++++++++++
$("#startButton").on("click", quiz.start);

$(".choice").on("click", quiz.answerCheck);

$("#startButton").on("click", quiz.togglePlay)