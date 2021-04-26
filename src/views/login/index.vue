<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTabs"
          :value="item.code"
          :key="item.code"
          @click="changeTab(item)"
        >
          {{ item.text }}
        </li>
      </ul>
      <el-form
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
        :model="form"
        label-width="100px"
        :label-position="right"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="text"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" class="item-form">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item
          prop="passwords"
          v-show="loginType == 'register'"
          label="确认密码"
          class="item-form"
        >
          <el-input type="password" v-model="form.passwords"></el-input>
        </el-form-item>

        <el-form-item prop="code" label="验证码" class="item-form">
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input id="code" type="text" v-model="form.code"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button @click="getCode" :disabled="tt.status">{{
                tt.text
              }}</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="ttt()">立即创建</el-button>
          <el-button type="primary" @click="slA()" :disabled="loginBtn"
            >创建</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import sha1 from "js-sha1";
import { stripScript, validateEmail, validateCode } from "@/utils/validate";
import { isRef, ref, reactive } from "@vue/reactivity";
import { vModelDynamic } from "@vue/runtime-dom";
import { defineComponent, h } from "vue";

import login from "../../services/login";

export default defineComponent({
  setup(props) {
    let validateEmails = (value, rule, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱地址"));
      } else if (!validateEmail(value)) {
        callback(new Error("邮箱格式有误！"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateCodes = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次验证码"));
      } else if (!validateCode(value)) {
        callback(new Error("长度有误"));
      } else {
        callback();
      }
    };

    let timer = ref(null);

    const codeText = ref("获取验证码");
    const getSms = () => {
      if (form.email == "") {
        this.$message.error("不能为空");
      }
      if (validateEmails(form.email)) {
        this.$message.error("错误");
        return fasle;
      }
      let param = {
        custId: "11111111-11111111-11111111-11111111",
      };
      login.getSms(param).then((rs) => {
        let datas = rs.data;
        console.log(datas);
      });
    };

    let tt = reactive({
      text: "获取验证码",
      status: false,
    });

    const getCode = () => {
      tt.status = true;
      countDown(6);
    };

    const countDown = (number) => {
      if (timer.value) {
        clearInterval(timer.value);
      }
      let time = number;

      timer.value = setInterval(() => {
        time--;

        if (time < 1) {
          tt.text = "重新获取";
          tt.status = false;
          clearInterval(timer.value);
          return;
        }
        tt.text = time;
      }, 500);
    };

    const clearCountDown = () => {
      tt.status = false;
      tt.text = "获取验证码";
      clearInterval(timer.value);
    };

    const slA = () => {
      clearCountDown();
    };

    return {
      tt,
      slA,
      codeText,
      getSms,
      getCode,
    };
  },
  name: "login",
  data() {
    return {
      menuTabs: [
        { text: "登录", code: "login", current: true },
        { text: "注册", code: "register", current: false },
      ],
      loginType: "login",
      form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
        email: "",
      },
      // rules: {
      //   email: [{ validator: validateEmails, trigger: "blur" }],
      //   password: [{ validator: validatePass, trigger: "blur" }],
      //   passwords: [{ validator: validatePass2, trigger: "blur" }],
      //   code: [{ validator: validateCodes, trigger: "blur" }],
      // },
    };
  },
  methods: {
    changeTab: function (data) {
      console.log("data");
    },
    async submitForm() {
      this.$message.error("aaaa");
      // let param = {
      //   custId: "11111111-11111111-11111111-11111111",
      // };
      // let data = await login.getSms(param);
      // console.log(data);
    },
    async ttt() {
      let params = {
        dateType: 1,
        page: 1,
        rows: 7,
      };
      const res = await login.loginIn(params);
      console.log(res);
    },
  },
});
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
  color: #fff;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.el-form-item__label {
  color: #fff !important;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
