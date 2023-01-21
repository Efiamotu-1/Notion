import { hidePopup } from './popup.js';

const createHeading = (input, headingType) => {
  input.className = 'input';
  input.classList.add(headingType);

  // sets the text content to be the remaining values after the first two have been sliced
  input.textContent = input.textContent.slice(2).trim();

  // displays the heading type as the placeholder
  headingType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${headingType}`);
  input.focus();
  hidePopup();
};

export default createHeading;
