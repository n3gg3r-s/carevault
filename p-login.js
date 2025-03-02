document.addEventListener('DOMContentLoaded', () => {
  // Get the form and elements
  const form = document.getElementById('loginForm');
  const walletInput = document.getElementById('wallet-address');
  const passwordInput = document.getElementById('password');
  const walletError = document.getElementById('wallet-error');
  const passwordError = document.getElementById('password-error');
  const loginMessage = document.getElementById('login-message');

  // Form submission handler
  form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      // Reset error messages
      walletError.textContent = '';
      passwordError.textContent = '';
      loginMessage.textContent = '';

      const walletAddress = walletInput.value.trim();
      const password = passwordInput.value.trim();

      // Validation flags
      let isValid = true;

      // Wallet address validation
      if (!walletAddress) {
          walletError.textContent = 'Wallet Address is required.';
          isValid = false;
      } else {
          const walletPattern = /^0x[a-fA-F0-9]{40}$/;
          if (!walletPattern.test(walletAddress)) {
              walletError.textContent = 'Invalid Wallet Address. It must start with "0x" and be 42 characters long.';
              isValid = false;
          }
      }

      // Password validation
      if (!password) {
          passwordError.textContent = 'Password is required.';
          isValid = false;
      } else if (password.length < 6) {
          passwordError.textConte
