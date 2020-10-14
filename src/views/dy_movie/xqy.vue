<template>
	<div id="xcy" class="slide-enter-active">
		<Header title="影片详情">
			<i class="iconfont icon-fanhui2" @touchstart='fanhui'></i>
		</Header>
		<Loading v-if="isload"></Loading>
		<div v-else id="content" class="contentDetail">
			<div class="detail_list">				
				<div class="detail_list_bg" ></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="list.img" />
					</div>
					<div class="detail_list_info">
						<h2>{{list.biaoti}}</h2>
						<p>{{list.ybt}}</p>
						<p>{{list.pj}}</p>
						<p>{{list.leixing}}</p>
					</div>
				</div>
			</div>
			<div class="detail_inro">
				<p>{{obj.jj}}</p>
				<p>{{obj.ly}}</p>
			</div>
			<div class="detail_player swiper-container">
				<h2>{{list.biaoti}}的演员表：</h2>
				<ul>
					<li v-for="(item,i) in obj.yyb" :key='i' class="swiper-slide">
						<div>
							<img :src="item.img" />
							<span>{{item.name}}</span>
							<span>{{item.zw}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Loading from '@/components/Loading';
export default{
	name:'xqy',
	data(){
		return{
			list:{},
			obj:{},
			isload:true
		}
	},
	components:{
		Header,
		Loading
	},
	props:['id'],
	methods:{
		fanhui(){
			this.$router.back();
		}
	},
	mounted() {
		const that=this;
		that.axios({
			url:'/data/dydata.json',
			method: 'get',
			data:{},
			responseType: 'blob',
			transformResponse: [function(data) {
				var reader = new FileReader()
				reader.readAsText(data, 'GBK')
				reader.onload = function(e) {
					var music = JSON.parse(reader.result)
					for(var i=0;i<music.data.length;i++){
						if(music.data[i].id==that.id){
							that.list=music.data[i];
							that.obj=that.list.obj;
							that.isload=false;
							console.log(that.list)
						}
					}
					
				}
			}],
			headers: {
			  'X-Requested-With': 'XMLHttpRequest',
			  'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	}
}
</script>

<style scoped>
#xcy{position: absolute;top: 0;left: 0;width: 100%;min-height: 100%;background: #fff;z-index: 100;}
.slide-enter-active{animation: .3s slideMove;}
@keyframes slideMove{
	from{transform: translateX(320px);}
	to{transform: translateX(0);}
}
#content{margin-top: 50px;}
#content .contentDetail{display: block;margin-bottom: 0;}
#content .detail_list{height: 200px;width: 100%;position: relative;overflow: hidden;}
.detail_list .detail_list_bg{width: 100%;height: 100%;background: url('/3.jpg') rgba(0,0,0.2);filter:blur(20px)}
.detail_list .detail_list_filter{width: 100%;height: 100%;position: absolute;background-color: #40454d;opacity: .5;}
.detail_list .detail_list_content{display: flex;width: 100%;height: 100%;position: absolute;left: 0;top: 0;}
.detail_list .detail_list_img{width: 100px;height: 150px;border: solid 1px #f0f2f3;margin: 20px;}
.detail_list .detail_list_img img{width: 100%;height: 100%;}
.detail_list .detail_list_info{margin-top: 20px;}
.detail_list .detail_list_info h2{font-size: 20px;color: white;font-weight: normal;line-height: 40px;}
.detail_list .detail_list_info p{color: white;line-height: 20px;font-size: 14px;color: #ccc;}
#content .detail_intro{padding: 10px;}
#content .detail_player{margin-top: 20px;padding-left: 10px;padding-right: 10px;overflow: hidden;}
#content .detail_player h2{font: 15px Arial, Helvetica, sans-serif;color: #007722;margin-bottom: 20px;margin-top: 30px;}
.detail_player .swiper-slide{width: 145px;float: left;font-size: 14px;}
.detail_player .swiper-slide img{width: 105px;height: 120px;margin-left: 20px;}
.detail_player .swiper-slide span{font-size: 15px;display: inline-block;width: 125px;margin-left: 10px; text-align: center;}
.detail_player .swiper-slide span:nth-of-type(even){color:#999;font-size: 13px;}
.detail_inro p{text-indent: 2em;color: #111;font-size: 13px;padding: 10px;overflow: hidden;}
/* .detail_player .swiper-slide img{width: 100%margin-bottom:5px;} */
.detail_player li:nth-of-type(odd){margin-right: 10px;}
</style>
