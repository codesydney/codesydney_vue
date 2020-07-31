<template>
  <div>
    <h1>Contact</h1>
    <CalendyWidget />
    <!-- Email Form -->
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import CalendyWidget from '../components/CalendyWidget.vue';

export default {
  components: {
    ContactForm: ContactForm,
    CalendyWidget: CalendyWidget
  }
};
</script>

<style scoped></style>
