"use-strict"; // Strict mode

// Import 
import { getPlanets } from "./modules/api.js";
import { displayPlanet } from "./modules/display.js"

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




    //             switch (planet) {           // Hämtar information om rätt planet och skickar vidare till funktion
    //             case 0: // Solen
                    
    //                 div.innerHTML = `
    //                 <h2 class="title">${planets[0].name}</h2>
    //                 <h4 class="subtitle">${planets[0].latinName}</h4>
    //                 <p class="text">${planets[0].desc}</p>
    //                 <div class="info">
    //                     <div class="info-part>
    //                         <p class="info-part>
    //                             <strong>OMKRETS</strong><br>
    //                             ${planets[0].circumference} km</p>
    //                     </div>`;
    //                 // skicka i till funktion
    //                 //typ:
    //                 // let i = 0
    //                 //createDiv(i)
    //                 break;
    //             case 1: // Merkurius
    //                 console.log(planets[1]);
    //                 break;
    //             case 2: // Venus
    //                 console.log(planets[2]);
    //                 break;
    //             case 3: // Jorden
    //                 console.log(planets[3]);
    //                 break;
    //             case 4: // Mars
    //                 console.log(planets[4]);
    //                 break;
    //             case 5: // Jupiter
    //                 console.log(planets[5]);
    //                 break;
    //             case 6: // Saturnus
    //                 console.log(planets[6]);
    //                 break;
    //             case 7: // Uranus
    //                 console.log(planets[7]);
    //                 break;
    //             case 8: // Neptunus
    //                 console.log(planets[8]);
    //                 break;
    //         }