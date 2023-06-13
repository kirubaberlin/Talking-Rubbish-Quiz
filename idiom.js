let idioms = [

  {
    idiom: "ARCHIBALD, WE MUST CONFRONT THE ELEPHANT IN THE ROOM!",
    options: [
      { answer: "A huge problem that no-one wants to talk about", isCorrect: true },
      { answer: "The frustration of having bought furniture that is too large for your home.", isCorrect: false },
      { answer: "A large and unwelcome person that is in your living room, perhaps on your sofa", isCorrect: false }
    ],
    alertGood: "You are going to spend the night in luxury at the Savoy Hotel!",
    alertBad: "Yikes... Instead of a night at the Savoy, you will spend the night in a youth hostel in Hackney.",
    chosen: null
  },
  {
    idiom: "THIS MORNING PRUNELLA DECIDED TO GO COLD TURKEY. HER NUTELLA HABIT WAS GETTING OUT OF HAND.",
    options: [
      { answer: "To eat the leftovers of a previous night's roast dinner in a sandwich for breakfast", isCorrect: false },
      { answer: "To give up something from one day to the next that was addictive", isCorrect: true },
      { answer: "To leave the house in cold weather with very little clothes on and showing a lot of skin", isCorrect: false }
    ],
    alertGood: "You have won afternoon tea at the Ritz with Kate Moss!",
    alertBad: "Bad luck! Instead of tea at the Ritz, you will go to a cafe at the nearest Underground!",
    chosen: null
  },
  {
    idiom: "HAVE YOU NOTICED THAT MAVIS AND PERCIVAL ARE AS THICK AS THIEVES?",
    options: [
      { answer: "To drop out of school and embark on a life of crime.", isCorrect: false },
      { answer: "To be very close and secretive with one or more person", isCorrect: true },
      { answer: "To be astonishingly and unbelievable stupid", isCorrect: false }
    ],
    alertGood: "Let's have a delicious lunch in Chinatown!",
    alertBad: "We are going to Chinatown, but instead of a wonderful lunch you can just buy a bag of prawn crackers!",
    chosen: null
  },
  {
    idiom: "RUPERT, WILL YOU PLEASE HOLD YOUR HORSES!",
    options: [
      { answer: "Please control your mother-in-law.", isCorrect: false },
      { answer: "Please control your pets. farm animals or children", isCorrect: false },
      { answer: "Please relax and slow down", isCorrect: true }
    ],
    alertGood: "You have won a night out in Cirque Le Soir for a night out with the Spice Girls!",
    alertBad: "You are going for your night out to a pub in Wembley for a game of darts with my high school maths teacher instead of boogying with the Spice Girls!",
    chosen: null
  },
  {
    idiom: "OOOH, DICKIE... SUCH A PIECE OF CAKE!",
    options: [
      { answer: "A person that is desirable and flirtatious, with a nice bottom.", isCorrect: false },
      { answer: "A task that is very easy to do", isCorrect: true },
      { answer: "A thing that is very good and but a thing that few people know about", isCorrect: false }
    ],
    alertGood: "Let's go and see Big Ben!",
    alertBad: "Oh dear! No Problem, let's go and go and see Big Ben to cheer you up!",
    chosen: null
  },
  {
    idiom: "PUT A SOCK IN IT JEREMY - I WILL NOT TELL YOU AGAIN.",
    options: [
      { answer: "To be quiet", isCorrect: true },
      { answer: "To remember to pack underpants in your luggage before a holiday", isCorrect: false },
      { answer: "To resolve a leaky tap or a plumbing problem by using an old sock or underwear.", isCorrect: false }
    ],
    alertGood: "You have £500 to spend shopping on Carnaby Street!",
    alertBad: "You have £5 to spend on Carnaby Street (good luck with finding anything in London for that price...).",
    chosen: null
  }, 
  {
    idiom: "OH GERTRUDE YOU NAUGHTY GIRL, PLEASE KEEP YOUR SHIRT ON...",
    options: [
      { answer: "Our romance is moving too fast and I am not ready to take it to the next level and get physical", isCorrect: false },
      { answer: "Please remain calm.", isCorrect: true },
      { answer: "Your sense of style rocks! Where did you get that shirt/dress/trousers?", isCorrect: false }
    ],
    alertGood: "You are going to have a decadent dinner with Jamie Oliver at his restaurant!",
    alertBad: "Sorry - instead of dinner with Jamie Oliver, you are going to the nearest fish and chip shop!",
    chosen: null
  },
  {
    idiom: "GOSH WINIFRED - DO YOU HAVE A FROG IN YOUR THROAT?",
    options: [
      { answer: "To be choking loudly on a large piece of bread or potato, perhaps cheese.", isCorrect: false },
      { answer: "When somebody has such horribly bad breath that you feel the need to vomit.", isCorrect: false },
      { answer: "To have a hoarse irritated voice.", isCorrect: true }
    ],
    alertGood: "Let us go for gourmet whiskey tasting at Vinters with James Bond! ",
    alertBad: "Sorry, no booze, but I think you can refill your waterbottle in a toilet somewhere...",
    chosen: null
  },
  {
    "idiom": "IN ALL HONESTY, ARTHUR... IT'S ALL GREEK TO ME",
    "options": [
      { "answer": "It's completely incomprehensible.", "isCorrect": true },
      { "answer": "We are having a brilliant time, as if we were on a sunny Greek beach!", "isCorrect": false },
      { "answer": "I cannot cook to save my life, not even operate a microwave", "isCorrect": false }
    ],
    "alertGood": "You will be transported all through London today in a stretch limo with champagne and snacks!",
    "alertBad": "Sorry! Instead of a limo with snacks, you will have to use the underground, buses, or go on foot today - no taxis!",
    "chosen": null
  },
  {
    idiom: "CRIKEY. I JUST HAD TO BITE MY TONGUE AT DINNER LAST NIGHT WITH HORATIO.",
    options: [
      { answer: "To accidentally choke loudly and embarassingly while eating a meal.", isCorrect: false },
      { answer: "To be unable to say anything because it is a secret.", isCorrect: true },
      { answer: "To be given an extremely bad dinner and to have to eat it out of politeness.", isCorrect: false },
    ],
    alertGood: "You are going on the London Eye, enjoy the view!",
    alertBad: "Instead of enjoying the view from the London Eye, you are going to gaze up at it!",
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
    alert("Correct! " + currentIdiom.alertGood); //sounds
  } else {
    oopsFartSound.play();
    alert("Bad luck!" + currentIdiom.alertBad);
  }
  //isUserChoiceCorrect ? alert("Correct! " + currentIdiom.alertGood) : alert(currentIdiom.alertBad); // the elements alertGood and alertBad are declared in the array
  
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
      "Question " + (currentIndex + 1) + " of " + idioms.length; // showing in which page the user is and how many there are altogether
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
  });
}