let editButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".modal__button");
let form = document.querySelector(".form");
let modal = document.querySelector(".modal");

let nameInput = document.querySelector(".form__input_type_name");
let aboutMeInput = document.querySelector(".form__input_type_about-me");

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

let likeButton = document.querySelector(".photo-grid__like-button")




form.addEventListener("submit", (event) => {
  event.preventDefault()

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutMeInput.value;

  toggleModal()

})

function toggleModal() {
  modal.classList.toggle("modal_open");
}

editButton.addEventListener("click", toggleModal)

closeButton.addEventListener("click", toggleModal)

