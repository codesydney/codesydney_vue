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
.memberPreview {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 10vw;
  &__member {
    margin: 20px;
    padding: 20px 10% 20px 15%;
    &-portrait {
      height: 200px;
      clip-path: circle();
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
