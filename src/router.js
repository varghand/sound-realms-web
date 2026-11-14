import { createRouter, createWebHistory } from "vue-router";

import { trackRouter } from "vue-gtag-next";
import NewCheckout from "./shop/NewCheckout.vue";
import Success from "./shop/Success.vue";
import Cancel from "./shop/Cancel.vue";
import CreateAccount from "./shop/CreateAccount.vue";
import AccountPage from "./account/AccountPage.vue";
import ForgotPassword from "./account/ForgotPassword.vue";
import Jobs from "./pages/Jobs.vue";
import FistLeaderboard from "./pages/FistLeaderboard.vue";
import products from "./shop/products";

const SHOPIFY_URL = "https://soundrealms.com";
const DIGITAL_PRODUCTS_URL = `${SHOPIFY_URL}/collections/digital-games`;

function redirectToShopify(path = "") {
  return () => {
    window.location.replace(`${SHOPIFY_URL}${path}`);
    return false;
  };
}

function redirectLegacyProduct(to) {
  const product = products.find((candidate) => candidate.url === to.params.id);
  window.location.replace(product?.storeUrl || DIGITAL_PRODUCTS_URL);
  return false;
}

const ExternalRedirect = {
  name: "ExternalRedirect",
  render() {
    return null;
  },
};

const migratedRoutes = [
  ["/", ""],
  ["/games", "/collections/digital-games"],
  ["/feedback", "/pages/contact"],
  ["/faq", "/pages/faq"],
  ["/learn-more", "/pages/about-us"],
  ["/game-testing", "/pages/download"],
  ["/download", "/pages/download"],
  ["/contact", "/pages/contact"],
  ["/presskit", "/pages/press"],
  ["/news", "/blogs/news"],
  ["/press", "/pages/press"],
  ["/press/fod-kickstarter", "/blogs/news"],
  [
    "/press/fighting-fantasy-announcement",
    "/blogs/news/sound-realms-and-fighting-fantasy-announces-partnership-1",
  ],
  [
    "/press/fod-funded",
    "/blogs/news/the-fortress-of-death-kickstarter-fully-funded-in-under-5-hours",
  ],
  ["/press/fod-ios-update", "/pages/press"],
  [
    "/press/fod-ks-complete",
    "/blogs/news/the-fortress-of-death-kickstarter-is-now-completed",
  ],
  [
    "/press/dracula",
    "/blogs/news/sound-realms-unveils-dracula-curse-of-the-vampire",
  ],
  [
    "/press/fist",
    "/blogs/news/sound-realms-announces-the-return-of-steve-jacksons-f-i-s-t",
  ],
  ["/press/fist-release-date", "/blogs/news/release-date-for-f-i-s-t-announced"],
  ["/press/fist-is-out", "/blogs/news/f-i-s-t-is-out-now"],
  [
    "/press/first-investment-round",
    "/blogs/news/sound-realms-secures-3-8-million-sek-in-first-investment-round",
  ],
  ["/press/fod-released", "/blogs/news/the-fortress-of-death-is-out-now"],
  ["/privacy-policy", "/pages/privacy-policy"],
  ["/fortressofdeath", "/pages/the-fortress-of-death"],
  ["/maceandmagic", "/pages/mace-magic"],
  ["/fist", "/pages/f-i-s-t"],
  ["/dracula", "/pages/dracula"],
  ["/call-of-cthulhu", "/pages/call-of-cthulhu"],
  ["/coc_aatt", "/pages/call-of-cthulhu"],
  ["/newsletter", ""],
  ["/investors", "/pages/investors-relations"],
  ["/shop", "/collections/digital-games"],
  ["/shop/checkout", "/collections/digital-games"],
  ["/shop/login", "/collections/digital-games"],
].map(([path, target]) => ({
  path,
  component: ExternalRedirect,
  beforeEnter: redirectToShopify(target),
}));

const routes = [
  {
    path: "/leaderboard",
    component: FistLeaderboard,
    meta: { title: "F.I.S.T. Leaderboard | Sound Realms" },
  },
  ...migratedRoutes,
  {
    path: "/account",
    component: AccountPage,
    meta: { title: "Unlock content | Sound Realms" },
  },
  {
    path: "/account/create-account",
    component: CreateAccount,
    meta: { title: "Create account | Sound Realms" },
  },
  {
    path: "/account/forgot-password",
    component: ForgotPassword,
    meta: { title: "Reset password | Sound Realms" },
  },
  {
    path: "/shop/product/:id",
    component: ExternalRedirect,
    beforeEnter: redirectLegacyProduct,
  },
  {
    path: "/shop/success",
    component: Success,
    meta: { title: "Purchase complete | Sound Realms" },
  },
  {
    path: "/shop/cancel",
    component: Cancel,
    meta: { title: "Checkout paused | Sound Realms" },
  },
  { path: "/jobs", component: Jobs },

  {
    path: "/checkout/:id",
    component: NewCheckout,
    meta: { title: "Digital checkout | Sound Realms" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ExternalRedirect,
    beforeEnter: redirectToShopify(),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});

trackRouter(router);

export default router;
