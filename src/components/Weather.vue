<!-- By Author 
       Farhan Alifviandi
          213510299 -->

<template>
  <div class="weather-widget">
    <h2 class="widget-title">Your Weather</h2>
    <div class="location-input">
      <label for="location">Enter Location:</label>
      <input type="text" id="location" v-model="location" />
      <button id="button" @click="fetchWeatherData">Search</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
    <h4 id="company">&copy; 2023 CompanyDonHan.org</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border: 1px solid maroon;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: gray;
  font-size: 20px;
  margin-right: 300px;
  margin-left: 300px;
}

.widget-title {
  margin-top: 0;
  color: maroon;
}

.location-input {
  margin-bottom: 10px;
}

.weather-data {
  margin-top: 10px;
  background: maroon;
  margin-right: 190px;
  margin-left: 190px;
  border-radius: 3px;
}

.location {
  font-size: 18px;
  font-weight: bold;
  background: red;
  border-radius: 3px;
}

.temperature {
  font-size: 24px;
  color: goldenrod;
}

.temperature:hover {
  color: whitesmoke;
}

.description {
  font-size: 16px;
  color: goldenrod;
}

#button,#location {
  padding: 7px;
  border-radius: 7px;
  background-color: maroon;
  color: whitesmoke;
}

#company {
  color: maroon;
  margin-bottom: 20px;
  font-size: 16px;
}

#company:hover {
  color: #c7a51d;
}

</style>
