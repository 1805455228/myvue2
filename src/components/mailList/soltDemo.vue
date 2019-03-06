
<template>
  <div id="solt-demo">
    <my-comp>
      <h1 slot="header">Here might be a page title</h1>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <p slot="footer">Here's some contact info</p>
    </my-comp>
  </div>
</template>



<!--templates-->
<!--<template id="my">-->
  <!--<div>-->
    <!--<p>其他内容</p>-->
    <!--<slot> <span>匿名插槽 &#45;&#45; 默认内容</span> </slot>-->
    <!--<p>其他内容</p>-->
  <!--</div>-->
<!--</template>-->


<script>



  //vue 组件注册，solt方式无效
  // Register Vue Component
    import Vue from 'vue'
    // let myComp = Vue.extend({
    //   // template: '#my'
    // });

  Vue.component("my-comp",{
    template:`<div class="container">
                <slot name="header">hahahha</slot>
                <slot></slot>
                <slot name="footer">xixixixi</slot>
              </div>`
  })


    export default {
      name: "solt-demo",
      data(){
        return {

        }
      }
    }
</script>

<style scoped>

</style>
