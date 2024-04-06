import { createRouter, createWebHistory } from 'vue-router';
import PromotionView from '../view/pay/PromotionView.vue';
import HomePage from '../view/HomePage.vue';
import RegisterView from '../view/pay/RegisterView.vue';
import SearchResults from '../view/search/SearchResults.vue';
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
    path: '/pay/register',
    name: 'RegisterPay',
    component: RegisterView,
  },
  {
    path: '/searchresults',
    name: 'Searchresults',
    component: SearchResults,
    props: (route) => ({ query: route.query.search }),
  },
  {
    path: '/artist/artist/:id',
    name: 'artist',
    component: Artist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
