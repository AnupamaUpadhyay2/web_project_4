class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _showErrorMessage(errorMessage, input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;

    input.classList.add(this._settings.inputErrorClass);
  }

  _hideErrorMessage(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = "";

    input.classList.remove(this._settings.inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input)
    } else {
      this._showErrorMessage(input.validationMessage, input)

    }
  }

  _toggleButton(button, inputs) {
    const isValid = inputs.every((input) => {
      return input.validity.valid;
    })

    if (isValid) {
      button.disabled = false;
      button.classList.remove(this._settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this._settings.inactiveButtonClass)
    }
  }

  enableValidation() {
 
    this._form.addEventListener("submit", ((evt) => {
      evt.preventDefault();
    }))

    const inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const button = this._form.querySelector(this._settings.submitButtonSelector);

    this._toggleButton(button, inputs);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);

        this._toggleButton(button, inputs);
      })

    })
 
  }


}

export default FormValidator;

