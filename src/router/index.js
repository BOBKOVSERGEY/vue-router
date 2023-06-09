import  { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    {
        path: '/destination/:id/:slug',
        name:'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({...route.params, id: +route.params.id})
    },
    {
        path: '/destination/:id/:slug/:experienceSlug',
        name:'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({...route.params, id: +route.params.id})
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    //linkActiveClass: 'new-active-class'
});

export default router;