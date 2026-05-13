import apiConfig from "./apiConfig";
import profileController from "./profileController";

const helpers = {
  async checkout(shoppingCart, userEmail) {
    if (!userEmail) {
      const user = await profileController.getCurrentUser();
      userEmail = user.email;
    }
    userEmail = userEmail.trim().toLowerCase();

    const response = await fetch(
      apiConfig.checkoutSessionUrl,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: shoppingCart,
          baseUrl: window.location.origin,
          email: userEmail,
        }),
      }
    );
    const jsonBody = await response.json();
    const redirectUri = jsonBody.redirect_url;
    window.location.href = redirectUri;
  },
};

export default helpers;
