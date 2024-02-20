"use-strict"; // Strict mode

// Import 
import { getPlanets } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";
import { presentation } from "./modules/presentation.js";

let planets = await getPlanets();


// Node selection
const solBtn = document.querySelector(".solen"),
    merBtn = document.querySelector(".merkurius"),
    venBtn = document.querySelector(".venus"),
    jorBtn = document.querySelector(".jorden"),
    marBtn = document.querySelector(".mars"),
    jupBtn = document.querySelector(".jupiter"),
    satBtn = document.querySelector(".saturnus"),
    uraBtn = document.querySelector(".uranus"),
    nepBtn = document.querySelector(".neptunus");
    // presentName = document.querySelector(".presentName");


// Event listeners
solBtn.addEventListener("click", () => {
    displayPlanet(planets, 0);
})
merBtn.addEventListener("click", () => {
    displayPlanet(planets, 1);
})
venBtn.addEventListener("click", () => {
    displayPlanet(planets, 2);
})
jorBtn.addEventListener("click", () => {
    displayPlanet(planets, 3);
})
marBtn.addEventListener("click", () => {
    displayPlanet(planets, 4);
})
jupBtn.addEventListener("click", () => {
    displayPlanet(planets, 5);
})
satBtn.addEventListener("click", () => {
    displayPlanet(planets, 6);
})
uraBtn.addEventListener("click", () => {
    displayPlanet(planets, 7);
})
nepBtn.addEventListener("click", () => {
    displayPlanet(planets, 8);
})




solBtn.addEventListener("mouseenter", () => {
    presentation(solBtn, "SOLEN");
})

merBtn.addEventListener("mouseenter", () => {
    presentation(merBtn, "MERKURIUS");
})

venBtn.addEventListener("mouseenter", () => {
    presentation(venBtn, "VENUS");
})

jorBtn.addEventListener("mouseenter", () => {
    presentation(jorBtn, "JORDEN");
})

marBtn.addEventListener("mouseenter", () => {
    presentation(marBtn, "MARS");
})

jupBtn.addEventListener("mouseenter", () => {
    presentation(jupBtn, "JUPITER");
})

satBtn.addEventListener("mouseenter", () => {
    presentation(satBtn, "SATURNUS");
})

uraBtn.addEventListener("mouseenter", () => {
    presentation(uraBtn, "URANUS");
})

nepBtn.addEventListener("mouseenter", () => {
    presentation(nepBtn, "NEPTUNUS");
})


