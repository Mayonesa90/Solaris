// BESKRIVNING
// Denna modul är till för att sätta ihop informationen om den gällande planeten
// i en div som displayas

// Global variables
let moonString;


// Node selection
const body = document.querySelector("body");


// Functions
// 1. Sparar informationen från API-funktionen i variabler
export function displayPlanet(planets, currentPlanet) {

    let planetInfo = planets.filter((planet, i) => i === currentPlanet); // Här sparas det filtrerade resultatet (="planeter") i en ny variabel (="planetInfo") genom att kolla vilket index som stämmer överens med rätt planet

    planetInfo.forEach((planet) => { // Här utförs en funktion på den filtrerade planeten som sparar värden i variabler som sedan skickas vidare till funktionen som skapar diven
    const name = planet.name.toUpperCase(),
    latinName = planet.latinName.toUpperCase(),
    desc = planet.desc,
    circumference = planet.circumference.toLocaleString(), // Adds spaces to result
    maxTemp = planet.temp.day,
    distFromSun = planet.distance.toLocaleString(), // Adds spaces to result
    minTemp = planet.temp.night,
    moons = (planet.moons.length > 0) ? planet.moons.map((moon) => moon).join(", ") : "Inga månar" ; // Kollar om planeten har månar och skapar en ny sträng med mellanrum om den har det, annars ersätts det med en text
    return generateDiv(name, latinName, desc, circumference, maxTemp, minTemp, distFromSun, moons)
    })   
}

// 2. Som sedan skickas vidare till denna funktion som sätter ihop diven
function generateDiv(name, latinName, desc, circumference, maxTemp, minTemp, distFromSun, moons) {
    
    let newDiv;
    newDiv = document.createElement("div"); // Skapar ett nytt div-element
    newDiv.classList.add("newDiv"); // Lägger till css-klass för styling, nedan lägger till innehållet i diven med information från funktionen ovan
    newDiv.innerHTML = ` 
    <div class="planet">
        <div class="planet-inside">
            <div class="planet-inside-planet"></div>
        </div>
    </div>
    <div class="container">
        <h1 class="title">${name}</h1>
        <h3 class="subtitle">${latinName}</h3>
        <p class="text-body">${desc}</p>
        <div class="facts-container">
            <div class="fact"><strong>OMKRETS</strong>${circumference} km</div>
            <div class="fact"><strong>KM FRÅN SOLEN</strong>${distFromSun} km</div>
            <div class="fact"><strong>MAX TEMPERATUR</strong>${maxTemp} ℃</div>
            <div class="fact"><strong>MIN TEMPERATUR</strong>${minTemp} ℃</div>
        </div>
        <div class="fact"><strong>MÅNAR</strong>${moons}</div>
    </div>
    <div class="star --pos1"></div>
    <div class="star --pos2"></div>
    <div class="star --pos3"></div>
    <div class="small-star --pos4"></div>
    <div class="star --pos5"></div>
    <div class="small-star --pos6"></div>
    <div class="small-star --pos7"></div>
    <div class="star --pos8"></div>
    <div class="star --pos9"></div>
    <div class="small-star --pos10"></div>
    <div class="small-star --pos11"></div>
    <div class="small-star --pos12"></div>
    <div class="star --pos13"></div>
    <div class="star --pos14"></div>
    <div class="star --pos15"></div>
    <div class="small-star --pos16"></div>
    <div class="small-star --pos17"></div>
    <div class="star --pos18"></div>
    <div class="star --pos19"></div>
    <div class="small-star --pos20"></div>
    <div class="star --pos21"></div>
    <div class="small-star --pos22"></div>
    <div class="small-star --pos23"></div>
    <div class="star --pos24"></div>
    <div class="star --pos25"></div>
    <div class="star --pos26"></div>
    <div class="star --pos27"></div>
    <div class="star --pos28"></div>
    <div class="small-star --pos29"></div>
    <div class="small-star --pos30"></div>
    <div class="small-star --pos31"></div>
    <div class="star --pos32"></div>
    <div class="star --pos33"></div>
    <div class="small-star --pos34"></div>
    <div class="star --pos35"></div>
    <div class="star --pos36"></div>
    `
    body.appendChild(newDiv);
    const planetColor = document.querySelector(".planet-inside-planet");
    planetColor.style.backgroundColor = `var(--${name})` // Här ändrar planeten färg till den matchande variabeln
    planetColor.style.background = `linear-gradient(90deg, var(--${name}) 97%, rgba(255,255,255,1) 100%)`;

    newDiv.addEventListener("click", () => {
        body.removeChild(newDiv) // Tar bort diven när man klickar på den
        window.scrollTo(500, 0); // Scrollar så man kommer överst på sidan igen
    } )
   
}

