<template>
  <div>
    <div class="friends-container">
      <div>Friends</div>
    </div>
  </div>
</template>

<script>
import { friends } from '@/constants.js';

export default {
  name: 'Friends',
  computed: {
    friends() {
      return friends;
    }
  }
};
</script>

<style lang="scss" scoped>
.friends-container {
  color: #fff;
  background-color: #224365;
  text-align: center;
  margin: auto;
}

@media screen and (max-width: 600px) {
  /* Mobile View */
  .friends-container {
    padding: 10px;
    div {
      font-size: 25px;
    }
  }
}

@media screen and (min-width: 900px) {
  /* Desktop View */
  .friends-container {
    padding: 20px;
    div {
      font-size: 40px;
    }
  }
}
</style>
