<template>
	<div>
		<div class="search">
			<cube-input v-model="searchKey" placeholder="请输入搜索内容"></cube-input>
			<i class="cubeic-search"></i>
		</div>
		<div class="search-result"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			searchKey: ''
		}
	},
	methods: {}
}
</script>

<style lang="stylus" scoped>
.search
	margin 10px
	border-radius 5px

	i
		position fixed
		right 20px
		top 18px
		color #eee
</style>


