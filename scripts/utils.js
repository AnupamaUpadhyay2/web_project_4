let openedModal;

export function openModal(modal) {
  modal.classList.toggle("modal_open");
  openedModal = modal;
  document.addEventListener("keydown", handleEscapeKey);
}

export function closeModal(modal) {
  modal.classList.toggle("modal_open");
  openedModal = null;
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(event){
  if (event.key === "Escape") {
    closeModal(openedModal);
  }
}

export const imageModal = document.querySelector(".modal_type_image")
export const popupImage = imageModal.querySelector(".modal__image");
export const popupImageCaption = imageModal.querySelector(".modal__image-caption");