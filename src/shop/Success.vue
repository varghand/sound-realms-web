<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <h1>Order Completed</h1>
        <p>Congratulations on your order! Download the Sound Realms app and log in with the same email address as you used for the purchase in order to get access to your content</p>
        <p>Contact us at dm@soundrealms.com in case you encounter any problems.</p>
        <MyButton
          href="https://soundrealms.com"
        >
          Return Home
        </MyButton>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import MyButton from "../components/MyButton.vue";

export default {
  name: "WebShopSuccessPage",
  components: {
    MainLayout,
    MainFooter,
    MyButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    gameTitles() {
      const shoppingCart = this.$store.state.shoppingCart;
      if (shoppingCart.length === 0) {
        return "";
      } else if (shoppingCart.length === 1) {
        return this.$store.state.shoppingCart[0].title;
      } else {
        return " for " + shoppingCart.map(u => u.title).join(' and ');
      }
    }
  },
  mounted() {
    this.$store.commit("clearCart");
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

button {
  margin-top: 20px;
  margin-bottom: 50px;
}

</style>
