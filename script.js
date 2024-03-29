// Select the necessary elements
const form = document.querySelector('form');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const phone = document.querySelector('#tel_num');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const confirmResult = document.querySelector('#confirm_result');
const btn = document.querySelector('.form__button');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (firstName.value === '' || lastName.value === '' || phone.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
    firstName.classList.add('inputInvalid');
    lastName.classList.add('inputInvalid');
    phone.classList.add('inputInvalid');
    email.classList.add('inputInvalid');
    password.classList.add('inputInvalid');
    confirmPassword.classList.add('inputInvalid');
    alert('Please fill in all fields');
    return
  } else {
    firstName.classList.remove('inputInvalid');
    lastName.classList.remove('inputInvalid');
    phone.classList.remove('inputInvalid');
    email.classList.remove('inputInvalid');
    password.classList.remove('inputInvalid');
    confirmPassword.classList.remove('inputInvalid');
    alert('Thank you for filling the form!')
  }


})




// Add an event listener to the ConfirmPassword field to check if password matches the Password field value

confirmPassword.addEventListener('input', function () {
  console.log(password.value, confirmPassword.value)

  if (password.value === confirmPassword.value) {

    confirmResult.textContent = ' Passwords match ✔';
    confirmResult.style.color = 'green';
  } else {
    confirmResult.textContent = '* Passwords do not match';
    confirmResult.style.color = 'red';
  }
})

