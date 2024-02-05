// Function to validate the form
function validateForm(event) {
  event.preventDefault();

  // Get form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
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
  document.getElementById('myForm').reset();
}
