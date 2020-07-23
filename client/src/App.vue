<template>
  <div id="app">
    <!-- Banner/Header -->
    <!-- Hamburger -->
    <!-- <div id="myNav" :class="{ navbar_open: showNavbar }" class="navbar"> -->
    <div id="myNav" :class="{ navbar_open: showNavbar, navbar: !showNavbar }">
      <div class="closebtn" @click="showNavbar = !showNavbar">
        <i class="fa fa-times"></i>
      </div>
      <div class="navbar-content">
        <a>Home</a>
        <a>Contact</a>
      </div>
    </div>
    <div class="openbtn">
      <i class="fa fa-bars" @click="showNavbar = !showNavbar"></i>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false
    };
  },
  methods: {}
};
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');

.navbar_open {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
  background-color: #2b4c72;
}

.navbar {
  width: 100%;
  height: 0%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
  background-color: #2b4c72;
}

.navbar-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.navbar a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.navbar a:hover,
.navbar a:focus {
  color: #f1f1f1;
}

.closebtn {
  position: absolute;
  top: 20px;
  left: 45px;
  font-size: 60px;
  color: white;
  cursor: pointer;
}

.openbtn i {
  font-size: 30px;
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .navbar {
    overflow-y: auto;
  }
  .navbar a {
    font-size: 20px;
  }
  .navbar .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
