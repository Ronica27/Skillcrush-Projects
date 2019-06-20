$(document).ready(function(){
	
	var magic8Ball = {};
	var answerArray = ["yes", "no", "maybe"];
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	magic8Ball.askQuestion = function(question)
	{
		var randomNum = Math.random()*(answerArray.length);
		var indexOfRan = Math.floor(randomNum);
		var answer = answerArray[indexOfRan];
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		console.log(answer);
		$("#answer").text(answer)
		$("#answer").fadeIn(4000);
	}	
var questionForm = function()
{
	$("#answer").hide();
	var question = prompt("Ask me a yes/no question");
	magic8Ball.askQuestion(question);
	$("#8ball").effect("shake");
}
	$("#questionButton").click(questionForm);
});
