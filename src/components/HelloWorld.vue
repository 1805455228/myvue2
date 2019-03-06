<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="login">登录</button>
    <button @click="register">注册</button>
    <router-link class="aHover" to="/login">登录</router-link>
    <router-link class="aHover" to="/register">注册</router-link>
    <router-link class="aHover" to="/mailList">手机通讯录</router-link>
    <router-link class="aHover" to="/solt">插槽</router-link>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld！'
    }
  },
  methods:{
    login:function () {
      this.$router.push({
          path: '/login',
          query: {aaa: 1}
        })
    },
    register:function () {
      this.$router.push({
        path: '/register',
        query: {aaa: 2}
      })
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
