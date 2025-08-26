<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <div class="header-row">
          <span />
          <h1>{{ product.title }}</h1>
          <span />
        </div>
        <p
          v-if="product.preOrder"
          class="description"
        >
          (Pre-Order)
        </p>
        <img
          :src="getImageUrl(product)"
          :alt="product.title"
          class="productImage"
        >
        <p class="description">
          <span v-html="product.description" />
        </p>
        <p>
          Enter the email address to which this purchase should be attached to. This should be the
          same email address as you use to log in to your account in the Sound Realms app. In case
          you have not created a Sound Realms account yet, you can do so later &ndash; just make
          sure to use the same email address!
        </p>
        <input
          v-model="username"
          placeholder="Email address"
          :disabled="loading"
          @keyup.enter="continueToCheckout()"
        >
        <div v-if="error">
          <p class="error-text">
            {{ error }}
          </p>
        </div>
        <p class="cardPrice">
          {{ product.price }} SEK
        </p>
        <MyButton :click="() => continueToCheckout(product)">
          Continue to Checkout
        </MyButton>
        <div style="padding: 20px" />
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import MyButton from "../components/MyButton.vue";
import products from "./products";
import shopController from "../shopController";

export default {
  name: "WebShop",
  components: {
    MainLayout,
    MainFooter,
    MyButton,
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
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    productsInCart() {
      return this.$store.state.shoppingCart.length;
    },
  },
  mounted() {
    let product = this.products.find((product) => product.url === this.$route.params.id);
    if (product == null) {
      // If no product found with this ID, redirect back to shop main page
      this.$router.push("/shop");
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
        this.error = "You must enter a valid email address."
        return;
      }
      this.loading = true;
      await shopController.checkout([this.product], this.username);
    },
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/pergament_background.jpg");
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: black;
  max-width: 100%;
}

.checkout-button {
  margin-top: 50px;
}

.section-content {
  margin-bottom: 50px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.numberCircle {
  border-radius: 50%;
  width: 13px;
  height: 13px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 12px Arial, sans-serif;
}
.cardPrice {
  text-align: center;
  font-size: 70%;
}
.productImage {
  width: 500px;
  border-radius: 20px;
}
.description {
  font-size: medium;
  font-weight: bold;
}
input {
  min-width: 300px;
  min-height: 25px;
  margin: 10px;
}
.error-text {
  color: #aa0000;
}
</style>
