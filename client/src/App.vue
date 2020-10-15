<template>
  <v-app id="app">
    <!-- Banner/Header -->
    <Navbar />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
