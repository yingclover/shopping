<template>
	<div>
		<img
			class="header-img"
			src="https://github.com/yingclover/img-source/raw/master/shopping-img/login.jpg"
			alt
		/>
		<img
			class="profile-img"
			src="https://github.com/yingclover/img-source/raw/master/shopping-img/headImg.jpg"
			alt
		/>
		<ul>
			<li v-for="item in mineArry" class="mine-item" @click="itemClick(item)" :key="item.label">
				<span class="mine-title">{{item.label}}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mineArry: [
				{ label: '商品收藏' },
				{ label: '我的足迹' },
				{ label: '店铺收藏' },
				{ label: '我的订单' },
				{ label: '退出', type: 'exit' }
			]
		}
	},
	methods: {
		itemClick(item) {
			if (item.type == 'exit') {
				this.$store.commit('setToken', '')
				localStorage.removeItem('token')
				this.$router.push({ path: '/login' })
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.mine-item
	font-size 14px
	text-align left
	height 50px
	line-height 50px
	padding-left 5%
	border-bottom 1px solid #eee

	.mine-title
		display inline-block
		width 90%

.header-img
	height 200px
	width 100%

.profile-img
	position fixed
	left 43%
	top 60px
	width 80px
	height 80px
	border-radius 50%
</style>