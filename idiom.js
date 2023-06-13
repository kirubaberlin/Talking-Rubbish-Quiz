let idioms = [
  /*
  {
    idiom: "ARCHIBALD, WE MUST CONFRONT THE ELEPHANT IN THE ROOM!",
    options: [
      { answer: "Something everyone knows but is uncomfortable to talk about", isCorrect: true },
      { answer: "The frustration of having bought furniture that is too large for your home.", isCorrect: false },
      { answer: "A large and unwelcome person that is in your living room, perhaps on your sofa", isCorrect: false }
    ],
    alertGood: "You are going to spend the night at the Savoy Hotel!",
    alertBad: "Yikes... Instead of a night at the Savoy, you will spend the night in Hackney.",
    chosen: null
  },
  {
    idiom: "THIS MORNING I DECIDED TO GO COLD TURKEY. MY NUTELLA HABIT WAS GETTING OUT OF HAND.",
    options: [
      { answer: "To eat the leftovers of a previous night's roast dinner in a sandwich", isCorrect: false },
      { answer: "To give up something from one day to the next that was addictive", isCorrect: true },
      { answer: "To leave the house in cold weather with very little clothes on and showing a lot of skin", isCorrect: false }
    ],
    alertGood: "You have won afternoon tea at the Ritz with Victoria Beckham.",
    alertBad: "Bad luck! Instead of tea at the Ritz, you will go to a cafe at the nearest Underground!",
    chosen: null
  },
  {
    idiom: "HAVE YOU NOTICED THAT THEY ARE AS THICK AS THIEVES",
    options: [
      { answer: "To drop out of school and turm to crime.", isCorrect: false },
      { answer: "To be very close and secretive with one or more person", isCorrect: true },
      { answer: "To be astonishingly and unbelievable stupid", isCorrect: false }
    ],
    alertGood: "Let's have a three course meal in Chinatown!",
    alertBad: "Nope. We are still going to Chinatown, but instead of a three course meal, you can just buy a bag of prawn crackers!",
    chosen: null
  },
  {
    idiom: "IT'S TOO MUCH, DARLING, PLEASE HOLD YOUR HORSES.",
    options: [
      { answer: "Please control your mother-in-law.", isCorrect: false },
      { answer: "Please control your pets. farm animals or children", isCorrect: false },
      { answer: "Please relax and slow down", isCorrect: true }
    ],
    alertGood: "You have won a night out in Cirque Le Soir for a night out the the Spice Girls!",
    alertBad: "You are going for your night out to a pub in Wembley for a game of darts with my high school maths teacher instead of boogying with the Spice Girls!",
    chosen: null
  },
  {
    idiom: "OOOH.... A PIECE OF CAKE, BABY!",
    options: [
      { answer: "A person that is desirable and flirtatious.", isCorrect: false },
      { answer: "A task that is very easy to do", isCorrect: true },
      { answer: "A thing that is very good and but a thing that few people know about", isCorrect: false }
    ],
    alertGood: "Let's go and see Big Ben!",
    alertBad: "Oh dear! No Problem, let's go and go and see Big Ben and cheer you up!",
    chosen: null
  },
  {
    idiom: "PUT A SOCK IN IT, PLEASE - I WILL NOT TELL YOU AGAIN, JEREMY.",
    options: [
      { answer: "To be quiet", isCorrect: true },
      { answer: "To remember to pack underwear in your luggage before a holiday", isCorrect: false },
      { answer: "To resolve a leaky tap or a plumbing problem by using an old sock.", isCorrect: false }
    ],
    alertGood: "Fantastic, all your trips are going to be in a limousine!",
    alertBad: "Well, I hope the public transit isn't too crowded for your trips.",
    chosen: null
  }, */
  {
    idiom: "DARLING... PLEASE KEEP YOUR SHIRT ON...",
    options: [
      { answer: "Our romance is moving too fast and I am not ready to take it to the next level and get physical", isCorrect: false },
      { answer: "Please remain calm.", isCorrect: true },
      { answer: "Your sense of style rocks! Where did you get that shirt/dress/trousers?", isCorrect: false }
    ],
    alertGood: "You are going to have lunch with Jamie Oliver at his restaurant!",
    alertBad: "Sorry - instead of lunch with Jamie Oliver, you are going to the nearest fish and chip shop!",
    chosen: null
  },
  {
    idiom: "GOSH - DO YOU HAVE A FROG IN YOUR THROAT?",
    options: [
      { answer: "To be choking on a large piece of bread or potato, perhaps cheese.", isCorrect: false },
      { answer: "To be unable to respond to a question about a topic you know nothing about.", isCorrect: false },
      { answer: "To have a hoarse irritated voice.", isCorrect: true }
    ],
    alertGood: "Let us go for gourmet whiskey tasting at Vinters with James Bond! ",
    alertBad: "Sorry, no booze, but water is probably healthier, I think there you can refill your waterbottle somewhere...",
    chosen: null
  },
  {
    "idiom": "IN HONESTY... IT'S ALL GREEK TO ME",
    "options": [
      { "answer": "It's completely incomprehensible.", "isCorrect": true },
      { "answer": "We are having a great time, like sunny Greek beaches!", "isCorrect": false },
      { "answer": "All classical music sounds the same to me.", "isCorrect": false }
    ],
    "alertGood": "You will be transported all through London today in a stretch limo with snacks and goodies.",
    "alertBad": "Sorry! Instead of a limo with snacks, you will have to use the underground, buses, or go on foot today - no taxis!",
    "chosen": null
  },
  {
    idiom: "GOD. I JUST HAD TO BITE MY TONGUE AT DINNER LAST NIGHT.",
    options: [
      { answer: "To accidentally bite your own tongue while eating a delicous meal because you are eating too fast.", isCorrect: false },
      { answer: "To be unable to say anything because it is a secret.", isCorrect: true },
      { answer: "To be invited to a very bad dinner and to try to eat it and be polite.", isCorrect: false },
    ],
    alertGood: "You are going on the London Eye!",
    alertBad: "Incorrect! Instead of enjoying the view from the London Eye, you are going to gaze up at it!",
    chosen: null
  },
];
 // Add more idioms here

let currentIndex = -1; // after clicking on the start-button, you start with the first element in the array[0]
let targetElement = document.getElementById("prize"); // chose your div in which the results are shown "id=prize"
let divElement = document.createElement("div"); // create a div container, in which all the <p>-elements will be shown

function checkAnswer(userAnswer) {
  let currentIdiom = idioms[currentIndex];
  let options = currentIdiom.options;
  let correctAnswer = options.find((option) => option.isCorrect);

  idioms[currentIndex].chosen = userAnswer === correctAnswer.answer ? true : false;
  let isUserChoiceCorrect=idioms[currentIndex].chosen; // for clear coding!!, I set this var "isUserChoiceCorrect" true/false
  
  isUserChoiceCorrect ? alert("Correct! " + currentIdiom.alertGood) : alert(currentIdiom.alertBad); // the elements alertGood and alertBad are declared in the array
  
  let wonPrizeText = isUserChoiceCorrect ? idioms[currentIndex].alertGood : "";
  let pElement = document.createElement("p"); // create a <p></p> element
  pElement.id="rightAnswers"; // set the id property "rightAnswers" to play with css
  pElement.textContent = wonPrizeText; // put the text inside the <p>"wonPrizeText"</p> element
  if (isUserChoiceCorrect) divElement.appendChild(pElement); // append the pElement to the overall list inside the DivElement only if the isUserChoiceCorrect is set "true"
  nextQuestion(); // after answering a question, the next question appears
}

function nextQuestion() {
  let button = document.getElementById("start");
  button.style.display = "none"; // after clicking the first time on the button, it dissapears

  let indexDisplay = document.getElementById("indexDisplay"); // the Div HTML-Element where the Index is shown id="indexDisplay"
  let totalCorectDisplay = document.getElementById("totalCorect"); // the Div HTML-Element where the totalCorrect answer is shown (id="totalCorect")

  if (currentIndex < idioms.length - 1) {
    currentIndex++;
    indexDisplay.textContent =
      "Question " + (currentIndex + 1) + " of " + idioms.length; // showing in which page the user is and how many there are alltogether
    showQuestion();
  } else {
    // The quiz is over now, it's time to hide the quiz and show the results
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
    // console.info(buttonElement);
  });
}