<template>
  <div class="banner">
    <div class="banner__title">
      <img
        src="../assets/codesydney.png"
        alt="Code.Sydney Logo"
        class="banner__title-logo"
      />
      <h1>Code.Sydney</h1>
      <h2>Sydney Volunteer Programmers</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  margin-bottom: 5vh;
  &__title {
    margin-bottom: 10vh;
    &-logo {
      height: 200px;
    }
  }
}
</style>
