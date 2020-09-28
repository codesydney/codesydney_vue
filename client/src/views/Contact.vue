<template>
  <v-card>
    <v-card-title>Contact</v-card-title>
    <CalendlyWidget />
    <v-divider inset></v-divider>
    <ContactForm />
  </v-card>
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
