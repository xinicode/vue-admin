<template>
    <div id="main-wrap">
      <router-view />
    </div>
</template>
<script>
export default {
  setup() {
    
  }
}
</script>
<style lang="scss" scoped>
#main-wrap {
  position: fixed;
  left:250px;
  top:75px;
  right:0;
  bottom: 0;
  color:#fff;
  -webkit-box-sizing: border;
}
</style>
