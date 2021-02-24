class Card {
  constructor({name, link}, cardTemplateSelector, handleCardClick) {
    this._text = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._setCard()
  }

  _toggleLikeButton() {
    this._cardLikeButton.classList.toggle("photo-grid__like-button_liked");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", e => this._toggleLikeButton());
    this._cardDeleteButton.addEventListener("click", e => this._handleDeleteButton());
    this._cardImage.addEventListener("click", e => this._handleCardClick());
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

    this._setEventListeners()
  }
}

export default Card; 