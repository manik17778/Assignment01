// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The Turkey ", "Mom", "Dad", " My teacher", " The Elephant", "The Cat"];
const verbs = ["Sat On ", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "Scary", "a goofy", "a slimy ", "a barking" , " a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog" , "bug" , " worm"];
const settings = ["on the moon", "on the chair", "in mhy spaghetti", "in my soup", "on the grass", " in my shoes"];

//  reset button 
const resetBtn = document.getElementById("reset");

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

// Function to generate a random number
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Functions for button clicks
function noun1_on_click() {
    chosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    chosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    chosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `Once upon a time, in a ${chosenSetting.textContent}, there was a ${chosenAdjective.textContent} ${chosenNoun1.textContent} who loved to ${chosenVerb.textContent}. One day, it met a ${chosenNoun2.textContent} and together, they went on a grand adventure.`;
}

// Function for reset button
function reset_on_click() {
    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyDisplay.textContent = "";
}

// Event Listeners for button clicks
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", reset_on_click);

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = nouns1[getRandomIndex(nouns1)];
    chosenVerb.textContent = verbs[getRandomIndex(verbs)];
    chosenAdjective.textContent = adjectives[getRandomIndex(adjectives)];
    chosenNoun2.textContent = nouns2[getRandomIndex(nouns2)];
    chosenSetting.textContent = settings[getRandomIndex(settings)];

    // Automatically show the story after generating random elements
    playback_on_click();
}

// Dynamically add your student id/name using any function and on-click listener
document.getElementById("studentId").textContent = "Manik Malhotra ( 200553423 )";
