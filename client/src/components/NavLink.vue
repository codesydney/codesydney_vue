<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-exact-active {
  color: #42b983;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
