// scripts here:
var timer = 30;

var intervalId;


function run() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease timer by one.
  timer--;

//  Show the timer in the #show-timer tag.
  $("#show-timer").html("<h2>" + timer + "</h2>");


  //  Once timer hits zero...
  if (timer === 0) {

  //  ...run the stop function.
  stop();

  //  Alert the user that time is up.
  alert("Time Up!");
  }
}

//The stop function
function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
  clearInterval(intervalId);
}

run();




function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			$(".answer1").html('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			$(".answer2").html('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			$(".answer3").html('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			$(".answer").html('correctString4', 4);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "<h4>Your Score is: </h4>" + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};


		
		document.querySelector("#game").innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});

