import { showPopup } from './popup.js';
import selectHeading from './selectHeading.js';
import createHeading from './createHeading.js';
import createNewInput from './createNewInput.js';

const handleUserInput = (input = document.getElementById('1')) => {
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/') {
      // displays the popup showing the different heading types
      showPopup(input);
      // listens and send the heading the user selects
      selectHeading(input);
    }
  });

  input.addEventListener('keydown', (e) => {
    // listens for when the user clicks on the enter key
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputText = input.textContent;

      if (inputText[0] === '/' && inputText[1] === '1') {
        createHeading(input, 'h1');
      }

      if (inputText[0] === '/' && inputText[1] === '2') {
        createHeading(input, 'h2');
      }

      if (inputText[0] === '/' && inputText[1] === '3') {
        createHeading(input, 'h3');
      }

      if (inputText[0] === '/' && inputText[1] === '4') {
        createHeading(input, 'h4');
      }

      if (inputText[0] === '/' && inputText[1] === '5') {
        createHeading(input, 'h6');
      }

      if (inputText[0] === '/' && inputText[1] === 'p') {
        createHeading(input, 'p');
      }

      // if the user refuses to put in any text he is not allowed to save it
      if (inputText === '') return;

      const newInput = createNewInput(input, input.id);
      handleUserInput(newInput);
    }
  });
};

export default handleUserInput;
