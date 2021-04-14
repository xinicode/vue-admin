import { createApp } from 'vue';
import App from "../App.vue";
import axios from './request';
import { apiUrl } from './apiUrl';



const service =  function () {
  let services = {};
  Object.entries(apiUrl).forEach((item) => {
    services[item[0]] = function (options = {}) {
      return axios(Object.assign({
        url: item[1]
      }, options))
    }
  })
  return services
}


export default service;
