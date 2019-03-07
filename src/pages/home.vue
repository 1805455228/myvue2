<template>
  <div id="mt-list">
    <mt-header title="首页"></mt-header>

    <div>
      <mt-index-list>
          <div><router-link to="/city">城市列表</router-link></div>
          <div><router-link to="/listCell">通讯录</router-link></div>
          <div><router-link to="/fullcalendar">日程日历</router-link></div>
      </mt-index-list>
    </div>






  </div>
</template>

<script>

  export default {
     name:"ss",
    data (){
       return {

       }
    }
  }
</script>

<style scoped>

</style>
