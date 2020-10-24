<template>
  <nav>
    <v-app-bar app flat short value="false" color="primary">
      <v-app-bar-nav-icon>
        <font-awesome-icon
          color="white"
          icon="bars"
          size="2x"
        ></font-awesome-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="font-weight-medium white--text"
        style="
          cursor: pointer;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        "
        @click="$router.push({ name: 'home' })"
        >CodeSydney</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <font-awesome-icon
        style="visibility: hidden"
        color="white"
        icon="user"
        size="2x"
      ></font-awesome-icon>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
