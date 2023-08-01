const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');


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



 
  



  
  
  
  
  
  
  