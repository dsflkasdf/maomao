<template>
	<div id="mian">
		<Header title="猫猫影院"/>
		<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城<i class="iconfont icon-xiala2"></i>
				</div>
				<div class="brand_swtich">
					品牌<i class="iconfont icon-xiala2"></i>
				</div>
				<div class="feature_swtich">
					特色<i class="iconfont icon-xiala2"></i>
				</div>
			</div>
			<CiList></CiList>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import CiList from '@/components/yy_CiList';
	
	export default{
		name:'yy_cinema',
		components:{
			Header,
			TabBar,
			CiList
		},
		data(){
			return{
				mas:'猫猫影院'
			}
		}
	}
</script>

<style scoped>
#content{margin-top: 51px;}
#content .cinema_menu{width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-around;align-items: center;background: white;}
</style>
