<template>
	<div class="car-body">
		<div class="goods" v-for="(item,index) in carList" :key="index">
			<cube-checkbox v-model="item.checked">
				<img v-lazy="item.src" class="car-img" />
			</cube-checkbox>
			<span>{{item.title}}</span>
			<span class="price">￥{{item.price*item.count}}</span>
			<div class="goods-count">
				<i class="cubeic-remove" @click="removeSkin(index)"></i>
				<span>{{item.count}}</span>
				<i class="cubeic-add" @click="addSkin(index)"></i>
			</div>
		</div>
		<div class="total-price" @click="chooseAll">
			<cube-checkbox v-model="checkAll">全选</cube-checkbox>
			<span>合计:￥{{totalPrice}}</span>
		</div>
		<cube-button>下单</cube-button>
		<cube-button @click="clearCar">清空购物车</cube-button>
	</div>
</template>

<script>
import { mapState } from 'vuex' //与下面计算属性有关，有了才可以用
export default {
	data() {
		return {
			checkAll: false
		}
	},
	computed: {
		...mapState({
			carList: state => state.carArr
		}),
		totalPrice() {
			let total = 0
			let i = 0
			this.carList.forEach(v => {
				if (v.checked) {
					total += v.price * v.count
					i++
				}
			})
			if (this.carList.length == i) {
				this.checkAll = true
			} else {
				this.checkAll = false
			}
			return total
		}
	},
	methods: {
		//减少商品
		removeSkin(index) {
			this.$store.commit('carRemove', index)
		},
		//增加商品
		addSkin(index) {
			this.$store.commit('carAdd', index)
		},
		//清空购物车
		clearCar() {
			this.$store.commit('carClear')
		},
		chooseAll() {
			if (this.checkAll == true) {
				this.carList.forEach(v => {
					v.checked = false
				})
			} else {
				this.carList.forEach(v => {
					v.checked = true
				})
			}
		}
	},
	mounted() {
		const car = document.querySelector('.car-body')
		const bodyheight = document.documentElement.clientHeight
		car.style.height = bodyheight - 58 + 'px'
	}
}
</script>

<style lang="stylus" scoped>
.car-body
	overflow auto

.goods
	display flex
	align-items center
	margin 10px
	border-radius 8px
	height 50px
	font-size 16px
	background-color #fafafa

	.car-img
		width 40px
		height 40px
		margin-top 5px

	span
		width 45%
		text-align left

	.price
		color #bf393a
		width 13%

	.goods-count
		i
			font-size 18px

.total-price
	display flex
	align-items center
	margin 10px
	height 50px
	font-size 16px

	.cube-checkbox
		width 68%

	span
		color #bf393a
		font-size 14px

button
	width 80%
	margin-left 10%
	margin-top 10px
</style>