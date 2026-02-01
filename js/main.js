/*Dieser Code hier macht den Titel Grün beim Drüberhovern*/
const mainTitle = document.getElementById("mainTitle");
mainTitle.addEventListener("mouseenter", () => {
    mainTitle.style.color = "green";
});
mainTitle.addEventListener("mouseleave", () => {
    mainTitle.style.color = "black";
});