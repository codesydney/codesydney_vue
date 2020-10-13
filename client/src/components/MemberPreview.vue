<template>
  <div>
    <div class="title-section">
      <div class="title">Our People</div>
    </div>
    <div class="memberPreview">
      <div
        v-for="member in members"
        :key="member.id"
        class="memberPreview__member"
      >
        <img
          v-bind:src="getMembersUrl(member.photo)"
          :alt="member.name"
          :title="member.name"
          class="memberPreview__member-portrait"
        />

        <h2>{{ member.name }}</h2>
        <div class="memberPreview__member-title">{{ member.title }}</div>

        <div class="memberPreview__member-badges">
          <div v-for="(item, key) in member.badges" :key="key">
            <a
              v-bind:href="item.badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                v-bind:src="getBadgesUrl(item.badge_image_name)"
                :title="item.badge_name"
                class="memberPreview__member-badge"
              />
            </a>
          </div>
        </div>

        <div class="memberPreview__member-socialLinks">
          <a :href="member.socialURL" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              title="LinkedIn"
              class="memberPreview__member-socialLink"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from '@/services/members';

export default {
  name: 'MemberPreview',
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
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getBadgesUrl(pic) {
      return require(`../assets/badges/${pic}`);
    },
    getMembersUrl(pic) {
      return require(`../assets/members/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) {
      @content;
    }
  }
  @if $breakpoint == tab-port {
    @media (max-width: 900px) {
      @content;
    }
  }
  @if $breakpoint == tab-land {
    @media (max-width: 1200px) {
      @content;
    }
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 1800px) {
      @content;
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
    padding: 30px 0px;
  }
}
.memberPreview {
  font-family: 'Open Sans', sans-serif;
  display: grid;
  margin: 0 10vw;
  grid-template-columns: repeat(3, 1fr);
  @include respond(big-desktop) {
    font-size: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
  @include respond(tab-land) {
    font-size: 85%;
    grid-template-columns: repeat(3, 1fr);
  }
  @include respond(tab-port) {
    font-size: 70%;
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond(phone) {
    font-size: 55%;
    grid-template-columns: 1fr;
  }
  &__member {
    margin: 20px auto;
    padding: 20px;
    &-portrait {
      clip-path: circle();
      height: 200px;
      @include respond(tab-land) {
        height: 160px;
      }
      @include respond(tab-port) {
        height: 130px;
      }
      @include respond(phone) {
        height: 100px;
      }
    }
    &-title {
      @include respond(big-desktop) {
        max-width: 200px;
      }
      @include respond(tab-land) {
        max-width: 160px;
      }
      @include respond(tab-port) {
        max-width: 130px;
      }
      @include respond(phone) {
        max-width: 100px;
      }
    }
    &-badges,
    &-socialLinks {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      @include respond(tab-land) {
        grid-template-columns: repeat(5, 1fr);
      }
      @include respond(tab-port) {
        grid-template-columns: repeat(4, 1fr);
      }
      @include respond(phone) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    &-badge,
    &-socialLink {
      margin: 5px 10px 5px 0;
      transform: scale(1.4);
      @include respond(tab-port) {
        transform: scale(1.2);
      }
      @include respond(phone) {
        transform: scale(1.2);
      }
      &:hover,
      &:focus {
        transform: scale(1.6);
        @include respond(tab-port) {
          transform: scale(1.4);
        }
        @include respond(phone) {
          transform: scale(1.4);
        }
      }
      &:active {
        transform: scale(1.4);
        @include respond(tab-port) {
          transform: scale(1.2);
        }
        @include respond(phone) {
          transform: scale(1.2);
        }
      }
    }
    &-socialLink {
      height: 23px;
      width: 23px;
      color: #0073b1;
    }
  }
}
</style>
