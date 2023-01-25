const filterInput = (searchInput) => {
  searchInput = searchInput.slice(1);
  const options = document.querySelectorAll('.popup__item');
  options.forEach((option) => {
    const title = option.querySelector('h4').textContent;
    option.style.display = title
      .toLowerCase()
      .includes(searchInput.toLowerCase())
      ? 'flex'
      : 'none';
  });
  return `hello ${searchInput && searchInput.slice(0)}`;
};

export default filterInput;
