// By Author 
//   Farhan Alifviandi
//     213510299

import { createRouter, createWebHistory } from 'vue-router';

import Weather from '../components/Weather.vue';
import Location from '../components/Location.vue';
import Stopwatch from '../components/Stopwatch.vue';
import TicTacToe from '../components/TicTacToe.vue';
import Photo from '../components/Photo.vue';

const routes = [
  { path: '/', component: Weather },
  { path: '/location', component: Location },
  { path: '/stopwatch', component: Stopwatch },
  { path: '/tictactoe', component: TicTacToe },
  { path: '/photo', component: Photo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
