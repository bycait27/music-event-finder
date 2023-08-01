const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');

const toggleDot = document.getElementById("toggle-dot");

function themeToggle() {
    if (toggleDot.checked) {
        document.classList.add("dark");
        localStorage.setItem("theme","dark");
        toggleDot.classList.toggle("translate-x-3");
    } else {
        document.classList.remove("dark");
        localStorage.removeItem("theme") ;
        toggleDot.classList.toggle("translate-x-3");
    }
}

toggleDot.addEventListener("click", themeToggle)



// Gather value for inputs
// event listener    

const artistSearch = document.getElementById('artist-search');
const searchBtn = document.getElementById('search-btn');
const albumInfo = document.getElementById('albums');


function fetchData() {
    fetch(`https://theaudiodb.com/api/v1/json/2/discography.php?s=${artistSearch.value}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
       // document.getElementById('albums').innerText= data.album[0].strAlbum;
      
    })
    
}
 
searchBtn.addEventListener("click", fetchData);



 
  



  
  
  
  
  
  
  