import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import PromotionView from "../view/pay/PromotionView.vue";
import CardView from "../view/pay/CardView.vue";
import HomePage from "../view/HomePage.vue";
import RegisterView from "../view/pay/RegisterView.vue";
import ArtistView from "../view/artist/ArtistView.vue";
import SearchResults from "../view/search/SearchResults.vue";
import PlayView from "../view/player/PlayView.vue";

const routes = [
   {
      path: "/",
      name: "HomePage",
      component: HomePage,
   },
   {
      path: "/pay/promotion",
      name: "PayPromotion",
      component: PromotionView,
   },
   {
      path: "/pay/register",
      name: "RegisterPay",
      component: RegisterView,
   },
   {
      path: "/pay/register/card",
      name: "CardView",
      component: CardView,
   },
   {
      path: "/searchresults",
      name: "Searchresults",
      component: SearchResults,
      props: (route) => ({ query: route.query.search }),
   },
   {
      path: "/artist/artist/:id",
      name: "artist",
      component: ArtistView,
   },
   {
      path: "/play/:songId",
      name: "PlayView",
      component: PlayView,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
