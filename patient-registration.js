document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('patientForm');
  const walletInput = form.querySelector('input[type="text"]:nth-of-type(1)'); 
  const nameInput = form.querySelector('input[type="text"]:nth-of-type(2)'); 
  const dobInput = form.querySelector('input[type="date"]'); 
  const genderInput = form.querySelector('select'); 
  const bloodGroupInput = form.querySelector('select:nth-of-type(2)');
  const addressInput = form.querySelector('input[type="text"]:nth-of-type(5)'); 
  const emailInput = form.querySelector('input[type="email"]'); 
  const passwordInput = form.querySelector('input[type="password"]:nth-of-type(1)');
  const confirmPasswordInput = form.querySelector('input[type="password"]:nth-of-type(2)'); 
  const fileInput = form.querySelector('input[type="file"]'); 
  const messageContainer = document.createElement('div'); 

  
  form.insertAdjacentElement('beforeend', messageContainer);
  messageContainer.style.marginTop = '20px';

  form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      messageContainer.textContent = '';

      // Get values from the form inputs
      const walletAddress = walletInput.value.trim();
      const fullName = nameInput.value.trim();
      const dateOfBirth = dobInput.value;
      const gender = genderInput.value;
      const bloodGroup = bloodGroupInput.value;
      const address = addressInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      const file = fileInput.files[0];

      // Validation flags
      let isValid = true;

      // Wallet Address Validation
      if (!walletAddress) {
          messageContainer.textContent += 'Wallet Address is required.\n';
          isValid = false;
      }

      // Full Name Validation
      if (!fullName) {
          messageContainer.textContent += 'Full Name is required.\n';
          isValid = false;
      }

      // Date of Birth Validation
      if (!dateOfBirth) {
          messageContainer.textContent += 'Date of Birth is required.\n';
          isValid = false;
      }

      // Gender Validation
      if (!gender) {
          messageContainer.textContent += 'Gender is required.\n';
          isValid = false;
      }

      // Blood Group Validation
      if (!bloodGroup) {
          messageContainer.textContent += 'Blood Group is required.\n';
          isValid = false;
      }

      // Home Address Validation
      if (!address) {
          messageContainer.textContent += 'Home Address is required.\n';
          isValid = false;
      }

      // File Validation (Optional)
      if (!file) {
          messageContainer.textContent += 'You need to upload past medical records.\n';
          isValid = false;
      }

      // Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
          messageContainer.textContent += 'Please enter a valid Email Address.\n';
          isValid = false;
      }

      // Password Validation
      if (!password) {
          messageContainer.textContent += 'Password is required.\n';
          isValid = false;
      } else if (password.length < 6) {
          messageContainer.textContent += 'Password must be at least 6 characters long.\n';
          isValid = false;
      }

      // Confirm Password Validation
      if (!confirmPassword) {
          messageContainer.textContent += 'Confirm Password is required.\n';
          isValid = false;
      } else if (password !== confirmPassword) {
          messageContainer.textContent += 'Passwords do not match.\n';
          isValid = false;
      }

      if (isValid) {
          messageContainer.textContent = 'Registration Successful! Welcome to MedChain!';
          messageContainer.style.color = 'green';
          form.reset(); 
      } else {
          messageContainer.style.color = 'red';
      }
  });
});
