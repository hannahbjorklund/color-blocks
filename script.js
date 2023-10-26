console.log('🟥 🟦 🟩 🟨');


function clickRed(event){
    console.log("You clicked red");
    let red = document.getElementById("blocks");
    red.innerHTML += "<div class ='block red-fill'></div>";
}

function clickBlue(event){
    console.log("You clicked blue");
    let blue = document.getElementById("blocks");
    blue.innerHTML += "<div class='block blue-fill'></div>";
}

function clickGreen(event){
    console.log("You clicked green");
    let green = document.getElementById("blocks");
    green.innerHTML += "<div class='block green-fill'></div>";
}

