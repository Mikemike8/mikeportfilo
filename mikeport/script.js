function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.getElementById("moonIcont").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent page refresh
});
// Get the moon icon element
let moonIcon = document.getElementById('moonIcon');

// Function to set the theme based on user preference
function setTheme() {
  const savedTheme = localStorage.getItem('darkTheme');

  // Apply the saved theme if it exists
  if (savedTheme === 'true') {
    document.body.classList.add('dark-theme');
    moonIcon.src = "./assets/sun.png"; // Set icon to sun for dark mode
  } else {
    document.body.classList.remove('dark-theme');
    moonIcon.src = "./assets/moon.png"; // Set icon to moon for light mode
  }
}

// Set the theme when the page loads
setTheme();

// Toggle the theme when the icon is clicked
moonIcon.onclick = function () {
  // Toggle the dark theme class on the body
  document.body.classList.toggle('dark-theme');

  // Check if the dark theme is active
  if (document.body.classList.contains('dark-theme')) {
    // Change the icon to sun (light mode)
    moonIcon.src = "./assets/sun.png";
  } else {
    // Change the icon back to moon (dark mode)
    moonIcon.src = "./assets/moon.png";
  }

  // Save the user's preference in localStorage
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
};