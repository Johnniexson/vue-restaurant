import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Meals from "@/views/Meals.vue";

const Restaurants = (resolve) => require(["@/views/Restaurants.vue"], resolve);
const Campaign = (resolve) => require(["@/views/Campaign.vue"], resolve);
const Marketing = (resolve) => require(["@/views/Marketing.vue"], resolve);
const Result = (resolve) => require(["@/views/Result.vue"], resolve);

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
