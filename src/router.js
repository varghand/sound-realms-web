import { createRouter, createWebHistory } from "vue-router";

import { trackRouter } from "vue-gtag-next";
import Home from "./home/Home.vue";
import Gametest from "./gametest/Gametest.vue";
import Faq from "./faq/Faq.vue";
import LearnMore from "./learnmore/LearnMore.vue";
import Contact from "./contact/Contact.vue";
import NewsPage from "./presskit/NewsPage.vue";
import FodKickstarterPress from "./presskit/FodKickstarterPress.vue";
import FightingFantasyAnnounced from "./presskit/FightingFantasyAnnounced.vue";
import FodFunded from "./presskit/FodFunded.vue";
import FodKsComplete from "./presskit/FodKsComplete.vue";
import DraculaPress from "./presskit/Dracula.vue";
import AnnouncingFist from "./presskit/AnnouncingFist.vue";
import FistReleaseDate from "./presskit/FistReleaseDate.vue";
import FistIsOut from "./presskit/FistIsOut.vue";
import PrivacyPolicy from "./privacy/PrivacyPolicy.vue";
import Newsletter from "./newsletter/Newsletter.vue";
import FortressOfDeath from "./adventures/fortressofdeath/FortressOfDeath.vue";
import MaceAndMagic from "./adventures/maceandmagic/MaceAndMagic.vue";
import Dracula from "./adventures/dracula/Dracula.vue";
import Fist from "./adventures/fist/Fist.vue";
import CallOfCthulhu from "./adventures/call-of-cthulhu/CallOfCthulhu.vue";
import NotFound from "./pages/NotFound.vue";
import ProductPage from "./shop/ProductPage.vue";
import Checkout from "./shop/Checkout.vue";
import CheckoutLogin from "./shop/Login.vue";
import Success from "./shop/Success.vue";
import Cancel from "./shop/Cancel.vue";
import CreateAccount from "./shop/CreateAccount.vue";
import AllGamesPage from "./adventures/AllGamesPage.vue";
import AccountPage from "./account/AccountPage.vue";
import ForgotPassword from "./account/ForgotPassword.vue";
import Jobs from "./pages/Jobs.vue";
import InvestorsPage from "./pages/InvestorsPage.vue";
import FirstInvestmentRound from "./presskit/FirstInvestmentRound.vue";
import FodReleased from "./presskit/FodReleased.vue";
import FodIosInformation from "./presskit/FodIosInformation.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/games", component: AllGamesPage },
  { path: "/feedback", component: Contact },
  { path: "/faq", component: Faq },
  { path: "/learn-more", component: LearnMore },
  { path: "/game-testing", component: Gametest },
  { path: "/download", component: Gametest },
  { path: "/contact", component: Contact },
  { path: "/presskit", component: NewsPage },
  { path: "/news", component: NewsPage },
  { path: "/press", component: NewsPage },
  { path: "/press/fod-kickstarter", component: FodKickstarterPress },
  {
    path: "/press/fighting-fantasy-announcement",
    component: FightingFantasyAnnounced,
  },
  { path: "/press/fod-funded", component: FodFunded },
  { path: "/press/fod-ios-update", component: FodIosInformation },
  { path: "/press/fod-ks-complete", component: FodKsComplete },
  { path: "/press/dracula", component: DraculaPress },
  { path: "/press/fist", component: AnnouncingFist },
  { path: "/press/fist-release-date", component: FistReleaseDate },
  { path: "/press/fist-is-out", component: FistIsOut },
  { path: "/press/first-investment-round", component: FirstInvestmentRound },
  { path: "/press/fod-released", component: FodReleased },
  { path: "/privacy-policy", component: PrivacyPolicy },
  {
    path: "/fortressofdeath",
    component: FortressOfDeath,
    meta: { title: "The Fortress of Death" },
  },
  {
    path: "/maceandmagic",
    component: MaceAndMagic,
    meta: { title: "Mace & Magic" },
  },
  { path: "/fist", component: Fist, meta: { title: "F.I.S.T." } },
  {
    path: "/dracula",
    component: Dracula,
    meta: { title: "Dracula: Curse of the Vampire" },
  },
  {
    path: "/call-of-cthulhu",
    component: CallOfCthulhu,
    meta: { title: "Call of Cthulhu" },
  },
  { path: "/coc_aatt", redirect: "/call-of-cthulhu" },
  { path: "/newsletter", component: Newsletter },
  { path: "/account", component: AccountPage },
  { path: "/account/create-account", component: CreateAccount },
  { path: "/account/forgot-password", component: ForgotPassword },
  { path: "/shop", component: AllGamesPage },
  { path: "/shop/product/:id", component: ProductPage },
  { path: "/shop/checkout", component: Checkout },
  { path: "/shop/login", component: CheckoutLogin },
  { path: "/shop/success", component: Success },
  { path: "/shop/cancel", component: Cancel },
  { path: "/jobs", component: Jobs },
  { path: "/investors", component: InvestorsPage },
  { path: "/:pathMatch(.*)*", component: NotFound },
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
