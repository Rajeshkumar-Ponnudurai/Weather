document.addEventListener('DOMContentLoaded', () => {
  const cityEl = document.getElementById('city');
  const tempEl = document.getElementById('temp');
  const humiEl = document.getElementById('humi');
  const descEl = document.getElementById('desc');

  const apiKey = "3a245a419b7f01433f0dfb885d1c8e9e"; 
  const lat = 13.0827;
  const lon = 80.2707;

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(res => {
      if (!res.ok) throw new Error("API response error");
      return res.json();
    })
    .then(data => {
      cityEl.textContent = `City: ${data.name}`;
      tempEl.textContent = `Temperature: ${data.main.temp} °C`;
      humiEl.textContent = `Humidity: ${data.main.humidity}%`;
      descEl.textContent = `Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
      cityEl.textContent = "❌ Failed to load weather data";
      tempEl.textContent = "";
      humiEl.textContent = "";
      descEl.textContent = "";
      console.error("API error:", error);
    });
});
