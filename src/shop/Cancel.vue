<template>
  <ShopPage>
    <div class="status-panel shop-panel">
      <p class="shop-kicker">
        Checkout paused
      </p>
      <h1>Your payment wasn't completed</h1>
      <p class="status-lead">
        No purchase was completed. You can return to the shop or try the payment again if your
        digital products are still listed below.
      </p>

      <div
        v-if="!cartIsEmpty"
        class="order-summary"
      >
        <h2>Your digital products</h2>
        <ul>
          <li
            v-for="product in shoppingCart"
            :key="product.id"
          >
            <span>{{ product.title }}</span>
            <span>{{ product.price }} kr</span>
            <button
              type="button"
              class="remove-button"
              :aria-label="`Remove ${product.title}`"
              @click="removeFromCart(product)"
            >
              Remove
            </button>
          </li>
        </ul>
        <p class="order-total">
          <strong>Total</strong>
          <strong>{{ totalPrice }} kr</strong>
        </p>
      </div>

      <div class="shop-actions">
        <button
          v-if="!cartIsEmpty"
          type="button"
          class="shop-button"
          :disabled="loading"
          @click="checkout"
        >
          {{ loading ? "Opening secure payment…" : "Try payment again" }}
        </button>
        <a
          href="https://soundrealms.com/collections/digital-games"
          class="shop-button secondary"
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
import profileController from "../profileController";
import shopController from "../shopController";

export default {
  name: "ShopCancelPage",
  components: {
    ShopPage,
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    cartIsEmpty() {
      return this.$store.state.shoppingCart.length === 0;
    },
    totalPrice() {
      return this.$store.state.shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0);
    },
  },
  mounted() {
    profileController.getCurrentUser().then((user) => this.$store.commit("setUser", user));
  },
  methods: {
    async checkout() {
      this.loading = true;
      try {
        await shopController.checkout(this.shoppingCart);
      } finally {
        this.loading = false;
      }
    },
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
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

.order-summary {
  margin: 32px 0;
  padding: 28px;
  background: #f4f4f4;
}

.order-summary ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.order-summary li,
.order-total {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 18px;
  padding: 14px 0;
  border-bottom: 1px solid #d6d6d6;
}

.order-total {
  grid-template-columns: minmax(0, 1fr) auto;
  border-bottom: 0;
}

.remove-button {
  padding: 0;
  border: 0;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: #666;
  cursor: pointer;
}

.support-copy {
  margin: 28px 0 0;
  color: #666;
  font-size: 0.84rem !important;
}

.support-copy a {
  border-bottom: 1px solid currentColor;
}

@media (max-width: 560px) {
  .order-summary li {
    grid-template-columns: 1fr auto;
  }

  .remove-button {
    grid-column: 1 / -1;
    justify-self: start;
  }
}
</style>
