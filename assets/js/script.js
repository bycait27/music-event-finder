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


//  fetch('rest.bandsintown.com/artists/{artistname}/events?=app_id={}')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data.name);

        
//     })

    fetch('https://theaudiodb.com/api/v1/json/2/artist.php?i=112024')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
 
  



  
  
  
  
  
  
  