<template>
	<div class="tankuang" id="tankuang">
		<h2>{{title}}</h2>
		<p>{{content}}</p>
		<div>
			<div @touchstart='handleCancel'>{{cancel}}</div>
			<div @touchstart='handleOk'>{{ok}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TanKuang',
	}
</script>

<style scoped>
.tankuang{width: 200px;height: 120px;position: absolute;top: 50%;left: 50%;margin-top: -50px;margin-left: -100px;border: 1px solid #999;box-shadow: 5px 5px 5px #999;background: #FFf;}
.tankuang h2{line-height: 40px;font-size: 18px;text-align: center;}
.tankuang p{line-height: 30px;font-size: 20px;text-align: center;padding-bottom: 10px;}
.tankuang > div{display:flex;width: 100%;height: 40px;border-top: 1px solid #999;}
.tankuang >div div{flex: 1;text-align: center;line-height: 40px;}
.tankuang > div div:nth-of-type(1){
	border-right: 1px solid #999;
}
</style>
