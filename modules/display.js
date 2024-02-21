const body = document.querySelector("body");

export function displayPlanet(planets, currentPlanet) {

    let planetInfo = planets.filter((planet, i) => i === currentPlanet);

    planetInfo.forEach((planet) => {
    const name = planet.name.toUpperCase(),
    latinName = planet.latinName.toUpperCase(),
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
    newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
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
            <div class="fact"><strong>MAX TEMPERATUR</strong>${maxTemp}C</div>
            <div class="fact"><strong>MIN TEMPERATUR</strong>${minTemp}C</div>
        </div>
        <div class="fact --last-fact"><strong>MÅNAR</strong>${moons}</div>
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
    planetColor.style.backgroundColor = `var(--${name})`
    
    newDiv.addEventListener("click", () => {
        body.removeChild(newDiv)
    } )
   
}