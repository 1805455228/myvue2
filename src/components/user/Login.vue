<template>
  <div id="loginApp">
    <img src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>用户登录页面！</h2>
    <router-link class="aHover" to="/">返回</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '用户登录页面！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
