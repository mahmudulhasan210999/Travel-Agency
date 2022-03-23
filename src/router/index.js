import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue';
import upcomingEvents from '../views/UpcomingEvents';
import travelBlog from '../views/TravelBlog';
import aboutUs from '../views/About';
import contactUs from '../views/Contact';

const routes = [
	{path: '/', component: Home},
	{path: '/events', component: upcomingEvents},
	{path: '/blog', component: travelBlog},
	{path: '/about', component: aboutUs},
	{path: '/contact', component: contactUs}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
