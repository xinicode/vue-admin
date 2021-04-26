<template>
  <div>
    123

    <el-button @click="goback">返回</el-button>
  </div>
</template>

<script>
import { isRef, ref, reactive } from "@vue/reactivity";
import { vModelDynamic } from "@vue/runtime-dom";
import { defineComponent, h } from "vue";

import login from "../../services/login";

export default defineComponent({
  name: "console",
  setup(props) {
    console.log(props);


    return {
      
    };
  },
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
        email: "",
      },
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
</style>
