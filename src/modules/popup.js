import headingsList from './headingsList.js';
import iconText from '../images/text.svg';

let show = false;

const showPopup = (input) => {
  if (show) return;
  const htmlPopup = `
  <div class="popup">
    <div class="popup__header">
      <h5">Add Blocks</h5>
      <p>scroll to select or click escape to exit</p>
    </div>
    <div class="popup__list" role="listitem">
      ${headingsList.map((option) => `
            <button class="popup__item" data-format="${option.type}">
            <img src="${iconText}" alt="heading icon" width="30">
            <div>
                <h4>${option.title}</h4>
                <p>${option.description}</p>
            </div>
            </button>
            `).join('')
}
    </div>
  </div>`;

  input.insertAdjacentHTML('afterend', htmlPopup);
  show = true;
};

const hidePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    show = false;
  }
};

// If the user presses the escape key it automatically closes the popup window
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hidePopup();
});

// remove popup when clicking outside of the popup
document.addEventListener('click', (e) => {
  if (e.target.closest('.popup')) return;
  hidePopup();
});

export { showPopup, hidePopup };
