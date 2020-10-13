<template>
  <!-- divs needs to be removed once there is a navbar on this page. -->
  <div>
    <div style="height: 80px"></div>
    <v-card>
      <v-card-title>Contact</v-card-title>
      <CalendlyWidget />
      <v-divider inset></v-divider>
      <ContactForm />
    </v-card>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import CalendlyWidget from '../components/CalendlyWidget.vue';

export default {
  components: {
    ContactForm: ContactForm,
    CalendlyWidget: CalendlyWidget,
  },
};
</script>

<style scoped></style>
