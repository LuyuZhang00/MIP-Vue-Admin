import request from '@/utils/request.js'

// export  default  function getHospSetList(current,limit,searchObj) {
//     return request({
//       url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
//       method: 'post',
//       params: {searchObj}
//     })
//   }

export default {
  getHospSetList: function (current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  deleteHospSet: function (id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },

  //批量删除
  batchRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },

  //添加医院设置
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },

  //院设置 id 查询
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request ({
    url: `/admin/hosp/hospitalSet/updateHospitalSet`,
    method: 'post',
    data: hospitalSet
    })
    }






};