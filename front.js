
document.addEventListener('DOMContentLoaded', () => {
  // Get the modal, login, registration buttons and close button
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const loginBtn = document.getElementById("login-btn");
  const registrationBtn = document.getElementById("registration-btn");

  // Show the modal when the page loads
  setTimeout(() => {
      modal.style.display = "block";
  }, 1000); // Delay for 1 second after page load

  // Close modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
  });

  // Close the modal if the user clicks outside of it
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  // Log the login button click
  loginBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      console.log("Login button clicked!");
      
  });

  // Log the registration button click
  registrationBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      console.log("Registration button clicked!");
      
  });

  
  window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          console.log("You've scrolled more than 100px!");
      }
  });


});
