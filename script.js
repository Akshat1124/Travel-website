document.addEventListener("DOMContentLoaded", function() {
    const budgetSlider = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    // Update the budget display as the slider moves
    budgetSlider.addEventListener("input", function() {
        budgetValue.textContent = `$${budgetSlider.value}`;
    });
});
async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '27a6b1ed89d57b2a323b611b54f8f74b'; // Replace with your OpenWeatherMap API Key
    const weatherResult = document.getElementById('weather-result');
  
    // Ensure the user has entered a city name
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
  
    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        // Populate the weather information
        document.getElementById('city-name').textContent = `City: ${data.name}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        
        // Display the weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('weather-icon').src = iconUrl;
  
        // Show the weather result box
        weatherResult.style.display = 'block';
      } else {
        // Display error if the API call fails (e.g., invalid city name)
        weatherResult.style.display = 'none';
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Unable to fetch weather data. Please try again later.');
    }
  }
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    // Use the above URL to fetch weather data like in the `getWeather` function
  });
  
