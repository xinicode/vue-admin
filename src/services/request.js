import Axios from "axios"; // 引入axios
import { ElNotification, ElMessageBox } from 'element-plus';

import { checkStatus } from './utils';

const axios = Axios.create({
  baseURL: "",
  timeout: 10000
})


//添加请求拦截器

axios.interceptors.request.use(
  (config) => {
    config.headers = Object.assign(
      {
        Authorization: "Bearer bG9jYWw6MDIzMzc5ZDQtOWY1Yy00NDg4LTk1ZTMtMjE5NjQzODkyYzVj",
      },
      config.headers
    );
    if (config.method.toLocaleLowerCase() === 'post') {
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
  function (response) {
    return Promise.resolve(checkStatus(response));
  },
  function (error) {
    let errorStatus = checkStatus(error.response);
    ElNotification({
      title: '接口异常',
      message: errorStatus.msg,
      type: 'error'
    });
    return Promise.reject(error)
  }
)

export default axios;



