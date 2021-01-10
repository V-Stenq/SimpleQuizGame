const answerButtons = document.getElementsByClassName("answerButton");
const questionArea = document.getElementById("questionArea");
const resultModal = document.getElementById("answerModal");
const modalBtn = document.getElementById('modalButton')
const resultBanner = document.getElementById('resultBanner');
const resultIcon = document.querySelector(".resultIcon");

var qCounter = Math.floor((Math.random() * 8) + 1);
var testObject = [{
    question: "what is meatball in swedish?",
    answer1: "Köttbulle",
    answer2: "Salad",
    answer3: "Pasta",
    correctanswer: "Köttbulle",
  },
  {
    question: "what is Falusausage in swedish?",
    answer1: "Pasta",
    answer2: "Salad",
    answer3: "Falukorv",
    correctanswer: "Falukorv",
  },
  {
    question: "What is the capital of the USA?",
    answer1: "New York",
    answer2: "Washington",
    answer3: "Miami",
    correctanswer: "Washington",
  },
  {
    question: "what is Nuclear energy based on?",
    answer1: "Fusion",
    answer2: "Fission",
    answer3: "Rick and morty",
    correctanswer: "Fission",
  },
  {
    question: "what does 3x2 equal?",
    answer1: "2",
    answer2: "6",
    answer3: "12",
    correctanswer: "6",
  },
  {
    question: "what does BC stand for?",
    answer1: "Before Christ",
    answer2: "Before Church",
    answer3: "Be Chill",
    correctanswer: "Before Christ",
  },
  {
    question: "what is the the answer to life?",
    answer1: "Beer",
    answer2: "Donuts",
    answer3: "Pizza",
    correctanswer: "Pizza",
  },
  {
    question: "what is at the center of a black hole?",
    answer1: "The Singularity",
    answer2: "Santa Claus",
    answer3: "A wormhole to a new galaxy",
    correctanswer: "The Singularity",
  },

]

questionArea.innerHTML = testObject[qCounter].question;

let testFunction = (e) => {
  console.log(testObject[qCounter].correctanswer);
  checkAnswer(e.target.innerHTML);
  console.log(qCounter);
}

var checkAnswer = (enteredAnswer) => {
  console.log(enteredAnswer);
  if (enteredAnswer == testObject[qCounter].correctanswer) {
    console.log("You were Correct!");
    resultModal.style.display = "flex";
    resultBanner.innerHTML = "You were Correct"
    resultIcon.src ="icons/correct.svg"

  } else if (enteredAnswer != testObject[qCounter].correctanswer) {
    console.log("You were Wrong!");
    resultBanner.innerHTML = "You were Wrong"
    resultModal.style.display = "flex";
    resultIcon.src ="icons/cancel.svg"
  }
}

var generateQstn = () => {
  qCounter = Math.floor((Math.random() * 8) + 1);
  questionArea.innerHTML = testObject[qCounter].question;
  resultModal.style.display = "none";
  generateAnswers();
}

modalBtn.addEventListener('click', generateQstn);

var generateAnswers = () => {
  var answers = Object.values(testObject[qCounter]);
  for (var i = 0; i <= 3; i++) {
    answerButtons[i].innerHTML = answers[i + 1];
  }
}

for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', testFunction);
}

window.onload = generateAnswers();
