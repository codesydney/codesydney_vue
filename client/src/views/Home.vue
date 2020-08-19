<template>
  <div>
    <!-- Headline -->
    <Headline />
    <!-- Member Previews -->
    <MemberPreview />
    <Friends />
  </div>
</template>

<script>
import Friends from '@/components/Friends.vue';
import MemberPreview from '@/components/MemberPreview.vue';
import Headline from '@/components/Headline.vue';

export default {
  components: {
    Friends,
    MemberPreview,
    Headline,
  },
};
</script>

<style scoped></style>
