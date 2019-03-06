<template>
  <div id="mt-list">

    <mt-header title="通讯录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-index-list>
      <mt-index-section v-for="(item,index) in dataList" :index="item.id" :key="index">
        <div class="cell-content">
          <mt-cell><span>{{item.title}}</span></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>


  </div>
</template>

<script>
  //import city from "@/assets/json/city" //导入所有城市的JSON
  //import { makePy } from "@/assets/js/pinying" //导入插件获取所有城市中文的大写首字母

  export default {
    name: "home",
    data (){
      return {
        dataList:[
          {id:"1",title:"哈哈哈哈"},
          {id:"2",title:"哈哈哈哈"},
          {id:"3",title:"哈哈哈哈"},
          {id:"4",title:"哈哈哈哈"},
          {id:"5",title:"哈哈哈哈"},
          {id:"6",title:"哈哈哈哈"},
          {id:"7",title:"哈哈哈哈"},
          {id:"8",title:"哈哈哈哈"},
          {id:"9",title:"哈哈哈哈"},
          {id:"10",title:"哈哈哈哈"},
          {id:"11",title:"哈哈哈哈"},
          {id:"12",title:"哈哈哈哈"},
          {id:"13",title:"哈哈哈哈"},
          {id:"14",title:"哈哈哈哈"},
          {id:"15",title:"哈哈哈哈"},
          {id:"16",title:"哈哈哈哈"},
          {id:"17",title:"哈哈哈哈"},
          {id:"18",title:"哈哈哈哈"},
          {id:"19",title:"哈哈哈哈"}
        ]
      }
    },
    methods:{

    },
    watch: {
      playList() {
        const height = document.getElementsByClassName('singer')[0].getBoundingClientRect().height
        this.fixBottom = this.playList.length > 0 ? height - 60 : height
      }
    },
  }
</script>

<style scoped>

</style>
