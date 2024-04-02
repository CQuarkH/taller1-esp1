import { createRouter, createWebHistory } from 'vue-router';
import PromotionView from '../view/pay/PromotionView.vue';
import HomePage from '../view/HomePage.vue';
import SearchResults from "../view/search/SearchResults.vue";
import Artist from "../view/artist/Artist.vue";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/pay/promotion',
    name: 'PayPromotion',
    component: PromotionView,
  },
  {
    path: '/searchresults',
    name: 'searchresults',
    component: SearchResults,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/artist/artist/:id',
    name: 'artist',
    component: Artist,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
