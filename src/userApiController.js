import apiConfig from "./apiConfig";
import profileController from "./profileController";

const helpers = {
  async getUnlockedContent() {
    const user = await profileController.getCurrentUser();
    const response = await fetch(
      apiConfig.unlockedContentUrl,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.idToken,
        },
      },
    );
    const jsonBody = await response.json();
    if (!jsonBody || !jsonBody.data || jsonBody.data.length === 0) {
      return [];
    }
    return jsonBody.data[0].adventures ?? [];
  },
  async useActivationCode(activationCode) {
    const user = await profileController.getCurrentUser();
    const response = await fetch(
      apiConfig.useActivationCodeUrl,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.idToken,
        },
        body: JSON.stringify({
          activationCode: activationCode.trim().toLowerCase(),
        }),
      },
    );
    const jsonBody = await response.json();
    if (!jsonBody) {
      return {};
    }
    return jsonBody;
  },
};

export default helpers;
