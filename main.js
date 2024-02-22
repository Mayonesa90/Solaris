"use-strict"; // Strict mode

// Import modules
import { getPlanets } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js";
import { presentation } from "./modules/presentation.js";
import { createErrorMsg } from "./modules/error.js";
// import { identifyPlanet } from "./modules/identify.js";


// Global variables
let planets = await getPlanets(); // sparar alla planeterna i en variabel när api funktionen är klar
let searchPlanet;
// let searchPlanet = await identifyPlanet();


// Node selection
const solBtn = document.querySelector(".planet-inside-planet--solen"),
    merBtn = document.querySelector(".merkurius"),
    venBtn = document.querySelector(".venus"),
    jorBtn = document.querySelector(".jorden"),
    marBtn = document.querySelector(".mars"),
    jupBtn = document.querySelector(".jupiter"),
    satBtn = document.querySelector(".saturnus"),
    uraBtn = document.querySelector(".uranus"),
    nepBtn = document.querySelector(".neptunus"),
    searchParam = document.querySelector("#searchParam"),
    searchBtn = document.querySelector("#searchBtn"),
    searchBar = document.querySelector(".searchbar");


// Event listener - PLANETS CLICK
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


// Event listener - PLANETS HOVER
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

// Event listener - SEARCHBAR
searchBtn.addEventListener("click", () => {
    
    identifyPlanet(searchParam.value.toUpperCase())
    
    displayPlanet(planets, searchPlanet) // Skickar planeterna som sparats i en variabel samt värdet på aktuell planet 
    searchParam.value = ""; // Återställer sökrutan efter man klickat
    searchPlanet = null; //Återställer värdet på sökningen
})


// Event listener - SEARCHBAR

searchParam.addEventListener("click", () => {
    
    if (searchBar.children.length > 2) { // Tar bort eventuellt felmeddelande när man klickar på sökrutan
        searchBar.removeChild(searchBar.children[2]);
        } 

    searchParam.placeholder = ""; // Gör sökrutan tom om man klickar på den (tar bort placeholdern)
    
    searchParam.addEventListener("mouseout", () => { // Lägger till placeholdertext igen när musen är utanför sökrutan
        searchParam.placeholder = "Sök planet här...";
    })

})

searchParam.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        identifyPlanet(searchParam.value.toUpperCase())
        displayPlanet(planets, searchPlanet) // Skickar planeterna som sparats i en variabel samt värdet på aktuell planet 
        searchParam.value = ""; // Återställer sökrutan efter man klickat
        searchPlanet = null; //Återställer värdet på sökningen (annars visades det senaste sökresultatet)
    } 
})



function identifyPlanet(searchValue) {
    switch (searchValue) { // Här tar den sökordet och ser om den matchar följande cases. 
        case "SOLEN":      // Om den gör det skickas rätt värde till display funktionen, om inget matchar kallar den på errorfunktionen
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
}
