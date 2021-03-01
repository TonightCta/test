import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/app';
import EthTool from '@/utils/config/getWeb3'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state,
  mutations:{
    registerWeb3Instance(state,payload){
      let result = payload;
      state.isLogin = result
    }
  },
  actions:{
    loginIn({commit}){
      // console.log('registerWeb3 Action being executed');
      EthTool.signIn().then(res => {
        console.log('授权成功')
        commit('registerWeb3Instance',1)
      }).catch(err => {
        commit('registerWeb3Instance',2)
        console.log('授权失败')
      })
      // EthTool.signIn.getWeb3.then(result => {
      //   console.log('committing result to registerWeb3Instance mutation');
      //   commit('registerWeb3Instance',result)
      // }).catch(err => {
      //   console.log('error in actions registerWeb3',err)
      // })
    }
  }
})
