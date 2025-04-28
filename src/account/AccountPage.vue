<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <div v-if="user === null">
          <h1>Account</h1>
          <LoginComponent :login-callback="loadProducts" />
        </div>
        <div v-else-if="deleteUserMode">
          <h1>Delete User Account?</h1>
          <p class="bold">
            Warning! This will permanently delete your user account ({{ user.username }}) and all of
            your data. You will no longer be able to log in to access your content in the Sound
            Realms app or online. Make sure you understand the consequences before proceeding.
          </p>
          <p>
            <i>Note that we will still keep a copy of your payment history for legal reasons.</i>
          </p>
          <p>
            <MyButton :click="cancelAccountDeletion">
              Cancel
            </MyButton>

            <MyButton :click="deleteAccount">
              Yes, permanently delete my account
            </MyButton>
          </p>
        </div>
        <div v-else>
          <h1>My Account</h1>
          <p>Logged in as {{ user.username }}</p>
          <h3>My Products</h3>
          <div v-if="loadingProducts">
            <p>Loading...</p>
          </div>
          <div v-else-if="products.length === 0">
            <p>
              No products added to your account yet, head over to the <a href="/shop">SHOP</a> to
              get some!
            </p>
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
              <a :href="getProductUrl(product)">
                <img
                  :src="getImageUrl(product)"
                  :alt="product.title"
                >
                <p class="cardHeader">
                  {{ product.title }}
                </p>
              </a>
            </div>
            <div />
          </div>
          <div>
            <MyButton :click="deleteAccountPressed">
              Delete Account
            </MyButton>
          </div>
          <div>
            <MyButton :click="logout">
              Sign Out
            </MyButton>
          </div>
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
import products from "@/shop/products";

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
      deleteUserMode: false,
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
        if (idToSearchFor === "fod-kickstarter") {
          idToSearchFor = "fod";
          purchasesProducts.push({
            id: "fod-artbook",
            title: "The Fortress Of Death Artbook",
            image: "/images/shop/fod-artbook.jpg",
            url: "https://sound-realms-public.s3.eu-north-1.amazonaws.com/lone-wolf/fortress-of-death/FOD_DigitalArtbook_A4_v1.pdf",
          });
        }
        let product = products.find((obj) => {
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
    getProductUrl(product) {
      return product["url"] ?? "";
    },
    deleteAccountPressed() {
      this.deleteUserMode = true;
    },
    cancelAccountDeletion() {
      this.deleteUserMode = false;
    },
    async deleteAccount() {
      await profileController.deleteUserAccount();
      await this.logout();
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
button {
  margin-top: 20px;
  margin-bottom: 50px;
}
.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.grid-container a {
  color: black;
}
</style>
