//wrappers
const editProfileModal = document.querySelector(".modal_type_edit-profile")
const addCardModal = document.querySelector(".modal_type_add-card")
const imageModal = document.querySelector(".modal_type_image")

const editProfileForm = editProfileModal.querySelector(".form");
const addCardForm = addCardModal.querySelector(".form");

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


function openModal(modal) {

  nameInput.value = profileName.textContent;
  aboutMeInput.value = profileAbout.textContent;

  modal.classList.toggle("modal_open");
}

function closeModal(modal) {
  modal.classList.toggle("modal_open");
}

function valueUpdate(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutMeInput.value;

  closeModal(editProfileModal);
}

function updatePhotoGrid(event) {
  event.preventDefault();

  let newCard = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };

  addCardToGrid(newCard);

  closeModal(addCardModal);
}


addCardForm.addEventListener("submit", updatePhotoGrid);

profileEditButton.addEventListener("click", () => {
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




const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


const cardTemplate = document.querySelector(".card-template").content.querySelector(".photo-grid__item");
const photoGrid = document.querySelector(".photo-grid");

function addCardToGrid(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".photo-grid__img");
  const cardTitle = cardElement.querySelector(".photo-grid__place");
  const cardLikeButton = cardElement.querySelector(".photo-grid__like-button");
  const cardDeleteButton = cardElement.querySelector(".photo-grid__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("photo-grid__like-button_liked");
  })

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  })

  cardImage.addEventListener("click", () => {

    const popupImage = imageModal.querySelector(".modal__image");
    const popupImageCaption = imageModal.querySelector(".modal__image-caption");

    popupImage.src = data.link;
    popupImageCaption.textContent = data.name;

    openModal(imageModal);
  })

  photoGrid.prepend(cardElement);
}


initialCards.forEach(card => {
  addCardToGrid(card);
})


closeImageModal.addEventListener("click", () => {
  closeModal(imageModal);
})

