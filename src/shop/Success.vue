<template>
  <ShopPage>
    <div class="status-panel shop-panel">
      <div
        class="status-icon"
        aria-hidden="true"
      >
        ✓
      </div>
      <p class="shop-kicker">
        Payment complete
      </p>
      <h1>Your adventure is ready</h1>
      <p class="status-lead">
        Your purchase has been connected to the email address you entered at checkout.
      </p>
      <div class="next-step">
        <h2>Start playing</h2>
        <p>
          Open the Sound Realms app and sign in with the same email address. If you don't have an
          account yet, create one with that address and your purchase will be waiting for you.
        </p>
      </div>
      <div class="shop-actions">
        <a
          href="https://soundrealms.com/pages/download"
          class="shop-button"
        >Download the app</a>
        <a
          href="https://soundrealms.com/collections/digital-games"
          class="shop-button secondary"
        >Continue shopping</a>
      </div>
      <p class="support-copy">
        Need help? Email <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a> and include
        the email address used for your purchase.
      </p>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "./components/ShopPage.vue";

export default {
  name: "WebShopSuccessPage",
  components: {
    ShopPage,
  },
  mounted() {
    this.$store.commit("clearCart");
  },
};
</script>

<style scoped>
.status-panel {
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(34px, 6vw, 72px);
}

.status-icon {
  width: 58px;
  height: 58px;
  margin-bottom: 26px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #edf7ef;
  color: #21743a;
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
}

.status-lead {
  max-width: 650px;
  color: #4a4a4a;
  font-size: 1.08rem !important;
}

.next-step {
  margin: 32px 0;
  padding: 28px;
  background: #f4f4f4;
}

.next-step p {
  margin-bottom: 0;
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
