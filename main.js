"use-strict"; // Strict mode

// Import 
import { getPlanets } from "./modules/api.js";
import { display } from "./modules/display.js"

let planets = await getPlanets();

console.log(planets)

planets.forEach((planet) => {
    const name = planet.name;
    const latinName = planet.latinName;
    const desc = planet.desc;
    const circumference = planet.circumference;
    const maxTemp = planet.temp.day;
    const distFromSun = planet.distance;
    const minTemp = planet.temp.night;;
    const moons = (planet.moons.length > 0) ? planet.moons : " " ;
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