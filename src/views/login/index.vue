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
              <el-button>获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { stripScript, validateEmail, validateCode } from "@/utils/validate";
import { isRef, ref, reactive } from "@vue/reactivity";
import { vModelDynamic } from "@vue/runtime-dom";

export default {
  setup(props, context) {
    function aaa() {
      return {
        a: 1,
        b: 2,
      }; 
    }

    let { a, b } = aaa();

    console.log(a);

    return {};
  },
  name: "login",
  props: {},
  watch: {},
  data() {
    var validateEmails = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱地址"));
      } else if (!validateEmail(value)) {
        callback(new Error("邮箱格式有误！"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateCodes = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次验证码"));
      } else if (!validateCode(value)) {
        callback(new Error("长度有误"));
      } else {
        callback();
      }
    };
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
      rules: {
        email: [{ validator: validateEmails, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        passwords: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: validateCodes, trigger: "blur" }],
      },
    };
  },
  methods: {
    changeTab: function (data) {
      console.log("data");
    }
  },
};
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
