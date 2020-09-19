<template>
	<div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="item in rm" :key="item.pid">{{item.city}}</li>
				</ul>
			</div>
			<div class="city_sort" ref='city_sort'>
				<div v-for="(item,i) in fl" :key="i">
					<h2>{{item.index}}</h2>
					<ul>
						<li v-for="(items,i) in item.list" :key="items.id">{{items.nm}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li v-for="(item,i) in fl" :key="i" @touchstart='md(i)'>{{item.index}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'City',
		data(){
			return{
				fl:[],
				rm:[]
			}
		},
		mounted(){
			this.axios.get('/data/data.json')
			.then((res)=>{
				var obj=this.bz(res);
				this.fl=obj.fleiList;
				this.rm=obj.rmencs;
				// console.log(this.fl,this.rm)
			})
		},
		methods:{
			md(index){
				var h2=this.$refs.city_sort.getElementsByTagName('h2');
				var j=h2[index].offsetTop;
				document.documentElement.scrollTop = h2[index].offsetTop-97;
				// console.log(document.documentElement.scrollTop,j)
			},
			bz(res){
				var fleiList=[];
				var rmencs=[];
				var obj={};
				if(res.status===200){
					var data=res.data.province;
					
					for(var i=0;i<data.length;i++){
						var zf=data[i].en.substr(0,1).toUpperCase();
						var sz={'nm':data[i].city,'id':parseInt(data[i].pid)};
						obj={'index':zf,'list':[sz],'pid':this.piy(zf)};
						
						if(this.nflei(fleiList,zf)){
							for(var j=0;j<fleiList.length;j++){
								if(fleiList[j].index===zf){
									fleiList[j].list.push(sz);
								}
							}
						}else{
							fleiList.push(obj);
						}
						
					}
					this.mp(fleiList)
					rmencs=this.rmcs(data)
					
				}
				return {fleiList,rmencs}
			},
			nflei(cities,data){
				for(var i=0;i<cities.length;i++){
					if(cities[i].index===data){
						return true;
					}
				}
				return false;
			},
			mp(sz){
				for(var i=0;i<sz.length;i++){
					for(var j=0;j<sz.length-1;j++){
						if(sz[i].pid<sz[j].pid){
							var zc=sz[i];
							sz[i]=sz[j];
							sz[j]=zc;
						}
					}
				}
			},
			piy(zm){
				var sj=0;
				switch(zm){
					case 'A':
						sj=0;
						break;
					case 'B':
						sj=1
						break;
					case 'C':
						sj=2
						break;
					case 'D':
						sj=3
						break;
					case 'E':
						sj=4
						break;
					case 'F':
						sj=5
						break;
					case 'G':
						sj=6
						break;
					case 'H':
						sj=7
						break;
					case 'I':
						sj=8
						break;
					case 'J':
						sj=9
						break;
					case 'K':
						sj=10
						break;
					case 'L':
						sj=11
						break;
					case 'M':
						sj=12
						break;
					case 'N':
						sj=13
						break;
					case 'O':
						sj=14
						break;
					case 'P':
						sj=15
						break;
					case 'Q':
						sj=16
						break;
					case 'R':
						sj=17
						break;
					case 'S':
						sj=18
						break;
					case 'T':
						sj=19
						break;
					case 'U':
						sj=20
						break;
					case 'V':
						sj=21
						break;
					case 'W':
						sj=22
						break;
					case 'X':
						sj=23
						break;
					case 'Y':
						sj=24
						break;
					case 'Z':
						sj=25
						break;
				}
				return sj;
			},
			rmcs(sz){
				var zc=[];
				for(var i=0;i<sz.length;i++){
					if(sz[i].id==='1'){
						zc.push(sz[i]);
					}
				}
				return zc;
			}
		}
	}
</script>

<style scoped>
#content .city_body{margin-top: 97px;display: flex;width: 100%;}
.city_body .city_list{flex: 1;overflow: auto;background: #fff5f0;}
.city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0;}
.city_body .city_hot{margin-top: 0px;margin-bottom: 20px;overflow: hidden;}
.city_body .city_hot .clearfix li{border: 1px solid #999;float: left;padding: 5px;background: #fff;}
.city_body .city_list h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;font-weight: normal;}
.city_body .city_list ul li{margin-top: 15px;margin-left: 3%;}
.city_body .city_index{width: 20px;display: flex;flex-direction: column;justify-content: center;text-align: center;border-left: 1px #e6e6e6 solid;}
.city_body .city_index ul{position: fixed;top: calc(50% - 169px);}
</style>
