import { createRouter, createWebHistory } from 'vue-router';
import PromotionView from '../view/pay/PromotionView.vue';
import CardView from '../view/pay/CardView.vue';
import HomePage from '../view/HomePage.vue';
import RegisterView from '../view/pay/RegisterView.vue';
import ArtistView from '../view/artist/ArtistView.vue';
import SearchResults from '../components/SearchBar.vue';

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
    path: '/pay/register/card',
    name: 'CardView',
    component: CardView,
  },
  {
    path: '/searchresults',
    name: 'searchresults',
    component: SearchResults,
    props: (route) => ({ query: route.query.q }),
  },
  {
    path: '/artist/artist/:id',
    name: 'artist',
    component: ArtistView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
