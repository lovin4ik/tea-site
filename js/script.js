
const modal = document.getElementById('Modal');
const buttonOpen = document.getElementById('btn-burger');
const buttonClose = document.getElementById('btn-close');

const ToggleModal = () => modal.classList.toggle('modal-open');

buttonOpen.addEventListener('click', ToggleModal);
buttonClose.addEventListener('click', ToggleModal);
