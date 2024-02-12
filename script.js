function yesPage() {
    window.location.href = "yes.html";
}

function changeMindPage() {
    window.location.href = "changeMind.html";
}

const cuteImages = [
    "./assets/cinna-love.gif", 
    "./assets/kuromi-angry.gif",
    "./assets/kuromi-crying.gif",
    "./assets/my-melody-heartbreak.gif",
    "./assets/pepe-cry.gif",
    "./assets/cinna-butt.gif"
];

var count = 0;

function moveButton() {
    var x = Math.random() * (window.innerWidth - 4 * document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - 4 * document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    if (count == 3) {
        document.getElementById("cuteCoverImg").src=cuteImages[1];
        document.getElementById("headerText").innerText="Will you be my valentine? >:(";
    } 
    if (count == 8) {
        document.getElementById("cuteCoverImg").src=cuteImages[2];
        document.getElementById("headerText").innerText="Will you be my valentine? :'(";

    }
    if (count == 14) {
        document.getElementById("cuteCoverImg").src=cuteImages[4];
        document.getElementById("headerText").innerText="Oh";
        removeButton("yesButton");
    }
    if (count == 18) {
        document.getElementById("cuteCoverImg").src=cuteImages[3];
        document.getElementById("headerText").innerText="Will you be my valentine? :'(";
        unRemoveButton("yesButton")
    }
    if (count == 25) {
        document.getElementById("cuteCoverImg").src=cuteImages[5];
        document.getElementById("yesButton").classList.add("big_yes");
        removeButton("noButton")
    }
    count = count + 1;
}

function removeButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display="none";
}

function unRemoveButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display="block";
}
