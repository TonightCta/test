import Web3 from 'web3';
import Token from '../abi/abi'
const web3js = window.web3;
class EthTool{
  async signIn(){  //登录
    return new Promise((resolve,reject) => {
      let web3Provider;
      if( typeof web3js !== 'undefined'){
        web3Provider = web3js.currentProvider
      }else{
        web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')
      }
      this.web3 = new Web3(web3Provider)
      try{
        web3Provider.enable() // 登录调用
        resolve('isTurn');
      }catch (err) {
        console.log('未授权');
        reject('noTurn')
      }
    })
  }

  async getAccounts(){ //获取链上所有账户
    const accounts = await this.web3.eth.getAccounts();
    this.accounts = accounts;
  }

  async getBalance(){ //获取用户余额
    const userBalance = await this.web3.eth.getBalance(this.accounts[0]);
    console.log(userBalance / 1e18 + ' ETH')
  }
  
  async tract(){

    const conAddress = '0xC88500f13fE4c9cE150d67B68d2e9B03224D68EE';
    const contractInstance  = new this.web3.eth.Contract(Token.abi,conAddress)
    try{
      contractInstance.methods.buyfirst(10).call().then(result => {
        console.log(result)
      })
    }catch(err){
      console.log(err)
    }
    console.log(ethereum.networkVersion)
    console.log(contractInstance)
    // const actions = {
    //   from:this.accounts[0],
    //   to:'0xc11e769CE3bfa4a1FCA8A7BCac8Cc3459c77Cba4',
    //   value: 1 * 1e18,
    //   gas: 21000,
    // };
    // const result = await this.web3.eth.sendTransaction(actions);
    // console.log(result)
  }
}

export default new EthTool();
