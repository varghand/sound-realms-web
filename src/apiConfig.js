const defaultApiConfig = {
  checkoutSessionUrl:
    "https://6j2f2a91be.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session",
  unlockedContentUrl:
    "https://iuihqiovb7.execute-api.eu-north-1.amazonaws.com/api/unlocked-content",
  useActivationCodeUrl:
    "https://vw5swod35l.execute-api.eu-north-1.amazonaws.com/api/use-code",
  analyticsUrl:
    "https://2orq0ufifa.execute-api.eu-west-1.amazonaws.com/Prod/analytics",
};

const envOverrides = {
  checkoutSessionUrl: import.meta.env.VITE_CHECKOUT_SESSION_URL,
  unlockedContentUrl: import.meta.env.VITE_UNLOCKED_CONTENT_URL,
  useActivationCodeUrl: import.meta.env.VITE_USE_ACTIVATION_CODE_URL,
  analyticsUrl: import.meta.env.VITE_ANALYTICS_URL,
};

const apiConfig = Object.fromEntries(
  Object.entries({ ...defaultApiConfig, ...envOverrides }).filter(([, value]) => value),
);

export default apiConfig;
