<template>
  <div class="newsletter-signup">
    <iframe
      id="desktop-form"
      src="https://cdn.forms-content.sg-form.com/ae43989a-a486-11ec-941c-ceafd6e237fb"
    />
    <iframe
      id="mobile-form"
      src="https://cdn.forms-content.sg-form.com/b3f4ad80-1c9b-11ee-b6c1-7a6d07274011"
    />
  </div>
</template>

<script>

export default {
  name: 'NewsletterSignupForm',
};
</script>

<style scoped>
iframe {
  width: 1000px;
  height: 500px;
  border: none;
}

.newsletter-signup {
  z-index: 99999;
}

@media screen and (max-width: 680px) {
  #desktop-form {
    display: none;
  }
}

@media screen and (min-width: 681px) {
  #mobile-form {
    display: none;
  }
}
</style>
