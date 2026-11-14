<template>
  <ShopPage>
    <div class="status-panel shop-panel">
      <p class="shop-kicker">
        Checkout paused
      </p>
      <h1>Your payment wasn't completed</h1>
      <p class="status-lead">
        No purchase was completed. Return to the Sound Realms shop when you're ready to try again.
      </p>

      <div class="shop-actions">
        <a
          href="https://soundrealms.com/collections/digital-games"
          class="shop-button"
        >Return to the shop</a>
      </div>

      <p class="support-copy">
        If you believe you were charged, email
        <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a> before trying again.
      </p>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "./components/ShopPage.vue";

export default {
  name: "ShopCancelPage",
  components: {
    ShopPage,
  },
};
</script>

<style scoped>
.status-panel {
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(34px, 6vw, 72px);
}

.status-lead {
  max-width: 650px;
  color: #4a4a4a;
  font-size: 1.08rem !important;
}

.support-copy {
  margin: 28px 0 0;
  color: #666;
  font-size: 0.84rem !important;
}

.support-copy a {
  border-bottom: 1px solid currentColor;
}

</style>
