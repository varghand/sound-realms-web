<template>
  <div class="login-component">
    <div
      v-if="step === 'LOGIN'"
      class="login-form"
    >
      <div class="shop-field">
        <label for="account-username">Username or email address</label>
        <input
          id="account-username"
          v-model.trim="username"
          type="text"
          autocomplete="username"
          :disabled="loading"
          @keyup.enter="login"
        >
      </div>
      <div class="shop-field">
        <label for="account-password">Password</label>
        <input
          id="account-password"
          v-model="password"
          type="password"
          autocomplete="current-password"
          :disabled="loading"
          @keyup.enter="login"
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
        class="shop-button sign-in-button"
        :disabled="loading"
        @click="login"
      >
        {{ loading ? "Signing in…" : "Sign in" }}
      </button>
      <div class="account-links">
        <router-link to="/account/forgot-password">
          Forgot password?
        </router-link>
        <router-link to="/account/create-account">
          Create an account
        </router-link>
      </div>
    </div>
    <div
      v-else-if="step === 'CONFIRM'"
      class="login-form"
    >
      <h2>Confirm your account</h2>
      <p>Enter the confirmation code sent to your email. The code expires after 24 hours.</p>
      <div class="shop-field">
        <label for="confirmation-code">Confirmation code</label>
        <input
          id="confirmation-code"
          v-model.trim="confirmationCode"
          type="text"
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
</template>

<script>
import profileController from "@/profileController";

export default {
  name: "LoginComponent",
  props: {
    loginCallback: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      error: null,
      step: "LOGIN",
      signUpCodeResent: false,
    };
  },
  methods: {
    async login() {
      this.error = null;
      this.loading = true;
      try {
        const user = await profileController.signIn(this.username, this.password);
        this.$store.commit("setUser", user);
        this.loading = false;
        if (this.loginCallback) {
          this.loginCallback();
        }
      } catch (error) {
        this.loading = false;
        if (error.message === "CONFIRM_SIGN_UP") {
          this.step = "CONFIRM";
          return;
        }
        this.error = "Something went wrong, are you sure you entered the correct credentials?";
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
        this.$store.commit("setUser", user);
        this.loading = false;
        this.error = null;
        if (this.loginCallback) {
          this.loginCallback();
        }
      } catch (error) {
        this.loading = false;
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
.login-form {
  display: grid;
  gap: 18px;
}

.sign-in-button {
  width: 100%;
}

.account-links {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.account-links a,
.text-button {
  border: 0;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: #6c3688;
  font: inherit;
  cursor: pointer;
}

.text-button {
  justify-self: start;
  padding: 0;
}

.text-button:disabled {
  color: #777;
  cursor: default;
}

@media (max-width: 520px) {
  .account-links {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
