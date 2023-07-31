const lightMode = document.getElementById('lightModeBtn');
const darkMode = document.getElementById('darkModeBtn');

// dropdown selector + event listener
const dropdown = document.getElementById('dropdown');

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
 
  
    function dropdownSelect() {
        const dropdownSelectedVal = dropdown.value;

        // check for function
        console.log(`Selected option: ${dropdownSelectedVal}`);
    }


    dropdown.addEventListener('change', dropdownSelect);
  
  
  
  
  
  