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
          "Authorization": "Bearer " + user.idToken,
        },
      }
    );
    const jsonBody = await response.json();
    if (!jsonBody) {
      return [];
    }
    if (!jsonBody.data) {
      return [];
    }
    return jsonBody.data[0].adventures ?? [];
  },
};

export default helpers;
