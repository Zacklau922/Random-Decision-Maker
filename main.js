const optionsContainer = document.querySelector('.options');
const addButton = document.querySelector('.add-button');
const generateButton = document.querySelector('.generate-button');
const loading = document.querySelector('.loading');
const result = document.querySelector('.result');
const container = document.querySelector('.container');
const html = document.querySelector('html');
const body = document.querySelector('body');
const toggleModeBtn = document.querySelector('.toggle-mode-btn');

toggleModeBtn.addEventListener('click', () => {
  html.classList.toggle('night-mode');
  body.classList.toggle('night-mode');
});

let options = 2;

// Add a new option input field
addButton.addEventListener('click', () => {
  const newOption = document.createElement('div');
  newOption.classList.add('option');
  newOption.innerHTML = `
    <input type="text" placeholder="Option ${options + 1}" />
    <button class="remove-button">X</button>
  `;
  const removeButton = newOption.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    newOption.remove();
    options--;
  });
  optionsContainer.insertBefore(newOption, addButton);
  options++;
});

// Generate a random decision
generateButton.addEventListener('click', () => {
  const optionInputs = document.querySelectorAll('.options input');
  const validOptions = [];
  optionInputs.forEach(input => {
    const option = input.value.trim();
    if (option !== '') {
      validOptions.push(option);
    }
  });
  if (validOptions.length < 2) {
    alert('Please enter at least 2 options.');
    return;
  }
  loading.style.display = 'block';
  result.style.display = 'none';
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    result.textContent = validOptions[randomIndex];
    loading.style.display = 'none';
    result.style.display = 'block';
  }, 2000);
});
