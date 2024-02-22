// BESKRIVNING
// Denna modul skapar ett error meddelande 

// Node selection
const searchBar = document.querySelector(".searchbar");


// Functions
export function createErrorMsg(error) {

    const errorMsg = document.createElement("p"); // Skapar nytt p-element
    errorMsg.classList.add("errorMsg");            // Lägger till css-klass
    errorMsg.textContent = "Finns ingen sån planet :/"; // Lägger till meddelandet som visas

    if (searchBar.children.length === 2) { // Kontrollerar att det inte redan finns ett error meddelande
        searchBar.appendChild(errorMsg);
    }
}