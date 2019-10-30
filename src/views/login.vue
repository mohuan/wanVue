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
        let param = {
          username: 'weidingqiang',
          password: '111'
        };

        this.$post('login', param).then(result => {
          debugger
        }).catch(error => {
        debugger
        })
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
