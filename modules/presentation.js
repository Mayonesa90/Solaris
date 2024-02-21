// BESKRIVNING
// Denna modul är till för att presentera namnet på planeten när
// användaren hovrar över dem


const presentName = document.querySelector(".presentName");

export function presentation(btn, name) {
    presentName.style.display = "block";
    presentName.textContent = name;

    btn.addEventListener("mouseleave", () => {
        presentName.style.display = "none";
    })
}