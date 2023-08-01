const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');

// selector
const toggleDot = document.getElementById("toggle-dot");
// checking if theme is already set to darkmode
let isDarkMode = localStorage.getItem("theme") === "dark-mode";
// function to change theme from light to dark/vice versa
function toggleTheme() {
    if (isDarkMode) {
        document.documentElement.classList.remove("dark-mode");
        localStorage.removeItem("theme");
        toggleDot.classList.remove("translate-x-3");
    } else {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
        toggleDot.classList.add("translate-x-3");
    }
    // updates theme color
    isDarkMode = !isDarkMode; 
}

toggleDot.addEventListener("click", toggleTheme);



// Finding ID's from html and linking to javascript.
const artistSearch = document.getElementById('artist-search');
const searchBtn = document.getElementById('search-btn');

// This function fetches api data upon a user search entry, and then appends children to a div to display all albums for that artist/band.
function fetchData() {
    fetch(`https://theaudiodb.com/api/v1/json/2/discography.php?s=${artistSearch.value}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        var albumsElement = document.getElementById('albums');
        albumsElement.innerHTML = ''; 
        
        for (var i = 0; i < data.album.length; i++) {
            // append each album name to the div
            albumsElement.innerHTML += data.album[i].strAlbum + '<br>';
        }
    
    });
}
 
// Event listener that executes the fetchData function when 'search' is clicked.
searchBtn.addEventListener("click", fetchData);

// Function to assist with keydown function, so only when the user clicks 'enter', the results will becomne visible.
function pressEnter(eventData) {
    if (eventData.key === "Enter") {
        fetchData();
    }
}

// Event listener that executes the fetchData function when a 'keydown' event occurs(pressing enter instead of clicking search).
artistSearch.addEventListener("keydown", pressEnter);

// Variables to be used from HTML code in js functions.
const genreNumberInput = document.getElementById('genre-number-input');
const genreNumberBtn = document.getElementById('genre-number-btn');

// This function fetches api data upon a user search entry, and then appends children to display a set number of randomly selected genres/sub-genres.
function fetchGenre() {
    fetch(`https://binaryjazz.us/wp-json/genrenator/v1/genre/${genreNumberInput.value}`) // id created in js from html id goes here(number of genres wanted... or maybe a generate button?)
    .then(function(response) {
        return response.json()
    })
    .then(function(genre) {
        console.log(genre);
        var genreElement = document.getElementById('genres');
        genreElement.innerHTML = '';

        for (var i = 0; i < genre.length; i++) {
            genreElement.innerHTML += genre[i] + '<br>'; // Since no object name in API, only need to put i with the parameters I selected in the function.
        }
    })
}

// Event listener that executes the fetchGenre function when 'search' is clicked.
genreNumberBtn.addEventListener("click", fetchGenre);

// Function to assist with keydown function, so only when the user clicks 'enter', the results will become visible. Not working yet.
function pressEnter2(genreData) {
    if (genreData.key === "Enter") {
        fetchGenre();
    }
}

