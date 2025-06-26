<template>
  <div class="strip">
    <h2>Sign up for the Newsletter</h2>
    <div class="section-content">
      <p class="inverted">
        Sign up for our newsletter if you want to stay up to date when we release new
        adventures. Occasionally you will also receive free in-game bonus items and other
        goodies.
      </p>
      <NewsletterSignupForm />
    </div>
  </div>
</template>

<script>
import NewsletterSignupForm from './NewsletterSignupForm.vue';

export default {
  name: 'GametestStrip',
  components: {
    NewsletterSignupForm,
  },
};
</script>

<style scoped>
.strip {
  background-color: #672a66;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.strip > h1,
h2 {
  color: white;
}

.section-content {
  padding-bottom: 30px;
}
</style>
