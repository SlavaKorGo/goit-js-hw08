import throttle from 'lodash.throttle';

const formEl = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
}
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.form.addEventListener('input', throttle(handleTextareaInput, 500));
formEl.form.addEventListener('submit', handleFormSubmit);

populateTextarea();

function handleTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea () {
const savedTextarea = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedTextarea?.email) {
  formEl.input.value = savedTextarea.email;
  formData.email = savedTextarea.email;
}
if(savedTextarea?.message) {
  formEl.textarea.value = savedTextarea.message;
  formData.message = savedTextarea.message;
}
}

