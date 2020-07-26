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

<style lang="scss" scoped></style>
