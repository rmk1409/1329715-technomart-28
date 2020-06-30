let modalShowClass = "modal-show";

let mapOpenButton = document.querySelector(".map-open-button");
let mapPopupSelector = ".map-popup";
let mapCloseButton = document.querySelector(mapPopupSelector + " .close-popup-window");

function toggleMapPopup() {
  document.querySelector(mapPopupSelector).classList.toggle(modalShowClass);
}

mapOpenButton.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMapPopup();
});
mapCloseButton.addEventListener("click", toggleMapPopup);

let buyOpenButton = document.querySelector(".buy-item-button");
let buyPopupSelector = ".product-popup";
let buyCloseButton = document.querySelector(buyPopupSelector + " .close-popup-window");

function toggleBuyPopup() {
  document.querySelector(buyPopupSelector).classList.toggle(modalShowClass);
}

buyOpenButton.addEventListener("click", function (event) {
  event.preventDefault();
  toggleBuyPopup();
});
buyCloseButton.addEventListener("click", toggleBuyPopup);

let writeToUsOpenButton = document.querySelector(".write-to-us-button");
let writeToUsPopupSelector = ".write-to-us-popup";
let writeToUsCloseButton = document.querySelector(writeToUsPopupSelector + " .close-popup-window");

function toggleWriteToUsPopup() {
  document.querySelector(writeToUsPopupSelector).classList.toggle(modalShowClass);
}

let isStorageSupport;
let name = "";
let email = "";

let writeToUsForm = document.querySelector(writeToUsPopupSelector + " form");
let nameInput = writeToUsForm.querySelector("#name-field");
let emailInput = writeToUsForm.querySelector("#email-field");
writeToUsOpenButton.addEventListener("click", function (event) {
  event.preventDefault();
  toggleWriteToUsPopup();
  try {
    name = localStorage.getItem("name");
    email = localStorage.getItem("email");
    isStorageSupport = true;
  } catch (e) {
    isStorageSupport = false;
  }
  if (isStorageSupport) {
    if (name) {
      nameInput.value = name;
    }
    if (email) {
      emailInput.value = email;
    }
  }
});
writeToUsCloseButton.addEventListener("click", toggleWriteToUsPopup);
writeToUsForm.addEventListener("submit", function (event) {
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  if (nameValue && emailValue && isStorageSupport) {
    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
  }
})
