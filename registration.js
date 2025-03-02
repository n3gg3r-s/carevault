document.addEventListener('DOMContentLoaded', function() {
  const doctorButton = document.querySelector('.d-registration');
  const patientButton = document.querySelector('.p-registration');

  function addClickAnimation(button) {
      button.addEventListener('click', function(e) {
          
          const originalColor = button.style.backgroundColor;
          button.style.backgroundColor = '#4CAF50'; 
          setTimeout(() => {
              button.style.backgroundColor = originalColor; 
          }, 300);
      });
  }

  addClickAnimation(doctorButton);
  addClickAnimation(patientButton);

  doctorButton.addEventListener('click', function() {
      alert("Redirecting to Doctor Registration...");
  });

  patientButton.addEventListener('click', function() {
      alert("Redirecting to Patient Registration...");
  });
});
