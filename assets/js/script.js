'use strict';

/**
 * navbar variables
 */
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}

/**
 * header sticky
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
});

/**
 * go top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});

/**
 * Changing Tabs with Slide Animations and Title Update
 */
/**
 * Changing Tabs with Slide Animations and Title Update
 */
const tabButtons = document.querySelectorAll('.filter-btn'); // Select all tab buttons
const sectionTitle1 = document.getElementById('new-title'); // Update to select the correct title
const sectionTitle2 = document.getElementById('rated');
let currentTab = 0; // Keep track of the current tab index

// Map of titles for each tab
const titles = {
    movies: 'New Movies',
    tvshows: 'New TV Shows',
    anime: 'New Anime',
    ratedfilms: 'Top Rated Movies',
    ratedseries: 'Top Rated TV Shows'
     // Add a title for rated movies
};

// Function to show the corresponding content based on the clicked tab
function showContent(contentId, direction) {
    // Get all movie lists
    const allContents = document.querySelectorAll('.movies-list, .rated-movies-list'); // Include rated movies

    // Hide all content sections
    allContents.forEach((content, index) => {
        if (content.classList.contains('active')) {
            content.classList.remove('active'); // Remove active class for fade-out effect
            content.style.opacity = '0'; // Set opacity to 0 for fade-out

            setTimeout(() => {
                content.style.display = 'none'; // Hide it after fading out
                content.classList.remove('slide-left', 'slide-right'); // Remove slide classes
            }, 10); // Match the timeout with the CSS transition duration
        }
    });

    // Show the selected content section
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'grid'; // Change to grid for the transition
        setTimeout(() => {
            selectedContent.classList.add('active'); // Add active class for fade-in effect
            selectedContent.style.opacity = '1'; // Set opacity to 1 for fade-in
            selectedContent.classList.remove('slide-left', 'slide-right'); // Remove slide classes

            // Update the section title
            sectionTitle1.textContent = titles[contentId];
            sectionTitle2.textContent = titles[contentId]; // Change the heading text based on the selected content
        }, 10); // Use a short timeout to trigger the transition
    }
}

// Add event listeners to the tab buttons
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.content; // Get the corresponding content ID
        const direction = index > currentTab ? 'forward' : 'backward'; // Determine direction
        currentTab = index; // Update the current tab index
        showContent(contentId, direction); // Show the selected content
    });
});

// Optionally set a default active content when the page loads
window.onload = () => {
    const defaultTab = tabButtons[0]; // Assuming the first tab is the default
    defaultTab.click(); // Trigger a click on the default tab to show its content
};
