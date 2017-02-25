<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <router-link to="/home"  class="navbar-brand">
          <img class="v2ex-logo" src="./assets/v2ex.png" alt="">
        </router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">用户界面</router-link></li>
          <li><router-link to="/list">查看帖子</router-link></li>
          <li><router-link to="/User">关于我</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'app'
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
.v2ex-logo{
  width: 70px;
}
</style>
