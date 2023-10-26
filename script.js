console.log('🟥 🟦 🟩 🟨');

function clickRed(){
    console.log("You clicked red");
    let red = document.getElementById("blocks");
    red.innerHTML += "<div onclick='deleteRed(event)' class ='block red-fill'></div>";

}

function clickBlue(){
    console.log("You clicked blue");
    let blue = document.getElementById("blocks");
    blue.innerHTML += "<div onclick='deleteBlue(event)' class='block blue-fill'></div>";
}

function clickGreen(){
    console.log("You clicked green");
    let green = document.getElementById("blocks");
    green.innerHTML += "<div class='block green-fill'></div>";
}

function clickYellow(){
    console.log("You clicked yellow");
    let yellow = document.getElementById("blocks");
    yellow.innerHTML += "<div class='block yellow-fill'></div>";
}

function deleteRed(event){
    console.log("Deleting red");
    event.target.remove();
}

function deleteBlue(event){
    console.log("Deleting blue");
    event.target.remove();
}
