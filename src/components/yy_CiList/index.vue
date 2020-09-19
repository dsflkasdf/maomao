<template>
	<div class="cinema_body">
		<ul>
			<!-- <li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li> -->
			<li v-for="(item,i) in list" :key="i">
				<div>
					<span class="shenlue">{{item.nm}}</span>
					<span class="q"><span class="price">{{item.pq}}</span>元起</span>
				</div>
				<div class="address">
					<span>{{item.dz}}</span>
					<span>{{item.jl}}km</span>
				</div>
				<div class="card">
					<div v-for="(zhi,key) in item.bq" v-if="zhi===1" :class="key|classgv" :key="key">{{ key | gv }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'yy_Cilist',
	data(){
		return{
			list:[]
		}
	},
	mounted() {
		this.axios.get('/data/yy.json')
		.then((res)=>{
			this.list=res.data.sj;
			console.log(res.data.sj)
		})
	},
	filters:{
		gv(key){
			var sj=[
				{key:'gq',value:'改签'},
				{key:'tui',value:'退'},
				{key:'xc',value:'小吃'},
				{key:'zkk',value:'折扣卡'},
			];
			for(var i=0;i<sj.length;i++){
				if(key===sj[i].key){
					return sj[i].value;
				}
			}
			return '';
		},
		classgv(key){
			var zc=[
				{key:'gq',value:'bl'},
				{key:'tui',value:'bl'},
				{key:'xc',value:'or'},
				{key:'zkk',value:'or'},
			];
			for(var i=0;i<zc.length;i++){
				if(key===zc[i].key){
					return zc[i].value;
				}
			}
			return 'bl';
		}
	}
}
</script>

<style scoped>
#content .cinema_body{flex: 1;overflow: auto;}
.cinema_body ul{padding: 20px;}
.cinema_body li{border-bottom: 1px solid #E6E6E6;margin-bottom: 20px;}
.cinema_body div{margin-bottom: 10px;}
.cinema_body .q{font-size: 11px;color: #F03D37;}
.cinema_body .price{font-size: 18px;}
.cinema_body .address{font-size: 10px;color: #666;}
.cinema_body .address span:nth-of-type(2){float: right;}
.cinema_body .fa-vcard{display: flex;}
.cinema_body .card{overflow: hidden;}
.cinema_body .card div{padding: 0 3px;float:left;line-height: 15px;border-radius: 2px;color: #f90;border: 1px solid #FF9900;font-size: 13px;margin-right: 5px;}
.cinema_body .card div.or{color: #f90;border: 1px solid #f90;}
.cinema_body .card div.bl{color: #589daf;border: 1px solid #589DAF;}
.shenlue{display: inline-block;width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>
