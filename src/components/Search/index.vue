<template>
	<div class="search_body">
		<Scroll>
			<div>
				<div class="search_input">
					<div class="search_input_wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" v-model="zhi" />
					</div>
				</div>
				<div class="search_result">
					<h1>电影/电视剧/综艺</h1>
					<ul>
						<li v-for="(item,i) in ss" :key="i">
							<div class="img"><img :src="item.img" /></div>
							<div class="info">
								<p><span>{{item.biaoti}}</span><span>{{item.pj}}</span></p>
								<p>{{item.ybt}}</p>
								<p>{{item.lx}}</p>
								<p>{{item.sj}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</Scroll>
	</div>
</template>

<script>
export default{
	name:'Search',
	data(){
		return{
			zhi:'',
			list:[],
			ss:[]
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
					that.list = music.data;
					// console.log(that.list)
					
				}
			}],
			headers: {
			  'X-Requested-With': 'XMLHttpRequest',
			  'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},
	watch:{
		zhi(newvalue,oldvalue){
			if(this.zhi!==''){
				for(var i=0;i<this.list.length;i++){
					var p1=this.list[i].xbt.includes(this.zhi);
					var p2=this.list[i].leixing.includes(this.zhi);
					if(p1 || p2){
						var x1=this.list[i].xbt.indexOf('/');
						var x2=this.list[i].xbt.indexOf('/',x1+1);
						var f1=this.list[i].leixing.indexOf('/',this.list[i].leixing.indexOf('/')+1);
						this.list[i].lx=this.list[i].leixing.substr(f1+1);
						this.list[i].sj=this.list[i].leixing.substring(0,f1);
						this.list[i].ybt=this.list[i].xbt.substring(x1+1,x2);
						this.ss.push(this.list[i]);
						console.log(this.list[i].sj)
					}
					
				}
			}else{
				this.ss=[];
			}
			
		}
	}
}
</script>

<style scoped >
#content .search_body{overflow: auto;position: fixed;top: 97px;width: 100%;height: 416px;}
.search_body .search_input{padding: 8px 10px;background-color: #F5F5F5;border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{padding: 0 0 0 10px;border: 1px solid #E6E6E6;border-radius: #fff;display: flex;background: #fff;}
.search_body .search_input_wrapper i{font-size: 16px;padding: 4px 0;}
.search_body .search_input_wrapper input{border: none;font-size: 13px;color: #333;padding: 4px 0;outline: none;margin-left: 5px;width: 100%;}
.search_body .search_result h1{font-size: 15px;color: #999;padding: 9px 15px;border-bottom: 1px solid #E6E6E6;}
.search_body .search_result li{border-bottom: 1px #c9c9c9 dashed;padding: 10px 15px;box-sizing: border-box;display: flex;}
.search_body .search_result .img{width: 60px;float: left;}
.search_body .search_result .img img{width: 100%;}
.search_body .search_result .info{float: left;margin-left: 15px;flex: 1;}
.search_body .search_result .info p{height: 22px;display: flex;line-height: 22px;font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px;flex: 1;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px;color: #fc7103;}
</style>
