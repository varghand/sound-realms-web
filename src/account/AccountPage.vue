<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <div v-if="user === null">
          <h1>Account</h1>
          <LoginComponent :login-callback="loadProducts" />
        </div>
        <div v-else>
          <h1>My Account</h1>
          <p>Logged in as {{ user.username }}</p>
          <h3>My Products</h3>
          <div v-if="loadingProducts">
            <p>Loading...</p>
          </div>
          <div v-else-if="products.length === 0">
            <p>No products added to your account yet, head over to the <a href="/shop">SHOP</a> to get some!</p>
          </div>
          <div
            v-else
            class="grid-container"
          >
            <div
              v-for="product in products"
              :key="product.title"
              class="productCard"
            >
              <img
                :src="getImageUrl(product)"
                :alt="product.title"
              >
              <p class="cardHeader">
                {{ product.title }}
              </p>
            </div>
            <div />
          </div>
          <MyButton :click="logout">
            Sign Out
          </MyButton>
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
import products from '@/shop/products';

export default {
  name: "AccountPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    LoginComponent,
    MyButton,
  },
  data() {
    return {
      loadingProducts: true,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      let purchasesProducts = [];
      this.$store.state.unlockedAdventures.forEach((unlockedItem) => {
        let idToSearchFor = unlockedItem.adventureId;
        if (idToSearchFor === "fist-pre-order") {
          idToSearchFor = "fist";
        }
        let product = products.find(obj => {
          return obj.id === idToSearchFor;
        });
        if (product) {
          purchasesProducts.push(product);
        }
      });

      return purchasesProducts;
    },
  },
  mounted() {
    profileController.getCurrentUser().then((user) => this.$store.commit("setUser", user));
    this.loadProducts();
  },
  methods: {
    async logout() {
      this.$store.commit("setUser", null);
      this.$store.commit("setUnlockedAdventures", []);
      await profileController.handleSignOut();
    },
    loadProducts() {
      userApi.getUnlockedContent().then((unlockedAdventures) => {
        this.$store.commit("setUnlockedAdventures", unlockedAdventures);
        this.loadingProducts = false;
      });
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
