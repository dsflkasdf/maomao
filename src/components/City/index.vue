<template>
	<div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li>上海</li>
					<li>北京</li>
					<li>深圳</li>
					<li>广州</li>
					<li>杭州</li>
					<li>苏州</li>
					<li>长沙</li>
					<li>株洲</li>
				</ul>
			</div>
			<div class="city_sort">
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>C</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>D</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>E</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'City'
	}
</script>

<style scoped>
#content .city_body{margin-top: 0px;display: flex;width: 100%;position: relative;}
.city_body .city_list{flex: 1;overflow: auto;background: #fff5f0;}
.city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0;}
.city_body .city_hot{margin-top: 20px;margin-bottom: 20px;overflow: hidden;}
.city_body .city_hot .clearfix li{border: 1px solid #999;float: left;padding: 5px;background: #fff;}
.city_body .city_list h2{padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;font-weight: normal;}
.city_body .city_list ul li{margin-top: 15px;margin-left: 3%;}
.city_body .city_index{width: 20px;display: flex;flex-direction: column;justify-content: center;text-align: center;border-left: 1px #e6e6e6 solid;}
.city_body .city_index ul{position: fixed;top: calc(50% - 52.5px);}
</style>
