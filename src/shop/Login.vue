<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <div v-if="user === null">
          <h1>Login or Create Account</h1>
          <LoginComponent />
        </div>
        <div v-else>
          <h1>Checkout</h1>
          <p>You are logged in as {{ user.username }}. Press the button below to continue to the payment step.</p>
          <MyButton
            :click="checkout"
            class="checkout-button"
            :disabled="loading || cartIsEmpty"
          >
            Checkout
          </MyButton>
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
import LoginComponent from "@/components/LoginComponent.vue";
import MyButton from "../components/MyButton.vue";

export default {
  name: "CheckoutLoginPage",
  components: {
    MainLayout,
    MainFooter,
    LoginComponent,
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
