function showErrorMessage(config, errorMessage, input) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = errorMessage;

  input.classList.add(config.inputErrorClass);
}

function hideErrorMessage(config, input) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = "";

  input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(config, input) {
  if (input.validity.valid) {
    hideErrorMessage(config, input)
  } else {
    showErrorMessage(config, input.validationMessage, input)

  }
}

function toggleButton(button, config, inputs) {
  const isValid = inputs.every((input) => {
    return input.validity.valid;
  })

    if (isValid) {
      button.disabled = false;
      button.classList.remove(config.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(config.inactiveButtonClass)
    }

}


function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach((form) => {
    form.addEventListener("submit", ((evt) => {
      evt.preventDefault();
    }))

    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);

    toggleButton(button, config, inputs);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(config, input);

        toggleButton(button, config, inputs);
      })

    })
  })
}


enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
}); 