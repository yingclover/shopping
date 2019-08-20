<template>
	<div id="index">
		<cube-slide ref="slide" :data="items" @change="changePage">
			<cube-slide-item
				v-for="(item, index) in items"
				:key="index"
				@click.native="clickHandler(item, index)"
			>
				<a :href="item.url">
					<img class="banner" v-lazy="item.image" />
				</a>
			</cube-slide-item>
		</cube-slide>
		<!-- 滚动分类 -->
		<cube-slide :auto-play="false" ref="slidelists" :data="lists" @change="changePage">
			<cube-slide-item v-for="(list, index) in lists" :key="index">
				<ul class="ul-list">
					<li class="li-list" v-for="(item,index1) in list" :key="index1">
						<a :href="item.url">
							<img v-lazy="item.image" />
							<p>{{item.label}}</p>
						</a>
					</li>
				</ul>
			</cube-slide-item>
		</cube-slide>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lists: [],
			items: []
		}
	},
	methods: {
		changePage(current) {
			// console.log('当前轮播图序号为:' + current)
		},
		clickHandler(item, index) {
			console.log(item, index)
		}
	},
	async created() {
		try {
			//获取轮播图数据
			const items = await this.$http.get(
				'https://easy-mock.com/mock/5d316b99ebb16f7ba46c3580/shop/api/banner'
			)
			this.items = items.data.banner
			//获取滚动数据
			const lists = await this.$http.get(
				'https://easy-mock.com/mock/5d316b99ebb16f7ba46c3580/shop/api/rollingList'
			)
			this.lists = lists.data.rollingList
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style lang="stylus" scoped>
#index
	a
		.banner
			display block
			width 100%
			height 175px

	.ul-list
		display flex
		flex-wrap wrap

	.li-list
		width 20%
		justify-content center

		img
			width 35px
			height 35px
			border-radius 50%
			padding 5px 0

		p
			font-size 14px
			padding-bottom 10px
</style>

