import request from '@/utils/request'

export function getList(params) {
  getHospSetList(current,limit,searchObj) {
    return request({
      url: '/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}',
      method: 'post',
      data: searchObj
    })
  }
}
