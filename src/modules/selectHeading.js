import createHeading from './createHeading.js';

const selectHeading = (input) => {
  const headings = document.querySelectorAll('.popup__item');
  headings.forEach((option) => {
    option.addEventListener('click', () => {
      const headingType = option.getAttribute('data-format');
      createHeading(input, headingType);
    });
  });
};

export default selectHeading;
