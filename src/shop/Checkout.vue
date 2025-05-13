<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <h1>Shopping Cart</h1>
        <div v-if="cartIsEmpty">
          <p>No products in shopping cart</p>
          <MyButton
            href="/shop"
            class="checkout-button"
            :disabled="loading"
          >
            Return to Shop
          </MyButton>
        </div>
        <div v-else>
          <div
            v-for="product in shoppingCart"
            :key="product.id"
          >
            <p>
              {{ product.title }}, {{ product.price }} SEK
              <span
                class="clickableIcon"
                @click="() => removeFromCart(product)"
              ><font-awesome-icon icon="fa-solid fa-trash" /></span>
            </p>
          </div>
          <p>Total Price: {{ totalPrice }} SEK</p>
          <div v-if="user === null">
            <MyButton
              href="/shop/login"
              class="checkout-button"
              :disabled="loading"
            >
              Continue
            </MyButton>
          </div>
          <div v-else>
            <MyButton
              :click="checkout"
              class="checkout-button"
              :disabled="loading || cartIsEmpty"
            >
              Checkout
            </MyButton>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import profileController from "../profileController";
import shopController from "../shopController";
import MyButton from "../components/MyButton.vue";

export default {
  name: "CheckoutPage",
  components: {
    MainLayout,
    MainFooter,
    MyButton,
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
      await shopController.checkout(this.shoppingCart);
    },
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
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
  margin: 50px;
}
</style>
