<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-item">Portfolio</router-link> 
      <router-link to="/photos" class="nav-item">Photography</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
    background: url('assets/new_bg.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Overpass', sans-serif;
}
#nav {
  text-align: center;
  background: rgba(0, 0, 0, 0.600);
  padding: 20px;
  margin-bottom: 10px;
}

.nav-item {
  padding: 15px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  margin: auto;
}

.nav-item:hover {
  background: rgba(255, 0, 0, 0.100)
}

.router-link-exact-active {
  background: rgba(255, 0, 0, 0.500)
}

.router-link-exact-active:hover {
  background: rgba(255, 0, 0, 0.500)
}

</style>
