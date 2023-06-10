let idioms = [
  {
    idiom: "ELEPHANT IN THE ROOM",
    options: [
      { answer: "Something everyone knows but is uncomfortable to talk about", isCorrect: true },
      { answer: "The frustration of having bought furniture that is too large for your home.", isCorrect: false },
      { answer: "A large and unwelcome person that is in your living room, perhaps on your sofa", isCorrect: false }
    ]
  },
  {
    idiom: "TO GO COLD TURKEY",
    options: [
      { answer: "To eat the leftovers of a previous night's roast dinner in a sandwich", isCorrect: false },
      { answer: "To give up something from one day to the next that was addictive", isCorrect: true },
      { answer: "To leave the house in cold weather with very little clothes on and showing a lot of skin", isCorrect: false }
    ]
  },
  {
    idiom: "AS THICK AS THIEVES",
    options: [
      { answer: "To make a journey somewhere in disguise.", isCorrect: false },
      { answer: "To be very close and secretive with one or more person", isCorrect: true },
      { answer: "To be astonishingly and unbelievable stupid", isCorrect: false }
    ]
  },
  {
    idiom: "HOLD YOUR HORSES.",
    options: [
      { answer: "Please control your mother-in-law.", isCorrect: false },
      { answer: "Please control your pets. farm animals or children", isCorrect: false },
      { answer: "Please relax and slow down", isCorrect: true }
    ]
  },
  {
    idiom: "A PIECE OF CAKE",
    options: [
      { answer: "A person that is desirable and flirtatious.", isCorrect: false },
      { answer: "A task that is very easy to do", isCorrect: true },
      { answer: "A thing that is very good and but a thing that few people know about", isCorrect: false }
    ]
  },
  {
    idiom: "PUT A SOCK IN IT",
    options: [
      { answer: "To be quiet", isCorrect: true },
      { answer: "To remember to pack underwear in your luggage before a holiday", isCorrect: false },
      { answer: "To resolve a leaky tap or a plumbing problem by using an old sock.", isCorrect: false }
    ]
  },
  {
    idiom: "KEEP YOUR SHIRT ON",
    options: [
      { answer: "Our romance is moving too fast and I am not ready to take it to the next level and get physical", isCorrect: false },
      { answer: "Please remain calm.", isCorrect: true },
      { answer: "Your sense of style rocks! Where did you get that shirt/dress/trousers?", isCorrect: false }
    ]
  },
  {
    idiom: "FROG IN YOUR THROAT.",
    options: [
      { answer: "To be choking on a large piece of bread or potato, perhaps cheese.", isCorrect: false },
      { answer: "To be unwilling to give someone bad news regarding their appearance.", isCorrect: false },
      { answer: "To have a hoarse irritated voice.", isCorrect: true }
    ]
  },
  {
    idiom: "IT'S ALL GREEK TO ME",
    options: [
      { answer: "It's completely incomprehensible.", isCorrect: true },
      { answer: "Everything is fantastic, we are having an awesome time.", isCorrect: false },
      { answer: "Everything is greek to me, I cannot read ancient greek", isCorrect: false }
    ]
  },
  {
    idiom: "BITE YOUR TONGUE.",
    options: [
      { answer: "To accidentally bite your own tongue while eating.", isCorrect: false },
      { answer: "To be unable to say anything because it is a secret.", isCorrect: true },
      { answer: "To be a very slow eater, or someone who savours food.", isCorrect: false }
    ]
  }
];
    // Add more idioms here

    let currentIndex = 0;

    function checkAnswer(userAnswer) {
      let currentIdiom = idioms[currentIndex];
      let options = currentIdiom.options;
      let correctAnswer = options.find(option => option.isCorrect);    

  if (userAnswer === correctAnswer.answer) {
    if (currentIdiom.idiom === "TO GO COLD TURKEY") {
      alert("Correct! You have won afternoon tea at the Ritz.");
    } else if (currentIdiom.idiom === "TO BITE THE BULLET") {
      alert("Correct! You are going on the London Eye!");
    } else if (currentIdiom.idiom === " TO CHEW THE FAT WITH SOMEONE"){
      alert("Brilliant job! You have won a walk with King Charles around Buckingham Palace!")
    } else if (currentIdiom.idiom === "FROG IN YOUR THROAT") {
    } else if (currentIdiom.idiom === "A PIECE OF CAKE") {
      alert("Well done, Let's go and see Big Ben!");
      alert("Correct! Your flights to London and back will be British Airways, First Class!");
    } else if (currentIdiom.idiom === "ELEPHANT IN THE ROOM") {
      alert("Correct! You are going to spend the night at the Savoy Hotel!");
    } else if (currentIdiom.idiom === "PARDON MY FRENCH") {
      alert("Correct!You have won £250 for a mini-shopping trip in Camden Market!");
    } else if (currentIdiom.idiom === "KEEP YOUR SHIRT ON") {
      alert("Rock on - You are going to have lunch with Jamie Oliver at his restaurant!");
    } else if (currentIdiom.idiom === "MY NECK OF THE WOODS") {
      alert("Great! You have won £500 to go shopping on Carnaby Street!");
    } else if (currentIdiom.idiom === "IT'S ALL GREEK TO ME") {
      alert("Correct! You will be transported all through London today in a stretch Limo with snacks and goodies");
    } else if (currentIdiom.idiom === "HOLD YOUR HORSES") {
      alert("Correct! You have won a night out in Cirque Le Soir for a night out the the Spice Girls!");
    } else if (currentIdiom.idiom === "AS THICK AS THIEVES") {
      alert("Well done, Let's have a three course meal in Chinatown!");

      // Add more individualized alerts for each idiom
    }
  } else {
    if (currentIdiom.idiom === "TO GO COLD TURKEY") {
      alert("Bad luck! Instead of tea at the Ritz, you will go to a cafe at the nearest Underground!");
    } else if (currentIdiom.idiom === "TO BITE THE BULLET") {
      alert("Incorrect! Instead of enjoying the view from the London Eye, you are going to gaze up at it!");
    } else if (currentIdiom.idiom === " TO CHEW THE FAT WITH SOMEONE"){
      alert("Oh dear, instead of a walk with the King and Buckingham Palace, you can look through thw gates like the rest of us!")
    } else if (currentIdiom.idiom === "FROG IN YOUR THROAT") {
      alert("Not the right answer! Your flights to London and back will be with Easyjet - non-refundable and at 3am!");
    } else if (currentIdiom.idiom === "A PIECE OF CAKE") {
      alert("Oh dear! No Problem, let's go and go and see Big Ben and cheer you up!");
    } else if (currentIdiom.idiom === "ELEPHANT IN THE ROOM") {
      alert("Yikes... Instead of a night at the Savoy, you will spend the night in Hackney.");
    } else if (currentIdiom.idiom === "PARDON MY FRENCH") {
      alert("Bad Luck! Instead of £250, you have won £2.50 for a mini-shopping trip in Camden Market (good luck with finding anything in London for that price)!");
    } else if (currentIdiom.idiom === "KEEP YOUR SHIRT ON") {
      alert("Sorry - instead of lunch with Jamie Oliver, you are going to the nearest fish and chip shop!");
    } else if (currentIdiom.idiom === "MY NECK OF THE WOODS") {
      alert("OK, well we are still going to Carnaby Street, but instead of winning £500, you have £5!");
    } else if (currentIdiom.idiom === "IT'S ALL GREEK TO ME") {
      alert("Incorrect! Instead of a limo with snacks, you will have to use the underground,buses or on foot today - no taxis!");
    } else if (currentIdiom.idiom === "HOLD YOUR HORSES") {
      alert("You are going for your night out to a pub in Wembley for a game of darts with my high school maths teacher instead of boogying with the Spice Girls!");
    } else if (currentIdiom.idiom === "AS THICK AS THIEVES") {
      alert("Nope. We are still going to Chinatown, but instead of a three course meal, you can just buy a bag of prawn crackers!");
    } else {
      // Add more individualized alerts for each idiom
    }
  }
}
function nextQuestion() {
  if (currentIndex < idioms.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    alert("Congratulations! You have completed the idioms quiz and will hopefully have n excellent day in London!");
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
    let optionElement = document.createElement("button");
    optionElement.textContent = option.answer;
    optionElement.setAttribute("onclick", `checkAnswer("${option.answer}")`);
    optionsElement.appendChild(optionElement);
  });
}
  




