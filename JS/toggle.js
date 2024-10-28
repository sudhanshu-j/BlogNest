// Select the toggle button element for dark mode by its ID
let darkToggle = document.querySelector("#toggle-nav");

// Reference the body element of the document
let body = document.body;

// Check if there is a stored dark mode preference in localStorage
// Compare the retrieved value with the string "true" to determine if dark mode is enabled
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set the initial state based on the stored preference
if (isDarkMode) {
  // If dark mode is enabled, add the "dark" class to the body element
  body.classList.add("dark");
  // Set the toggle button to checked state
  darkToggle.checked = true;
}

// Add an event listener to the toggle button that listens for changes
darkToggle.addEventListener("change", () => {
  // Check if the toggle button is checked (dark mode is being enabled)
  if (darkToggle.checked) {
    // Add the "dark" class to the body element to enable dark mode
    body.classList.add("dark");
    // Store the dark mode preference in localStorage as "true"
    localStorage.setItem("darkMode", "true");
  } else {
    // If the toggle button is not checked (dark mode is being disabled)
    // Remove the "dark" class from the body element to disable dark mode
    body.classList.remove("dark");
    // Store the dark mode preference in localStorage as "false"
    localStorage.setItem("darkMode", "false");
  }
});
