import { inputWeight, inputHeight } from "./script.js"

export const Modal = {
  message: document.querySelector('.modal .title span'),
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove('open')
    inputWeight.value = ''
    inputHeight.value = ''
}
  }

  Modal.buttonClose.onclick = function() {
    Modal.close()
  }

  window.addEventListener('keydown', handleKeydown)

  function handleKeydown(event) {
    if (event.key === 'Escape'){
      Modal.close()
    }
  }