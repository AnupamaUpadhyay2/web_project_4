let editButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".modal__close-button");
let form = document.querySelector(".form");
let modal = document.querySelector(".modal");

let nameInput = document.querySelector(".form__input_type_name");
let aboutMeInput = document.querySelector(".form__input_type_about-me");

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

function openModal() {

  nameInput.value = profileName.textContent;
  aboutMeInput.value = profileAbout.textContent;

  modal.classList.toggle("modal_open");
}

function closeModal() {
  modal.classList.toggle("modal_open");
}

function valueUpdate(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutMeInput.value;

  closeModal();
}

editButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

form.addEventListener("submit", valueUpdate);