"use-strict"; // Strict mode

// Import 
import { getPlanets } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";
import { presentation } from "./modules/presentation.js";
import { createErrorMsg } from "./modules/error.js";

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
    nepBtn = document.querySelector(".neptunus"),
    searchParam = document.querySelector("#searchParam"),
    searchBtn = document.querySelector("#searchBtn");


// Event listeners - PLANETS CLICK

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


// Event listeners - PLANETS HOVER

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

// Event listeners - SEARCHBAR

searchBtn.addEventListener("click", () => {

    let searchPlanet;
    

    switch (searchParam.value.toUpperCase()) {
        case "SOLEN":
            searchPlanet = 0;
            break;
        case "MERKURIUS":
            searchPlanet = 1;
            break;
        case "VENUS":
            searchPlanet = 2;
            break;
        case "JORDEN":
            searchPlanet = 3;
            break;
        case "MARS":
            searchPlanet = 4;
            break;
        case "JUPITER":
            searchPlanet = 5;
            break;
        case "SATURNUS":
            searchPlanet = 6;
            break;
        case "URANUS":
            searchPlanet = 7;
            break;
        case "NEPTUNUS":
            searchPlanet = 8;
            break;
        default:
            createErrorMsg();
    }
    displayPlanet(planets, searchPlanet)
    searchParam.value = "";
})


// Tar bort placeholder vid klick och lägger tillbaks vid mouseout

const searchBar = document.querySelector(".searchbar");

searchParam.addEventListener("click", () => {
    
    if (searchBar.children.length > 2) {
        searchBar.removeChild(searchBar.children[2]);
        } 

    searchParam.placeholder = "";
    
    searchParam.addEventListener("mouseout", () => {
        searchParam.placeholder = "Sök planet här...";
    })

})