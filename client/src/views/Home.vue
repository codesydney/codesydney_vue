<template>
  <div>
    <!-- Headline -->
    <h1>Hello World!</h1>
    <!-- Member Previews -->
    <MemberPreview />
    <Friends />
  </div>
</template>

<script>
import Friends from '@/components/Friends.vue';
import MemberPreview from '@/components/MemberPreview.vue';

export default {
  components: {
    Friends,
    MemberPreview
  }
};
</script>

<style scoped></style>
