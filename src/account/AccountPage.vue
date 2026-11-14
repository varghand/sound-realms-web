<template>
  <ShopPage>
    <div class="account-panel shop-panel">
      <div class="account-panel-content">
        <div
          v-if="checkingSession"
          class="status-card"
          role="status"
        >
          <p>Loading your account…</p>
        </div>

        <div v-else-if="user === null">
          <p class="shop-kicker">
            Sound Realms account
          </p>
          <h1>Unlock your content</h1>
          <p class="account-intro">
            Sign in with the same account you use in the Sound Realms app to view your products or
            redeem an activation code.
          </p>
          <LoginComponent :login-callback="loadProducts" />
        </div>

        <div v-else-if="unlockContentMode">
          <p class="shop-kicker">
            Redeem a purchase
          </p>
          <h1>Unlock content</h1>
          <p class="account-intro">
            Enter the activation code supplied with your purchase. The content will be added to
            <strong>{{ user.username }}</strong>.
          </p>
          <div
            v-if="checkingActivationCode"
            class="status-card"
            role="status"
          >
            <p>Checking your activation code…</p>
          </div>
          <div v-else-if="activationCodeError">
            <p
              class="shop-error"
              role="alert"
            >
              {{ getErrorMessage() }}
            </p>
            <button
              type="button"
              class="shop-button secondary"
              @click="tryAgain"
            >
              Try again
            </button>
          </div>
          <div
            v-else-if="contentUnlocked"
            class="status-card status-card-success"
            role="status"
          >
            <h2>Content unlocked</h2>
            <p>Your product is now connected to your account and available in Sound Realms.</p>
            <button
              type="button"
              class="shop-button"
              @click="goBack"
            >
              View my products
            </button>
          </div>
          <div v-else>
            <div class="shop-field activation-field">
              <label for="activation-code">Activation code</label>
              <input
                id="activation-code"
                v-model.trim="activationCode"
                type="text"
                autocomplete="one-time-code"
                autocapitalize="off"
                spellcheck="false"
                placeholder="Enter your activation code"
                @keyup.enter="useActivationCode"
              >
              <span class="field-help">Codes are not case sensitive.</span>
            </div>
            <div class="shop-actions">
              <button
                type="button"
                class="shop-button"
                :disabled="!activationCode.trim()"
                @click="useActivationCode"
              >
                Unlock content
              </button>
              <button
                type="button"
                class="shop-button secondary"
                @click="goBack"
              >
                Back to my account
              </button>
            </div>
          </div>
        </div>

        <div v-else-if="deleteUserMode">
          <p class="shop-kicker">
            Account settings
          </p>
          <h1>Delete your account?</h1>
          <p class="account-intro">
            Warning! This will permanently delete your user account ({{ user.username }}) and all of
            your data. You will no longer be able to log in to access your content in the Sound
            Realms app or online. Make sure you understand the consequences before proceeding.
          </p>
          <p class="shop-muted">
            We will retain a copy of your payment history where legally required.
          </p>
          <div class="shop-actions">
            <button
              type="button"
              class="shop-button secondary"
              @click="cancelAccountDeletion"
            >
              Cancel
            </button>
            <button
              type="button"
              class="danger-button"
              @click="deleteAccount"
            >
              Permanently delete account
            </button>
          </div>
        </div>

        <div v-else>
          <p class="shop-kicker">
            Sound Realms account
          </p>
          <h1>My Account</h1>
          <p class="account-intro">
            Signed in as <strong>{{ user.username }}</strong>
          </p>
          <div class="account-section">
            <div class="section-heading">
              <div>
                <p class="shop-kicker">
                  Library
                </p>
                <h2>My products</h2>
              </div>
              <button
                type="button"
                class="text-button"
                @click="unlockContentPressed"
              >
                + Unlock content
              </button>
            </div>
            <div
              v-if="loadingProducts"
              class="status-card"
              role="status"
            >
              <p>Loading your products…</p>
            </div>
            <div
              v-else-if="products.length === 0"
              class="empty-state"
            >
              <h3>No products yet</h3>
              <p>
                Redeem an activation code or browse the Sound Realms shop to find your next
                adventure.
              </p>
              <div class="shop-actions">
                <button
                  type="button"
                  class="shop-button"
                  @click="unlockContentPressed"
                >
                  Unlock content
                </button>
                <a
                  class="shop-button secondary"
                  href="https://soundrealms.com/collections/digital-games"
                >
                  Browse digital games
                </a>
              </div>
            </div>
            <div
              v-else
              class="product-grid"
            >
              <a
                v-for="product in products"
                :key="product.title"
                :href="getProductUrl(product)"
                class="product-card"
              >
                <img
                  :src="getImageUrl(product)"
                  :alt="product.title"
                >
                <span>{{ product.title }}</span>
              </a>
            </div>
          </div>
          <div class="account-footer-actions">
            <button
              type="button"
              class="text-button danger-text"
              @click="deleteAccountPressed"
            >
              Delete account
            </button>
            <button
              type="button"
              class="shop-button secondary"
              @click="logout"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "@/shop/components/ShopPage.vue";
import profileController from "@/profileController";
import userApi from "@/userApiController";
import LoginComponent from "@/components/LoginComponent.vue";
import products from "@/shop/products";

export default {
  name: "AccountPage",
  components: {
    ShopPage,
    LoginComponent,
  },
  data() {
    return {
      loadingProducts: true,
      checkingSession: true,
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
  async mounted() {
    try {
      const user = await profileController.getCurrentUser();
      this.$store.commit("setUser", user);
      if (user) {
        this.loadProducts();
      }
    } finally {
      this.checkingSession = false;
    }
  },
  methods: {
    async logout() {
      this.$store.commit("setUser", null);
      this.$store.commit("setUnlockedAdventures", []);
      await profileController.handleSignOut();
    },
    loadProducts() {
      if (!this.user) {
        this.loadingProducts = false;
        return;
      }
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
      if (!this.activationCode.trim() || this.checkingActivationCode) {
        return;
      }
      this.activationCodeError = null;
      this.contentUnlocked = null;
      this.checkingActivationCode = true;
      try {
        const response = await userApi.useActivationCode(this.activationCode);
        if (response.valid) {
          this.contentUnlocked = response.unlocks ?? true;
        } else {
          this.activationCodeError = response.error || "unknown";
        }
      } catch {
        this.activationCodeError = "unknown";
      } finally {
        this.checkingActivationCode = false;
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
.account-panel {
  max-width: 820px;
  margin: 0 auto;
}

.account-panel-content {
  padding: clamp(30px, 6vw, 68px);
}

.account-intro {
  max-width: 660px;
  margin: -8px 0 30px;
  color: #4a4a4a;
}

.activation-field {
  margin: 30px 0 20px;
}

.field-help {
  color: #666;
  font-size: 0.78rem;
}

.status-card,
.empty-state {
  padding: 26px;
  background: #f4f4f4;
}

.status-card p,
.empty-state p {
  margin: 0;
}

.status-card-success {
  border-left: 4px solid #3b7b45;
  background: #eef8f0;
}

.status-card-success h2 {
  margin-bottom: 10px;
}

.status-card-success .shop-button {
  margin-top: 22px;
}

.account-section {
  margin-top: 40px;
  padding-top: 34px;
  border-top: 1px solid #dedede;
}

.section-heading,
.account-footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.section-heading h2 {
  margin-bottom: 0;
}

.text-button,
.danger-button {
  padding: 0;
  border: 0;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: #6c3688;
  font: inherit;
  cursor: pointer;
}

.danger-button,
.danger-text {
  color: #8b1e2d;
}

.empty-state {
  margin-top: 26px;
}

.empty-state h3 {
  margin-bottom: 8px;
}

.empty-state .shop-actions {
  margin-top: 22px;
}

.product-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  display: grid;
  gap: 12px;
  color: #171717;
  font-family: "Tomorrow", Arial, sans-serif !important;
  font-size: 0.84rem !important;
  font-weight: 600 !important;
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: #f4f4f4;
}

.account-footer-actions {
  margin-top: 44px;
  padding-top: 28px;
  border-top: 1px solid #dedede;
}

@media (max-width: 640px) {
  .section-heading,
  .account-footer-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .section-heading .text-button,
  .account-footer-actions .text-button {
    align-self: flex-start;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
