const apiConfig = {
  checkoutUrl:
    import.meta.env.VITE_CHECKOUT_API_URL ||
    "https://6j2f2a91be.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session",
  unlockedContentUrl:
    import.meta.env.VITE_UNLOCKED_CONTENT_API_URL ||
    "https://iuihqiovb7.execute-api.eu-north-1.amazonaws.com/api/unlocked-content",
  activationCodeUrl:
    import.meta.env.VITE_ACTIVATION_CODE_API_URL ||
    "https://vw5swod35l.execute-api.eu-north-1.amazonaws.com/api/use-code",
  analyticsUrl:
    import.meta.env.VITE_ANALYTICS_API_URL ||
    "https://2orq0ufifa.execute-api.eu-west-1.amazonaws.com/Prod/analytics",
};

export default apiConfig;
