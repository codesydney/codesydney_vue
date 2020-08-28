<template>
  <div>
    <!-- Banner -->
    <Banner />
    <!-- Headline -->
    <Headline />
    <!-- Member Previews -->
    <MemberPreview />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Headline from '@/components/Headline.vue';
import MemberPreview from '@/components/MemberPreview.vue';

export default {
  components: {
    Banner,
    Headline,
    MemberPreview,
  },
};
</script>

<style scoped></style>
