<template>
  <div class="memberPreview">
    <div
      v-for="member in members"
      :key="member.id"
      class="memberPreview__member"
    >
      <img
        :src="member.imageUrl"
        :alt="member.name"
        :title="member.name"
        class="memberPreview__member-portrait"
      />
      <h2>{{ member.name }}</h2>
      <h4>{{ member.title }}</h4>
      <!-- The badges are currently use code sydney icon, should be replaced when badge components ready -->
      <div>
        <img
          src="../../../_docs/assets/favicon.png"
          :alt="member.name"
          title="badgeTitle"
          class="memberPreview__member-badge"
        />
        <img
          src="../../../_docs/assets/favicon.png"
          :alt="member.name"
          title="badgeTitle"
          class="memberPreview__member-badge"
        />
        <img
          src="../../../_docs/assets/favicon.png"
          :alt="member.name"
          title="badgeTitle"
          class="memberPreview__member-badge"
        />
      </div>
      <a :href="member.socialUrl.LinkedIn" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          title="LinkedIn"
          class="memberPreview__member-socialLink"
        />
      </a>
    </div>
  </div>
</template>
<script>
import members from '@/services/members';

export default {
  name: 'MemberPreview',
  data() {
    return {
      members: []
    };
  },
  created() {
    members
      .getMembers()
      .then(res => {
        this.members = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
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
    @media (min-width: 1500px) {
      @content;
    }
  }
}
.memberPreview {
  display: grid;
  margin: 0 10vw;
  grid-template-columns: 1fr 1fr 1fr;
  @include respond(tab-land) {
    font-size: 80%;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include respond(tab-port) {
    font-size: 70%;
    grid-template-columns: 1fr 1fr;
  }
  @include respond(phone) {
    font-size: 60%;
    grid-template-columns: 1fr;
  }
  @include respond(big-desktop) {
    font-size: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &__member {
    margin: 20px;
    padding: 20px 10% 20px 15%;
    &-portrait {
      height: 200px;
      clip-path: circle();
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
    &-badge,
    &-socialLink {
      margin: 5px;
      transform: scale(1.2);
      &:hover,
      &:focus {
        transform: scale(1.4);
      }
      &:active {
        transform: scale(1.2);
      }
    }
    &-socialLink {
      color: #0073b1;
    }
  }
}
</style>
