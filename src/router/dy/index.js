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
			path:'diear/1/:id',
			components:{
				default:()=>import('@/components/NowPlaying'),
				diear : ()=>import('@/views/dy_movie/xqy'),
			},
			props:{
				diear:true
			}
		},
		{
			path:'diear/2/:id',
			components:{
				default:()=>import('@/components/ComingSoon'),
				diear : ()=>import('@/views/dy_movie/xqy'),
			},
			props:{
				diear:true
			}
		},
		{
			path:'/movie',
			redirect:'/movie/nowplaying'
		}
	]
}