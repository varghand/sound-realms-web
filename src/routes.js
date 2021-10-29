import Home from './home/Home.vue';
import Feedback from './feedback/Feedback.vue';
import Gametest from './gametest/Gametest.vue';

const routes = {
  '/': Home,
  '/feedback': Feedback,
  '/faq': Feedback, // TODO
  '/game-testing': Gametest, // TODO
  '/contact': Feedback, // TODO
};

export default routes;
