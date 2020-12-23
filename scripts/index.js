//wrappers
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const addCardModal = document.querySelector(".modal_type_add-card")

//buttons
const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");

const addCardButton = document.querySelector(".profile__add-button");


//edit modal inputs
const nameInput = document.querySelector(".form__input_type_name");
const aboutMeInput = document.querySelector(".form__input_type_about-me");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

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

addCardButton.addEventListener("click", () => {
  addCardModal.classList.add("modal_open");
})


