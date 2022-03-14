import Home from './home/Home.vue';
import Gametest from './gametest/Gametest.vue';
import Faq from './faq/Faq.vue';
import LearnMore from './learnmore/LearnMore.vue';
import Contact from './contact/Contact.vue';
import Presskit from './presskit/Presskit.vue';
import PrivacyPolicy from './privacy/PrivacyPolicy.vue';

const routes = {
  '/': Home,
  '/feedback': Contact,
  '/faq': Faq,
  '/learn-more': LearnMore,
  '/game-testing': Gametest,
  '/download': Gametest,
  '/contact': Contact,
  '/presskit': Presskit,
  '/privacy-policy': PrivacyPolicy,
};

export default routes;
