const minjemButton = document.getElementById("minjemButton");
const minjemPopup = document.getElementById("minjemPopup");
const closePopup = document.getElementById("closePopup");

minjemButton.addEventListener("click", function () {
    minjemPopup.style.display = "block";
});

closePopup.addEventListener("click", function () {
    minjemPopup.style.display = "none";
});