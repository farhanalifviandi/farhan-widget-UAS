<!-- By Author 
       Farhan Alifviandi
          213510299 -->

<template>
  <div id="app">
    <h1> Company Don Han </h1>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Weather</router-link></li>
          <li><router-link to="/location">Maps</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
          <li><router-link to="/tictactoe">Toc Tax</router-link></li>
          <li><router-link to="/photo">Photo</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  font-size: 22px;
}

header {
  background: maroon;
  padding: 20px;
  margin-right: 300px;
  margin-left: 300px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

nav a:hover {
  color: maroon;
  border-radius: 3px;
  background-color: #c7a51d;
}

h1 {
  background: maroon;
  padding: 20px;
  margin: auto;
  color: #c7a51d;
  margin-right: 300px;
  margin-left: 300px;
}

h1:hover {
  color: whitesmoke;
}

</style>
