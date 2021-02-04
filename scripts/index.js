import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import {imageModal, openModal, closeModal} from "./utils.js";


//wrappers
const page = document.querySelector(".page");
const modals = Array.from(document.querySelectorAll(".modal"));
const modalContainers = Array.from(document.querySelectorAll(".modal__container"));
const editProfileModal = document.querySelector(".modal_type_edit-profile")
const addCardModal = document.querySelector(".modal_type_add-card")

const editProfileForm = editProfileModal.querySelector(".form");
const addCardForm = addCardModal.querySelector(".form");
const submitCardButton = addCardForm.querySelector(".form__save");
//open buttons
const profileEditButton = document.querySelector(".profile__edit");
const addCardButton = document.querySelector(".profile__add-button");

//close buttons
const closeEditProfileModal = editProfileModal.querySelector(".modal__close-button");
const closeAddCardModal = addCardModal.querySelector(".modal__close-button");
const closeImageModal = imageModal.querySelector(".modal__close-button");

//DOM
const nameInput = document.querySelector(".form__input_type_name");
const aboutMeInput = document.querySelector(".form__input_type_about-me");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const placeNameInput = document.querySelector(".form__input_type_place-title");
const placeUrlInput = document.querySelector(".form__input_type_place-url");


const photoGrid = document.querySelector(".photo-grid");

function valueUpdate(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutMeInput.value;

  closeModal(editProfileModal);
}

function updatePhotoGrid(event) {
  event.preventDefault();

  const newCard = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };

  addCardToGrid(newCard);
  addCardForm.reset();
  submitCardButton.disabled = true
  submitCardButton.classList.add("form__save_disabled");
  closeModal(addCardModal);
}


function addCardToGrid(data) {
  const card = new Card (data, ".card-template");
  photoGrid.prepend(card.getCard());
}

addCardForm.addEventListener("submit", updatePhotoGrid);

profileEditButton.addEventListener("click", () => {

  nameInput.value = profileName.textContent;
  aboutMeInput.value = profileAbout.textContent;

  openModal(editProfileModal);
});

closeEditProfileModal.addEventListener("click", () => {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", valueUpdate);

addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
})

closeAddCardModal.addEventListener("click", () => {
  closeModal(addCardModal);
})


initialCards.forEach(card => {
  addCardToGrid(card);
})


closeImageModal.addEventListener("click", () => {
  closeModal(imageModal);
})

modals.forEach((modal, index) => {

  modal.addEventListener("click", (evt) => {
    if(evt.target === modal || evt.target === modalContainers[index]){
      closeModal(modal)
    }
  })
})

const setting = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
}

const addCardValidator = new FormValidator(setting, addCardForm);
const editProfileValidator = new FormValidator(setting, editProfileForm)

addCardValidator.enableValidation();
editProfileValidator.enableValidation();