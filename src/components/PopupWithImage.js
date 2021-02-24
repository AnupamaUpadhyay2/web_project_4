import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._caption = this._popup.querySelector('.modal__image-caption');
    this._image = this._popup.querySelector('.modal__image');
  }

  open({name, link}) {
    

    this._caption.textContent = name;
    this._image.src = link;

    super.open();
  }
}

export default PopupWithImage;