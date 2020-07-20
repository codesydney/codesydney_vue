<template>
  <div id="app">
    <div id="nav">
      <div id="navBar-icon" v-if="mobileView" >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <NavLink v-if="!mobileView" />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavLink from './components/NavLink.vue';

export default {
  data() {
    return {
      showNavBar: false,
      mobileView: true
    };
  },
  components: {
    NavLink
  }
}
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
  cursor: pointer;
  padding: 10px 10px 20px;
  margin-right: 10px;
}

#navBar-icon i {
  font-size: 2rem;
}

</style>
