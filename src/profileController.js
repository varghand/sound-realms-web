import {
  getCurrentUser,
  signIn,
  signUp,
  confirmSignUp,
  resetPassword,
  confirmResetPassword,
  signOut,
  fetchAuthSession,
  resendSignUpCode,
} from "@aws-amplify/auth";

const helpers = {
  async signIn(username, password) {
    if (username.includes("@")) {
      username = username.trim().toLowerCase();
    }

    try {
      await this.handleSignOut();
      const signInRes = await signIn({
        username: username.trim(),
        password: password.trim(),
      });
      if (!signInRes.isSignedIn && signInRes.nextStep.signInStep === "CONFIRM_SIGN_UP") {
        throw new Error("CONFIRM_SIGN_UP");
      }
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      console.log("error signing in", error);
      throw error;
    }
  },
  async getCurrentUser() {
    try {
      const user = await getCurrentUser();
      user.email = await this.getUserEmail();
      user.idToken = await this.getIdToken();
      return user;
    } catch (err) {
      console.log(err);
      await this.handleSignOut();
      return null;
    }
  },
  async getIdToken() {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      return idToken.toString();
    } catch (err) {
      console.log(err);
      return "";
    }
  },
  async getUserEmail() {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      return idToken.payload.email;
    } catch (err) {
      console.log(err);
      return "";
    }
  },
  async handleSignUp({ username, password, email }) {
    try {
      const signupResult = await signUp({
        username: username.trim(),
        password: password.trim(),
        attributes: { email: email.trim().toLowerCase() },
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });
      console.log(signupResult);
      return signupResult.user;
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  },
  async confirmSignUp({ username, confirmationCode }) {
    try {
      const result = await confirmSignUp({
        username: username.trim(),
        confirmationCode: confirmationCode.trim(),
      });
      console.log(result);
    } catch (error) {
      console.log("error confirming sign up", error);
      throw error;
    }
  },
  async resendSignUpCode(username) {
    try {
      const result = await resendSignUpCode({
        username: username.trim(),
      });
      console.log(result);
    } catch (error) {
      console.log("error resending signup code", error);
      throw error;
    }
  },
  async handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  },
  async sendPasswordResetCode(username) {
    if (username.includes("@")) {
      username = username.trim().toLowerCase();
    }

    try {
      await resetPassword({ username: username.trim() });
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("no registered/verified email")) {
        throw new Error("CONFIRM_SIGN_UP");
      }
      throw error;
    }
  },
  async handleConfirmResetPassword({ username, confirmationCode, newPassword }) {
    if (username.includes("@")) {
      username = username.trim().toLowerCase();
    }

    try {
      await confirmResetPassword({
        username: username.trim(),
        confirmationCode: confirmationCode.trim(),
        newPassword: newPassword.trim(),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default helpers;
