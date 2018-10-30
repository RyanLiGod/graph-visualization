import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "tab1",
            component: () => import("./views/Tab1.vue")
        },
        {
            path: "/tab2",
            name: "tab2",
            component: () => import("./views/Tab2.vue")
        },
        {
            path: "/tab3",
            name: "tab3",
            component: () => import("./views/Tab3.vue")
        }
    ]
});
