import Vue from 'vue'
import Vuex from 'vuex'
import {
  join
} from 'path';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: '',
    carArr: JSON.parse(localStorage.getItem('carArr')) || [] //存储购物车物品数组
  },
  mutations: {
    //设置vuex的token
    setToken(state, token) {
      state.token = token
    },
    toCar(state, tag) {
      let goods = state.carArr.find(v => v.title == tag.label)
      if (goods) {
        goods.count += 1
      } else {
        state.carArr.push({
          title: tag.label,
          count: 1,
          src: tag.image,
          price: tag.price,
          checked: false
        })
      }
    },
    //购物车数量增加
    carAdd(state, index) {
      state.carArr[index].count++
    },
    //购物车数量减少
    carRemove(state, index) {
      if (state.carArr[index].count > 1) {
        state.carArr[index].count--
      } else {
        if (window.confirm('确定从购物车移除皮肤？')) {
          state.carArr.splice(index, 1)
        }
      }
    },
    carClear(state) {
      state.carArr = []
    }
  },
  actions: {

  },
  //相当于vue的计算属性
  getters: {
    countSum: state => {
      let num = 0
      state.carArr.forEach(v => {
        num += v.count
      })
      return num
    }
  }
})
//每次调用mutations的时候，都会进入这个方法，然后可以在这里做一些处理,保证浏览器刷新后vuex数据不会丢失，保证数据持久化
store.subscribe((mutations, state) => {
  localStorage.setItem('carArr', JSON.stringify(state.carArr))
})

export default store