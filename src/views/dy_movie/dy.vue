<template>
	<div id="mian">
		<Header title="猫猫电影"/>
		<div id="content">
			<div class="movie_menu">
				
				<router-link tag='div' to='/movie/city' class="city_name">
					<span>大连</span>
					<i class="iconfont icon-xiala2"></i>
				</router-link>
				
				<div class="hot_swtich">
					<router-link tag='div' to='/movie/nowplaying' class="hot_item active">正在热映</router-link>
					<router-link tag='div' to='/movie/comingsoon' class="hot_item">即将上映</router-link>
				</div>
				
				<router-link tag='div' to='/movie/search' class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
				
			</div>
			<keep-alive>
				<router-view />
			</keep-alive>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	
	export default{
		name:'dy_movie',
		components:{
			Header,
			TabBar
		},
		data(){
			return{
				mas:'猫猫电影'
			}
		}
	}
</script>

<style scoped>
#content{flex: 1;overflow: auto;margin-bottom: 50px;display: flex;flex-direction: column;}
#content .movie_menu{width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;background: #fff;position: fixed;top: 51px;z-index: 2;}
.movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px;}
.movie_menu .city_name.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;box-sizing: border-box;}
.movie_menu .hot_swtich{display: flex;height: 100%;line-height: 45px;}
.movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight: 700;}
/* .movie_menu .hot_item.active{color: #EF4238;border-bottom: 2px solid #EF4238;} */
.movie_menu .hot_item.router-link-active{color: #EF4238;border-bottom: 2px solid #EF4238;}
.movie_menu .search_entry{margin-right: 20px;height: 100%;line-height: 45px;}
.movie_menu .search_entry.router-link-active{color: #EF4238;border-bottom: 2px solid #EF4238;box-sizing: border-box;}
.movie_menu .search_entry i{font-size: 24px;color: red;}
</style>
