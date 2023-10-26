console.log('🟥 🟦 🟩 🟨');
let redBlockCounter = 1;
let blueBlockCounter = 1;
let greenBlockCounter = 1;
let yellowBlockCounter = 1;

function clickRed(){
    console.log("You clicked red");
    let red = document.getElementById("blocks");
    red.innerHTML += "<div onclick='deleteRed(event)' class ='block red-fill'></div>";
    redBlockCounter++;
    document.getElementById("red-count").textContent = redBlockCounter;
    
}

function clickBlue(){
    console.log("You clicked blue");
    let blue = document.getElementById("blocks");
    blue.innerHTML += "<div onclick='deleteBlue(event)' class='block blue-fill'></div>";
    blueBlockCounter++;
    document.getElementById("blue-count").textContent = blueBlockCounter;
}

function clickGreen(){
    console.log("You clicked green");
    let green = document.getElementById("blocks");
    green.innerHTML += "<div onclick='deleteGreen(event)' class='block green-fill'></div>";
    greenBlockCounter++;
    document.getElementById("green-count").textContent = greenBlockCounter;
}

function clickYellow(){
    console.log("You clicked yellow");
    let yellow = document.getElementById("blocks");
    yellow.innerHTML += "<div onclick='deleteYellow(event)' class='block yellow-fill'></div>";
    yellowBlockCounter++;
    document.getElementById("yellow-count").textContent = yellowBlockCounter;
}

function deleteRed(event){
    console.log("Deleting red");
    event.target.remove();
    redBlockCounter--;
    document.getElementById("red-count").textContent = redBlockCounter;
}

function deleteBlue(event){
    console.log("Deleting blue");
    event.target.remove();
    blueBlockCounter--;
    document.getElementById("blue-count").textContent = blueBlockCounter;
}

function deleteGreen(event){
    console.log("Deleting green");
    event.target.remove();
    greenBlockCounter--;
    document.getElementById("green-count").textContent = greenBlockCounter;
}

function deleteYellow(event){
    console.log("Deleting yellow");
    event.target.remove();
    yellowBlockCounter--;
    document.getElementById("yellow-count").textContent = yellowBlockCounter;
}
