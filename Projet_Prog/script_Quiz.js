function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Réponse 1") {
		correct++;
	}
	if (question2 == "Réponse 2") {
		correct++;
	}		
	if (question3 == "Réponse 3") {
		correct++;
	}
	if (question4 == "Réponse 1") {
		correct++;
	}
	if (question5 == "Réponse 3") {
		correct++;
	}
	if (question6 == "Réponse 1") {
		correct++;
	}
	if (question7 == "Réponse 3") {
		correct++;
	}
	if (question8 == "Réponse 2") {
		correct++;
	}
	if (question9 == "Réponse 1") {
		correct++;
	}
	if (question10 == "Réponse 2") {
		correct++;
	}
	
	var messages = ["We know that you can do better !",
					"Almost the average !",
					"It's pretty good !",
					"Almost the perfection !",
					"Congratulations ! You know everything so, everything is perfect !!"];
	var score;

	if (correct >= 0 && correct < 4) {
		score = 0;
	}

	if (correct == 4) {
		score = 1;
	}

	if (correct >= 5 && correct <= 7) {
		score = 2;
	}

	if (correct == 8 && correct <= 9) {
		score = 3;
	}

	if (correct == 10) {
		score = 4;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}