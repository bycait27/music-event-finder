  // Function to make a GET request to the API
  function fetchData() {
    const apiUrl = 'https://api.example.com/data'; // Replace with your API URL

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the API response here
        displayData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Function to display the API data
  function displayData(data) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = JSON.stringify(data, null, 2); // Display the data in a readable format
  }

  // Call the fetchData function when the page loads
  document.addEventListener('DOMContentLoaded', fetchData);