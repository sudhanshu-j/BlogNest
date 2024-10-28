// Select the search bar and its associated icons and input field
let search = document.querySelector(".search-bar"); // The search bar element
let searchIcon = document.querySelector("#search-icon"); // The search icon element
let closeIcon = document.querySelector("#close-icon"); // The close icon element
let searchInput = document.querySelector("#search-input"); // The search input field

// Initially hide the search input and close icon
searchInput.style.display = "none"; // Hide the search input field
closeIcon.style.display = "none"; // Hide the close icon

// Add a click event listener to the search bar
search.addEventListener("click", () => {
  // Toggle the visibility of the search input and icons
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block"; // Show the search input field
    closeIcon.style.display = "block"; // Show the close icon
    searchIcon.style.display = "none"; // Hide the search icon
  } else {
    searchInput.style.display = "none"; // Hide the search input field
    closeIcon.style.display = "none"; // Hide the close icon
    searchIcon.style.display = "block"; // Show the search icon
  }
});

// Object to hold post data for grid display
const postData = {
  gridposts: [
    {
      id: "1", // Unique identifier for the post
      image: "/img/h-post-1.jpg", // Image source for the post
      label: "laptop", // Category label for the post
      title: "Is a Laptop a Computer? Discussing the Basics", // Title of the post
      date: "25 May 2024", // Date of the post
      time: "8 AM", // Time of the post
      href: "https://www.pclaptops.com/blog_post/blog/121.htmls", // Link to the post
    },

    {
      id: "2", // Unique identifier for the post
      image: "/img/g-post-1.jpg", // Image source for the post
      label: "Apple", // Category label for the post
      title: "The Apple Watch Is the Best Smartwatch for iPhone Owners", // Title of the post
      date: "2 January 2024", // Date of the post
      time: "6 PM", // Time of the post
      href: "https://www.smartphonesreview.com/blog_post/blog/122.htmls", // Link to the post
    },

    {
      id: "3", // Unique identifier for the post
      image: "/img/g-post-2.jpg", // Image source for the post
      label: "SmartPhone", // Category label for the post
      title: "Samsung Galaxy S24 Ultra Review", // Title of the post
      date: "18 February 2024", // Date of the post
      time: "10 AM", // Time of the post
      href: "https://www.thurrott.com/mobile/android/302114/samsung-galaxy-s24-ultra-review", // Link to the post
    },

    {
      id: "4", // Unique identifier for the post
      image: "/img/late-post-5.jpg", // Image source for the post
      label: "Gaming", // Category label for the post
      title:
        "IFA 2024: AI gadgets and concept devices to headline Europe's biggest tech show", // Title of the post
      date: "15 March 2024", // Date of the post
      time: "9 PM", // Time of the post
      href: "https://indianexpress.com/article/technology/tech-news-technology/ifa-2024-ai-gadgets-and-concept-devices-europes-tech-show-9547261/", // Link to the post
    },

    {
      id: "5", // Unique identifier for the post
      image: "/img/late-post-6.jpg", // Image source for the post
      label: "Health", // Category label for the post
      title:
        "The Health Benefits of Eating a Balanced Diet and Engaging in Regular Exercise", // Title of the post
      date: "20 March 2024", // Date of the post
      time: "7 AM", // Time of the post
      href: "https://www.healthline.com/nutrition/balanced-diet-and-exercise", // Link to the post
    },

    {
      id: "6", // Unique identifier for the post
      image: "/img/late-post-7.jpg", // Image source for the post
      label: "Travel", // Category label for the post
      title:
        "The 10 Best Destinations for 2024: Where to Visit, What to Expect, and What to Do", // Title of the post
      date: "25 March 2024", // Date of the post
      time: "5 PM", // Time of the post
      href: "https://www.travelandleisure.com/blog/123.htmls", // Link to the post
    },

    {
      id: "7", // Unique identifier for the post
      image: "/img/late-post-8.jpg", // Image source for the post
      label: "Travel", // Category label for the post
      title: "The Top 10 Must-Visit Cities in Europe for 2024", // Title of the post
      date: "30 March 2024", // Date of the post
      time: "3 PM", // Time of the post
      href: "https://www.visiteurope.com/blog/124.htmls", // Link to the post
    },
  ],

  // Note that these are Random Data
};

// Select the left and right notification buttons
let notificationLeft = document.querySelector("#left"); // Left button for navigation
let notificationRight = document.querySelector("#right"); // Right button for navigation
let index = 0; // Initialize index variable to track the current post

// Function to change the text inside the element based on the provided index
function changeText(newIndex) {
  let textElement = document.querySelector(".text-change"); // Select the element to change text
  textElement.textContent = postData.gridposts[newIndex].title; // Update the text with the title of the new post
  index = newIndex; // Update the current index
}

// Call the changeText function every 4 seconds to cycle through posts
setInterval(() => {
  changeText((index + 1) % postData.gridposts.length); // Increment index and wrap around using modulo
}, 4000); // 4000 milliseconds = 4 seconds

// Add click event listener to the left notification button
notificationLeft.addEventListener("click", () => {
  let newIndex =
    (index - 1 + postData.gridposts.length) % postData.gridposts.length; // Calculate new index for the previous post
  changeText(newIndex); // Change text to the new index
});

// Add click event listener to the right notification button
notificationRight.addEventListener("click", () => {
  let newIndex = (index + 1) % postData.gridposts.length; // Calculate new index for the next post
  changeText(newIndex); // Change text to the new index
});
