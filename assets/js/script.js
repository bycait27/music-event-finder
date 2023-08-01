const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');

const toggleDot = document.getElementById("toggle-dot");

function themeToggle() {
    if (toggleDot.checked) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme","dark-mode");
        toggleDot.classList.toggle("translate-x-3");
    } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.removeItem("theme") ;
        toggleDot.classList.toggle("translate-x-3");
    }
}

toggleDot.addEventListener("click", themeToggle)



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




 
  



  
  
  
  
  
  
  