import http from './request';

export default {
  queryList(data) {
    return http.get('gateway/cmp-report-aggregator/resoureVmMessage/getVmmessageTopUsed', { data: data })
  },
  postTest(data) {
    return http.post('gateway/cmp-main-api/api/userCostPrediction/prediction', { data: data })
  }
  
}