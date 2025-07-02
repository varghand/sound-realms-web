import profileController from "./profileController";

const helpers = {
  async getUnlockedContent() {
    const user = await profileController.getCurrentUser();
    const response = await fetch(
      //"https://99bt9csdnc.execute-api.eu-north-1.amazonaws.com/api/unlocked-content", // DEV!!!
      "https://iuihqiovb7.execute-api.eu-north-1.amazonaws.com/api/unlocked-content", // PROD
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
      //"https://apnsosg0fl.execute-api.eu-north-1.amazonaws.com/api/use-code", // DEV!!!
      "https://vw5swod35l.execute-api.eu-north-1.amazonaws.com/api/use-code", // PROD
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
