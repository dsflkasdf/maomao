export default {
	path : '/movie',
	component:()=>import('@/views/dy_movie/dy.vue'),
	children:[
		{
			path:'city',
			component:()=>import('@/components/City')
		},
		{
			path:'nowplaying',
			component:()=>import('@/components/NowPlaying')
		},
		{
			path:'comingsoon',
			component:()=>import('@/components/ComingSoon')
		},
		{
			path:'search',
			component:()=>import('@/components/Search')
		},
		{
			path:'/movie',
			redirect:'/movie/nowplaying'
		}
	]
}