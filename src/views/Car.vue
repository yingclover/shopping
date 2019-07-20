<template>
	<div>
		<div class="goods" v-for="(item,index) in carList" :key="index">
			{{item.title}}
			<div class="goods-count">
				<i class="cubeic-remove" @click="removeSkin(index)"></i>
				<span>{{item.count}}</span>
				<i class="cubeic-add" @click="addSkin(index)"></i>
			</div>
		</div>
		<cube-button style="margin:10px 0;">下单</cube-button>
		<cube-button>清空购物车</cube-button>
	</div>
</template>

<script>
import { mapState } from 'vuex' //与下面计算属性有关，有了才可以用
export default {
	data() {
		return {
			// carList: []
		}
	},
	computed: {
		...mapState({
			carList: state => state.carArr
		})
	},
	methods: {
		//减少商品
		removeSkin(index) {},
		//增加商品
		addSkin(index) {}
	}
}
</script>

<style lang="stylus" scoped>
.goods
	padding 10px
	text-align left

	.goods-count
		float right

	i
		font-size 18px
</style>