<template>
  <div>
    <pre>
      {{ friends }}
    </pre>
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
@media screen and (max-width: 600px) {
  /* Mobile View */
}

@media screen and (min-width: 900px) {
  /* Desktop View */
}
</style>
