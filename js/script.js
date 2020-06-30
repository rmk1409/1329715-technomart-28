let modalShowClass = "modal-show";

let mapOpenButton = document.querySelector(".map-open-button");
if (mapOpenButton) {
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
}

let buyOpenButtons = document.querySelectorAll(".buy-item-button");
let buyPopupSelector = ".product-popup";
let buyCloseButton = document.querySelector(buyPopupSelector + " .close-popup-window");

function toggleBuyPopup() {
  document.querySelector(buyPopupSelector).classList.toggle(modalShowClass);
}

buyOpenButtons.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    toggleBuyPopup();
  })
});
buyCloseButton.addEventListener("click", toggleBuyPopup);

let writeToUsOpenButton = document.querySelector(".write-to-us-button");
if (writeToUsOpenButton) {

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
}
