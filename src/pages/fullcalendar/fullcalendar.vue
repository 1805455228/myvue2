<template>
  <div id="fullcalendar">
    <mt-header title="日历"></mt-header>
    <full-calendar :events="monthData" lang="zh" @dayClick="dayClick"></full-calendar>
  </div>
</template>

<script>

  var demoEvents = [
    {
      title : '请假',
      start : '2019-03-01',
      cssClass  : 'family',
      YOUR_DATA : {title:"哈哈哈",title:"xixixiix"}
    },
    {
      title : '出差',
      start : '2019-03-06',
      cssClass  : ['family', 'career'],
      YOUR_DATA : {}
    },
    {
      title : '工作',
      start : '2019-03-03',
      cssClass: 'blue',
      YOUR_DATA : {}
    },
    {
      title : '工作',
      start : '2019-03-22',
      cssClass: 'blue',
      YOUR_DATA : {}
    }
  ]


    export default {
        name: "fullcalendar",
        data (){
          return {
            monthData: demoEvents
          }
        },
      methods: {
        // 点击当天
        dayClick (day, jsEvent) {
          console.log('dayClick', day, jsEvent)
        }
      },
      components: {
        'full-calendar': require('vue-fullcalendar')
      }
    }



</script>

<style scoped>
  .red {
    background: red;
  }
  .blue {
    background: blue;
  }
</style>
