<template>
  <div>
    <!-- Banner -->
    <Banner />
    <!-- Headline -->
    <Headline />
    <!-- Member Previews -->
    <MemberPreview />
    <Friends />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Headline from '@/components/Headline.vue';
import MemberPreview from '@/components/MemberPreview.vue';
import Friends from '@/components/Friends.vue';

export default {
  components: {
    Banner,
    Headline,
    MemberPreview,
    Friends,
  },
};
</script>

<style scoped></style>
