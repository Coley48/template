import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home";

Vue.use(VueRouter);
const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => next());

export default router;
