var addition = [
{},
{question: "2+2=?", answer: "4"}, 
{question: "4+4?", answer: "8"},  
{question: "9+1=?", answer: "10"},   
]

var division = [
{},
{question: "6/2=?", answer: "3"}, 
{question: "20/10=?", answer: "2"},  
{question: "25/5=?", answer: "5"},   
]

var subtraction = [
{},
{question: "4-0=?", answer: "4"}, 
{question: "6-2=?", answer: "4"},  
{question: "5-3=?", answer: "2"},   
]

var score= 0;

function showQuestion(topic, amount){
  var index= amount/ 100;
  var question=" ";
  var answer=" ";
  if(topic == "addition")
{
  question = addition[index].question;
answer = addition[index].answer;
}
  
else if (topic== "division") {
  question = division[index].question;
  answer = division[index].answer;
}
  else if (topic == "subtraction") {
    question = subtraction[index].question;
    answer = subtraction[index].answer;
  }

var potentialAnswer = window.prompt(question)
if (potentialAnswer == answer) {
   score= score + amount;
   var scores = document.getElementsByClassName("_score");
   for (var i = 0; i < scores.length; i++)
   {
       scores[i].innerHTML = "Score: $" + score;
   }
   window.alert("You're Correct!");
}
  
else{
  window.alert("Wrong. Please Try Again.");
}
}
