<template>
  <div id="navBar-mobile">
    <!-- placeholder Nav links -->
    <ul>
      <li>Home</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navBar-mobile {
  text-align: left;
  background-color: lightblue;
position: relative;
width: 100%;
text-align: center;
margin-top: 30px;

}

#navBar-mobile ul {
  list-style: none;
  width: 200px;
  padding-left: 32px;
}
#navBar-mobile li {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}
#navBar-mobile :hover {
  color: #111;
}
</style>
