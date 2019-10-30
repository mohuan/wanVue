<template>
  <div>
    <Button @click="login">登录</Button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{

      }
    },
    methods:{
      login(){
          this.$get('banner').then(result => {

        }).catch(error => {

        })
      }

      // login(){
      //   let param = {
      //     'username': 'weidingqiang',
      //     'password': '123456'
      //   };
      //
      //   let ops = {
      //     header : {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     }
      //   };
      //
      //   this.$post('login', param,ops).then(result => {
      //     debugger
      //   }).catch(error => {
      //   debugger
      //   })
      // }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
