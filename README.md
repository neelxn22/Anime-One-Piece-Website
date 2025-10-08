# Anime-One-Piece-Website
This project is a single-page web application designed to fetch, display, and search for data about anime characters from an external One Piece API. The application features a dynamic grid display, a client-side search function, and an interactive modal window for detailed character information, which includes a dynamic tabbed interface.
 HTML5 (index.html): Provides the structure, including an input form, a container for character cards, and a hidden modal for detailed views. It utilizes Google Fonts for styling.

 CSS3 (style.css): Handles the visual presentation, implementing a CSS Grid for the character display, styling for the modal overlay, and defining the appearance of the interactive tab elements.

 JavaScript (script.js): The core logic that manages data fetching, DOM manipulation, and user interactions. It uses asynchronous JavaScript (async/await) for API calls.

# Key Features & Functionality
1. Data Fetching and Initial Rendering
API Integration: The animeData function uses the fetch API to retrieve an array of character data from the endpoint.

Initial Display: The renderData function dynamically creates character cards within the container element. Each card displays the character's name, job, bounty, and devil fruit name (if applicable), along with an image.

Dynamic Content: The structure of each character card (character) is injected into the DOM using a template literal, demonstrating effective DOM manipulation.

# Interactive Modal and Detailed View
Character Click Handler: An event listener on the container captures clicks, identifies the clicked character's id, and makes a second, more specific API call to get detailed data for that single character.

Modal Presentation: The infoWindow function displays the modal, applies a no-scroll class to the body to lock the main content, and fades the background content by setting the container opacity to 0.3.

Tabbed Interface: The modal uses three main tabs:

Tab 1 (Devil Fruit): Displays information about the character's devil fruit (name, description, type) or a "Not a devil fruit user" message.

Tab 2 (Personal Info): Shows the character's name, size, age, and status.

Tab 3 (Crew Info): Displays details about the character's crew (ID, total bounty, Yonko status) or a "Not exist" message.

# Dynamic Tab Generation
User-Defined Tabs: The addMultipleTab function prompts the user for a number, demonstrating how to dynamically create new UI elements (buttons) based on user input.

Dynamic Content Placeholder: It then attaches event listeners to these newly created tabs, which, when clicked, simply update the content of the .datadynamic element with the tab's number. This is an excellent conceptual implementation of a feature that could easily be extended to load more complex, user-specific data.
