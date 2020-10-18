<template>
	<div class="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default{
	name:'Scroll',
	data(){
		return{
			jl:0,
		}
	},
	mounted(){
		this.$nextTick(()=>{
			var scroll=new BScroll(this.$refs.wrapper,{
				tap:true,
				probeType:1,
				scrollY: true
			});
			setTimeout(() => {
				scroll.refresh();
			}, 500);
			this.scroll=scroll;
		})
	},
	methods:{
		
	}
}
</script>

<style scoped>
html,body{width: 100%;}
.wrapper{height: 100%;}
</style>
