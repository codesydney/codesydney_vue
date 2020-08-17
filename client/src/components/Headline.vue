<template>
  <div class="headline">
    <div class="headline__title">
      <img src="../assets/codesydney.png" alt="Code.Sydney Logo" class="headline__title-logo" />
      <h1>Code.Sydney</h1>
      <h2>Sydney Volunteer Programmers</h2>
    </div>
    <div class="headline__randomMember">
      <div class="headline__randomMember-title">
        <h1 v-show="randomMember">Meet {{randomMember.name}}, the {{randomMember.title}}</h1>
      </div>
      <div>
        <img
          :src="getMembersUrl(randomMember.photo)"
          :alt="randomMember.name"
          :title="randomMember.name"
          class="headline__randomMember-portrait"
        />
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'contact' }" class="headline-link">
        <button>Schedule a meeting for a free consultation</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import members from '@/services/members';
export default {
  data() {
    return {
      members: [],
    };
  },
  created() {
    members
      .getMembers()
      .then((res) => {
        this.members = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getMembersUrl(pic) {
      return require(`../assets/members/${pic}`);
    },
  },
  computed: {
    randomMember() {
      const randomIndex = this.members[
        Math.floor(Math.random() * this.members.length)
      ];
      console.log(randomIndex);
      return randomIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  text-align: center;
  margin-bottom: 5vh;
  &__title {
    margin-bottom: 10vh;
    &-logo {
      height: 200px;
    }
  }
  &-link button {
    border-radius: 10rem;
    position: relative;
    margin: 5vh;
    padding: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #224365;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      &::after {
        transform: scale(1.5);
        opacity: 0;
      }
    }
    &:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
    &::after {
      content: '';
      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
      background-color: #224365;
    }
  }
  &__randomMember-portrait {
    height: 200px;
    clip-path: circle();
    margin: 2vh auto;
  }
}
</style>