<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <div v-if="user === null">
          <h1>Account</h1>
          <LoginComponent />
        </div>
        <div v-else>
          <h1>My Account</h1>
          <p>Logged in as {{ user.username }}</p>
          <h3>My Pre-orders</h3>
          <div v-if="loadingPreOrders"><p>Loading...</p></div>
          <div v-else-if="products.length === 0">
          <p>No pre-orders yet, head over to the <a href="/shop">SHOP</a> to get some!</p></div>
          <div class="grid-container" v-else>
            <div v-for="product in products" :key="product.title" class="productCard">
              <img :src="getImageUrl(product)" :alt="product.title" />
              <p class="cardHeader">{{ product.title }}</p>
            </div>
            <div></div>
          </div>
          <MyButton :click="logout">Sign Out</MyButton>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import MainFooter from "@/components/MainFooter.vue";
import TopMenu from "@/components/TopMenu.vue";
import profileController from "@/profileController";
import userApi from "@/userApiController";
import LoginComponent from "@/components/LoginComponent.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "AccountPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    LoginComponent,
    MyButton,
  },
  mounted() {
    profileController.getCurrentUser().then((user) => this.$store.commit("setUser", user));
    userApi.getUnlockedContent().then((unlockedAdventures) => {
      this.$store.commit("setUnlockedAdventures", unlockedAdventures);
      this.loadingPreOrders = false;
    });
  },
  data() {
    return {
      loadingPreOrders: true,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      let preOrders = [];
      if (this.$store.state.unlockedAdventures.some((e) => e.adventureId === "fod-pre-order")) {
        preOrders.push({
          image: "/images/fod-funded.jpg",
          title: "Lone Wolf: The Fortress of Death",
          id: "fod-pre-order",
        });
      }
      if (this.$store.state.unlockedAdventures.some((e) => e.adventureId === "fist-pre-order")) {
        preOrders.push({
          image: "/images/fist-square.jpg",
          title: "Steve Jackson's F.I.S.T.",
          id: "fist-pre-order",
        });
      }
      if (this.$store.state.unlockedAdventures.some((e) => e.adventureId === "bundle-pre-order")) {
        preOrders.push({
          image: "/images/bundle-shop.jpg",
          title: "The Fortress of Death + F.I.S.T. Bundle",
          id: "bundle-pre-order",
        });
      }
      if (this.$store.state.unlockedAdventures.some((e) => e.adventureId === "fod-expansions")) {
        preOrders.push({
          image: "/images/12m-updates.jpg",
          title: "The Fortress of Death Expansions (12 months)",
          id: "fod-expansions",
        });
      }

      return preOrders;
    },
  },
  methods: {
    async logout() {
      this.$store.commit("setUser", null);
      await profileController.handleSignOut();
    },
    getImageUrl(product) {
      return new URL(product["image"], import.meta.url);
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
button {
  margin-top: 20px;
  margin-bottom: 50px;
}
.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
