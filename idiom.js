let idioms = [

  {
    idiom: "ARCHIBALD, WE MUST CONFRONT THE ELEPHANT IN THE ROOM!",
    options: [
      { answer: "You wish to discuss a huge problem with Archibald that no-one wants to talk about (eg his bad breath).", isCorrect: true },
      { answer: "You are annoyed that Archibald has bought furniture that is too large for your home.", isCorrect: false },
      { answer: "A large and unwelcome person that is in your living room, in this case - the mother of Archibald.", isCorrect: false }
    ],
    swalGood: "You are going to spend the night in luxury at the Savoy Hotel!",
    swalBad: "Yikes... Instead of a night at the Savoy, you will spend the night in a youth hostel in Hackney.",
    chosen: null
  },
  {
    idiom: "THIS MORNING PRUNELLA WENT COLD TURKEY.",
    options: [
      { answer: "She ate the leftovers of a previous roast dinner in a sandwich for breakfast.", isCorrect: false },
      { answer: "Prunella gave up something from one day to the next that was quite addictive eg Nutella.", isCorrect: true },
      { answer: "Prunella left the house in cold weather with very little clothes on, revealing a lot of skin.", isCorrect: false }
    ],
    swalGood: "You have won afternoon tea at the Ritz with Kate Moss!",
    swalBad: "Bad luck! Instead of afternoon tea at the Ritz, you will go to a cafe in Hackney!",
    chosen: null
  },
  {
    idiom: "MAVIS AND PERCIVAL ARE AS THICK AS THIEVES!",
    options: [
      { answer: "Mavis and Percival have dropped out of school and embarked on a life of crime.", isCorrect: false },
      { answer: "They are very close and secretive with each other.", isCorrect: true },
      { answer: "Mavis and Percival are astonishingly and unbelievable stupid.", isCorrect: false }
    ],
    swalGood: "Let's have a delicious lunch in Chinatown!",
    swalBad: "We are going to Chinatown, but instead of a wonderful lunch you can just buy a bag of prawn crackers!",
    chosen: null
  },
  {
    idiom: "RUPERT, WILL YOU PLEASE HOLD YOUR HORSES!",
    options: [
      { answer: "Please control your mother-in-law, Rupert.", isCorrect: false },
      { answer: "Please Rupert do control your farm animals or children!", isCorrect: false },
      { answer: "Oh Rupert, please relax and slow down.", isCorrect: true }
    ],
    swalGood: "You have won a night out with the Spice Girls!",
    swalBad: "You are going for your night out to a pub in Wembley for a game of darts with my high school maths teacher instead of dancing with the Spice Girls!",
    chosen: null
  },
  {
    idiom: "OOOH, DICKIE... SUCH A PIECE OF CAKE!",
    options: [
      { answer: "Dickie is a person that is desirable and flirtatious with a nice bottom.", isCorrect: false },
      { answer: "Someone is talking to Dickie about a task that is very easy to do.", isCorrect: true },
      { answer: "Someone is talking to Dickie about a fantastic restaurant that few people know about.", isCorrect: false }
    ],
    swalGood: "we're going to see Big Ben!",
    swalBad: "Oh dear! No Problem, let's go and go and see Big Ben to cheer you up!",
    chosen: null
  },
  {
    idiom: "PUT A SOCK IN IT JEREMY - I WILL NOT TELL YOU AGAIN.",
    options: [
      { answer: "Jeremy needs to stop talking because he is rather annoying.", isCorrect: true },
      { answer: "Jeremy should pack underwear in his luggage before a holiday as he always forgets.", isCorrect: false },
      { answer: "Jeremy should resolve an urgent plumbing problem by using an old sock or his underwear.", isCorrect: false }
    ],
    swalGood: "You have £500 to spend shopping on Carnaby Street!",
    swalBad: "You have £5 to spend on Carnaby Street (good luck with finding anything in London for that price...).",
    chosen: null
  }, 
  {
    idiom: "OH GERTRUDE MY DEAR, PLEASE DO KEEP YOUR SHIRT ON...",
    options: [
      { answer: "Gertrude's romance with you is moving too fast and you aren't ready to get physical.", isCorrect: false },
      { answer: "You wish Gertrude would remain calm and stop panicking.", isCorrect: true },
      { answer: "You think Gertrude is incredibly stylish and wish to enquire where her shirt is from", isCorrect: false }
    ],
    swalGood: "You are going to have a decadent dinner with Jamie Oliver!",
    swalBad: "Sorry - instead of dinner with Jamie Oliver, you are going to the nearest fish and chip shop!",
    chosen: null
  },
  {
    idiom: "GOSH WINIFRED - DO YOU HAVE A FROG IN YOUR THROAT?",
    options: [
      { answer: "Winifred is choking alarmingly on a large piece of bread or potato, possibly cheese.", isCorrect: false },
      { answer: "Winifred has such horribly bad breath that I feel the immediate need to vomit.", isCorrect: false },
      { answer: "Winifred has a hoarse irritated voice when she speaks.", isCorrect: true }
    ],
    swalGood: "Let us go for a Martini (shaken not stirred) with James Bond! ",
    swalBad: "Sorry, no Martini and no 007, but I think you can refill your waterbottle in a toilet somewhere...",
    chosen: null
  },
  {
    "idiom": "IN ALL HONESTY, ARTHUR... IT'S ALL GREEK TO ME",
    "options": [
      { "answer": "It's completely incomprehensible.", "isCorrect": true },
      { "answer": "You and Arthur are having a brilliant time, as if on a sunny Greek beach!", "isCorrect": false },
      { "answer": " You admit to him that you cannot cook to save your life and live on Greek takeaways.", "isCorrect": false }
    ],
    swalGood: "You will be transported all through London today in a stretch limo with champagne and snacks!",
    swalBad: "Sorry! Instead of a limo with snacks, you will have to use the underground, buses, or go on foot today - no taxis!",
    chosen: null
  },
  {
    idiom: "I HAD TO BITE MY TONGUE AT DINNER WITH HORATIO.",
    options: [
      { answer: "To accidentally choke loudly and embarassingly in public while eating a meal.", isCorrect: false },
      { answer: "To be unable to respond to Horatio because you are keeping a secret from him.", isCorrect: true },
      { answer: "To be given an extremely bad dinner from Horatio and to have to eat it out of politeness.", isCorrect: false },
    ],
    swalGood: "You are going on the London Eye, enjoy the view!",
    swalBad: "Instead of enjoying the view from the London Eye, you are going to gaze up at it!",
    chosen: null
  },
];
 // Add more idioms here



let currentIndex = -1; // after clicking on the start-button, you start with the first element in the array[0]
let targetElement = document.getElementById("prize"); // chose your div in which the results are shown "id=prize"
let divElement = document.createElement("div"); // create a div container, in which all the <p>-elements will be shown

let oopsFartSound = new Audio("wet-fart-6139.mp3");
oopsFartSound.volume = 0.2
let tadaSound = new Audio("tada-fanfare-a-6313.mp3");
tadaSound.volume = 0.2

function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) { // randomiser
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
    
  }
  return array;
}
idioms = randomizeArray(idioms); 

function checkAnswer(userAnswer) {
  let currentIdiom = idioms[currentIndex];
  let options = currentIdiom.options;
  let correctAnswer = options.find((option) => option.isCorrect);

  idioms[currentIndex].chosen = userAnswer === correctAnswer.answer ? true : false;
  let isUserChoiceCorrect=idioms[currentIndex].chosen; 

  if (isUserChoiceCorrect) {
    tadaSound.play();
    swal.fire ({
      position: "top",
      icon: "success",
      title: "Splendidly done!",
      text: currentIdiom.swalGood
    }); //sounds
  } else {
    oopsFartSound.play();
    swal.fire ({
      position: "top",
      icon: "error",
      title: "Rotten luck, Old Chap!!",
      text: currentIdiom.swalBad
    });
  }
  //isUserChoiceCorrect ? alert("Correct! " + currentIdiom.alertGood) : alert(currentIdiom.alertBad); // the elements alertGood and alertBad are declared in the array
  
  let wonPrizeText = isUserChoiceCorrect ? idioms[currentIndex].swalGood : "";
  console.log("swalGood: " + idioms[currentIndex].swalGood);
  let pElement = document.createElement("p"); // create a <p></p> element
  pElement.id="rightAnswers"; // set the id property "rightAnswers" to play with css
  pElement.textContent = wonPrizeText; // put the text inside the <p>"wonPrizeText"</p> element
  if (isUserChoiceCorrect) divElement.appendChild(pElement); // append the pElement to the overall list inside the DivElement only if the isUserChoiceCorrect is set "true"
  nextQuestion(); // after answering a question, the next question appears
}

function nextQuestion() {
  //startConfetti();

  let button = document.getElementById("start");
  button.style.display = "none"; // after clicking the first time on the button, it dissapears

  let indexDisplay = document.getElementById("indexDisplay"); // the Div HTML-Element where the Index is shown id="indexDisplay"
  let totalCorectDisplay = document.getElementById("totalCorect"); // the Div HTML-Element where the totalCorrect answer is shown (id="totalCorect")

  if (currentIndex < idioms.length - 1) {
    currentIndex++;
    indexDisplay.textContent =
      "Question " + (currentIndex + 1) + " of " + idioms.length; // showing in which page the user is and how many there are altogether
    showQuestion();
  } else {
    // The quiz is over now, it's time to hide the quiz and show the results
    confetti();
    targetElement.appendChild(divElement); // show the collected <p></p> in divElement at the div with the id ="prize"
    let quizContainerElement = document.getElementById("quizContainer");
    quizContainerElement.style.display = "none";
    let countRightAnswer = divElement.childElementCount;
    totalCorectDisplay.textContent = countRightAnswer + " out of " + idioms.length;

    let yourWinsElement = document.getElementById("yourWins");
    yourWinsElement.style.visibility = "visible";
  }
}

function showQuestion() {
  let currentIdiom = idioms[currentIndex];
  let idiomElement = document.getElementById("idiom");
  let optionsElement = document.getElementById("options");
  idiomElement.textContent = currentIdiom.idiom;

  // Clear options before adding new ones
  optionsElement.innerHTML = "";

  currentIdiom.options.forEach((option, index) => {
    let divButtonElement = document.createElement ("div");
    let optionElement = document.createElement("button");
    optionElement.textContent = option.answer;
    divButtonElement.appendChild(optionElement)
    optionElement.setAttribute("onclick", `checkAnswer("${option.answer}")`);
    

    // optionsElement.appendChild(optionElement);
    objectOptionsElement=optionsElement.appendChild(divButtonElement);

    console.log(divButtonElement);   
  });
}