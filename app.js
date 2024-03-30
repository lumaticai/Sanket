const navHomeBtn = document.querySelector("#nav-home");
const navTranslteBtn = document.querySelector("#nav-translate");
const navSettingsBtn = document.querySelector("#nav-settings");

const translateCard = document.querySelector("#translate-card");
const learnCard = document.querySelector("#learn-card");
const contributeCard = document.querySelector("#contribute-card");
const contactUsCard = document.querySelector("#contact-us-card");

//card nav
translateCard.addEventListener("click", function () {
  window.location = "./translate";
});
learnCard.addEventListener("click", function () {
  window.location = "./learn";
});
contributeCard.addEventListener("click", function () {
  window.location = "#";
});
contactUsCard.addEventListener("click", function () {
  window.location = "#";
});

//bottom nav
navTranslteBtn.addEventListener("click", function () {
  window.location = "./translate";
});
navSettingsBtn.addEventListener("click", function () {
  navHomeBtn.classList.remove("active-nav-btn");
  navSettingsBtn.classList.add("active-nav-btn");
  window.location = "./settings";
});

const userPfp = document.getElementById("user-pfp");
const detailsModal = document.getElementById("detailsModal");
const detailsTextarea = document.getElementById("detailsTextarea");
const saveButton = document.getElementById("saveButton");

userPfp.addEventListener("click", () => {
  detailsModal.style.display = "block";

  const storedDetails = localStorage.getItem("details");
  if (storedDetails) {
    detailsTextarea.value = storedDetails;
  }
});

saveButton.addEventListener("click", () => {
  const details = detailsTextarea.value;
  localStorage.setItem("details", details);
  detailsModal.style.display = "none";
});
