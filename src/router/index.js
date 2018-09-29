import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Post from '@/components/Post'
import Category from '@/components/Category'
import Contact from '@/components/Contact'
import Advertise from '@/components/Advertise'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/post/:query/',
			name: 'Post',
			component: Post
		},
		{
			path: '/category/:query',
			name: 'Category',
			component: Category
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/advertise',
			name: 'Advertise',
			component: Advertise
		}
	]
})
