import Home from './home/Home.vue';
import Feedback from './feedback/Feedback.vue';
import Gametest from './gametest/Gametest.vue';
import Faq from './faq/Faq.vue';
import Contact from './contact/Contact.vue';

const routes = {
  '/': Home,
  '/feedback': Feedback,
  '/faq': Faq,
  '/game-testing': Gametest,
  '/contact': Contact,
};

export default routes;
