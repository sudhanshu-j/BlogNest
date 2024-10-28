// Define a function named scrollUp
const scrollUp = () => {
  // Select the element with the ID "scroll-up" and assign it to the scrollUp variable
  const scrollUp = document.getElementById("scroll-up");

  // Check if the vertical scroll position is greater than or equal to 350 pixels
  // If true, add the "show-scroll" class to the scrollUp element
  // If false, remove the "show-scroll" class from the scrollUp element
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll") // Add class if scroll position is high
    : scrollUp.classList.remove("show-scroll"); // Remove class if scroll position is low
};

// Add an event listener to the window object that listens for the "scroll" event
// When the user scrolls, the scrollUp function will be called
window.addEventListener("scroll", scrollUp);
