<template>
    <div id="registerApp">
        <img src="../../assets/logo.png">
        <p class="v-text">{{msg}}</p>
      <router-link class="aHover" to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
      name: "register",
      data () {
        return {
          msg: '用户注册页面！'
        }
      }
    }
</script>

<style scoped>
  .v-text{
    color:red;
  }
</style>
