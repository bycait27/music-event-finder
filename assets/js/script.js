const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');

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
 
  



  
  
  
  
  
  
  