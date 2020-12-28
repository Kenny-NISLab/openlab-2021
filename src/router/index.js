import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "../firebase.js";

Vue.use(VueRouter)

const routes = [
    {
		path: '*',
		name: 'NotFound',
		component: () => import('../views/NotFound.vue')
    },
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/contactme',
		name: 'ContactMe',
		component: () => import('../views/ContactMe.vue'),
	},
	{
		path: '/signin',
		name: 'SignIn',
		component: () => import('../views/SignIn.vue'),
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

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	if (requiresAuth) {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				next()
			} else {
				next({
					path: '/',
					query: { redirect: to.fullPath }
				})
			}
		})
	} else {
		next()
	}
});

export default router
