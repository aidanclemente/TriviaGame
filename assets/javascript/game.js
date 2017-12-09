//make the game an object
var quiz = {

	names: ["ralph", "lisa", "homer", "bart", "skinner", "flanders", "marge", "burns", "lurleen", "devilFlanders"],

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

		 flanders: {
		 	question: " What's the name of the store that Ned owns in the mall?",
		 	choices: {
			 		a: "Helter Shelter",
			 		b: "Lefties",
			 		c: "Holy Rollers",
			 		d: "The Leftorium"
			 	},
		 	value: "d",
		 		correctAnswer: "The Leftorium",
		 	gif: "assets/gifs/flanders.gif",
		 	correctSound: "assets/music/correct/nedHotDiggity.wav",
		 	wrongSound: "assets/music/wrong/bartMustYou.wav",
		 },

		 marge: {
		 	question: "Which of the following WASN'T Marge against??",
		 	choices: {
			 		a: "The Monorail",
			 		b: "Legalized gambling",
			 		c: "Itchy and Sratchy",
			 		d: "Sugar Company"
			 	},
		 	value: "b",
		 	correctAnswer: "Legalized gambling",
		 	gif: "assets/gifs/marge.gif",
		 	correctSound: "assets/music/correct/bartEatMyShorts.wav",
		 	wrongSound: "assets/music/wrong/bartOuttaHere.wav",
		 },

		 burns: {
		 	question: "Who owns the Nuclear Power Plant?",
		 	choices: {
			 		a: "Mr. Burns",
			 		b: "Moe",
			 		c: "Barney",
			 		d: "Waylon Smithers"
			 	},
		 	value: "a",
		 	correctAnswer: "Mr. Burns",
		 	gif: "assets/gifs/burns.gif",
		 	correctSound: "assets/music/correct/pishPosh.wav",
		 	wrongSound: "assets/music/wrong/haHa.wav",
		 },

		 lurleen:  {
		 	question: "What country music artist did Colonel Homer manage?",
		 	choices: {
			 		a: "Ginger",
			 		b: "Lurleen",
			 		c: "Candy",
			 		d: "Miss Hoover"
			 	},
		 	value: "b",
		 	correctAnswer: "Lurleen",
		 	gif: "assets/gifs/lurleen.gif",
		 	correctSound: "assets/music/correct/boring.mp3",
		 	wrongSound: "assets/music/wrong/bartAyCaramba.wav",
		 },

		 devilFlanders: {
		 	question: "What character turns into the Devil?",
		 	choices: {
			 		a: "Flanders",
			 		b: "Lisa",
			 		c: "Krusty the Clown",
			 		d: "Barney"
			 	},
		 	value: "a",
		 		correctAnswer: "Flanders",
		 	gif: "assets/gifs/devilFlanders.gif",
		 	correctSound:"assets/music/correct/homerDonut.wav",
		 	wrongSound: "assets/music/wrong/senseofhumor.wav",
		 },
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

		if (quiz.correctAnswers + quiz.wrongAnswers + quiz.unanswered < quiz.names.length)	{
			$("#question").html(quiz.trivia[y].question);
			$("#gif").attr("style", "display: none");
			$("#time").attr("style", "display: block");
			$("#choices, .choice").attr("style", "display: block");
			$("#choice1").html("a. " + quiz.trivia[y].choices.a);
			$("#choice2").html("b. " + quiz.trivia[y].choices.b);
			$("#choice3").html("c. " + quiz.trivia[y].choices.c);
			$("#choice4").html("d. " + quiz.trivia[y].choices.d);	
		} else {
			$("#gif").attr("style", "display: none");
			$("#choices").attr("style", "display: block");
			$("#question").html("All done, here's how you did!")
			$("#choices").html("Correct Answers: " + quiz.correctAnswers + "<br> Incorrect Answers: " + quiz.wrongAnswers + "<br> Unanswered: " + quiz.unanswered)
		};

		
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
		}
	},

	stopTimer: function() {
		timerRunning = false;
		clearInterval(intervalId);
		$("#time").attr("style", "display: none");
	},

	answerCheck: function() {
		//which answer they choose
		var selected = this.value;
		quiz.stopTimer();

			var x = quiz.names[quiz.index];
		
			if (selected == ""){
				quiz.unanswered++;
				console.log("this is running");
				$("#question").html("Wrong! The correct answer was &nbsp" + quiz.trivia[x].correctAnswer);
				$("#audio").attr("src", quiz.trivia[x].wrongSound);
				$("#gif").attr("style", "display: block");
				$("#gif").html("<img src="+ quiz.trivia[x].gif +">");
				$("#choices").attr("style", "display: none");
				quiz.index++;
				setTimeout(quiz.questions, 1000 * 5);
			}	else if (selected == quiz.trivia[x].value) {
				quiz.correctAnswers++;
				$("#question").html("Correct!")
				$("#audio").attr("src", quiz.trivia[x].correctSound);
				$("#gif").attr("style", "display: block");
				$("#gif").html("<img src="+ quiz.trivia[x].gif +">");
				$("#choices").attr("style", "display: none");
				quiz.index++;
				//setTimeout(quiz.endGame, 1000 * 5);
				setTimeout(quiz.questions, 1000 * 5);
			} else {
				quiz.wrongAnswers++;
				$("#question").html("Wrong! The correct answer was &nbsp" + quiz.trivia[x].correctAnswer);
				$("#audio").attr("src", quiz.trivia[x].wrongSound);
				$("#gif").attr("style", "display: block");
				$("#gif").html("<img src="+ quiz.trivia[x].gif +">");
				$("#choices").attr("style", "display: none");
				quiz.index++;
				//setTimeout(quiz.endGame, 1000 * 5);
				setTimeout(quiz.questions, 1000 * 5);
			};
		
			console.log(quiz.names[quiz.index]);
	},

	// endGame: function() {

	// 	if (quiz.correctAnswers + quiz.wrongAnswers + quiz.unanswered === quiz.names.length) {
	// 		$("#gif").attr("style", "display: none");
	// 		$("#choices").attr("style", "display: block");
	// 		$("#question").html("All done, here's how you did!")
	// 		$("#choices").html("Correct Answers: " + quiz.correctAnswers + "<br> Incorrect Answers: " + quiz.wrongAnswers + "<br> Unanswered: " + quiz.unanswered)

	// 	// Need to add play again button to restart game
	// 	}
	// },

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
