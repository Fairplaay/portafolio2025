import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import SamplePage from '@/components/SamplePage.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/sample', name: 'Sample', component: SamplePage },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
