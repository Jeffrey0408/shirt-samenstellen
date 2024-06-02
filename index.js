// --- Tekst op shirt --- //
const shirtTekstInput = document.querySelector("#shirtTekstInput");
const shirtTekstButton = document.querySelector("#shirtTekstButton");
const shirtTekstH2 = document.querySelector("h2");

function veranderShirtTekst() {
    let shirtTekst = shirtTekstInput.value; 
    shirtTekstH2.textContent = shirtTekst;
}

shirtTekstButton.addEventListener("click", veranderShirtTekst);


// --- Nummer op shirt --- //
const shirtNummerInput = document.querySelector("#shirtNummerInput");
const shirtNummerButton = document.querySelector("#shirtNummerButton");
const shirtNummerH3 = document.querySelector("h3");

function veranderShirtNummer(){
    let shirtNummer = shirtNummerInput.value;
    shirtNummerH3.textContent = shirtNummer;
}

shirtNummerButton.addEventListener("click", veranderShirtNummer);


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


// --- Ineterval melding --- //
function userActivity() {
    if ("Verander") {
        alert('Wil je nog verder gaan?');
    }
}

setInterval(userActivity, 140000);


// --- time out effect --- //
function footballEffect() {
    const football = document.querySelector("#football");
    football.classList.add("groter")

    setTimeout(() => {
        football.classList.remove("groter");
        }, 2000); 
}

document.querySelector("klaar").addEventListener("click", () => {
    footballEffect();
});


   