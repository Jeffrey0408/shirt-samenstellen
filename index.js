// --- Constante --- //
const shirtTekstInput = document.querySelector("#shirtTekstInput");
const shirtTekstButton = document.querySelector("#shirtTekstButton");
const shirtTekstH2 = document.querySelector("h2");

const shirtNummerInput = document.querySelector("#shirtNummerInput");
const shirtNummerButton = document.querySelector("#shirtNummerButton");
const shirtNummerH3 = document.querySelector("h3");

const vorigeButton = document.querySelector(".vorige")
const volgendeButton = document.querySelector(".volgende")

// --- Let --- //
 let shirt = document.querySelector(".shirt");

const shirtClub = ["images/Ajax.png", "images/Korea.png", "images/Japan.png"];
let huidigeClubIndex = 0;

// --- Function --- //
function veranderShirtTekst() {
    let shirtTekst = shirtTekstInput.value; 
    shirtTekstH2.textContent = shirtTekst;
}

function veranderShirtNummer(){
    let shirtNummer = shirtNummerInput.value;
    shirtNummerH3.textContent = shirtNummer;
}

function vorigeClub() {
    huidigeClubIndex = (huidigeClubIndex - 1 + shirtClub.length) % shirtClub.length;
    shirt.src = shirtClub[huidigeClubIndex];
}

function volgendeClub() {
    huidigeClubIndex = (huidigeClubIndex + 1) % shirtClub.length;
    shirt.src = shirtClub[huidigeClubIndex];
}

// --- addEventListeners --- //
shirtTekstButton.addEventListener("click", veranderShirtTekst);
shirtNummerButton.addEventListener("click", veranderShirtNummer);
vorigeButton.addEventListener("click", vorigeClub);
volgendeButton.addEventListener("click", volgendeClub);


