import profileController from "./profileController";

const helpers = {
  async getUnlockedContent() {
    const user = await profileController.getCurrentUser();
    const response = await fetch("/api/unlocked-content", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + user.idToken,
      },
    });
    if (!response.ok) {
      throw new Error(`Unable to load unlocked content (${response.status})`);
    }
    const jsonBody = await response.json();
    if (!jsonBody || !jsonBody.data || jsonBody.data.length === 0) {
      return [];
    }
    return jsonBody.data[0].adventures ?? [];
  },
  async useActivationCode(activationCode) {
    const user = await profileController.getCurrentUser();
    const response = await fetch("/api/use-code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.idToken,
      },
      body: JSON.stringify({
        activationCode: activationCode.trim().toLowerCase(),
      }),
    });
    if (!response.ok) {
      throw new Error(`Unable to use activation code (${response.status})`);
    }
    const jsonBody = await response.json();
    if (!jsonBody) {
      return {};
    }
    return jsonBody;
  },
};

export default helpers;
