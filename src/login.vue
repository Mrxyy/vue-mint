<template>
  <div>
    <h1>这是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
    <router-link to="/a">点我</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    // 注意：组件中的 data 必须是 function
    return {
      msg: "123"
    };
  },
  methods: {
    show() {
      console.log("调用了 login.vue 中的 show 方法");
    }
  }
};
</script>

<style>

</style>
