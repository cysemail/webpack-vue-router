<template>
  <div>
    <h2>这是account组件</h2>
    <router-link to="/account/login">登陆</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.currentClass {
  font-size: 24px;
}
body {
  div {
    font-style: italic;
  }
}
</style>



