<template>
  <v-app id="app">
    <Navbar v-on:nav-btn-clicked="toggleNavDrawer()" />
    <v-navigation-drawer
      app
      temporary
      overlay-color="primary"
      overlay-opacity="0.3"
      v-model="drawer"
      color="white"
    >
      <v-list>
        <v-list-item v-for="route in Routes" :key="route.name">
          <v-list-item-icon>
            <font-awesome-icon
              :icon="route.icon"
            ></font-awesome-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link class="text-h6"
            :to="{name:route.name}">{{route.name}}
          </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title class="d-flex justify-center">
            <a href="https://codesydney.pythonanywhere.com/">Legacy Site</a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { Routes } from './router/index.js';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      drawer: false,
      Routes,
    };
  },
  methods: {
    toggleNavDrawer: function () {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
