import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
  }

  open(values) {
    const inputs = [...this._form.querySelectorAll(".form__input")];
    inputs.forEach(input => {
      input.value = values[input.name]
    })
    super.open()
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".form__input")];
    const inputValues = {};

    inputs.forEach(input => inputValues[input.name] = input.value)

    return inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", e => {
      this._submitHandler(this._getInputValues())
      this.close()
    })

    super.setEventListeners();
  }

  close() {
    super.close();
  }

}

export default  PopupWithForm;