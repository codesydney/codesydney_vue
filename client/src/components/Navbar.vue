<template>
  <div id="navbar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 30px;
  background-color: lightblue;
}

#navbar ul {
  list-style: none;
  padding-left: 32px;
}

#navbar :hover {
  color: #111;
}

#navbar a {
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
