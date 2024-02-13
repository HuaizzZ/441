// Function to validate the form
function validateForm(event) {
  //The code event.preventDefault() is used to prevent the default behavior of an event in a web application.  It is written in JavaScript.
  //When an event is triggered on an element, such as clicking on a link or submitting a form, the browser’s default behavior for that event is executed. 
  //However, by invoking event.preventDefault(), you can prevent the default behavior from happening.
  //To trigger this event, you need to have a JavaScript event object available, typically obtained as a parameter in an event handler function.  
  //In the event handler function, when you call event.preventDefault(), you prevent the default behavior associated with that particular event.  
  //This could be useful, for example, when you want to execute custom logic instead of the default behavior, or when you want to validate user input before submitting a form.
  event.preventDefault();

  // Get form input values
  // This line gets the value from the ‘name’ input field of the form.
  var name = document.getElementById('name').value;
  // This line gets the value from the ‘email’ input field of the form.
  var email = document.getElementById('email').value;
  // This line gets the value from the ‘phone’ input field of the form.
  var phone = document.getElementById('phone').value;
  // This line gets the value from the ‘password’ input field of the form.
  var password = document.getElementById('password').value;
  // This line gets the value from the ‘confirmPassword’ input field of the form.
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Check if any field is empty
  if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Additional validation checks can be added here for email, phone, or any other field
  
  // Form passed validation, display success message
  alert('Form submitted successfully!');
  // Resets the form to its initial state, clearing all the input fields.
  document.getElementById('myForm').reset();
}
