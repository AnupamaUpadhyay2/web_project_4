//wrappers
const page = document.querySelector(".page");
const modals = Array.from(document.querySelectorAll(".modal"));
const modalContainers = Array.from(document.querySelectorAll(".modal__container"));
const editProfileModal = document.querySelector(".modal_type_edit-profile")
const addCardModal = document.querySelector(".modal_type_add-card")
const imageModal = document.querySelector(".modal_type_image")

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

const cardTemplate = document.querySelector(".card-template").content.querySelector(".photo-grid__item");
const photoGrid = document.querySelector(".photo-grid");

const popupImage = imageModal.querySelector(".modal__image");
const popupImageCaption = imageModal.querySelector(".modal__image-caption");

let openedModal;

function openModal(modal) {
  modal.classList.toggle("modal_open");
  openedModal = modal;
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(modal) {
  modal.classList.toggle("modal_open");
  openedModal = null;
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(event){
  if (event.key === "Escape") {
    closeModal(openedModal);
  }
}

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
  const cardElement = createCard(data);
  photoGrid.prepend(cardElement);
}

addCardForm.addEventListener("submit", updatePhotoGrid);

// addCardForm.addEventListener("submit", () => {
//   updatePhotoGrid(event);
//   toggleButton(button, config, inputs);
// })

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


// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg"
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg"
//   }
// ];

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

// page.addEventListener("keydown", (evt) => {
  
//   if (evt.key === "Escape" && openedModal) {
//     closeModal(openedModal)
//   }
// })


function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".photo-grid__img");
  const cardTitle = cardElement.querySelector(".photo-grid__place");
  const cardLikeButton = cardElement.querySelector(".photo-grid__like-button");
  const cardDeleteButton = cardElement.querySelector(".photo-grid__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  function toggleLikeButton(){
    cardLikeButton.classList.toggle("photo-grid__like-button_liked");
  }

  cardLikeButton.addEventListener("click", toggleLikeButton);
  
  // () => {
  //   cardLikeButton.classList.toggle("photo-grid__like-button_liked");
  // })

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  })

  cardImage.addEventListener("click", () => {

    popupImage.src = data.link;
    popupImageCaption.textContent = data.name;
    popupImage.alt = data.name;

    openModal(imageModal);
  })

  return cardElement;
}