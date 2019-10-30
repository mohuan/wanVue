<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<Button type="primary">你好iView</Button>-->
    <!--<Button type="success">Success</Button>-->
    <!--<Circle :percent="80">-->
      <!--<span class="demo-Circle-inner" style="font-size:24px">80%</span>-->
    <!--</Circle>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
