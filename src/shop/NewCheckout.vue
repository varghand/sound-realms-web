<template>
  <ShopPage>
    <div class="purchase-layout shop-panel">
      <div class="purchase-media">
        <img
          :src="getImageUrl(product)"
          :alt="product.title"
        >
      </div>

      <div class="purchase-details">
        <p class="shop-kicker">
          Digital product<span v-if="product.preOrder"> · Pre-order</span>
        </p>
        <h1>{{ product.title }}</h1>
        <p class="product-description">
          {{ product.description }}
        </p>
        <p class="shop-price">
          {{ product.price }} kr
        </p>

        <div class="account-step">
          <h2>Connect your Sound Realms account</h2>
          <p>
            Enter the email address you use in the Sound Realms app. After payment, this product
            will be unlocked for that email address.
          </p>
          <p class="shop-muted">
            Don't have an account yet? You can create one later &mdash; just use the same email
            address when you sign up.
          </p>

          <div class="shop-field">
            <label for="checkout-email">Sound Realms account email</label>
            <input
              id="checkout-email"
              v-model.trim="username"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="you@example.com"
              :disabled="loading"
              :aria-invalid="error ? 'true' : 'false'"
              :aria-describedby="error ? 'checkout-error' : 'checkout-help'"
              @keyup.enter="continueToCheckout"
            >
            <span
              id="checkout-help"
              class="field-help"
            >Use the address you want this digital product connected to.</span>
          </div>

          <p
            v-if="error"
            id="checkout-error"
            class="shop-error"
            role="alert"
          >
            {{ error }}
          </p>

          <button
            type="button"
            class="shop-button"
            :disabled="loading"
            @click="continueToCheckout"
          >
            {{ loading ? "Opening secure payment…" : "Continue to secure payment" }}
          </button>
          <p class="payment-note">
            You'll review the order and payment details before completing your purchase.
          </p>
        </div>

        <a
          :href="product.storeUrl || 'https://soundrealms.com/collections/digital-games'"
          class="back-link"
        >&larr; Back to product in the Sound Realms shop</a>
      </div>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "./components/ShopPage.vue";
import products from "./products";
import shopController from "../shopController";

export default {
  name: "WebShop",
  components: {
    ShopPage,
  },
  data() {
    return {
      username: "",
      products: products,
      error: null,
      loading: false,
    };
  },
  computed: {
    product() {
      let product = this.products.find((product) => product.url === this.$route.params.id);
      if (product == null) {
        return {
          title: "",
        };
      }
      return product;
    },
  },
  mounted() {
    let product = this.products.find((product) => product.url === this.$route.params.id);
    if (product == null) {
      window.location.replace("https://soundrealms.com/collections/digital-games");
    }
  },
  methods: {
    getImageUrl(product) {
      return new URL(product["image"], import.meta.url);
    },
    async continueToCheckout() {
      this.error = null;
      if (this.loading) {
        return;
      }
      if (!this.isValidEmail(this.username)) {
        this.error = "Enter a valid email address to continue.";
        return;
      }
      this.loading = true;
      try {
        await shopController.checkout([this.product], this.username);
      } catch {
        this.error = "We couldn't open the payment page. Please try again.";
        this.loading = false;
      }
    },
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.purchase-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
}

.purchase-media {
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #f4f4f4;
}

.purchase-media img {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: block;
  object-fit: cover;
}

.purchase-details {
  padding: clamp(30px, 5vw, 62px);
}

.product-description {
  margin: 0 0 18px;
  color: #4a4a4a;
}

.account-step {
  margin-top: 34px;
  padding-top: 32px;
  border-top: 1px solid #dedede;
}

.account-step h2 {
  margin-bottom: 12px;
}

.shop-field {
  margin: 24px 0 16px;
}

.field-help {
  color: #666;
  font-size: 0.78rem;
}

.shop-error {
  margin-bottom: 16px;
}

.shop-button {
  width: 100%;
  margin-top: 8px;
}

.payment-note {
  margin: 12px 0 0;
  color: #666;
  font-size: 0.78rem !important;
  text-align: center;
}

.back-link {
  margin-top: 30px;
  display: inline-block;
  border-bottom: 1px solid currentColor;
  font-size: 0.82rem !important;
}

@media (max-width: 820px) {
  .purchase-layout {
    grid-template-columns: 1fr;
  }
}
</style>
