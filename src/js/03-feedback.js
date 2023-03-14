import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let formData = {};

formEl.addEventListener('input', throttle(handleTextareaInput, 500));
formEl.addEventListener('submit', handleFormSubmit);

populateTextarea();

function handleTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedTextarea = localStorage.getItem(STORAGE_KEY);
  if (savedTextarea) {
    formData = JSON.parse(savedTextarea);
    formEl.email.value = formData.email;
    formEl.message.value = formData.message;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}
