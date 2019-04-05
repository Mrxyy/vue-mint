<template>
     <div>
       <mt-header  title="社区-vue" @click.native="cli">
             <mt-button icon="back" slot="left">返回</mt-button>
             <mt-button icon="more" slot="right"></mt-button>
       </mt-header>
       <div class="mian">
       <h1>当前是{{val}}</h1>
       </div>
       <mt-tabbar :fixed="true" v-model="val">
         <mt-tab-item id="主页">
             主页
         </mt-tab-item>
           <mt-tab-item id="会员">
            会员
         </mt-tab-item>
           <mt-tab-item id="购物车">
             购物车
         </mt-tab-item>
           <mt-tab-item id="搜素">
            搜素
         </mt-tab-item>
       </mt-tabbar>
     </div>
</template>
<script>
export default {
  data () {
    return{
      val:"主页"
    }
  },
  methods: {
    cli:()=>{
      alert(1)
    }
  }
}
</script>
<style>
</style>
