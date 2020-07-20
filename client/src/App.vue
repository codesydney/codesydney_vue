/**
 * DELETE this comment
 * -------------------
 * Hamburger button and banner/header go in this file.
 */

<template>
  <div id="app">
    <!-- Banner/Header -->
    <!-- Hamburger -->
    <NavBarMobile />
    <div class="nav-content" v-bind:class="{ open: showNavBar }">
      <div id="nav">
        <div
          id="navBar-icon"
          v-if="mobileView"
          @click="showNavBar = !showNavBar"
        >
          <i class="fa fa-bars"></i>
        </div>
        <NavLink v-if="!mobileView" />
      </div>
      <router-view />
    </div>
</template>

<script>
import NavLink from './components/NavLink.vue';
import NavBarMobile from './components/NavBarMobile.vue';

export default {
  data() {
    return {
      mobileView: false,
      showNavBar: false
    };
  },
  methods: {
    toggleMobileView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    NavLink,
    NavBarMobile
  },
  created() {
    this.toggleMobileView();
  }
};
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#navBar-icon {
  text-align: left;
  cursor: pointer;
  padding: 10px 10px 20px;
  margin-right: 10px;
}

#navBar-icon i {
  font-size: 2rem;
}

.nav-content {
  position: absolute;
  top: 10px;
  padding: 20px;
  width: calc(100% - 40px);
  height: calc(100vh - 60px);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.open {
  transform: translateX(300px);
}
</style>

