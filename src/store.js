import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    carArr: [] //存储购物车物品数组
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
          count: 1
        })
      }
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