<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#344a5f"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { isRef, ref, reactive } from "@vue/reactivity";
export default {
  name: "navMenu",
  setup(props) {
    

    const handleOpen = (key,keyPath) =>{
      console.log(key,keyPath)
    }

    const handleClose = (key,keyPath) =>{
      console.log(key,keyPath)
    }

    return {
      handleOpen,handleClose
    }
  },
   created() {
  },
};
</script>
<style lang="scss" scoped>
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #344a5f;
}
</style>