const button = document.getElementById("clearanceBtn");
const documentFile = document.getElementById("scpDocument");
const status = document.getElementById("status");
const level4NoticeButton = document.getElementById("level4NoticeBtn");
const level4Notice = document.getElementById("level4Notice");

button.addEventListener("click", function () {
  button.textContent = "VERIFYING CLEARANCE...";

  setTimeout(function () {
    documentFile.hidden = false;

    button.textContent = "ACCESS GRANTED";
    button.disabled = true;
  }, 1000);
});

level4NoticeButton.addEventListener("click", function () {
  level4Notice.hidden = false;
  level4NoticeButton.setAttribute("aria-expanded", "true");
  level4NoticeButton.disabled = true;
  level4NoticeButton.textContent = "LEVEL 4 NOTICE OPENED";
});
