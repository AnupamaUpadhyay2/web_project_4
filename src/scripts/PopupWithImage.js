import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({name, link}) {
    const caption = this._popup.querySelector('.modal__image-caption');
    const image = this._popup.querySelector('.modal__image');

    caption.textContent = name;
    image.src = link;

    super.open();
  }
}

export default PopupWithImage;