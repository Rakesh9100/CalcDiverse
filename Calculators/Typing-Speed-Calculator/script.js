
// // let testDuration = 1; // default duration in minutes
// // let difficulty = 'easy'; // default difficulty
// // let timer;
// // let startTime;
// // let textToType = '';
// // let textQueue = [];
// // let currentIndex = 0;
// // let countdownTimer;
// // let countdown = 5;
// // let corrections = 0;

// // const easySentences = [
// //     "I like pizza with extra cheese.",
// //     "Typing is fun and useful.",
// //     "Practice makes perfect.",
// //     "The quick brown fox jumps over the lazy dog.",
// //     "She sells seashells by the seashore.",
// //     "A journey of a thousand miles begins with a single step.",
// //     "Sphinx of black quartz, judge my vow.",
// //     "The five boxing wizards jump quickly.",
// //      "I'm on a seafood diet. I see food, and I eat it.",
// //     "My favorite color is blue.",
// //     "I used to be a banker, but I lost interest.",
// //     "Actions speak louder than words.",
// //     "I'm friends with 25 letters of the alphabet. I don't know y.",
// //     "A watched pot never boils.",
// //     "All work and no play makes Jack a dull boy.",
// // ];
// // const mediumSentences = [
// //     "[1, 9, 7, 3, 4, 5, 2, 6, 8] are numbers.",
// //     "Today's weather: 70 degrees* & sunny!",
// //     "Our office address: {123 Main $treet, $uite 200, Anytown.}",
// //     "Did you RSVP for the event? Please confirm by phone: (123) 456-7890.",
// //     "Ple@se c0ntact US @ support@company.com for AssistaNce.",
// //     "The Annual r3p0rt is dU3 on J@nuary 31st, 2025.",
// //     "The rEstaurant reSerVation is Confirmed for 7:00 PM.",
// //     "#Cleanliness is ^next to #godliness%",
// //     "Our ({customer service hOTline}) is AVAILABLE 24/7.",
// //     "Please~ double-check the spelling of your <name>.",
// //     "Contact us @ (info@business.com) for > DeTAIls.",
// //     "The ~password should include: @, #, $, and at least 1 digit.",
// //     "%Kindly review the file attached: [Doc_Version1.2.8.9.pdf]",
// //     "Please call Our Helpline: 1-800-123-4567.",
// // ];
// // const hardSentences = [
// //  "Once upon a time, in a small village, there lived a very lazy cat named <<Mr. Whiskers.>>",
// // "Mr. Whiskers was so l@zy that he didn't even chase mice;[LOL]; he preferred to let them pass by.",
// // "One sunny afternoon, Mr. Whiskers {7} was lounging on {8} the porch when he saw{9} a mouse running towards him.{0}",
// // "In a rare burst of energy, he lazily &watted at the mouse but missed entirely//",
// // "The mouse ^stopped^, ^looked at^ Mr. Whiskers, and $aid, 'You call that a swat?'",
// // "Mr. Whiskers y@wned and replied,({ 'It’s more of a friendly wave <<3'})",
// // "The mouse, feeling cheeky, decided to play a prank on Mr. Whiskers.",
// // "He squeaked loudly--, 'Help!! A monster is chasing me!' and daRTed oFF.",
// // "Mr._Whiskers_, too lazy to move, just Blinked and rOLled oveR.",
// // "The mouse ran in circles- O 0; making sure Mr. Whiskers saw his 'escape.'",
// // "After a few mins, the mouse retURNed and said, 'You didn't even try to save me!'",
// // "Mr. Whiskers opened 1 eye and said, 'I knew it was a *joke* all along.xD++*'",
// // "The mouse, impressed by {4} Mr. Whiskers' laid-back {7} attitude, offered{6} him a piece of cheese.{5}",
// // "Mr. Whiskers sniffed the cheese and said, 'Thanks, but I prefer *fish*.'",
// // "The mouse laughed^ and replied^, 'You %really% are the #laziest_cat in the #world!'",
// // "Mr. Whiskers smiled and said, 'LAZY? No, I’m just cOnseRVing eneRgy.'",
// // "The _mouse and Mr._Whiskers became unlikely friends from that day on =(FRNDZ++)",
// // "Every noon,{1} the mouse would{2} bring chEEse and{3} the cat would share his fish.{4}",

// // ];

// // function getRandomSentence() {
// //     let sentences = [];
// //     switch (difficulty) {
// //         case 'easy':
// //             sentences = easySentences;
// //             break;
// //         case 'medium':
// //             sentences = mediumSentences;
// //             break;
// //         case 'hard':
// //             sentences = hardSentences;
// //             break;
// //     }
// //     textQueue = generateContinuousText(sentences);
// //     currentIndex = 0;
// //     textToType = textQueue[currentIndex];
// //     document.getElementById('text-to-type').textContent = textToType;
// // }

// // function generateContinuousText(sentences) {
// //     let continuousText = [];
// //     const sentenceCount = testDuration * 60 / 5; // estimate average reading speed (12 words/5s) and multiply by duration
// //     let sentenceIndex = 0;

// //     for (let i = 0; i < sentenceCount; i++) {
// //         continuousText.push(sentences[sentenceIndex]);
// //         sentenceIndex = (sentenceIndex + 1) % sentences.length; // loop through the sentences
// //     }
// //     return continuousText;
// // }

// // function setDifficulty(level) {
// //     difficulty = level;
// //     updateSelectedButton('difficulty', level);
// //     getRandomSentence(); checkIfReadyToStart();
// // }

// // function setDuration(minutes) {
// //     testDuration = minutes;
// //     updateSelectedButton('duration', minutes); checkIfReadyToStart();
// // }

// // function checkIfReadyToStart() {
// //     const startButton = document.querySelector('.button-wrapper button:first-child');
// //     if (difficulty && testDuration) {
// //         startButton.disabled = false;
// //     } else {
// //         startButton.disabled = true;
// //     }
// // }

// // function updateSelectedButton(type, value) {
// //     const buttons = document.querySelectorAll(`.button-group button[data-type="${type}"]`);
// //     buttons.forEach(button => {
// //         if (button.dataset.value == value) {
// //             button.classList.add('selected');
// //         } else {
// //             button.classList.remove('selected');
// //         }
// //     });
// // }

// // function startTest() {
// //     corrections = 0; // reset corrections counter
// //     countdown = 5;
// //     document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;
// //     document.getElementById('user-input').disabled = true;

// //     countdownTimer = setInterval(() => {
// //         countdown--;
// //         document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;

// //         if (countdown === 0) {
// //             clearInterval(countdownTimer);
// //             document.getElementById('speed-result').textContent = '';
// //             document.getElementById('user-input').disabled = false;
// //             document.getElementById('user-input').focus();
// //             document.getElementById('user-input').value = '';
// //             startTime = new Date();
// //             timer = setTimeout(endTest, testDuration * 60 * 1000);
// //         }
// //     }, 1000);
// // }

// // function checkInput() {
// //     const input = document.getElementById('user-input').value;
// //     const textToTypeSpan = document.getElementById('text-to-type');
// //     const inputArray = input.split('');
// //     const textToTypeArray = textToType.split('');
// //     let highlightedText = '';

// //     let correctSoFar = true;
// //     textToTypeArray.forEach((char, index) => {
// //         if (inputArray[index] === undefined) {
// //             highlightedText += `<span>${char}</span>`;
// //         } else if (inputArray[index] === char) {
// //             highlightedText += `<span style="color: black;">${char}</span>`;
// //         } else {
// //             highlightedText += `<span style="color: red;">${char}</span>`;
// //             correctSoFar = false;
// //         }
// //     });

// //     textToTypeSpan.innerHTML = highlightedText;

// //     if (!correctSoFar) {
// //         corrections++;
// //     }

// //     if (input.trim() === textToType) {
// //         currentIndex++;
// //         if (currentIndex < textQueue.length) {
// //             textToType = textQueue[currentIndex];
// //             document.getElementById('text-to-type').textContent = textToType;
// //             document.getElementById('user-input').value = '';
// //         } else {
// //             endTest();
// //         }
// //     }
// // }

// // function endTest() {
// //     const endTime = new Date();
// //     const timeDiff = (endTime - startTime) / 1000; // in seconds
// //     const input = document.getElementById('user-input').value;
// //     if (input.trim().length === 0) {
// //         document.getElementById('speed-result').textContent = 'You did not type.';
// //     } else {
// //         const wordsTyped = input.split(' ').length;
// //         const wpm = (wordsTyped / timeDiff) * 60;
// //         const accuracy = ((textToType.length - corrections) / textToType.length) * 100;
// //         document.getElementById('speed-result').textContent = `Your typing speed is ${wpm.toFixed(2)} words per minute. Accuracy: ${accuracy.toFixed(2)}%. Corrections: ${corrections}`;
// //     }
// //     document.getElementById('user-input').disabled = true;
// // }

// // function retakeTest() {
// //     clearTimeout(timer);
// //     clearInterval(countdownTimer);
// //     document.getElementById('speed-result').textContent = '';
// //     document.getElementById('user-input').disabled = true;
// //     document.getElementById('user-input').value = '';
// //     getRandomSentence();
// //     resetSelectedButtons();
// // }

// // function resetInput() {
// //     document.getElementById('user-input').value = '';
// //     document.getElementById('speed-result').textContent = '';
// //     clearTimeout(timer);
// //     clearInterval(countdownTimer);
// //     resetSelectedButtons();
// // }

// // function resetSelectedButtons() {
// //     document.querySelectorAll('.button-group button').forEach(button => {
// //         button.classList.remove('selected');
// //     });
// // }


// // document.querySelectorAll('.button-group button').forEach(button => {
// //     button.addEventListener('click', () => {
// //         button.classList.add('selected');
// //     });
// // });

// let testDuration = null; // default duration in minutes (null means not selected)
// let difficulty = null; // default difficulty (null means not selected)
// let timer;
// let startTime;
// let textToType = '';
// let textQueue = [];
// let currentIndex = 0;
// let countdownTimer;
// let countdown = 5;
// let corrections = 0;

// const easySentences = [
//     "I like pizza with extra cheese.",
//     "Typing is fun and useful.",
//     "Practice makes perfect.",
//     "The quick brown fox jumps over the lazy dog.",
//     "She sells seashells by the seashore.",
//     "A journey of a thousand miles begins with a single step.",
//     "Sphinx of black quartz, judge my vow.",
//     "The five boxing wizards jump quickly.",
//     "I'm on a seafood diet. I see food, and I eat it.",
//     "My favorite color is blue.",
//     "I used to be a banker, but I lost interest.",
//     "Actions speak louder than words.",
//     "I'm friends with 25 letters of the alphabet. I don't know y.",
//     "A watched pot never boils.",
//     "All work and no play makes Jack a dull boy.",
// ];
// const mediumSentences = [
//     "[1, 9, 7, 3, 4, 5, 2, 6, 8] are numbers.",
//     "Today's weather: 70 degrees* & sunny!",
//     "Our office address: {123 Main $treet, $uite 200, Anytown.}",
//     "Did you RSVP for the event? Please confirm by phone: (123) 456-7890.",
//     "Ple@se c0ntact US @ support@company.com for AssistaNce.",
//     "The Annual r3p0rt is dU3 on J@nuary 31st, 2025.",
//     "The rEstaurant reSerVation is Confirmed for 7:00 PM.",
//     "#Cleanliness is ^next to #godliness%",
//     "Our ({customer service hOTline}) is AVAILABLE 24/7.",
//     "Please~ double-check the spelling of your <name>.",
//     "Contact us @ (info@business.com) for > DeTAIls.",
//     "The ~password should include: @, #, $, and at least 1 digit.",
//     "%Kindly review the file attached: [Doc_Version1.2.8.9.pdf]",
//     "Please call Our Helpline: 1-800-123-4567.",
// ];
// const hardSentences = [
//     "Once upon a time, in a small village, there lived a very lazy cat named <<Mr. Whiskers.>>",
//     "Mr. Whiskers was so l@zy that he didn't even chase mice;[LOL]; he preferred to let them pass by.",
//     "One sunny afternoon, Mr. Whiskers {7} was lounging on {8} the porch when he saw{9} a mouse running towards him.{0}",
//     "In a rare burst of energy, he lazily &watted at the mouse but missed entirely//",
//     "The mouse ^stopped^, ^looked at^ Mr. Whiskers, and $aid, 'You call that a swat?'",
//     "Mr. Whiskers y@wned and replied,({ 'It’s more of a friendly wave <<3'})",
//     "The mouse, feeling cheeky, decided to play a prank on Mr. Whiskers.",
//     "He squeaked loudly--, 'Help!! A monster is chasing me!' and daRTed oFF.",
//     "Mr._Whiskers_, too lazy to move, just Blinked and rOLled oveR.",
//     "The mouse ran in circles- O 0; making sure Mr. Whiskers saw his 'escape.'",
//     "After a few mins, the mouse retURNed and said, 'You didn't even try to save me!'",
//     "Mr. Whiskers opened 1 eye and said, 'I knew it was a *joke* all along.xD++*'",
//     "The mouse, impressed by {4} Mr. Whiskers' laid-back {7} attitude, offered{6} him a piece of cheese.{5}",
//     "Mr. Whiskers sniffed the cheese and said, 'Thanks, but I prefer *fish*.'",
//     "The mouse laughed^ and replied^, 'You %really% are the #laziest_cat in the #world!'",
//     "Mr. Whiskers smiled and said, 'LAZY? No, I’m just cOnseRVing eneRgy.'",
//     "The _mouse and Mr._Whiskers became unlikely friends from that day on =(FRNDZ++)",
//     "Every noon,{1} the mouse would{2} bring chEEse and{3} the cat would share his fish.{4}",
// ];

// function getRandomSentence() {
//     let sentences = [];
//     switch (difficulty) {
//         case 'easy':
//             sentences = easySentences;
//             break;
//         case 'medium':
//             sentences = mediumSentences;
//             break;
//         case 'hard':
//             sentences = hardSentences;
//             break;
//     }
//     textQueue = generateContinuousText(sentences);
//     currentIndex = 0;
//     textToType = textQueue[currentIndex];
//     document.getElementById('text-to-type').textContent = textToType;
// }

// function generateContinuousText(sentences) {
//     let continuousText = [];
//     const sentenceCount = testDuration * 60 / 5; // estimate average reading speed (12 words/5s) and multiply by duration
//     let sentenceIndex = 0;

//     for (let i = 0; i < sentenceCount; i++) {
//         continuousText.push(sentences[sentenceIndex]);
//         sentenceIndex = (sentenceIndex + 1) % sentences.length; // loop through the sentences
//     }
//     return continuousText;
// }

// function setDifficulty(level) {
//     difficulty = level;
//     updateSelectedOption('difficulty', level);
//     checkIfReadyToStart();
// }

// function setDuration(minutes) {
//     testDuration = parseInt(minutes, 10);
//     updateSelectedOption('duration', minutes);
//     checkIfReadyToStart();
// }

// function checkIfReadyToStart() {
//     const startButton = document.querySelector('.button-wrapper button:first-child');
//     const difficultySelected = difficulty !== null;
//     const durationSelected = testDuration !== null;

//     startButton.disabled = !(difficultySelected && durationSelected);

//     if (!difficultySelected || !durationSelected) {
//         document.getElementById('speed-result').textContent = 'Please select both difficulty and duration.';
//     } else {
//         document.getElementById('speed-result').textContent = '';
//         getRandomSentence();
//     }
// }

// function updateSelectedOption(type, value) {
//     const selectElement = document.getElementById(`${type}-dropdown`);
//     selectElement.value = value;
// }

// function startTest() {
//     if (!difficulty || !testDuration) {
//         document.getElementById('speed-result').textContent = 'Please select both difficulty and duration.';
//         return;
//     }

//     corrections = 0; // reset corrections counter
//     countdown = 5;
//     document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;
//     document.getElementById('user-input').disabled = true;

//     countdownTimer = setInterval(() => {
//         countdown--;
//         document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;

//         if (countdown === 0) {
//             clearInterval(countdownTimer);
//             document.getElementById('speed-result').textContent = '';
//             document.getElementById('user-input').disabled = false;
//             document.getElementById('user-input').focus();
//             document.getElementById('user-input').value = '';
//             startTime = new Date();
//             timer = setTimeout(endTest, testDuration * 60 * 1000);
//         }
//     }, 1000);
// }

// function checkInput() {
//     const input = document.getElementById('user-input').value;
//     const textToTypeSpan = document.getElementById('text-to-type');
//     const inputArray = input.split('');
//     const textToTypeArray = textToType.split('');
//     let highlightedText = '';

//     let correctSoFar = true;
//     textToTypeArray.forEach((char, index) => {
//         if (inputArray[index] === undefined) {
//             highlightedText += `<span>${char}</span>`;
//         } else if (inputArray[index] === char) {
//             highlightedText += `<span style="color: black;">${char}</span>`;
//         } else {
//             highlightedText += `<span style="color: red;">${char}</span>`;
//             correctSoFar = false;
//         }
//     });

//     textToTypeSpan.innerHTML = highlightedText;

//     if (!correctSoFar) {
//         corrections++;
//     }

//     if (input.trim() === textToType) {
//         currentIndex++;
//         if (currentIndex < textQueue.length) {
//             textToType = textQueue[currentIndex];
//             document.getElementById('text-to-type').textContent = textToType;
//             document.getElementById('user-input').value = '';
//         } else {
//             endTest();
//         }
//     }
// }

// function endTest() {
//     const endTime = new Date();
//     const timeDiff = (endTime - startTime) / 1000; // in seconds
//     const input = document.getElementById('user-input').value;
//     if (input.trim().length === 0) {
//         document.getElementById('speed-result').textContent = 'You did not type.';
//     } else {
//         const wordsTyped = input.split(' ').length;
//         const wpm = (wordsTyped / timeDiff) * 60;
//         const accuracy = ((textToType.length - corrections) / textToType.length) * 100;
//         document.getElementById('speed-result').textContent = `Your typing speed is ${wpm.toFixed(2)} words per minute. Accuracy: ${accuracy.toFixed(2)}%. Corrections: ${corrections}`;
//     }
//     document.getElementById('user-input').disabled = true;
// }

// function retakeTest() {
//     clearTimeout(timer);
//     clearInterval(countdownTimer);
//     document.getElementById('speed-result').textContent = '';
//     document.getElementById('user-input').disabled = true;
//     document.getElementById('user-input').value = '';
//     document.getElementById('difficulty-dropdown').value = ''; // Reset difficulty dropdown
//     document.getElementById('duration-dropdown').value = ''; // Reset duration dropdown
//     difficulty = null; // Reset difficulty variable
//     testDuration = null; // Reset duration variable
//     resetSelectedButtons();
//     checkIfReadyToStart();
// }

// function resetInput() {
//     document.getElementById('user-input').value = '';
//     document.getElementById('speed-result').textContent = '';
// }

// function resetSelectedButtons() {
//     const buttons = document.querySelectorAll('.button-wrapper button');
//     buttons.forEach(button => {
//         button.classList.remove('selected');
//     });
// }

// // Event listeners for the buttons and dropdowns
// document.querySelector('.button-wrapper button:first-child').addEventListener('click', startTest);
// document.querySelector('.button-wrapper button:last-child').addEventListener('click', retakeTest);
// document.getElementById('difficulty-dropdown').addEventListener('change', (event) => setDifficulty(event.target.value));
// document.getElementById('duration-dropdown').addEventListener('change', (event) => setDuration(event.target.value));
// document.getElementById('user-input').addEventListener('input', checkInput);


let testDuration = null; // default duration in minutes (null means not selected)
let difficulty = null; // default difficulty (null means not selected)
let timer;
let startTime;
let textToType = '';
let textQueue = [];
let currentIndex = 0;
let countdownTimer;
let countdown = 5;
let corrections = 0;

const easySentences = [
    "I like pizza with extra cheese.",
    "Typing is fun and useful.",
    "Practice makes perfect.",
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "A journey of a thousand miles begins with a single step.",
    "Sphinx of black quartz, judge my vow.",
    "The five boxing wizards jump quickly.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "My favorite color is blue.",
    "I used to be a banker, but I lost interest.",
    "Actions speak louder than words.",
    "I'm friends with 25 letters of the alphabet. I don't know y.",
    "A watched pot never boils.",
    "All work and no play makes Jack a dull boy.",
];
const mediumSentences = [
    "[1, 9, 7, 3, 4, 5, 2, 6, 8] are numbers.",
    "Today's weather: 70 degrees* & sunny!",
    "Our office address: {123 Main $treet, $uite 200, Anytown.}",
    "Did you RSVP for the event? Please confirm by phone: (123) 456-7890.",
    "Ple@se c0ntact US @ support@company.com for AssistaNce.",
    "The Annual r3p0rt is dU3 on J@nuary 31st, 2025.",
    "The rEstaurant reSerVation is Confirmed for 7:00 PM.",
    "#Cleanliness is ^next to #godliness%",
    "Our ({customer service hOTline}) is AVAILABLE 24/7.",
    "Please~ double-check the spelling of your <name>.",
    "Contact us @ (info@business.com) for > DeTAIls.",
    "The ~password should include: @, #, $, and at least 1 digit.",
    "%Kindly review the file attached: [Doc_Version1.2.8.9.pdf]",
    "Please call Our Helpline: 1-800-123-4567.",
];
const hardSentences = [
    "Once upon a time, in a small village, there lived a very lazy cat named <<Mr. Whiskers.>>",
    "Mr. Whiskers was so l@zy that he didn't even chase mice;[LOL]; he preferred to let them pass by.",
    "One sunny afternoon, Mr. Whiskers {7} was lounging on {8} the porch when he saw{9} a mouse running towards him.{0}",
    "In a rare burst of energy, he lazily &watted at the mouse but missed entirely//",
    "The mouse ^stopped^, ^looked at^ Mr. Whiskers, and $aid, 'You call that a swat?'",
    "Mr. Whiskers y@wned and replied,({ 'It’s more of a friendly wave <<3'})",
    "The mouse, feeling cheeky, decided to play a prank on Mr. Whiskers.",
    "He squeaked loudly--, 'Help!! A monster is chasing me!' and daRTed oFF.",
    "Mr._Whiskers_, too lazy to move, just Blinked and rOLled oveR.",
    "The mouse ran in circles- O 0; making sure Mr. Whiskers saw his 'escape.'",
    "After a few mins, the mouse retURNed and said, 'You didn't even try to save me!'",
    "Mr. Whiskers opened 1 eye and said, 'I knew it was a *joke* all along.xD++*'",
    "The mouse, impressed by {4} Mr. Whiskers' laid-back {7} attitude, offered{6} him a piece of cheese.{5}",
    "Mr. Whiskers sniffed the cheese and said, 'Thanks, but I prefer *fish*.'",
    "The mouse laughed^ and replied^, 'You %really% are the #laziest_cat in the #world!'",
    "Mr. Whiskers smiled and said, 'LAZY? No, I’m just cOnseRVing eneRgy.'",
    "The _mouse and Mr._Whiskers became unlikely friends from that day on =(FRNDZ++)",
    "Every noon,{1} the mouse would{2} bring chEEse and{3} the cat would share his fish.{4}",
];

function getRandomSentence() {
    let sentences = [];
    switch (difficulty) {
        case 'easy':
            sentences = easySentences;
            break;
        case 'medium':
            sentences = mediumSentences;
            break;
        case 'hard':
            sentences = hardSentences;
            break;
    }
    textQueue = generateContinuousText(sentences);
    currentIndex = 0;
    textToType = textQueue[currentIndex];
    document.getElementById('text-to-type').textContent = textToType;
}

function generateContinuousText(sentences) {
    let continuousText = [];
    const sentenceCount = testDuration * 60 / 5; // estimate average reading speed (12 words/5s) and multiply by duration
    let sentenceIndex = 0;

    for (let i = 0; i < sentenceCount; i++) {
        continuousText.push(sentences[sentenceIndex]);
        sentenceIndex = (sentenceIndex + 1) % sentences.length; // loop through the sentences
    }
    return continuousText;
}

function setDifficulty(level) {
    difficulty = level;
    updateSelectedOption('difficulty', level);
    checkIfReadyToStart();
}

function setDuration(minutes) {
    testDuration = parseInt(minutes, 10);
    updateSelectedOption('duration', minutes);
    checkIfReadyToStart();
}

function checkIfReadyToStart() {
    const startButton = document.querySelector('.button-wrapper button:first-child');
    const difficultySelected = difficulty !== null;
    const durationSelected = testDuration !== null;

    startButton.disabled = !(difficultySelected && durationSelected);

    if (!difficultySelected || !durationSelected) {
        document.getElementById('speed-result').textContent = 'Please select both difficulty and duration.';
        document.getElementById('text-to-type').textContent = ''; // Clear displayed sentence
        startButton.disabled = true;
    } else {
        document.getElementById('speed-result').textContent = '';
        getRandomSentence();startButton.disabled = false;
    }
}

function updateSelectedOption(type, value) {
    const selectElement = document.getElementById(`${type}-dropdown`);
    selectElement.value = value;
}

function startTest() {
    if (!difficulty || !testDuration) {
        document.getElementById('speed-result').textContent = 'Please select both \'Difficulty\' and \'Duration\'.';
        return;
    }

    corrections = 0; // reset corrections counter
    countdown = 5;
    document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;
    document.getElementById('user-input').disabled = true;

    countdownTimer = setInterval(() => {
        countdown--;
        document.getElementById('speed-result').textContent = `Starting in ${countdown} seconds...`;

        if (countdown === 0) {
            clearInterval(countdownTimer);
            document.getElementById('speed-result').textContent = '';
            document.getElementById('user-input').disabled = false;
            document.getElementById('user-input').focus();
            document.getElementById('user-input').value = '';
            startTime = new Date();
            timer = setTimeout(endTest, testDuration * 60 * 1000);
            startTimer();
        }
    }, 1000);
}

function startTimer() {
    const countdownElement = document.getElementById('speed-result');
    let remainingTime = testDuration * 60; // total time in seconds
    disableDropdowns(); 
    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            endTest();
        } else {
            remainingTime--;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            countdownElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

function checkInput() {
    const input = document.getElementById('user-input').value;
    const textToTypeSpan = document.getElementById('text-to-type');
    const inputArray = input.split('');
    const textToTypeArray = textToType.split('');
    let highlightedText = '';

    let correctSoFar = true;
    textToTypeArray.forEach((char, index) => {
        if (inputArray[index] === undefined) {
            highlightedText += `<span>${char}</span>`;
        } else if (inputArray[index] === char) {
            highlightedText += `<span style="color: black;">${char}</span>`;
        } else {
            highlightedText += `<span style="color: red;">${char}</span>`;
            correctSoFar = false;
            corrections++;
        }
    });

    textToTypeSpan.innerHTML = highlightedText;

    if (correctSoFar && input.length === textToType.length) {
        if (currentIndex + 1 < textQueue.length) {
            currentIndex++;
            textToType = textQueue[currentIndex];
            document.getElementById('text-to-type').textContent = textToType;
            document.getElementById('user-input').value = '';
        } else {
            endTest();
        }
    }
}

// function endTest() {
//     clearTimeout(timer);
//     const userInput = document.getElementById('user-input').value;
//     const wordsTyped = userInput.split(' ').length;
//     const durationInMinutes = testDuration; // since the testDuration is in minutes
//     const wpm = Math.round((wordsTyped / durationInMinutes) - corrections);
//     document.getElementById('speed-result').textContent = `Speed: ${wpm} wpm with ${corrections} corrections.`;
//     document.getElementById('retest-button').style.display = 'block';
// }
function endTest() {
    clearTimeout(timer);
    const userInput = document.getElementById('user-input').value;
    if (userInput === '') {
        document.getElementById('speed-result').textContent = 'You did not type anything.';
        return;
    }
    enableDropdowns();
    const wordsTyped = userInput.trim().split(/\s+/).length; // count words by splitting on whitespace
    const timeTakenInSeconds = (new Date() - startTime) / 1000; // calculate time taken in seconds
    const wpm = Math.round((wordsTyped / timeTakenInSeconds) * 60); // calculate WPM

    const totalCharacters = textToType.length * textQueue.length; // total characters in all sentences
    const accuracy = ((totalCharacters - corrections) / totalCharacters) * 100; // calculate accuracy

    document.getElementById('speed-result').textContent = `Speed: ${wpm} wpm with ${corrections} corrections. Accuracy: ${accuracy.toFixed(2)}%`;
    document.getElementById('retest-button').style.display = 'block';
}

// function resetInput() {
//     clearTimeout(timer);
//     clearInterval(countdownTimer);
//     testDuration = null;
//     difficulty = null;
//     currentIndex = 0;
//     document.getElementById('user-input').value = '';
//     document.getElementById('user-input').disabled = true;
//     document.getElementById('text-to-type').textContent = '';
//     document.getElementById('speed-result').textContent = '';
//     document.getElementById('retest-button').style.display = 'none';
//     updateSelectedOption('duration', '');
//     updateSelectedOption('difficulty', '');
//     checkIfReadyToStart();
// }

// function retakeTest() {
//     clearTimeout(timer);
//     clearInterval(countdownTimer);
//     document.getElementById('speed-result').textContent = '';
//     document.getElementById('user-input').disabled = true;
//     document.getElementById('user-input').value = '';
//     document.getElementById('difficulty-dropdown').value = ''; // Reset difficulty dropdown
//     document.getElementById('duration-dropdown').value = ''; // Reset duration dropdown
//     difficulty = null; // Reset difficulty variable
//     testDuration = null; // Reset duration variable
//     resetSelectedButtons();
//     checkIfReadyToStart();
// }

// function retakeTest() {
//     clearTimeout(timer);
//     clearInterval(countdownTimer);
//     document.getElementById('speed-result').textContent = '';
//     document.getElementById('user-input').disabled = true;
//     document.getElementById('user-input').value = '';
//     document.getElementById('difficulty-dropdown').value = ''; // Reset difficulty dropdown
//     document.getElementById('duration-dropdown').value = ''; // Reset duration dropdown
//     difficulty = null; // Reset difficulty variable
//     testDuration = null; // Reset duration variable
//     resetSelectedButtons();
//     getRandomSentence(); // Refresh the displayed text according to the selected difficulty level
//     checkIfReadyToStart();
// }

function retakeTest() {
    clearTimeout(timer);
    clearInterval(countdownTimer);
    enableDropdowns(); 
    // Clear all inputs and displayed text
    document.getElementById('user-input').value = '';
    document.getElementById('speed-result').textContent = '';
    document.getElementById('text-to-type').textContent = '';

    // Reset dropdowns and variables
    document.getElementById('difficulty-dropdown').value = '';
    document.getElementById('duration-dropdown').value = '';
    difficulty = null;
    testDuration = null;

    // Reset buttons and check readiness to start
    resetSelectedButtons();
    
    getRandomSentence(); // Refresh the displayed text according to the selected difficulty level
    document.getElementById('user-input').disabled = true; // Disable input until difficulty and duration are selected
    checkIfReadyToStart();
}


function resetSelectedButtons() {
    const startButton = document.querySelector('.button-wrapper button:first-child');
    startButton.disabled = true;

    document.getElementById('retest-button').style.display = 'none';
}

function resetInput() {
    const inputField = document.getElementById('user-input');
    const currentPosition = inputField.selectionStart; // Get current cursor position
    const currentLine = inputField.value.substring(0, inputField.selectionStart).split('\n').length; // Get current line

    // Clear only the current line
    const lines = inputField.value.split('\n');
    lines[currentLine - 1] = '';

    inputField.value = lines.join('\n');
    inputField.setSelectionRange(currentPosition, currentPosition); // Set cursor back to current position
    inputField.focus();
}
function disableDropdowns() {
    document.getElementById('difficulty-dropdown').disabled = true;
    document.getElementById('duration-dropdown').disabled = true;
}

function enableDropdowns() {
    document.getElementById('difficulty-dropdown').disabled = false;
    document.getElementById('duration-dropdown').disabled = false;
}
// function resetInput() {

//     document.getElementById('user-input').value = ''; // Clear the user input

//     // Reset only the current line written
//     const textToType = textQueue[currentIndex];
//     const textToTypeSpan = document.getElementById('text-to-type');
//     let highlightedText = '';

//     // Highlight the text to type
//     textToType.split('').forEach(char => {
//         highlightedText += `<span>${char}</span>`;
//     });
//     textToTypeSpan.innerHTML = highlightedText;

//     document.getElementById('retest-button').style.display = 'none';
//     document.getElementById('user-input').disabled = false; // Enable user input
//     document.getElementById('user-input').focus(); // Focus back on user input
   
// }
