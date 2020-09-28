<template>
  <v-card color="accent">
    <v-card-title>Book a 30-minute meeting</v-card-title>
    <!-- Calendly inline widget begin -->
    <div
      data-url="https://calendly.com/codesydney"
      style="min-width: 320px; height: 630px"
    >
      <div class="calendly-spinner">
        <div class="calendly-bounce1"></div>
        <div class="calendly-bounce2"></div>
        <div class="calendly-bounce3"></div>
      </div>
      <iframe
        src="https://calendly.com/codesydney?embed_domain=www.code.sydney&amp;embed_type=Inline"
        width="100%"
        height="100%"
        frameborder="0"
      >
      </iframe>
    </div>
    <!-- Calendly inline widget end -->
  </v-card>
</template>

<script></script>

<style lang="scss" scoped></style>
