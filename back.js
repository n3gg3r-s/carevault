// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // Get the "About Us" link
  const aboutLink = document.querySelector('.about');
  
  // Get the "About Us" description section
  const aboutTextSection = document.querySelector('.about-dic');
  
  // Function to toggle visibility of About Us text
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating away)
    
    // Toggle visibility of the about-text section when the link is clicked
    if (aboutTextSection.style.display === 'none') {
      aboutTextSection.style.display = 'block';  // Show the section
    } else {
      aboutTextSection.style.display = 'none';  // Hide the section
    }
  });

  // Example: Changing the background color on page load
  document.body.style.backgroundColor = "#f4f4f9";  // Light background color
  
  // Highlight the title of the "About Us" section when the page loads
  const aboutTitle = document.querySelector('.about-heading');
  if (aboutTitle) {
    aboutTitle.style.color = "#009688";  // Change the title color to a teal shade
  }

  // Bonus: Add a button to reset the page's background color
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset Background";
  resetButton.style.position = "fixed";
  resetButton.style.bottom = "20px";
  resetButton.style.left = "20px";
  resetButton.style.padding = "10px";
  resetButton.style.backgroundColor = "#009688";
  resetButton.style.color = "white";
  resetButton.style.border = "none";
  resetButton.style.borderRadius = "5px";
  resetButton.style.cursor = "pointer";
  
  // Add event listener to the reset button
  resetButton.addEventListener('click', function() {
    document.body.style.backgroundColor = "#fff";  // Reset to white background
  });
  
  // Append the button to the body of the page
  document.body.appendChild(resetButton);

});
