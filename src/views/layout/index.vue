<template>
  <div>
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>
<script>
import LayoutHeader from './components/header';
import LayoutMain from './components/main';
import LayoutNav from './components/nav';
export default {
  name:'layout',
  components:{
    LayoutHeader,LayoutMain,LayoutNav
  },
  setup(){

  }
}
</script>
<style lang="scss" scoped>

</style>