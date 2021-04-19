import http from './request';

export default {
  queryList(params) {
    return http.get('gateway/cmp-report-aggregator/resoureVmMessage/getVmmessageTopUsed', params)
  },
  postTest(data) {
    return http.post('gateway/cmp-main-api/api/userCostPrediction/prediction', data)
  }
  
}