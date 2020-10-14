<template>
	<div class="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default{
	name:'Scroll',
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
		xl(y){
			this.scroll.scrollTo(0,y);
		}
	}
}
</script>

<style scoped>
	.wrapper{height: 100%;}
</style>
