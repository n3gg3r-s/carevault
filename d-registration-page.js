document.addEventListener("DOMContentLoaded", function() {
  
  // Get the registration form element
  const registrationForm = document.getElementById("registrationForm");

  // Add event listener to handle form submission
  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)

    // Get the values from the form inputs using more specific selectors
    const walletAddressInput = registrationForm.querySelector("input[placeholder='Crypto Wallet\'s Public Address']");
    const fullNameInput = registrationForm.querySelector("input[placeholder='Enter Full Name']");
    const hospitalNameInput = registrationForm.querySelector("input[placeholder='Enter Hospital Name']");
    const hospitalLocationInput = registrationForm.querySelector("input[placeholder='Enter Hospital Location']");
    const dateOfBirthInput = registrationForm.querySelector("input[type='date']");
    const genderSelect = registrationForm.querySelector("select");
    const emailInput = registrationForm.querySelector("input[type='email']");
    const specializationSelect = registrationForm.querySelector("select[placeholder='Select Specialization']");
    const departmentSelect = registrationForm.querySelector("select[placeholder='Select Department']");
    const designationSelect = registrationForm.querySelector("select[placeholder='Select Designation']");
    const workExperienceInput = registrationForm.querySelector("input[type='number']");
    const passwordInput = registrationForm.querySelector("input[type='password']");
    const confirmPasswordInput = registrationForm.querySelectorAll("input[type='password']")[1];

    // Check if all inputs are available
    if (!walletAddressInput || !fullNameInput || !hospitalNameInput || !hospitalLocationInput || !dateOfBirthInput || !genderSelect || !emailInput || !specializationSelect || !departmentSelect || !designationSelect || !workExperienceInput || !passwordInput || !confirmPasswordInput) {
      alert("Some form elements are missing. Please check the HTML structure.");
      return;
    }

    // Get values from the form fields
    const walletAddress = walletAddressInput.value;
    const fullName = fullNameInput.value;
    const hospitalName = hospitalNameInput.value;
    const hospitalLocation = hospitalLocationInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const gender = genderSelect.value;
    const email = emailInput.value;
    const specialization = specializationSelect.value;
    const department = departmentSelect.value;
    const designation = designationSelect.value;
    const workExperience = workExperienceInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Form validation
    if (!walletAddress || !fullName || !hospitalName || !hospitalLocation || !dateOfBirth || !gender || !email || !specialization || !department || !designation || !workExperience || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate form submission (in a real app, you'd send this data to the server)
    console.log("Form Submitted with the following details:");
    console.log(`Wallet Address: ${walletAddress}`);
    console.log(`Full Name: ${fullName}`);
    console.log(`Hospital Name: ${hospitalName}`);
    console.log(`Hospital Location: ${hospitalLocation}`);
    console.log(`Date of Birth: ${dateOfBirth}`);
    console.log(`Gender: ${gender}`);
    console.log(`Email: ${email}`);
    console.log(`Specialization: ${specialization}`);
    console.log(`Department: ${department}`);
    console.log(`Designation: ${designation}`);
    console.log(`Work Experience: ${workExperience} years`);
    console.log("Password: ********");

    // Simulate a successful registration (e.g., redirect to a success page)
    alert("Registration successful!");
    // window.location.href = "success.html";  // Uncomment to redirect after successful registration
  });
});
