import { success, showError } from './errorAndSuccessMessage.js';

const contactForm = document.querySelector('.form-container');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputComment = document.querySelector('#message');

const putErrorContainer = (input) => {
  const parent = input.parentElement;
  const div = document.createElement('div');
  div.className = 'error';
  parent.appendChild(div);
};

putErrorContainer(inputName);
putErrorContainer(inputEmail);
putErrorContainer(inputComment);

const submitError = contactForm.querySelector('.submit-container');
const span = document.createElement('span');
span.className = 'submitError';
submitError.appendChild(span);
span.classList.add('error');

// Implement Validation function
const inputValidation = () => {
  const inputNameValue = inputName.value.trim();
  const inputEmailValue = inputEmail.value.trim();
  const inputCommentValue = inputComment.value.trim();

  const emailText = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const IsEmailValid = emailText.test(inputEmailValue);

  if (inputNameValue === '') {
    showError(inputName);
  } else {
    success(inputName);
  }
  if (inputEmailValue === '') {
    showError(inputEmail);
    span.classList.remove('remove');
    span.innerText = 'Invalid, Email is required';
  } else if (!IsEmailValid) {
    span.classList.remove('remove');
    span.innerText = 'Kindly Check Your Email';
    span.style.color = '#d1220e';
    const div = inputEmail.parentElement.querySelector('div');
    div.innerText = 'Check our email please, the email should be VALID and in LOWERCASE';
    div.style.color = '#d1220e';
  } else {
    span.classList.add('remove');
    success(inputEmail);
  }

  if (inputCommentValue === '') {
    showError(inputComment);
  } else {
    success(inputComment);
  }
};

const error = document.querySelectorAll('.error');

contactForm.addEventListener('submit', (e) => {
  inputValidation();
  if (error[0].parentElement.innerText !== '') {
    error[0].parentElement.classList.add('anim-error');
    error[0].parentElement.classList.add('focus-error');
    error[0].parentElement.classList.remove('success');

    setTimeout(() => {
      error[0].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[0].parentElement.classList.remove('focus-error');
    error[0].parentElement.classList.add('success');
  }
  if (error[1].parentElement.innerText !== '') {
    error[1].parentElement.classList.add('anim-error');
    error[1].parentElement.classList.add('focus-error');
    error[1].parentElement.classList.remove('success');

    setTimeout(() => {
      error[1].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[1].parentElement.classList.remove('focus-error');
    error[1].parentElement.classList.add('success');
  }
  if (error[2].parentElement.innerText !== '') {
    error[2].parentElement.classList.add('anim-error');
    error[2].parentElement.classList.add('focus-error');
    error[2].parentElement.classList.remove('success');

    setTimeout(() => {
      error[2].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[2].parentElement.classList.remove('focus-error');
    error[2].parentElement.classList.add('success');
  }
  if (error[1].parentElement.innerText !== '') {
    error[1].parentElement.classList.add('anim-error');
    error[1].parentElement.classList.add('focus-error');
    error[1].parentElement.classList.remove('success');

    setTimeout(() => {
      error[1].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[1].parentElement.classList.remove('focus-error');
    error[1].parentElement.classList.add('success');
  }
  if (error[2].parentElement.innerText !== '') {
    error[2].parentElement.classList.add('anim-error');
    error[2].parentElement.classList.add('focus-error');
    error[2].parentElement.classList.remove('success');

    setTimeout(() => {
      error[2].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[2].parentElement.classList.remove('focus-error');
    error[2].parentElement.classList.add('success');
  }
});
