// BESKRIVNING
// Denna modul skapar ett error meddelande 

const searchBar = document.querySelector(".searchbar");
// const body = document.querySelector("body");

export function createErrorMsg(error) {

    const errorMsg = document.createElement("p");
    errorMsg.classList.add("errorMsg");
    errorMsg.textContent = "Finns ingen sån planet :(";

    if (searchBar.children.length === 2) {
        searchBar.appendChild(errorMsg);
    }

    // if (searchBar.children.length > 2) {
    //     searchBar.removeChild(errorMsg);
    // } else {
        
    // }
    
    // console.log(searchBar.children.length)

    // searchBar.addEventListener("click", () => {
    //     if (searchBar.children.length > 2) {
    //         searchBar.removeChild(errorMsg);
    //     }
    // })
}