// --- Tekst op shirt --- //
const shirtTekstInput = document.querySelector("#shirtTekstInput");
const shirtTekstButton = document.querySelector("#shirtTekstButton");
const shirtTekstH2 = document.querySelector("h2");

function veranderShirtTekst() {
    let shirtTekst = shirtTekstInput.value; 
    shirtTekstH2.textContent = shirtTekst;
}

shirtTekstButton.addEventListener("click", veranderShirtTekst);

// Dlo (addEventListener en testContext) en mevrouw L. Pool //


// --- Nummer op shirt --- //
const shirtNummerInput = document.querySelector("#shirtNummerInput");
const shirtNummerButton = document.querySelector("#shirtNummerButton");
const shirtNummerH3 = document.querySelector("h3");

function veranderShirtNummer(){
    let shirtNummer = shirtNummerInput.value;
    shirtNummerH3.textContent = shirtNummer;
}

shirtNummerButton.addEventListener("click", veranderShirtNummer);

// Dlo (addEventListener en testContext) en mevroouw L. Pool (zelfde als bij eerste functie gedaan) // 


// --- Buttons shirt --- //
const vorigeButton = document.querySelector(".vorige")
const volgendeButton = document.querySelector(".volgende")

let shirt = document.querySelector(".shirt");
const shirtClub = ["images/Ajax.png", "images/Korea.png", "images/Japan.png"];
let huidigeClubIndex = 0;

function vorigeClub() {
    huidigeClubIndex = (huidigeClubIndex - 1 + shirtClub.length) % shirtClub.length;
    shirt.src = shirtClub[huidigeClubIndex];
}

function volgendeClub() {
    huidigeClubIndex = (huidigeClubIndex + 1) % shirtClub.length;
    shirt.src = shirtClub[huidigeClubIndex];
}

vorigeButton.addEventListener("click", vorigeClub);
volgendeButton.addEventListener("click", volgendeClub);

// Dlo (Arrays), W3Schools. (z.j.). JavaScript Arrays. Geraadpleegd van https://www.w3schools.com/js/js_arrays.asp, Mijn neef geraadpleegd; hij heeft het mij uitgelegd en ik het geannalysserd en mijn eigen gemaakt.  //



// --- veranderen van band ---//

let band = document.querySelector(".band");
let bandStatus = false;

function bandKnop() {
    bandStatus = !bandStatus

    if (bandStatus == true){
        band.src = "images/Ajax-band.png";
    }  else { 
        band.src = "images/band-2.png";
    }
}

band.addEventListener('click', bandKnop);

// Dlo (Lightbulb opdracht) //


// --- Ineterval melding --- //
function userActivity() {
    if ("Verander") {
        alert('Wil je nog verder gaan?');
    }
}

setInterval(userActivity, 140000);

// Dlo en TechSis Team. (z.j.). Timers and Intervals in JavaScript. Geraadpleegd van https://medium.com/@teamtechsis/timers-and-intervals-in-javascript-c5f4b3450486 // 


   