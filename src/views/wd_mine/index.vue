<template>
	<div id="mian">
		<Header title='我的猫猫'/>
		<div id="content">
			<Login></Login>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import Login  from '@/components/wd_Login';
	
	export default{
		name:'wd_mine',
		components:{
			Header,
			TabBar,
			Login
		},
		data(){
			return{
				mas:'我的猫猫'
			}
		}
	}
</script>

<style>
</style>
