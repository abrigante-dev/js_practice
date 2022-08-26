'use strict';

// store elements as variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// function to open a modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// for loop of open modal buttons
btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});

// close modal event handler
btnCloseModal.addEventListener('click', closeModal);

// close modal when clicking outside of the opened modal
overlay.addEventListener('click', closeModal);

// event handler for key press, key handler
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
