// declaring variables
const start = document.getElementById("start");
const form = document.getElementById("form");
const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progrss = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//20 questions in the array 
let questions = [
  {
    question: "Where does F1's British Grand Prix take place",
    imgSrc: "img/Silverstone.svg.png",
    choiceA: "Silverstone circuit",
    choiceB: "Brands Hatch circuit",
    choiceC: "Oulton Park circuit",
    correct: "A",
  },
  {
    question: "This sportsperson hung up their spikes at the IAAF World Championships in Athletics in August",
    imgSrc: "img/ans2.jpg",
    choiceA: "Yohan Blake",
    choiceB: "Usain Bolt",
    choiceC: "Asafa Powell",
    correct: "B",
  },
  {
    question: " With 202 clean sheets, which goalkeeper has the best record in the Premier League",
    imgSrc: "img/petr_cech.jpg",
    choiceA: "David Seaman",
    choiceB: "Mark Schwarzer",
    choiceC: "Petr Čech ",
    correct: "C",
  },
  {
    question: "Which country does Messi play for?",
    imgSrc: "img/Argentina.svg.png",
    choiceA: "Argentina",
    choiceB: "Brazil",
    choiceC: "France",
    correct: "A",
  },
  {
    question: "Who was the man of the match of 2011 world cup final",
    imgSrc: "img/msd.jpg",
    choiceA: "Mahendra Singh Dhoni",
    choiceB: "Gautam Gambhir",
    choiceC: "Yuvraj Singh",
    correct: "A",
  },
  {
    question: "COVID-19 is caused by which virus",
    imgSrc: "img/corona.jpg",
    choiceA: "SARS",
    choiceB: "MARS",
    choiceC: "MERS",
    correct: "A",
  },
  {
    question: " Which state/UT cabinet approved the doorstep ration delivery scheme named ‘Mukhya Mantri Ghar Ghar Ration Yojana’? ",
    imgSrc: "img/kejriwal.jpg",
    choiceA: "UP",
    choiceB: "Assam",
    choiceC: "Delhi",
    correct: "C",
  },
  {
    question: "Name the COVID vaccine manufactured by India",
    imgSrc: "img/covaxin.jpg",
    choiceA: "COVAXIN ",
    choiceB: "COVAX-19 ",
    choiceC: "CoronaVac",
    correct: "A",
  },
  {
    question: "World environment day 2020 Theme",
    imgSrc: "img/bio.jpg",
    choiceA: "Bioenergy",
    choiceB: "Biodiversity",
    choiceC: "Bioreserve ",
    correct: "B",
  },
  {
    question: "Who am I ? HINTS: came to life from DRDO, used as a spy, deployed in Ladakh",
    imgSrc: "img/bharat.jpg",
    choiceA: "Bharat",
    choiceB: "Flying machine",
    choiceC: "Robot 20.0",
    correct: "A",
  },
  {
    question: "What movie is this?",
    imgSrc: "img/AntMan.jpg",
    choiceA: "Spiderman",
    choiceB: "Ant-man",
    choiceC: "Captain America",
    correct: "B",
  },
  {
    question: "Who won the Brit Award for Best Female Solo Artist in 2020?",
    imgSrc: "img/mabel.jpg",
    choiceA: "Mabel",
    choiceB: "FKA Twigs",
    choiceC: "Mahalia ",
    correct: "A",
  },
  {
    question: " Guess the movie",
    imgSrc: "img/chennai.jpg",
    choiceA: "Chennai Express",
    choiceB: "Om Shanti Om",
    choiceC: "Break Ke Baad",
    correct: "A",
  },
  {
    question: "In the series ‘Pataal Lok’ Which area fell under the jurisdiction of Inspector Hathi Ram Chaudhary?",
    imgSrc: "img/Paatal_Lok.jpg",
    choiceA: "Maujpur",
    choiceB: "Outer Jamuna paar",
    choiceC: "Jaffrabad",
    correct: "B",
  },
  {
    question: "What show is Baby Yoda from?",
    imgSrc: "img/mandolian.jpg",
    choiceA: "The Mandalorian",
    choiceB: "Star Wars: The Clone Wars",
    choiceC: "Guardians of the Galaxy",
    correct: "A",
  },
  {
    question: "This metallic element is a liquid at room temperature. It is:",
    imgSrc: "img/mercury.jpg",
    choiceA: "Bromine",
    choiceB: "Mercury",
    choiceC: "Zinc",
    correct: "B",
  },
  {
    question: "The shape of DNA is known as?",
    imgSrc: "img/dna.jpg",
    choiceA: "Double helix",
    choiceB: "Coiled",
    choiceC: "Circular",
    correct: "A",
  },
  {
    question: " Which planet in our solar system is farthest from the sun?",
    imgSrc: "img/neptune.jpg",
    choiceA: "Neptune",
    choiceB: "Jupiter",
    choiceC: "Saturn",
    correct: "A",
  },
  {
    question: "Who invented the light bulb?",
    imgSrc: "img/Thomas_Edison2.jpg",
    choiceA: "Benjamin Franklin",
    choiceB: "Thomas Alva Edison",
    choiceC: "Ruthaford",
    correct: "B",
  },
  {
    question: "What kind of computer component is shown",
    imgSrc: "img/motherboard.jpg",
    choiceA: "CPU",
    choiceB: "Modem card",
    choiceC: "Mother board",
    correct: "C",
  },
];
//since array length starts from 0
const lastQuestion = questions.length - 1;
//initializing the running question to 0
let runningQuestion = 0;
let count = 0;
//time duration for each question = 15 seconds
const questionTime = 15;
//Timer gauge is 150
const gaugeWidth = 150;
//gaugeunit keeps changing every second
const gaugeUnit = gaugeWidth / questionTime;
// declaring timer variable and initializing score to 0
let TIMER;
let score = 0;
//Used to generate random color
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
//change the background color
function changeBackgroundColor() {
  let colorBg = document.getElementById("top-container");
  colorBg.style.backgroundColor = generateRandomColor();
}
//Change Background Text
function changeBackgroundText() {
  let textBg = document.getElementById("text-bg");
  if (textBg.innerHTML == "ARE") textBg.innerHTML = "YOU";
  else if (textBg.innerHTML == "YOU") textBg.innerHTML = "READY?";
  else if (textBg.innerHTML == "READY?") textBg.innerHTML = "ARE";
}
//calling all the functions sir in popup i want to display username

function checkbg() {
  generateRandomColor();
  changeBackgroundColor();
  changeBackgroundText();
}
//changes the background color and text every 0.5 seconds
setInterval(checkbg, 500);
//generate a welcome message entered through form
function writeName() {
  var welcomeMsg = document.getElementById('welcome');
  var name = document.getElementById('name');
  welcomeMsg.innerHTML = "Welcome " + name.value + "</br>";
}

//function to display questions
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
//function to start quiz onclick of startQuiz
start.addEventListener("click", startQuiz);
function startQuiz() {
  start.style.display = "none";
  form.style.display = "none";
  welcome.style.display = "none"
  //display the questions and hiding the form,start and welcome
  renderQuestion();
  quiz.style.display = "block";
  //calling progress and counter to track the score and time
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}
//locates the current question we are on,
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
//checks for the time
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    answerIsWrong();
    var wrong = new Audio("sounds/Wrong-answer-sound-effect.mp3");
    wrong.play();
    //checks if this is the last question
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      clearInterval(TIMER);
      togglePopup();
    }
  }
}

//check if the answer is correct or wrong
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
    var correct = new Audio("sounds/Correct-answer.mp3");
    correct.play();
  } else {
    answerIsWrong();
    var wrong = new Audio("sounds/Wrong-answer-sound-effect.mp3");
    wrong.play();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    togglePopup();
  }
}
//changing the color if answer is correct or wrong
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//pop of the score
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
  scoreDiv.style.display = "block";

  const scorePercent = Math.round((100 * score) / questions.length);

  let img =
    scorePercent >= 80
      ? "img/5.png"
      : scorePercent >= 60
        ? "img/4.png"
        : scorePercent >= 40
          ? "img/3.png"
          : scorePercent >= 20
            ? "img/2.png"
            : "img/1.png";
  var name1 = document.getElementById('name').value;
  localStorage.setItem('name', name1);
  document.getElementById('nameContainer').innerHTML = name1 + "<p>your percentage is</p>";
  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";
}


