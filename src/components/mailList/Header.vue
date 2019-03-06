<template id="ms-header" >
    <header class="s-header">
      <slot name="ltxt"></slot>
      {{nTitle}}
      <slot name="rtxt"></slot>
    </header>
</template>

<script>
    export default {
        name: "m-header",
        data (){
          return {
            msg:""
          }
        },
        props:{
          nTitle:{
            type:String,
            default:"标题"
          },
          nPosition:{
            type:Boolean,
            default:false
          }
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
