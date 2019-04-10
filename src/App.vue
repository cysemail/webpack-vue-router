<template>
  <div>
    <h2>我是vue组件,{{msg}}</h2>
    <router-link to="/account">用户</router-link>
    <router-link to="/goodslist">产品展示</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue，router，webpack！"
    };
  }
};
</script>

<style>
.curentClass {
  text-decoration: none;
  font-size: 24px;
}
</style>
