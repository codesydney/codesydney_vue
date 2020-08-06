<template>
  <div class="container">
    <div class="title-section">
      <div class="title">Friends</div>
    </div>

    <div class="friends-section">
      <div v-for="friend in friends" v-bind:key="friend.id">
        <img :src="getImgUrl(friend.logo)" />
        <div>{{ friend.logo }}</div>
        <h1>{{ friend.name }}</h1>
        <div>{{ friend.description }}</div>
      </div>
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
  },
  methods: {
    getImgUrl(pic) {
      return require(`../assets/friends/${pic}`)
    }
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  color: #fff;
  background-color: #224365;
  text-align: center;
  margin: auto;
}

.friends-section {
  display: flex;
}

@media screen and (max-width: 600px) {
  /* Mobile View */
  .title-section {
    padding: 10px;
    .title {
      font-size: 25px;
    }
  }
}

.friends-section {
  flex-direction: column;
}

@media screen and (min-width: 900px) {
  /* Desktop View */
  .title-section {
    padding: 20px;
    .title {
      font-size: 40px;
    }
  }

  .friends-section {
    flex-direction: row;
  }
}
</style>
