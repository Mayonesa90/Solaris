// Global variables
let url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";
let planets;
// Functions
export async function getPlanets(planet) {
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
        return planets = data.bodies; // Tar ut alla planeterna och sparar i en variabel som går att nå via main
    } catch (error) {
        console.log(error)
    }
}

