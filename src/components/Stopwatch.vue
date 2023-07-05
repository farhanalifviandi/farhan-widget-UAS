<!-- By Author 
       Farhan Alifviandi
          213510299 -->

<template>
  <div class="stopwatch-widget">
    <h2>Stopwatch</h2>
    <p>{{ formatTime }}</p>
    <div>
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
    <h4 id="company">&copy; 2023 CompanyDonHan.org</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  border: 1px solid maroon;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 300px;
  margin-left: 300px;
  background-color: gray;
  font-size: 20px;
}

.stopwatch-widget h2 {
  color: maroon;
  margin-bottom: 10px;
}

.stopwatch-widget h2:hover {
  color: #c7a51d;
}

.stopwatch-widget p {
  color: whitesmoke;
  font-size: 18px;
  margin-bottom: 10px;
}

.stopwatch-widget button {
  padding: 10px 20px;
  background-color: maroon;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.stopwatch-widget button:hover {
  background-color: #a08e45;
}

.stopwatch-widget button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
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
