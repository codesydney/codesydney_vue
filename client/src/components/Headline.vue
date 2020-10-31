<template>
  <div class="headline" v-if="randomMember">
    <div class="headline__randomMember">
      <div class="headline__randomMember-title">
        <div>Meet {{ randomMember.name }}, {{ randomMember.headline }}</div>
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
        <button>Book a meeting with me</button>
      </router-link>
    </div>
  </div>
  <v-skeleton-loader
    v-else
    v-bind="sklAttrs"
    type="card-heading, image, card-heading"
    class="mx-auto"
  ></v-skeleton-loader>
</template>

<script>
import members from '@/services/members';
export default {
  data() {
    return {
      members: [],
      sklAttrs: {
        class: 'mb-6',
        loading: true,
        elevation: 2,
        width: '350px',
        height: '350px',
      },
    };
  },
  created() {
    members
      .getMembers()
      .then((res) => {
        this.members = res.data;
      })
      .catch((err) => {
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
      return randomIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-bottom: 5vh;
  &-link button {
    border-radius: 10rem;
    position: relative;
    margin: 5vh;
    padding: 20px;
    font-size: 1rem;
    /* font-weight: bold; */
    color: white;
    background-color: #3181b9;
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
      background-color: #3181b9;
    }
  }
  &__randomMember-portrait {
    height: 350px;
    clip-path: circle();
    margin: 2vh auto;
  }
  &__randomMember-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto;
    padding: 0px 0px;
  }
}
</style>
