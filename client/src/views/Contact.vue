<template>
  <div>
    <h1>Contact</h1>
    <CalendlyWidget />
    <!-- Email Form -->
    <ContactForm />
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
