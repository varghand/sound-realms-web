<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <div v-if="user === null">
          <h1>Account</h1>
          <LoginComponent :login-callback="loadProducts" />
        </div>

        <div v-else-if="unlockContentMode">
          <h1>Unlock Content</h1>
          <div v-if="checkingActivationCode">
            <p>Checking activation code...</p>
          </div>
          <div v-else-if="activationCodeError">
            <p>{{ getErrorMessage() }}</p>
            <MyButton :click="tryAgain">
              Try Again
            </MyButton>
          </div>
          <div v-else-if="contentUnlocked">
            <p>Success!</p>
            <MyButton :click="goBack">
              Go Back
            </MyButton>
          </div>
          <div v-else>
            <p>
              Enter your activation code here:
            </p>
            <input
              v-model="activationCode"
              placeholder="Activation code"
              @keyup.enter="useActivationCode()"
            >
            <p>
              <MyButton :click="useActivationCode">
                Activate
              </MyButton>
            </p>
          </div>
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
            <MyButton :click="unlockContentPressed">
              Unlock Content
            </MyButton>
          </div>
          <div>
            <MyButton :click="deleteAccountPressed" inverted=true>
              Delete Account
            </MyButton>
          </div>
          <div>
            <MyButton :click="logout" inverted=true>
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
    LoginComponent,
    MyButton,
  },
  data() {
    return {
      loadingProducts: true,
      deleteUserMode: false,
      unlockContentMode: false,
      activationCode: '',
      checkingActivationCode: false,
      activationCodeError: null,
      contentUnlocked: null,
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
    this.loadingProducts = true;
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
    unlockContentPressed() {
      this.unlockContentMode = true;
    },
    cancelAccountDeletion() {
      this.deleteUserMode = false;
    },
    async deleteAccount() {
      await profileController.deleteUserAccount();
      await this.logout();
    },
    async useActivationCode() {
      this.checkingActivationCode = true;
      let response = await userApi.useActivationCode(this.activationCode.trim());
      this.checkingActivationCode = false;
      if (!response.valid && response.error !== null) {
        console.log(response.error);
        this.activationCodeError = response.error;
      } else {
        this.contentUnlocked = response.unlocks;
      }
    },
    getErrorMessage() {
      switch(this.activationCodeError) {
        case "code_not_found":
          return "Invalid activation code, please try again.";
        case "code_revoked":
          return "This activation code is not valid any longer.";
        case "user_already_unlocked":
          return "You already have access to this content!";
        case "code_already_used":
          return "This activation code has already been used.";
      }
      return "Something went wrong, please try again or contact Sound Realms support at dm@soundrealms.com";
    },
    tryAgain() {
      this.activationCodeError = null;
      this.contentUnlocked = null;
      this.activationCode = '';
    },
    goBack() {
      this.unlockContentMode = false;
      this.activationCodeError = null;
      this.contentUnlocked = null;
      this.activationCode = '';
      this.loadProducts();
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
  grid-template-columns: repeat(3, 1fr);
}

.grid-container a {
  color: black;
}

input {
  min-width: 300px;
  min-height: 25px;
  margin: 10px;
}
</style>
