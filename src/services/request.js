//引入axios
import axios from 'axios';
import { ElNotification } from 'element-plus';
import { checkStatus } from './utils';

axios.defaults.baseURL = ''
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000;



let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
axios.interceptors.request.use(config => {
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  config.headers = Object.assign(
    {
      Authorization: "Bearer bG9jYWw6MDIzMzc5ZDQtOWY1Yy00NDg4LTk1ZTMtMjE5NjQzODkyYzVj",
    },
    config.headers
  );
  return config
}, error => {
  return Promise.reject(error);
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return Promise.resolve(checkStatus(response));
}, error => {
  let errorStatus = checkStatus(error.response);
  if (errorStatus) {
    ElNotification({
      title: '接口异常',
      message: errorStatus.msg,
      type: 'error'
    });
  } else {
    ElNotification({
      title: '接口异常',
      message: "接口异常",
      type: 'error'
    });
  }

  return Promise.reject(error)
})



export default {
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}