<template>
  <main-layout>
    <div v-if="step === 'LOGIN'" class="content">
      <p>Please log in with your Sound Realms account to continue.</p>
      <p>This is the same account as you use in the Sound Realms app.</p>
      <input v-model="username" placeholder="Username or email address" @keyup.enter="login()" />
      <input v-model="password" placeholder="Password" type="password" @keyup.enter="login()" />
      <div v-if="error">
        <p class="error-text">{{ error }}</p>
      </div>
      <MyButton :click="login" :disabled="loading">Sign In</MyButton>
      <hr />
      <MyButton href="/account/forgot-password" :disabled="loading">Forgot Password</MyButton>
      <MyButton href="/account/create-account" :disabled="loading">Create Account</MyButton>
    </div>
    <div v-else-if="step === 'CONFIRM'" class="content">
      <p>Almost done! Check your email for a confirmation code, then enter it here:</p>
      <p>(Code expires after 24 hours)</p>
      <input
          v-model="confirmationCode"
          placeholder="Confirmation Code"
          @keyup.enter="confirmSignup()"
        />
        <div v-if="error">
          <p class="error-text">{{ error }}</p>
        </div>
        <MyButton :click="confirmSignup" :disabled="loading">Confirm Account</MyButton>
        <hr/>
        <MyButton :click="resendConfirmationCode" :disabled="loading || signUpCodeResent">Resend Confirmation Code</MyButton>
        <div v-if="signUpCodeResent"><p>New code sent to your email inbox!</p></div>
      </div>
  </main-layout>
</template>

<script>
import profileController from "@/profileController";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "LoginComponent",
  components: {
    MyButton,
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
      } catch (error) {
        this.loading = false;
        if (error.message === "CONFIRM_SIGN_UP") {
          this.step = "CONFIRM";
          return;
        }
        this.error = error;
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  min-width: 300px;
  min-height: 25px;
  margin: 10px;
}
button {
  margin: 10px;
}
.error-text {
  color: #aa0000;
}
</style>
