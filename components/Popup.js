class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      // todo: call the close method
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose)
  }

  close() {
    // this._popupElement.classList.remove("popup_visible");
    console.log("close button")
    // remove the escape listener
  }

  setEventListeners() {

    // this one listener will handle the close button and modal listener
    this._popupElement.addEventListener("mousedown", (evt) => {
     // if the event target's classlist contains "popup__close" or "popup"
     // then close the modal
    //  if (x || y) {

    //  }
    });
  }



}
export default Popup;
