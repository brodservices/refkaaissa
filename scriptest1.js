$("#carouselFade").carousel();
jQuery(window).load(function () {
  /*
        Stop carousel
    */
  $(".carousel").carousel("pause");
});

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}





var questions = [
  {
    question: "كم عدد المرات التي تقدم فيها الروبوت الى الامام ؟ ",
    choices: ['	ست مرات', "	سبع مرات ", "	خمس مرات "],
    correctAnswer: 0,
  },
  {
    question: "ماذا كان الاختيار حتى تقدم الروبوت الى الامام ست مرات ؟؟",
    choices: ["	Touch Sensor", "	Time", "	Count  "],
    correctAnswer: 2,
  },
  {
    question:
      " ما نوع التكرار الذي استخدم في المقطع البرمجي ؟؟  ",
    choices: ["	التكرار المحدد	", "التكرار الشرطي", "	 التكرار اللانهائي"],
    correctAnswer: 0,
  },
  {
    question: "ماذا يعني التكرار الشرطي باللغة الإنجليزية",
    choices: ["	Counted Loop", "	While loop", "	Infinite loop"],
    correctAnswer: 0,
  },
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener("DOMContentLoaded", function (e) {
  displayCurrentQuestion();

  var quizMessage = document.querySelector(".quizMessage");

  quizMessage.style.display = "none";

  document.querySelector(".nextButton").addEventListener("click", function () {
    if (!quizOver) {
      var radioBtnsChecked = document.querySelector(
        "input[type=radio]:checked"
      );

      if (radioBtnsChecked === null) {
        quizMessage.innerText = "من فضلك قم بالاختيار أولا";
        quizMessage.style.display = "block";
      } else {
        console.log(radioBtnsChecked.value);
        quizMessage.style.display = "none";
        if (
          parseInt(radioBtnsChecked.value) ===
          questions[currentQuestion].correctAnswer
        ) {
          correctAnswers++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          document.querySelector(".nextButton").innerText = "ابدأ من جديد ؟";
          quizOver = true;
        }
      }
    } else {
      quizOver = false;
      document.querySelector(".nextButton").innerText = "السؤال الموالي";
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
    }
  });
});

function displayCurrentQuestion() {
  console.log("In display current Questions");

  var question = questions[currentQuestion].question;
  var questionClass = document.querySelector(".quizContainer > .question");
  var choiceList = document.querySelector(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  //Set the questionClass text to the current question
  questionClass.innerText = question;

  //Remove all current <li> elements (if any)
  choiceList.innerHTML = "";

  var choice;
  for (i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    var li = document.createElement("li");
    li.innerHTML =
      '<li><input type="radio" value="' +
      i +
      '" name="dynradio" />' +
      choice +
      "</li>";
    choiceList.appendChild(li);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}

function displayScore() {
  document.querySelector(".quizContainer > .result").innerText =
    "نتيجتك هي : " + correctAnswers + " من " + questions.length;
  document.querySelector(".quizContainer > .result").style.display = "block";
}

function hideScore() {
  document.querySelector(".result").style.display = "none";
}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

// {
//     question: 'ماذا كان الاختيار حتى تقدم الروبوت الى الامام ست مرات ؟؟',
//     choices: ['	Time', '	Count', '	Touch Sensor'],
//     correctAnswer: 1
// },
// {
//     question: 'ما نوع التكرار الذي استخدم في المقطع البرمجي ؟؟',
//     choices: ['	التكرار المحدد', '	التكرار اللانهائي', '	التكرار الشرطي'],
//     correctAnswer: 2
// },
// {
//     question: 'ماذا يعني التكرار المحدد باللغة الإنجليزية؟؟',
//     choices: ['	While loop', '	Infinite loop', '	Counted Loop'],
//     correctAnswer: 2
// },
// {
//     question: 'What is a baby goose called?',
//     choices: ['gooser', 'gosling', 'gup', 'pup'],
//     correctAnswer: 1
// }
