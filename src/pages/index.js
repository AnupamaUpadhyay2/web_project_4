import { initialCards } from "../utils/array.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section";

import "./index.css";
import logoSrc from "../images/logoWhite.svg";
import profilePhotoSrc from "../images/imageprofilePhoto.png";
import addButtonSrc from "../images/addIcon.svg";

const logo = document.getElementById("image-logo");
logo.src = logoSrc;

const profilePhoto = document.getElementById("profile-photo");
profilePhoto.src = profilePhotoSrc;

const addButtonImage = document.getElementById("add-image");
addButtonImage.src=addButtonSrc;


//wrappers
const editProfileModal = document.querySelector(".modal_type_edit-profile")
const addCardModal = document.querySelector(".modal_type_add-card")

const editProfileForm = editProfileModal.querySelector(".form");
const addCardForm = addCardModal.querySelector(".form");

//open buttons
const profileEditButton = document.querySelector(".profile__edit");
const addCardButton = document.querySelector(".profile__add-button");
const submitCardButton = addCardForm.querySelector(".form__save"); 

const userInfo = new UserInfo({ name: ".profile__name", job: ".profile__about"})

const editPopup = new PopupWithForm(".modal_type_edit-profile", userInfo.setUserInfo);
editPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editPopup.open(userInfo.getUserInfo())
});

const popupImage = new PopupWithImage(".modal_type_image")
popupImage.setEventListeners();

function createCard(section, data) {
  const card = new Card (data, ".card-template", () => {
    popupImage.open(data)
  })

  section.addItem(card.getCard())
}

const cardSection = new Section({items: initialCards, renderer: createCard}, ".photo-grid")
cardSection.renderer()

const addCardPopup = new PopupWithForm(".modal_type_add-card", (data) => createCard(cardSection, data));

addCardPopup.setEventListeners();

addCardButton.addEventListener("click", (button) => {
  addCardPopup.open({name: "", link: ""});

  const addDisableButton = new FormValidator(setting, addCardForm);
  addDisableButton.disableButton(submitCardButton);
 
});

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


