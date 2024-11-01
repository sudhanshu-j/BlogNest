 # TechTales

Welcome to **TechTales**, a blogging website dedicated to sharing insightful articles on technology, health, and lifestyle. This project is developed using **HTML**, **CSS**, and **JavaScript**, with a focus on creating a fully responsive and visually appealing user interface.

## Table of Contents

- [Features](#features)

- [Article Sections](#article-sections)

- [Sidebar Sections](#sidebar-sections)

- [Dark/Light Theme Toggle](#darklight-theme-toggle)

- [Responsive Design](#responsive-design)

- [Getting Started](#getting-started)

- [Usage](#usage)

- [ScreenShots](#screenshots)

- [FileStructure](#file-structure)

- [Contributing](#contributing)

- [Contact](#contact)

## Features

- **Responsive Design**: Utilizes CSS Flexbox and Grid properties to ensure a seamless experience on all devices.

- **Dark/Light Theme Toggle**: Users can switch between dark and light themes. The selected theme is saved using JavaScript's `localStorage`, allowing the website to remember the user's preference across sessions.

- **Interactive Elements**: JavaScript enhances user interaction, making the site dynamic and engaging.

## Article Sections

The left side of the website features several article sections:

1. **Trending Blogs**: A showcase of the most popular articles currently trending in the tech world.

2. **Health Blogs**: Articles focusing on health, wellness, and technology's impact on these areas.

3. **Top Reviews (Tech)**: Comprehensive reviews of the latest technology products and gadgets.

4. **Future Techs**: Insights into emerging technologies and trends that will shape the future.

5. **Laptop Reviews**: Detailed reviews and comparisons of various laptops.

6. **Latest Posts**: A feed displaying the most recent articles published on the site.

## Sidebar Sections

The right side of the website includes additional sections to enhance user engagement:

1. **Follow**: Links to social media profiles with icons for easy access.

2. **Popular Posts**: A list of the most-read articles to help users discover popular content.

3. **Travel Blogs**: Articles exploring the intersection of technology and travel.

4. **NewsLetter**: An option for users to subscribe for the latest updates and articles.

5. **Comments**: A section for readers to leave feedback and engage in discussions about the articles.

6. **Categories**: Browse articles by various categories for easier navigation.

7. **HashTags**: Quick links to trending topics across the site.

## Dark/Light Theme Toggle

TechTales features a toggle button that allows users to switch between dark and light themes. The chosen theme is stored in the browser's `localStorage`, ensuring that when users revisit the site, it retains their preference. 

### Example Usage
```javascript
// Toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save user preference in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
};
```

## Responsive Design

TechTales employs a mobile-first approach to ensure that all components are easily viewable on devices of any size. The combination of Flexbox and Grid allows for dynamic and adaptable layouts.

## Getting Started

To run TechTales on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/TechTales.git
   cd TechTales

2. **Open the Website: Open the index.html file in your preferred web browser:**
   ```bash
   open index.html
   ```
 
## Usage

Explore the various sections of the website and engage with the content. You can subscribe to the newsletter, leave comments, and follow us on social media for updates.

## ScreenShots

![TechTales](https://github.com/user-attachments/assets/17dbf7e5-f72c-447b-b34e-d35cd2ed307f)

## File Structure

- **TechTales/**
      
      - ├── README.md                 # Project documentation
      - ├── index.html                # Main HTML file
      - ├── css/                      # Directory for CSS files
      - │   ├── styles.css            # Main stylesheet
      - │   └── responsive.css        # Responsive styles
      - │   └── toggle.css            # Dark/Light Theme Toggle styles
      - ├── js/                       # Directory for JavaScript files
      - │   ├── main.js               # Main JavaScript file
      - │   └── toggle.js             # Dark/Light Theme Toggle File
      - │   └── back-to-top.js        # Scroll up button functionality
      - ├── img/                      # Directory for images
      - │   ├── logo.png              # Project logo
      - │   ├── h-post-1.jpg          # Example post image
      - │   └── g-post-1.jpg          # Another example post image
      
## Contributing

Contributions are welcome! If you would like to contribute to TechTales, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or fix.

3. Commit your changes.

4. Push your branch and submit a pull request.

## Contact

- **GitHub:** [Sudhanshu Jha](https://github.com/sudhanshu-j)

- **Gmail:** [Sudhanshu Jha](Sudhanshujha164@gmail.com)

Thank you for checking out TechTales! We hope you enjoy reading and exploring the world of technology with us!
