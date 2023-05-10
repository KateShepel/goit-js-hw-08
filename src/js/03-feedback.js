const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
}
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onAllTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'));
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedMessage) {
        refs.input.value = savedMessage.email;
        refs.textarea.value = savedMessage.message;
    }
}

function onAllTextareaInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const priviosValue = localStorage.getItem('feedback-form-state');
    const newValue = { [name]: value };
    formData = {...JSON.parse(priviosValue), ...newValue};

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}