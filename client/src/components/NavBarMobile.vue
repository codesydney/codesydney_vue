<template>
  <div id="navBar-mobile">
    <!-- placeholder Nav links -->
    <ul>
      <li>HomeM</li>
      <li>AwardsM</li>
      <li>testmonialsM</li>
      <li>NewsletterM</li>
      <li>CampersM</li>
      <li>ContactM</li>
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
  border-radius: 30px;
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
