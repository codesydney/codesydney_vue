<template>
  <div class="banner">
    <div class="banner__title">
      <img
        src="../assets/codesydney.png"
        alt="Code.Sydney Logo"
        class="banner__title-logo"
      />
      <div class="title-section">
        <div class="title">Code.Sydney</div>
      </div>
      <div class="title-section">
        <div class="subtitle">Sydney Volunteer Programmers</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-bottom: 5vh;
  &__title {
    margin-bottom: 10vh;
    &-logo {
      height: 250px;
    }
  }
}

.title-section {
  display: flex;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  text-align: center;
  .title {
    font-size: 40px;
    margin: 0 auto;
    padding: 0px 0px;
  }
  .subtitle {
    font-size: 30px;
    margin: 0 auto;
    padding: 5px 0px;
  }
}
</style>
