// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // Get the form element
  const loginForm = document.getElementById("loginForm");

  // Add an event listener for form submission
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the values from the form inputs
    const walletAddress = document.getElementById("wallet-address").value;
    const password = document.getElementById("password").value;
    
    // Validate the wallet address (this can be a simple check for now)
    if (!validateWalletAddress(walletAddress)) {
      alert("Invalid wallet address format.");
      return;
    }

    // Validate password (for this example, just checking if it's not empty)
    if (!password) {
      alert("Password cannot be empty.");
      return;
    }

    // Simulate a login process (you can replace this with an actual authentication call)
    login(walletAddress, password);
  });

  // Function to validate the wallet address (basic check)
  function validateWalletAddress(walletAddress) {
    // A simple check to see if the address is a valid length (you can enhance this)
    return walletAddress.length === 42 && walletAddress.startsWith("0x");
  }

  // Simulate a login function
  function login(walletAddress, password) {
    // For this example, we will simply print the details to the console
    // In a real application, you would send a request to a backend server to authenticate
    console.log("Logging in with Wallet Address: " + walletAddress);
    console.log("Password: " + password);
    
    // Simulate a successful login
    setTimeout(function() {
      alert("Login successful!");
      // Redirect to another page (e.g., dashboard) after successful login
      window.location.href = "dashboard.html"; // Adjust to the correct page
    }, 1000);
  }

});
