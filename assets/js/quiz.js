let correctScore = 5;
let wrongScore = -1;
let myScore = 0;

let answer1 = document.getElementById("ans1");
let answer2 = document.getElementById("ans2");
let answer3 = document.getElementById("ans3");
let answer4 = document.getElementById("ans4");
let disabledAnswBtn = "";

let question = document.getElementById("question");
let result = document.getElementsByClassName("result")[0];
let checkBtn = document.getElementById("checkBtn");

let currentScore = document.getElementById('currentScore');
let questionIterator = 1;
let clicked = "";
let clickedBtn = "";

const quiz = [
  {
    quest: "Which day is Halloween in 2022?",
    ans: [
      { ans1: "Monday, 31 October", isCorrect: true },
      { ans2: "Sunday, 30 October", isCorrect: false },
      { ans3: "Tuesday, 01 November", isCorrect: false },
      { ans4: "Wednesday, 02 November", isCorrect: false },
    ],
  },
  {
    quest: "What is the name of the pot witches use to cook up their potions?",
    ans: [
      { ans1: "Magic cooking pot", isCorrect: false },
      { ans2: "Cauldron", isCorrect: true },
      { ans3: "Black pot", isCorrect: false },
      { ans4: "Wok", isCorrect: false },
    ],
  },
  {
    quest: 'Where does the term "jack o\'lantern" come from?',
    ans: [
      { ans1: "from a Swedish village", isCorrect: false },
      { ans2: "from an Irish folktale", isCorrect: true },
      { ans3: "from an Icelandic lake", isCorrect: false },
      { ans4: "None of them", isCorrect: false },
    ],
  },
  {
    quest: "When was Halloween first celebrated in the United States?",
    ans: [
      { ans1: "1778", isCorrect: false },
      { ans2: "1840", isCorrect: true },
      { ans3: "1914", isCorrect: false },
      { ans4: "1960", isCorrect: false },
    ],
  },
  {
    quest: "Why did people start dressing up in Halloween costumes?",
    ans: [
      { ans1: "because it is fun", isCorrect: false },
      { ans2: "to disguise themselves when the spirits come", isCorrect: true },
      { ans3: "to see the otherworld", isCorrect: false },
      {
        ans4: "to repel spirits that they believed came back to Earth",
        isCorrect: false,
      },
    ],
  },
  {
    quest:
      "What vegetable is part of a tradition on the night before Halloween?",
    ans: [
      { ans1: "Pepper", isCorrect: false },
      { ans2: "Cucumber", isCorrect: false },
      { ans3: "Cabbage(Kale)", isCorrect: true },
      { ans4: "Pumpkin", isCorrect: false },
    ],
  },
  {
    quest: "Why do some people wear clothes inside out on Halloween?",
    ans: [
      { ans1: "to see a witch at midnight", isCorrect: true },
      { ans2: "to transform into an animal", isCorrect: false },
      { ans3: "to save the planet", isCorrect: false },
      { ans4: "to make a deal with the devil", isCorrect: false },
    ],
  },
  {
    quest: "What is the most commercially successful horror movie of all time?",
    ans: [
      { ans1: "Paranormal Activity", isCorrect: false },
      { ans2: "Deliver Us from Evil", isCorrect: false },
      { ans3: "Alien", isCorrect: false },
      { ans4: "It", isCorrect: true },
    ],
  },
  {
    quest: "What was used before pumpkins to make jack o'lanterns?",
    ans: [
      { ans1: "Watermelon", isCorrect: false },
      { ans2: "Beetroots", isCorrect: false },
      { ans3: "Onions", isCorrect: false },
      { ans4: "Potatoes", isCorrect: true },
    ],
  },
  {
    quest: "What does the black cat symbolize?",
    ans: [
      { ans1: "Power and strength", isCorrect: false },
      { ans2: "Life and death", isCorrect: false },
      { ans3: "Mystery and secrecy", isCorrect: true },
      { ans4: "Freedom and vanity", isCorrect: false },
    ],
  },
];

function initFirstPage() {
  let userName = localStorage.getItem('userName');
  let username1 = document.getElementById('username1');
  username1.innerText = userName
  question.innerText = quiz[0].quest;

  answer1.innerText = quiz[0].ans[0].ans1;
  answer2.innerText = quiz[0].ans[1].ans2;
  answer3.innerText = quiz[0].ans[2].ans3;
  answer4.innerText = quiz[0].ans[3].ans4;
}
initFirstPage();

function getNewQuestion() {
  resetButtonsStyles();
  setAnswerButtons(false);
  question = document.getElementById("question");
  if (quiz.length === questionIterator){
    game_overHtml()
  }

  answer1.innerText = quiz[questionIterator].ans[0].ans1;
  answer2.innerText = quiz[questionIterator].ans[1].ans2;
  answer3.innerText = quiz[questionIterator].ans[2].ans3;
  answer4.innerText = quiz[questionIterator].ans[3].ans4;

  questionIterator++;
}

answer1.addEventListener("click", () => {
  answer1.style.border = "4px solid black";
  answer2.style.border = "none";
  answer3.style.border = "none";
  answer4.style.border = "none";
  clicked = 0;
  clickedBtn = answer1;
});
answer2.addEventListener("click", () => {
  answer2.style.border = "3px solid black";
  answer1.style.border = "none";
  answer3.style.border = "none";
  answer4.style.border = "none";
  clicked = 1;
  clickedBtn = answer2;
});
answer3.addEventListener("click", () => {
  answer3.style.border = "4px solid black";
  answer2.style.border = "none";
  answer1.style.border = "none";
  answer4.style.border = "none";
  clicked = 2;
  clickedBtn = answer3;
});
answer4.addEventListener("click", () => {
  answer4.style.border = "4px solid black";
  answer2.style.border = "none";
  answer3.style.border = "none";
  answer1.style.border = "none";
  clicked = 3;
  clickedBtn = answer4;
});

function checkCorrectAnswer() {
  if (quiz[questionIterator-1].ans[clicked].isCorrect) {
    checkBtn.style.background = "green";
    clickedBtn.style.background = "green";
    myScore += correctScore;
    currentScore.innerText = myScore;
    localStorage.setItem('myScore', myScore)
  } else {
    checkBtn.style.background = "red";
    clickedBtn.style.background = "red";
    myScore += wrongScore;
    currentScore.innerText = myScore;
    localStorage.setItem('myScore', myScore)
  }
  setAnswerButtons(true);
}

function setAnswerButtons(condition) {
  if (condition) {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    checkBtn.disabled = true;
  } else {
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    checkBtn.disabled = false;
  }
}

function resetButtonsStyles() {
  answer1.style.background = "#9415b0";
  answer2.style.background = "#9415b0";
  answer3.style.background = "#9415b0";
  answer4.style.background = "#9415b0";
  checkBtn.style.background = "#9415b0";
  answer1.style.border = "none";
  answer2.style.border = "none";
  answer3.style.border = "none";
  answer4.style.border = "none";
}

function game_overHtml(){
  window.open("game_over.html", "_self");
}