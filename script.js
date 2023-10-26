console.log('🟥 🟦 🟩 🟨');

function clickRed(){
    console.log("You clicked red");
    let red = document.getElementById("blocks");
    red.innerHTML += "<div onclick='deleteRed(event)' class ='block red-fill'></div>";
    let redCount = document.getElementById("red-count");
    redCount.innerHTML = `${Number(redCount.innerHTML)+1}`;
}

function clickBlue(){
    console.log("You clicked blue");
    let blue = document.getElementById("blocks");
    blue.innerHTML += "<div onclick='deleteBlue(event)' class='block blue-fill'></div>";
    let blueCount = document.getElementById("blue-count");
    blueCount.innerHTML = `${Number(blueCount.innerHTML)+1}`;
}

function clickGreen(){
    console.log("You clicked green");
    let green = document.getElementById("blocks");
    green.innerHTML += "<div onclick='deleteGreen(event)' class='block green-fill'></div>";
    let greenCount = document.getElementById("green-count");
    greenCount.innerHTML = `${Number(greenCount.innerHTML)+1}`;
}

function clickYellow(){
    console.log("You clicked yellow");
    let yellow = document.getElementById("blocks");
    yellow.innerHTML += "<div onclick='deleteYellow(event)' class='block yellow-fill'></div>";
    let yellowCount = document.getElementById("yellow-count");
    yellowCount.innerHTML = `${Number(yellowCount.innerHTML)+1}`;
}

function deleteRed(event){
    console.log("Deleting red");
    event.target.remove();
    let redCount = document.getElementById("red-count");
    redCount.innerHTML = `${Number(redCount.innerHTML)-1}`;
}

function deleteBlue(event){
    console.log("Deleting blue");
    event.target.remove();
    let blueCount = document.getElementById("blue-count");
    blueCount.innerHTML = `${Number(blueCount.innerHTML)-1}`;
}

function deleteGreen(event){
    console.log("Deleting green");
    event.target.remove();
    let greenCount = document.getElementById("green-count");
    greenCount.innerHTML = `${Number(greenCount.innerHTML)-1}`;
}

function deleteYellow(event){
    console.log("Deleting yellow");
    event.target.remove();
    let yellowCount = document.getElementById("yellow-count");
    yellowCount.innerHTML = `${Number(yellowCount.innerHTML)-1}`;
}
