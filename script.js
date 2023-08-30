'use strict';

const modal = document.querySelector('.modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

// Function used for Opening the modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function used for Closing the modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Iterating through the button to listen to the event
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// Closing the modal
btnCloseModal.addEventListener('click', closeModal);

// adding functionality to close the Modal if user click on overlay area
overlay.addEventListener('click', closeModal);

// Escape functionality to the document
document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModal();
  }
});
