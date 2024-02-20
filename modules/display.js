const body = document.querySelector("body");

export function displayPlanet(planets, currentPlanet) {

    let planetInfo = planets.filter((planet, i) => i === currentPlanet);

    planetInfo.forEach((planet) => {
    const name = planet.name,
    latinName = planet.latinName,
    desc = planet.desc,
    circumference = planet.circumference,
    maxTemp = planet.temp.day,
    distFromSun = planet.distance,
    minTemp = planet.temp.night,
    moons = (planet.moons.length > 0) ? planet.moons : "Inga månar" ;
    return generateDiv(name, latinName, desc, circumference, maxTemp, minTemp, distFromSun, moons)
    })   
}


function generateDiv(name, latinName, desc, circumference, maxTemp, minTemp, distFromSun, moons) {
   
    let newDiv;

    if (body.contains(newDiv)) {
        body.removeChild(newDiv)
    } else {
        newDiv = document.createElement("div");
        newDiv.classList.add("newDiv");
        newDiv.innerHTML = `
        <h1 class="title">${name}</h1>
        <h3 class="subtitle">${latinName}</h3>
        <p class="text-body">${desc}</p>
        <div class="facts-container">
            <div class="fact"><strong>OMKRETS</strong>${circumference} km</div>
            <div class="fact"><strong>KM FRÅN SOLEN</strong>${distFromSun} km</div>
            <div class="fact"><strong>MAX TEMPERATUR</strong>${maxTemp}C</div>
            <div class="fact"><strong>MIN TEMPERATUR</strong>${minTemp}C</div>
        </div>
        <div class="fact"><strong>MÅNAR</strong>${moons}</strong</div>
        `
        body.appendChild(newDiv);
    }

   
    console.log(newDiv)
}