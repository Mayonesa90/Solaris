const presentName = document.querySelector(".presentName");

export function presentation(btn, name) {
    presentName.style.display = "block";
    presentName.textContent = name;

    btn.addEventListener("mouseleave", () => {
        presentName.style.display = "none";
    })
}