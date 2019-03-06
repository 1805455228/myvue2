<template>
    <div id="mail-list">
        <m-header n-title="通讯录" n-position>
            <button solt="ltxt">返回</button>
            <button solt="rtxt">确定</button>
        </m-header>
    </div>
</template>

<script>
  // 局部注册组件
  import Header from '@/components/mailList/Header' ;

    export default {
      name: "mail-list",
      components: {
        "m-header":Header
      }
    }
</script>

<style scoped>
  .s-header{
    background-color: black;
    width: 100%;
    line-height: 40px;
    color:#fff;
  }
</style>
