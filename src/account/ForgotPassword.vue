<template>
  <ShopPage>
    <div class="account-panel shop-panel">
      <div class="account-panel-content">
        <p class="shop-kicker">
          Sound Realms account
        </p>

        <template v-if="state === 'STEP_1'">
          <h1>Reset password</h1>
          <p class="account-intro">
            Enter the username or email address associated with your account.
          </p>
          <div class="account-form">
            <div class="shop-field">
              <label for="reset-username">Username or email address</label>
              <input
                id="reset-username"
                v-model.trim="username"
                autocomplete="username"
                :disabled="loading"
                @keyup.enter="sendPasswordResetCode"
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
              @click="sendPasswordResetCode"
            >
              {{ loading ? "Sending code…" : "Send reset code" }}
            </button>
            <p class="shop-muted support-note">
              If your email is not confirmed yet, enter your username. Need help finding it?
              Contact <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a>.
            </p>
          </div>
        </template>

        <template v-else-if="state === 'STEP_2' || state === 'RESET_PW_AFTER_CONFIRMING_EMAIL'">
          <h1>Choose a new password</h1>
          <p class="account-intro">
            A reset code has been sent to your email. Enter it below with your new password.
          </p>
          <div class="account-form">
            <div class="shop-field">
              <label for="reset-code">Password reset code</label>
              <input
                id="reset-code"
                v-model.trim="resetCode"
                autocomplete="one-time-code"
                :disabled="loading"
                @keyup.enter="resetPassword"
              >
            </div>
            <div class="shop-field">
              <label for="new-password">New password</label>
              <input
                id="new-password"
                v-model="password1"
                type="password"
                autocomplete="new-password"
                :disabled="loading"
                @keyup.enter="resetPassword"
              >
            </div>
            <div class="shop-field">
              <label for="repeat-password">Repeat new password</label>
              <input
                id="repeat-password"
                v-model="password2"
                type="password"
                autocomplete="new-password"
                :disabled="loading"
                @keyup.enter="resetPassword"
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
              @click="resetPassword"
            >
              {{ loading ? "Saving password…" : "Save new password" }}
            </button>
          </div>
        </template>

        <template v-else-if="state === 'STEP_3'">
          <h1>Password updated</h1>
          <div
            class="status-card"
            role="status"
          >
            <p>Your password has been reset. You can now sign in to unlock your content.</p>
          </div>
          <router-link
            class="shop-button"
            to="/account"
          >
            Return to sign in
          </router-link>
        </template>

        <template v-else-if="state === 'CONFIRM'">
          <h1>Confirm your email</h1>
          <p class="account-intro">
            Enter the confirmation code sent to your email address. The code expires after 24 hours.
          </p>
          <div class="account-form">
            <div class="shop-field">
              <label for="email-confirmation-code">Confirmation code</label>
              <input
                id="email-confirmation-code"
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
              :disabled="loading"
              @click="resendConfirmationCode"
            >
              Resend confirmation code
            </button>
          </div>
        </template>

        <router-link
          v-if="state !== 'STEP_3'"
          class="back-link"
          to="/account"
        >
          &larr; Back to sign in
        </router-link>
      </div>
    </div>
  </ShopPage>
</template>

<script>
import ShopPage from "@/shop/components/ShopPage.vue";
import profileController from "@/profileController";

export default {
  name: "AccountPage",
  components: {
    ShopPage,
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      error: null,
      state: "STEP_1",
      resetCode: "",
      password1: "",
      password2: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    profileController.getCurrentUser().then((user) => this.$store.commit("setUser", user));
  },
  methods: {
    async sendPasswordResetCode() {
      this.loading = true;
      this.error = null;
      try {
        await profileController.sendPasswordResetCode(this.username);
        this.loading = false;
        this.state = "STEP_2";
      } catch (error) {
        console.log(error);
        if (error.message === "CONFIRM_SIGN_UP") {
          await this.resendConfirmationCode();
          this.state = "CONFIRM";
          return;
        }
        this.error = error;
        this.loading = false;
      }
    },
    async resetPassword() {
      this.error = null;
      if (this.password1 !== this.password2) {
        this.error = "Passwords don't match";
        return;
      } else if (this.password1.length < 8) {
        this.error = "Password must be at least 8 characters long";
        return;
      }
      this.loading = true;
      try {
        await profileController.handleConfirmResetPassword({
          username: this.username,
          confirmationCode: this.resetCode,
          newPassword: this.password1,
        });
        this.error = null;
        this.loading = false;
        this.state = "STEP_3";
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async resendConfirmationCode() {
      console.log("Resending confirmation code");
      await profileController.resendSignUpCode(this.username);
      this.loading = false;
    },
    async confirmSignup() {
      this.error = null;
      this.loading = true;
      try {
        await profileController.confirmSignUp({
          username: this.username,
          confirmationCode: this.confirmationCode,
        });
        this.loading = false;
        this.error = null;
        await profileController.sendPasswordResetCode(this.username);
        this.state = 'RESET_PW_AFTER_CONFIRMING_EMAIL';
      } catch (error) {
        this.loading = false;
        console.log(error);
        const errorMessage = error.toString();
        if (errorMessage.includes("CodeMismatchException")) {
          this.error = "Invalid verification code";
          return;
        }
        else if (errorMessage.includes("Member must satisfy regular expression pattern") && error.includes("username")) {
          this.error = "Username contains invalid characters (such as spaces)";
          return;
        } else if (errorMessage.includes("Member must satisfy regular expression pattern") && error.includes("password")) {
          this.error = "Password contains invalid characters (such as spaces)";
          return;
        }
        this.error = errorMessage;
      }
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

.support-note {
  margin: 0;
  font-size: 0.82rem !important;
}

.support-note a,
.back-link,
.text-button {
  border: 0;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: #6c3688;
  font: inherit;
  cursor: pointer;
}

.back-link {
  display: inline-block;
  margin-top: 28px;
}

.text-button {
  justify-self: start;
  padding: 0;
}

.status-card {
  margin-bottom: 24px;
  padding: 24px;
  border-left: 4px solid #3b7b45;
  background: #eef8f0;
}

.status-card p {
  margin: 0;
}
</style>
