import Home from './home/Home.vue';
import Feedback from './feedback/Feedback.vue';

const routes = {
  '/': Home,
  '/feedback': Feedback,
  '/faq': Feedback, // TODO
  '/game-testing': Feedback, // TODO
  '/contact': Feedback, // TODO
};

export default routes;
