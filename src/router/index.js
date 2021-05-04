import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Meals from "@/views/Meals.vue";
import Restaurants from "@/views/Restaurants.vue";
import Campaign from "@/views/Campaign.vue";
import Marketing from "@/views/Marketing.vue";
import Result from "@/views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meals",
    name: "Meals",
    component: Meals,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/campaign",
    name: "Campaign",
    component: Campaign,
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: Marketing,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
