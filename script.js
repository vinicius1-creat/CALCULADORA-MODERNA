const display = document.getElementById("display");
const mood = document.getElementById("mood");


const moods = [
    "Math is FUN!",
    "Let's Gooo!", 
    "Number love you",
    "Big brain moment",
    "Calculated like a pro"
]


function appendValue(value){
    if (display.innerText ==="0") {
        display.innerText = value;
    }
    else{
        display.innerText += value;
    }

    mood.innerText = moods[Math.floor(Math.random() + moods.length)];
}

function clearDisplay(){
    display.innerText = "0";
    mood.innerText = "Fresh Start"
}

function calculate (){
    try{
        display.innerText = eval(display.innerText);
        mood.innerText = "BOOM ! Result Achived"
    } catch {
        display.innerText = "Error";
        mood.innerText ="OOps ! try again"
    }
}