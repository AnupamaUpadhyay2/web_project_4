import {imageModal, openModal, popupImage, popupImageCaption} from "./utils.js";
class Card {
  constructor({name, link}, cardTemplateSelector) {
    this._text = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._setCard()
  }

  _toggleLikeButton() {
    this._cardLikeButton.classList.toggle("photo-grid__like-button_liked");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _handlePicturePreview() {
    console.log('picture preview')
    popupImage.src = this._link;
    popupImageCaption.textContent = this._text;
    popupImage.alt = this._text;

    openModal(imageModal);
  }


  _setEventListeners() {
    console.log('set event listeners')
    this._cardLikeButton.addEventListener("click", e => this._toggleLikeButton());
    this._cardDeleteButton.addEventListener("click", e => this._handleDeleteButton());
    this._cardImage.addEventListener("click", e => this._handlePicturePreview());
  }

  getCard() {
    return this._cardElement;
  }

  _setCard() {
    const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector(".photo-grid__item");

    this._cardElement = cardTemplate.cloneNode(true);
    this._cardLikeButton = this._cardElement.querySelector(".photo-grid__like-button");
    this._cardDeleteButton = this._cardElement.querySelector(".photo-grid__delete-button");
    this._cardImage = this._cardElement.querySelector(".photo-grid__img");

    const cardTitle = this._cardElement.querySelector(".photo-grid__place");

    cardTitle.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._text;

    console.log('before set event listeners')

    this._setEventListeners()
  }
}

export default Card; 