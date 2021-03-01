<template>
  <div id="app">
    <img src="./assets/logo.png" @click="tract">
    <router-view/>
  </div>
</template>

<script>
import EthTool from '@/utils/config/getWeb3'
export default {
  name: 'App',
  created(){
    this.$store.dispatch('loginIn')
  },
  mounted(){
    EthTool.getAccounts()
    setTimeout(() => {
      EthTool.getBalance()
    },1000)
  },
  methods:{
    tract(){
      EthTool.tract()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
