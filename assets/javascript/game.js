$(document).ready(function() {
	var quiz = {

		names: ["ralph", "lisa", "homer", "bart", "skinner", "flanders", "marge", "burns", "lurleen", "devilFlanders"],

		trivia: {

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
			 	correctSound: "assets/music/correct/bartAyCaramba.wav",
			 	wrongSound: "assets/music/wrong/pishPosh.wav",
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
			 	wrongSound: "assets/music/wrong/haHa.wav",
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
			$("#time, #question, #choices, .choices").css("display", "block");
			$("#startButton, #results").css("display", "none");
			
			quiz.questions();
		},

		questions: function() {
			quiz.seconds = 20;
			//Which Character Object
			//z is global
			z = quiz.names[quiz.index];

			if (quiz.correctAnswers + quiz.wrongAnswers + quiz.unanswered < quiz.names.length)	{
				quiz.timer();
				$("#question").html(quiz.trivia[z].question);
				$("#choices, .choice, #time").css("display", "block");
				$("#gif").css("display", "none");
				$("#choice1").html("a. " + quiz.trivia[z].choices.a);
				$("#choice2").html("b. " + quiz.trivia[z].choices.b);
				$("#choice3").html("c. " + quiz.trivia[z].choices.c);
				$("#choice4").html("d. " + quiz.trivia[z].choices.d);	
			} else {
				quiz.stopTimer();
				
				$("#results").css("display", "block");
				$("#gif").css("display", "none");
				$("#question").html("All done, here's how you did!")
				$("#results").html("Correct Answers: &nbsp<strong>" + quiz.correctAnswers + "</strong><br> Incorrect Answers:   &nbsp<strong>" + quiz.wrongAnswers + " </strong><br> Unanswered:   &nbsp<strong>" + quiz.unanswered + "</strong>")
				quiz.button();
			};		
		},

		wrong: function() {
			$("#question").html("Wrong!");
			$("#audio").attr("src", quiz.trivia[z].wrongSound);
			$("#choices").css("display", "none");
			$("#gif").css("display", "block");
			$("#gif").html("The correct answer was &nbsp <strong>" + quiz.trivia[z].correctAnswer +"</strong><br><img src="+ quiz.trivia[z].gif +">");
			quiz.index++;
			setTimeout(quiz.questions, 1000 * 4);
		},

		timer: function() {
			timerRunning = true;
			var s = quiz.seconds;
			quiz.seconds--;

			$("#time").html("Time Remaining: " + s + " Seconds");
			intervalId = setTimeout(quiz.timer, 1000);

			if (s == 0) {
				quiz.stopTimer();
				quiz.wrong();
				quiz.unanswered++;
			}
		},

		stopTimer: function() {
			timerRunning = false;
			clearInterval(intervalId);
			$("#time").css("display", "none");
		},

		answerCheck: function() {
			//which answer they choose
			var selected = this.value;
			quiz.stopTimer();

				 if (selected == quiz.trivia[z].value) {
					quiz.correctAnswers++;
					$("#question").html("Correct!")
					$("#audio").attr("src", quiz.trivia[z].correctSound);
					$("#gif").css("display", "block");
					$("#choices").css("display", "none");				
					$("#gif").html("<img src="+ quiz.trivia[z].gif +">");
					quiz.index++;
					setTimeout(quiz.questions, 1000 * 4);
				} else {
					quiz.wrongAnswers++;
					quiz.wrong();
				};
		},

		button: function() {
			$("#restart").css("display", "block");
		},

		playAgain: function() {
			quiz.correctAnswers = 0;
			quiz.wrongAnswers = 0;
			quiz.unanswered = 0;
			quiz.seconds = 30;
			quiz.index = 0;

			quiz.start();
			$("#restart").css("display", "none");
		},
	};

//++++++++++Start Game++++++++++++++++++
$("#startButton").click(quiz.start);

$(".choice").click(quiz.answerCheck);

$("#restart").click(quiz.playAgain);
});