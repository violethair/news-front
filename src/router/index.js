import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Post from '@/components/Post'

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
		}
	]
})
