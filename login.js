
document.addEventListener('DOMContentLoaded', () => {
  
  const doctorLoginButton = document.querySelector('.d-login');
  const patientLoginButton = document.querySelector('.p-login');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close-btn');
  const modalText = document.getElementById('modal-text');

  
  doctorLoginButton.addEventListener('mouseenter', () => {
      modal.style.display = "block";
      modalText.textContent = "You are about to login as a Doctor.";
  });

  
  patientLoginButton.addEventListener('mouseenter', () => {
      modal.style.display = "block";
      modalText.textContent = "You are about to login as a Patient.";
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  // Add hover effect to the login buttons 
  doctorLoginButton.addEventListener('mouseenter', () => {
      doctorLoginButton.style.transform = 'scale(1.05)';
      doctorLoginButton.style.transition = 'transform 0.3s ease';
  });

  doctorLoginButton.addEventListener('mouseleave', () => {
      doctorLoginButton.style.transform = 'scale(1)';
  });

  patientLoginButton.addEventListener('mouseenter', () => {
      patientLoginButton.style.transform = 'scale(1.05)';
      patientLoginButton.style.transition = 'transform 0.3s ease';
  });

  patientLoginButton.addEventListener('mouseleave', () => {
      patientLoginButton.style.transform = 'scale(1)';
  });
});
