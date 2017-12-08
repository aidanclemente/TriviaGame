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
		 	value: "c",
		 	correctAnswer: "Ralph",
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
		 	value: "d",
		 	correctAnswer: "Saxo-mo-phone",
		 	gif: "assets/gifs/lisa.gif",
		 	correctSound: "assets/music/correct/bartBigDeal.wav",
		 	wrongSound: "assets/music/wrong/doh2.mp3",
		 },

		 homer: {
		 	question: "What's Homer's favorite beverage?",
		 	choices: {
			 		a: "An All-syrup Squishee",
			 		b: "Duff Beer",
			 		c: "Illegal Bathtub Hooch",
			 		d: "Flaming Moe",
			 	},
		 	value: "b",
		    correctAnswer: "Duff Beer",
		 	gif: "assets/gifs/homer.gif",
		 	correctSound: "assets/music/correct/homerBeer.wav",
		 	wrongSound: "assets/music/wrong/burp.wav",
		 },

		 bart: {
		 	question: "Which one of these is not a catchphrase Bart uses?",
		 	choices: {
			 		a: "Don't have a cow, man!",
			 		b: "Eat my shorts",
			 		c: "Woohoo",
			 		d: "Aye Carumba!"
			 	},		 
		 	value: "c",
		 		correctAnswer: "Woohoo",
		 	gif: "assets/gifs/bart.gif",
		 	correctSound: "assets/music/correct/bartCowabunga.wav",
		 	wrongSound: "assets/music/wrong/bartWrong.wav",
		 },

		 skinner: {
		 	question: " What is Seymour Skinner's occupation?",
		 	choices: {
			 		a: "Elementary School Principal",
			 		b: "Bus Driver",
			 		c: "Teacher",
			 		d: "Bartender"
			 	},
		 	value: "a",
		 		correctAnswer: "Elementary School Principal",
		 	gif: "assets/gifs/skinner.gif",
		 	correctSound: "assets/music/correct/bartYea.wav",
		 	wrongSound: "assets/music/wrong/bartBuckleDown.wav",
		 },

		 // marge: {
		 // 	question:
		 // 	choices: {
			 	// 	a: "Bart",
			 	// 	b: "Milhouse",
			 	// 	c: "Ralph",
			 	// 	d: "Gerald"
			 	// },
		 // 	value: "b",
		 //		correctAnswer: "Duff beer",
		 // 	gif: "assets/gifs/skinner.gif",
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
		 // 	value: "b",
		 //		correctAnswer: "Duff beer",
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
		 // 	value: "b",
		 //		correctAnswer: "Duff beer",
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
		 // 	value: "b",
		 //		correctAnswer: "Duff beer",
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
		 // 	value: "b",
		 //		correctAnswer: "Duff beer",
		 // 	gif:
		 // 	correctSound:
		 // 	wrongSound:
		 //},
	},

	intervalId: "",
	timerRunning: false,
	correctAnswers: 0,
	wrongAnswers: 0,
	unanswered: 0,
	seconds: 30,
	index: 0,

	start:  function() {
		$("#audio").attr("src", "assets/music/bartHell.wav");
		$("#startButton").attr("style", "display: none");
		$("#time, #question, #choices, .choices").attr("style", "display: block");
		quiz.questions();
	},

	questions: function() {
		quiz.seconds = 30;
		var y = quiz.names[quiz.index];
		quiz.timer();
		$("#question").html(quiz.trivia[y].question);
		$("#gif").attr("style", "display: none");
		$("#time").attr("style", "display: block");
		$("#choices, .choice").attr("style", "display: block");
		$("#choice1").html("a. " + quiz.trivia[y].choices.a);
		$("#choice2").html("b. " + quiz.trivia[y].choices.b);
		$("#choice3").html("c. " + quiz.trivia[y].choices.c);
		$("#choice4").html("d. " + quiz.trivia[y].choices.d);
	},


	timer: function() {
		timerRunning = true;
		var s = quiz.seconds;
		quiz.seconds--;

		$("#time").html("Time Remaining: " + s + " Seconds");
		intervalId = setTimeout(quiz.timer, 1000);

		if (s == 0) {
			quiz.stopTimer();
			quiz.answerCheck();
			unanswered++;
		}
	},

	stopTimer: function() {
		timerRunning = false;
		clearInterval(intervalId);
		$("#time").attr("style", "display: none");
	},

// stopTimer is not working correctly!!!!!!!!!!!!!!!!!!!!!!!!!!


	answerCheck: function() {
		//which answer they choose
		var selected = this.value;
		quiz.stopTimer();

			var x = quiz.names[quiz.index];
		
			if (selected == quiz.trivia[x].value) {
				quiz.correctAnswers++;
				$("#question").html("Correct!")
				$("#audio").attr("src", quiz.trivia[x].correctSound);
				$("#gif").attr("style", "display: block");
				$("#gif").html("<img src="+ quiz.trivia[x].gif +">");
				$("#choices").attr("style", "display: none");
				quiz.index++;
				quiz.endGame();
				setTimeout(quiz.questions, 1000 * 5);
			} else {
				quiz.wrongAnswers++;
				$("#question").html("Wrong! The correct answer was &nbsp" + quiz.trivia[x].correctAnswer);
				$("#audio").attr("src", quiz.trivia[x].wrongSound);
				$("#gif").attr("style", "display: block");
				$("#gif").html("<img src="+ quiz.trivia[x].gif +">");
				$("#choices").attr("style", "display: none");
				quiz.index++;
				quiz.endGame();
				setTimeout(quiz.questions, 1000 * 5);
			};
		
			console.log(quiz.names[quiz.index]);
	},

	endGame: function() {

		if (quiz.correctAnswers + quiz.wrongAnswers + quiz.unanswered === quiz.names.length) {
			$("#gif").attr("style", "display: none");
			$("#choices").attr("style", "display: block");
			$("#question").html("All done, here's how you did!")
			$("#choices").html("Correct Answers: " + quiz.correctAnswers + "<br> Incorrect Answers: " + quiz.wrongAnswers + "<br> Unanswered: " + quiz.unanswered)
		}
	},

};


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
$("#startButton").click(quiz.start);

$(".choice").click(quiz.answerCheck);
