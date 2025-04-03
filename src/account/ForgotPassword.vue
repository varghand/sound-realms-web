<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div
        v-if="state === 'STEP_1'"
        class="section-content"
      >
        <h1>Reset Password</h1>
        <p>Enter the username or email address associated with your account to continue.</p>
        <input
          v-model="username"
          placeholder="Username or email address"
          @keyup.enter="sendPasswordResetCode()"
        >
        <div v-if="error">
          <p class="error-text">
            {{ error }}
          </p>
        </div>
        <MyButton
          :click="sendPasswordResetCode"
          :disabled="loading"
        >
          Continue
        </MyButton>

        <p>
          <i>
            (In case you haven't yet confirmed your email address, you can only use your username
            here. In case you have forgotten your username, please contact customer support at
            dm@soundrealms.com and we'll help you out!)
          </i>
        </p>
      </div>
      <div
        v-else-if="state === 'STEP_2'"
        class="section-content"
      >
        <h1>Reset Password</h1>
        <p>A password reset code has been sent to your email. Enter it below to continue:</p>
        <input
          v-model="resetCode"
          placeholder="Password Reset Code"
          @keyup.enter="resetPassword()"
        >
        <input
          v-model="password1"
          placeholder="Choose New Password"
          type="password"
          @keyup.enter="resetPassword()"
        >
        <input
          v-model="password2"
          placeholder="Repeat New Password"
          type="password"
          @keyup.enter="resetPassword()"
        >
        <div v-if="error">
          <p class="error-text">
            {{ error }}
          </p>
        </div>
        <MyButton
          :click="resetPassword"
          :disabled="loading"
        >
          Continue
        </MyButton>
      </div>
      <div
        v-else-if="state === 'STEP_3'"
        class="section-content"
      >
        <h1>Reset Password</h1>
        <p>Password successfully reset! You can now use it to log in.</p>
        <MyButton
          href="/account"
          :disabled="loading"
        >
          Continue
        </MyButton>
      </div>
      <div
        v-else-if="state === 'CONFIRM'"
        class="content"
      >
        <h1>Confirm Email Address</h1>
        <p>
          Your email address has not been confirmed. Before you can proceed, you must first input
          the confirmation code just sent to your email address:
        </p>
        <p>(Code expires after 24 hours)</p>
        <input
          v-model="confirmationCode"
          placeholder="Confirmation Code"
          @keyup.enter="confirmSignup()"
        >
        <div v-if="error">
          <p class="error-text">
            {{ error }}
          </p>
        </div>
        <MyButton
          :click="confirmSignup"
          :disabled="loading"
        >
          Confirm Account
        </MyButton>
        <hr>
        <MyButton
          :click="resendConfirmationCode"
          :disabled="loading || signUpCodeResent"
        >
          Resend Confirmation Code
        </MyButton>
        <div v-if="signUpCodeResent">
          <p>New code sent to your email inbox!</p>
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
import MyButton from "@/components/MyButton.vue";

export default {
  name: "AccountPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyButton,
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
      try {
        await profileController.sendPasswordResetCode(this.username);
        this.error = null;
        this.loading = false;
        this.state = "STEP_2";
      } catch (error) {
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
      await profileController.resendSignUpCode(this.username);
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
input {
  min-width: 300px;
  min-height: 25px;
  margin: 10px;
}
.error-text {
  color: #aa0000;
}
</style>
