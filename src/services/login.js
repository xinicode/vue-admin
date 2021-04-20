import http from './request';

export default {
  loginIn(params) {
    return http.get('gateway/cmp-report-aggregator/resoureVmMessage/getVmmessageTopUsed', params)
  },
  getSms(data) {
    return http.post('gateway/cmp-main-api/api/userCostPrediction/prediction', data)
  }
  
}