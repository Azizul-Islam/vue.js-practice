import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "../views/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
const Overview = ()=> import('../views/dashboard/Overview.vue');
const Drugs = ()=> import('../views/dashboard/Drugs.vue');
const Vendors = ()=> import('../views/dashboard/Vendors.vue');
const SellingHistory = ()=> import('../views/dashboard/SellingHistory.vue');
const Settings = ()=> import('../views/dashboard/Settings.vue');
const Skills = ()=> import('../views/dashboard/SkillIndex.vue');
const SkillCreate = ()=> import('../views/dashboard/SkillCreate.vue');
const SkillEdit = ()=> import('../views/dashboard/SkillEdit.vue');

const routes = [
    {
        path: "/",
        component: LoginPage,
    },
    {
        path: "/dashboard",
        component: DashboardPage,
        redirect: "/dashboard/overview",
        children: [
            { path: "overview", component: Overview },
            { path: "drugs", component: Drugs },
            { path: "vendors", component: Vendors },
            { path: "selling-history", component: SellingHistory },
            { path: "settings", component: Settings },
            { path: "skills", name: "SkillIndex", component: Skills },
            { path: "skills/create", name: "SkillCreate", component: SkillCreate },
            { path: "skills/:id/edit", name: "SkillEdit", component: SkillEdit },
        ]
    },
   
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;