import Axios from "axios"; // 引入axios
import Qs from "qs";
import { ElNotification,ElMessageBox } from 'element-plus';
const axios = Axios.create({
  baseURL: "",
  timeout: 10000
})


//添加请求拦截器

axios.interceptors.request.use(
  (config) => {

    config.headers = Object.assign(
      {
        Authorization: "Bearer bG9jYWw6NDMyYjc4NDUtNjFlMC00OTNiLTgxMDYtOTdkZTZhZDc3MmEz",
      },
      config.headers
    );

    if (config.method.toLocaleLowerCase() === 'post' ) {
      const contentType = config.headers["Content-Type"];
      if (contentType) {
        
      }





      config.data = config.data.data;
    } else if (config.method.toLocaleLowerCase() === 'get') {
      config.params = config.data;
    } else {
      ElMessageBox.error("不允许请求方法", config.method);
    }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

//添加响应拦截器

axios.interceptors.response.use(
  (response) => {
    if (response.data === 'Not Found') {
      ElNotification({
        title: response.config.url,
        message: "资源不存在",
        type: 'error'
      });
    } else if (response.status === 200 || response.status == 304) {
      ElNotification({
        title: '成功',
        message: response.data.msg,
        type: 'success'
      });
      return response.data;
    } else {
      ElNotification({
        title: response.config.url,
        message: '服务器繁忙，请稍后重试！',
        type: 'error'
      });
    }
  },
  (error) => {
    ElNotification({
      title: '接口异常',
      message: error.message,
      type: 'error'
    });
    return Promise.reject(error)
  }
)

export default axios;



