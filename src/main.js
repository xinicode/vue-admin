import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let app = createApp(App);

// app.config.globalProperties.$service = service();




app.use(store).use(router).use(ElementPlus, { locale }).mount("#app");
