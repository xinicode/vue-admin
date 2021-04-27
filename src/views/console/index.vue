<template>
  <div>
     aaa
  </div>
</template>

<script>
import { isRef, ref, reactive } from "@vue/reactivity";
import { vModelDynamic } from "@vue/runtime-dom";
import { defineComponent, h } from "vue";
import login from "../../services/login";
export default defineComponent({
  name: "console",
  setup(props,context) {

  

    return {
      
    };
  },
  created() {
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
