import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "../firebase.js";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: false }
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
		meta: { requiresAuth: false }
	},
	{
		path: '/contactme',
		name: 'ContactMe',
		component: () => import('../views/ContactMe.vue'),
		meta: { requiresAuth: false }
	},
	{
		path: '/signin',
		name: 'SignIn',
		component: () => import('../views/SignIn.vue'),
		meta: { requiresAuth: false }
	},
	{
		path: '/signout',
		name: 'SignOut',
		component: () => import('../views/SignOut.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import('../views/SignUp.vue'),
		meta: { requiresAuth: false }
	},
	{
		path: '/mypage',
		name: 'MyPage',
		component: () => import('../views/MyPage.vue'),
		meta: { requiresAuth: true }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
	if (requiresAuth && !(await firebase.getCurrentUser())) {
		next({ path: "/singin", query: { redirect: to.fullPath } });
	} else {
		next();
	}
});

export default router
