(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

  // takes the input and feedback message string.
  // first removes any errors, then if there's a message syles and sets error text
  function showErrorMessage(input, message) {
    let container = input.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  // goes through a list of ifs that will short-circuit and return 'false' if validatons aren't met.
  // if it passes all validations, it returns 'true' and will clear any error messages present
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.')
      return false;
    }

    if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address')
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validatePassword() {
    let value = passwordInput.value;

    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.')
      return false;
    }

    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password must be at least 8 characters long.')
      return false;
    }

    showErrorMessage(passwordInput, null);
    return true;
  }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return validateEmail() && validatePassword();
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }else{
      document.querySelectorAll('.error-message').forEach((element) => {
        element.classList.add('red');
      });
    }
  })

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);


  // THE RETURN STATEMENT HERE
})();