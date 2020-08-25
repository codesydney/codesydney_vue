<template>
  <div>
    <!-- Headline -->
    <Headline />
    <!-- Member Previews -->
    <MemberPreview />
  </div>
</template>

<script>
import MemberPreview from '@/components/MemberPreview.vue';
import Headline from '@/components/Headline.vue';

export default {
  components: {
    MemberPreview,
    Headline,
  },
};
</script>

<style scoped></style>
