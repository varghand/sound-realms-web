<template>
  <ShopPage>
    <div class="account-panel shop-panel">
      <div
        v-if="step === 'CREATE'"
        class="account-panel-content"
      >
        <p class="shop-kicker">
          Sound Realms account
        </p>
        <h1>Create Account</h1>
        <p class="account-intro">
          Create the account you will use in the Sound Realms app to access your digital products.
        </p>
        <div class="account-form">
          <div class="shop-field">
            <label for="create-username">Username</label>
            <input
              id="create-username"
              v-model.trim="username"
              autocomplete="username"
              :disabled="loading"
              @keyup.enter="createAccount"
            >
          </div>
          <div class="shop-field">
            <label for="create-email">Email address</label>
            <input
              id="create-email"
              v-model.trim="email"
              type="email"
              autocomplete="email"
              :disabled="loading"
              @keyup.enter="createAccount"
            >
          </div>
          <div class="shop-field">
            <label for="create-password">Password</label>
            <input
              id="create-password"
              v-model="password"
              type="password"
              autocomplete="new-password"
              :disabled="loading"
              @keyup.enter="createAccount"
            >
          </div>
          <p
            v-if="error"
            class="shop-error"
            role="alert"
          >
            {{ error }}
          </p>
          <button
            type="button"
            class="shop-button"
            :disabled="loading"
            @click="createAccount"
          >
            {{ loading ? "Creating account…" : "Create account" }}
          </button>
          <router-link
            class="back-link"
            to="/account"
          >
            &larr; Back to sign in
          </router-link>
        </div>
      </div>
      <div
        v-if="step === 'CONFIRM'"
        class="account-panel-content"
      >
        <p class="shop-kicker">
          One last step
        </p>
        <h1>Confirm Account</h1>
        <p class="account-intro">
          Enter the confirmation code sent to your email address.
        </p>
        <div class="account-form">
          <div class="shop-field">
            <label for="create-confirmation-code">Confirmation code</label>
            <input
              id="create-confirmation-code"
              v-model.trim="confirmationCode"
              autocomplete="one-time-code"
              :disabled="loading"
              @keyup.enter="confirmSignup"
            >
          </div>
          <p
            v-if="error"
            class="shop-error"
            role="alert"
          >
            {{ error }}
          </p>
          <button
            type="button"
            class="shop-button"
            :disabled="loading"
            @click="confirmSignup"
          >
            {{ loading ? "Confirming…" : "Confirm account" }}
          </button>
          <button
            type="button"
            class="text-button"
            :disabled="loading || signUpCodeResent"
            @click="resendConfirmationCode"
          >
            {{ signUpCodeResent ? "New code sent" : "Resend confirmation code" }}
          </button>
        </div>
      </div>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "./components/ShopPage.vue";
import profileController from "../profileController";

export default {
  name: "CreateAccount",
  components: {
    ShopPage,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmationCode: "",
      loading: false,
      error: null,
      step: "CREATE",
      signUpCodeResent: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async createAccount() {
      this.error = null;
      this.loading = true;
      try {
        const user = await profileController.handleSignUp({
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.loading = false;
        this.error = null;
        if (user !== null) {
          this.step = "CONFIRM";
        }
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async confirmSignup() {
      this.error = null;
      this.loading = true;
      try {
        await profileController.confirmSignUp({
          username: this.username,
          confirmationCode: this.confirmationCode,
        });
        const user = await profileController.signIn(this.username, this.password);
        this.$store.commit('setUser', user);
        this.loading = false;
        this.error = null;
        this.$router.push("/account");
      } catch (error) {
        this.loading = false;
        if (error.includes("Member must satisfy regular expression pattern") && error.includes("username")) {
          this.error = "Username contains invalid characters (such as spaces)";
          return;
        } else if (error.includes("Member must satisfy regular expression pattern") && error.includes("password")) {
          this.error = "Password contains invalid characters (such as spaces)";
          return;
        }
        this.error = error;
      }
    },
    async resendConfirmationCode() {
      await profileController.resendSignUpCode(this.username);
      this.signUpCodeResent = true;
    },
  },
};
</script>

<style scoped>
.account-panel {
  max-width: 680px;
  margin: 0 auto;
}

.account-panel-content {
  padding: clamp(30px, 6vw, 68px);
}

.account-intro {
  margin: -8px 0 28px;
  color: #4a4a4a;
}

.account-form {
  display: grid;
  gap: 18px;
}

.account-form .shop-button {
  width: 100%;
}

.text-button,
.back-link {
  justify-self: start;
  padding: 0;
  border: 0;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: #6c3688;
  font: inherit;
  cursor: pointer;
}

.text-button:disabled {
  color: #777;
  cursor: default;
}
</style>
