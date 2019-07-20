<template>
	<div class="panels-box">
		<cube-scroll class="left-panels">
			<ul>
				<li
					v-for="(list,index) in tabslabel"
					@click="selectlist(index)"
					:class="list.active?'active':''"
					:key="index"
				>
					<img :src="list.imgUrl" />
					<span>{{list.label}}</span>
				</li>
			</ul>
		</cube-scroll>
		<cube-scroll class="right-panels">
			<ul>
				<li v-for="(tag,index) in tags" :key="index">
					<img :src="tag.image" alt />
					<p>
						{{tag.label}}
						<i class="cubeic-add" @click="addToCar($event,tag)"></i>
					</p>
				</li>
			</ul>
		</cube-scroll>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tags: [],
			tabslabel: [
				{
					label: '全',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_1h_013cae3.png',
					active: true
				},
				{
					label: '巫',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_2h_e6fc8b5.png',
					active: false
				},
				{
					label: '侍',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_3h_5540c58.png',
					active: false
				},
				{
					label: '忍',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_4h_9c81992.png',
					active: false
				},
				{
					label: '射',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_5h_822f6a3.png',
					active: false
				},
				{
					label: '守',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_6h_0b0a100.png',
					active: false
				},
				{
					label: '祝',
					imgUrl:
						'https://moba.res.netease.com/pc/gw/20190114103430/img/ssl/ssl_7h_acaf9dd.png',
					active: false
				}
			]
		}
	},
	methods: {
		//点击左侧分类
		selectlist(index) {
			this.tabslabel.forEach((val, ind) => {
				if (index == ind) {
					val.active = true
				} else {
					val.active = false
				}
			})
			this.getClassify(index)
		},
		//获取分类
		async getClassify(index) {
			const result = await this.$http.get('/api/classify', {
				params: { type: index }
			})
			this.tags = result.data
		},
		//添加商品至购物车
		addToCar(e, tag) {
			this.$store.commit('toCar', tag)
		}
	},
	created() {
		//获取默认的分类数据
		this.getClassify(0)
	},
	mounted() {
		//设置滚动盒子的高度
		// const leftpanels = document.querySelector('.left-panels')
		const rightpanels = document.querySelector('.right-panels')
		const bodyheight = document.documentElement.clientHeight
		// leftpanels.style.height = bodyheight - 57 + 'px'
		rightpanels.style.height = bodyheight - 57 + 'px'
	}
}
</script>

<style lang="stylus" scoped>
.panels-box
	display flex

	.left-panels
		width 30%

		li
			height 60px
			position relative
			line-height 60px
			border-bottom 1px solid #fff
			color #fff
			background #1e233b
			font-size 14px

		.active
			background #bf393a
			color #fff

		img
			position absolute
			top 15px
			left 15px

		span
			margin-left 15px

	.right-panels
		width 70%

		ul
			display flex
			flex-wrap wrap

			li
				width 50%
				justify-content center
				align-items center
				font-size 15px

				img
					width 80px
					height 80px

				.cubeic-add
					font-size 18px
</style>


