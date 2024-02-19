// Node selectors
let div = document.querySelector("#test");

//Global variables
let url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";


async function getPlanets(planet) {
    try {
        const resp1 = await fetch(`${url}/keys`, { method: "POST"}); // Hämtar API-nyckel
        const {key} = await resp1.json();   // Sparar API-nyckeln i variabel
        const resp2 = await fetch(  // Hämtar API-planeter med nyckeln
            `${url}/bodies`, 
                {
                method: "GET", 
                headers: 
                    {"x-zocom": `${key}`}
                })
        const data = await resp2.json(); // Sparar svaret i variabel
        const planets = data.bodies; // Tar ut alla planeterna och sparar i en variabel
        const names = planets.map((planet) => planet.name); // Sparar planeternas namn i variabel
        
        switch (planet) {           // Hämtar information om rätt planet och skickar vidare till funktion
            case 0: // Solen
                
                div.innerHTML = `
                <h2 class="title">${planets[0].name}</h2>
                <h4 class="subtitle">${planets[0].latinName}</h4>
                <p class="text">${planets[0].desc}</p>
                <div class="info">
                    <div class="info-part>
                        <p class="info-part>
                            <strong>OMKRETS</strong><br>
                            ${planets[0].circumference} km</p>
                    </div>`;
                // skicka i till funktion
                //typ:
                // let i = 0
                //createDiv(i)
                break;
            case 1: // Merkurius
                console.log(planets[1]);
                break;
            case 2: // Venus
                console.log(planets[2]);
                break;
            case 3: // Jorden
                console.log(planets[3]);
                break;
            case 4: // Mars
                console.log(planets[4]);
                break;
            case 5: // Jupiter
                console.log(planets[5]);
                break;
            case 6: // Saturnus
                console.log(planets[6]);
                break;
            case 7: // Uranus
                console.log(planets[7]);
                break;
            case 8: // Neptunus
                console.log(planets[8]);
                break;
        }
    
       
    } catch (error) {
        console.log(error)
    }
    
}

getPlanets(0)

