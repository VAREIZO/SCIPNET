const button = document.getElementById("clearanceBtn");
const documentFile = document.getElementById("scpDocument");
const status = document.getElementById("status");

button.addEventListener("click", function () {
  button.textContent = "VERIFYING CLEARANCE...";

  setTimeout(function () {
    documentFile.hidden = false;

    button.textContent = "ACCESS GRANTED";
    button.disabled = true;
  }, 1000);
});
