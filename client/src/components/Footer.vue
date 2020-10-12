<template>
  <div class="footer">
    <div>
      <a href="mailto: info@code.sydney" class="footer_link footer-text"
        >info@code.sydney</a
      >
    </div>
    <div>
      <a
        v-for="media in medias"
        :key="`${media.title}`"
        :href="`${media.link}`"
        class="footer_link icon"
        target="_blank"
      >
        <font-awesome-icon
          :icon="[media.icon.category, media.icon.name]"
          :title="media.title"
        />
      </a>
    </div>
    <div class="footer-text">Code.Sydney Pty Ltd &copy; ABN 37 625 436 151</div>
    <div>
      <a
        href="/pdf/Code.Sydney_Website_Privacy_Policy.pdf"
        class="footer_link policy footer-text"
        target="_blank"
        >Privacy Policy</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      medias: [
        {
          title: 'Meetup',
          link: 'https://www.meetup.com/Sydney-Volunteer-Programmers/',
          icon: { category: 'fab', name: 'meetup' },
        },
        {
          title: 'Slack',
          link: 'https://app.slack.com/client/T9438ULJ3',
          icon: { category: 'fab', name: 'slack-hash' },
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/company/code.sydney/',
          icon: { category: 'fab', name: 'linkedin' },
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/code.sydney/',
          icon: { category: 'fab', name: 'instagram' },
        },
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/codesyd/',
          icon: { category: 'fab', name: 'facebook-square' },
        },
        {
          title: 'Github',
          link: 'https://github.com/codesydney',
          icon: { category: 'fab', name: 'github' },
        },
        {
          title: 'Youtube',
          link: 'https://www.youtube.com/channel/UCnOp_l8-EX3c-q2Tlj-2Iyw',
          icon: { category: 'fab', name: 'youtube' },
        },
        {
          title: 'Freecodecamp',
          link: 'http://freecodecampsydney.org/',
          icon: { category: 'fab', name: 'free-code-camp' },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #3181b9;
  color: white;
  text-align: right;
  padding: 2vh 10vw;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  flex-direction: column;
  align-items: center;
  justify-content: right;
  &-text {
    font-weight: 400;
    font-size: 1em;
  }
}
.footer_link {
  &.policy {
    font-size: 0.8em;
  }
  margin-left: 30px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &.icon {
    font-size: 1.5em;
  }
  &.icon:hover,
  :focus,
  :active {
    color: #191970;
  }
}
</style>
