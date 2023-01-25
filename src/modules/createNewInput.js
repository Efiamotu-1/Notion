const createNewInput = (currentInput, currentId) => {
  // creates a new input which can be used to create another text/sentence
  const newInput = document.createElement('div');
  newInput.classList.add('input');
  newInput.setAttribute('contenteditable', true);
  newInput.setAttribute('spellcheck', true);
  newInput.setAttribute('placeholder', "Type '/' for blocks");
  newInput.setAttribute('id', `${Number(currentId) + 1}`);

  currentInput.insertAdjacentElement('afterend', newInput);
  newInput.focus();
  // returns the new input to be created
  return newInput;
};

export default createNewInput;
