<template>
	<div>
		<transition :name="transitionName">
			<router-view class="router"></router-view>
		</transition>
		<cube-tab-bar
			v-model="selectedLabelDefault"
			:data="tabs"
			@click="clickHandler"
			@change="changeHandler"
			class="botnav"
		></cube-tab-bar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transitionName: 'slide-right',
			selectedLabelDefault: '首页',
			tabs: [
				{
					label: '首页',
					icon: 'cubeic-home'
				},
				{
					label: '分类',
					icon: 'cubeic-tag'
				},
				{
					label: '搜索',
					icon: 'cubeic-search'
				},
				{
					label: '购物车',
					icon: 'cubeic-mall'
				},
				{
					label: '我的',
					icon: 'cubeic-person'
				}
			]
		}
	},
	methods: {
		clickHandler(label) {
			// if you clicked home tab, then print 'Home'
			console.log(label)
		},
		//点击与自身不同的其他导航
		changeHandler(label) {
			// if you clicked different tab, this methods can be emitted
			switch (label) {
				case '首页':
					this.$router.push({ path: '/nav/index' })
					break
				case '分类':
					this.$router.push({ path: '/nav/list' })
					break
				case '搜索':
					this.$router.push({ path: '/nav/search' })
					break
				case '购物车':
					this.$router.push({ path: '/nav/car' })
					break
				case '我的':
					this.$router.push({ path: '/nav/mine' })
					break
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.cube-tab-bar.botnav
	position fixed
	bottom 0
	left 0
	z-index 1000
	width 100%
	background #fff

	.cube-tab div
		font-size 16px
		padding-top 3px

	.cube-tab_active .botnav
		color red

	i
		font-size 15px

.router
	position absolute
	width 100%
	transition all 0.8s ease

.silde-left-enter, .slide-right-leave-active
	opacity 0
	-webkit-transform translate(100%, 0)
	transform translate(100%, 0)

.slide-left-leave-active, .slide-right-enter
	opacity 0
	-webkit-transform translate(-100%, 0)
	transform translate(-100%, 0)
</style>


