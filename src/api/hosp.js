import request from '@/utils/request.js'

export default {
  //医院列表
  getHospList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/list/${current}/${limit}`,
      method: 'get',
      params: searchObj
      // data: searchObj
    })
  },
  //查询 dictCode 查询下级数据字典
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  //根据 id 查询下级数据字典
  findChildId(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  },

  //更新医院上线状态
  updateStatus(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`,
      method: 'get'
    })
  },

  //查看医院详情
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/showHospDetail/${id}`,
      method: 'get'
    })
  },
  //查看医院科室
  getScheduleByHoscode(hoscode) {
    return request({
      url: `/admin/hosp/department/getDeptList/${hoscode} `,
      method: 'get'
    })
  }

}
