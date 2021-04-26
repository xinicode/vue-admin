import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import http from './services/request'

// console.log(process.env.VUE_APP_ABC)

let app = createApp(App);

app.config.globalProperties.$service = http;

localStorage.setItem('token','Bearer bG9jYWw6MDIzMzc5ZDQtOWY1Yy00NDg4LTk1ZTMtMjE5NjQzODkyYzVj');


app.use(store).use(router).use(ElementPlus, { locale }).mount("#app");
