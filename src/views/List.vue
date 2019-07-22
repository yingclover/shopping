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
					<i class="cubeic-add" @click="addToCar($event,tag)"></i>
					<div>
						<p style="color:#bf393a">￥{{tag.price}}</p>
						<p style="color:#1e233b">
							{{tag.label.split(' ')[0]}}
							<!-- <i class="cubeic-add" @click="addToCar($event,tag)"></i> -->
						</p>
						<p style="margin-top:5px;color:#bf393a">{{tag.label.split(' ')[1]}}</p>
					</div>
				</li>
			</ul>
		</cube-scroll>
		<div class="ball-wrap">
			<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
				<div class="ball" v-if="ball.show">
					<div class="inner">
						<i class="cubeic-add"></i>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ball: {
				show: false,
				el: ''
			},
			tags: [],
			tabslabel: []
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
			const result = await this.$http.get(
				'https://easy-mock.com/mock/5d316b99ebb16f7ba46c3580/shop/api/getClassifyItems',
				{
					params: { type: index }
				}
			)
			this.tags = result.data.items
		},
		//添加商品至购物车
		addToCar(e, tag) {
			this.$store.commit('toCar', tag)
			//小球显示出来
			this.ball.show = true
			// 获取点击元素
			this.ball.el = e.target
		},
		beforeEnter(el) {
			//让小球移动到点击的位置
			//获取点击位置
			const dom = this.ball.el
			// console.log(dom)
			const rect = dom.getBoundingClientRect() //获取点击的dom的位置
			// console.log(rect)
			const x = rect.left - window.innerWidth * 0.7
			const y = -(window.innerHeight - rect.top)
			console.log(x, y)
			el.style.display = 'block'
			el.style.transform = `translate3d(0,${y}px,0)`
			const inner = el.querySelector('.inner')
			inner.style.transform = `translate3d(${x}px,0,0)`
		},
		enter(el, done) {
			//触发重绘,看一下重绘
			document.body.offsetHeight
			//小球移动回到原点，就是购物车的位置
			el.style.transform = `translate3d(0,0,0)`
			const inner = el.querySelector('.inner')
			inner.style.transform = `translate3d(0,0,0)`
			//过渡完成后执行的事件
			el.addEventListener('transitionend', done)
		},
		afterEnter(el) {
			//结束隐藏小球
			this.ball.show = false
			el.style.display = 'none'
		},
		async getTabList() {
			//获取分类项及图标
			const res = await this.$http.get(
				'https://easy-mock.com/mock/5d316b99ebb16f7ba46c3580/shop/api/classifyList'
			)
			this.tabslabel = res.data.tabs
		}
	},
	created() {
		//获取分类项
		this.getTabList()
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
.ball-wrap
	.ball
		position fixed
		left 70%
		bottom 10px
		z-index 1003
		color red
		transition all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41)

		.inner
			width 16px
			height 16px
			transition all 1s linear

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
				margin-top 10px
				justify-content center
				align-items center
				font-size 15px

				img
					width 80px
					height 80px

				.cubeic-add
					font-size 18px
					cursor pointer
</style>


