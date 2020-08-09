<template>
  <div class="container">
    <div class="title-section">
      <div class="title">Friends</div>
    </div>

    <div class="friends-section">
      <div v-for="friend in friends" v-bind:key="friend.id" class="friend">
        <img
          v-bind:src="getImgUrl(friend.logo)"
          class="company-logo"
          v-bind:alt="friend.name"
        />
        <a v-bind:href="friend.url" target="_blank" rel="noopener noreferrer">
          <div class="friend-name">{{ friend.name }}</div>
        </a>
        <div class="friend-description">{{ friend.description }}</div>
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
    },
  },
  methods: {
    getImgUrl(pic) {
      return require(`../assets/friends/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .title-section {
    display: flex;
    color: #fff;
    background-color: #224365;
    width: 100%;
    text-align: center;
    .title {
      font-size: 40px;
      margin: 0 auto;
      padding: 30px 0px;
    }
  }

  .friends-section {
    display: flex;
    .company-logo {
      width: 370px;
      height: 95px;
    }
    .friend-name {
      color: #224365;
      font-weight: bold;
      font-size: 25px;
      text-align: center;
      padding: 15px 0px;
    }
    .friend-description {
      text-align: justify;
    }
    a {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 600px) {
  /* Mobile View */
  .container {
    .title-section {
      .title {
        font-size: 30px;
        padding: 25px 0px;
      }
    }

    .friends-section {
      flex-direction: column;
      .friend {
        padding: 15px 0px;
        margin-top: 10px;
      }
      .company-logo {
        width: 100%;
        height: 75px;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 900px) {
  /* Desktop View */
  .container {
    .friends-section {
      flex-wrap: wrap;
      padding: 20px 40px;
      justify-content: center;
      .friend {
        width: 400px;
        padding: 15px 10px;
        text-align: center;
        margin-top: 20px;
      }
      .friend-description {
        padding: 0px 3px;
      }
    }
  }
}
</style>
