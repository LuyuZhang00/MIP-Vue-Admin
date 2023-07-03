<template>
  <div class="app-container">
    医院设置列表
  </div>
</template>

<script>
import hospitalSetApi from '@/api/hosp/hospitalSet'
export default {
// 定义数据模型
data() {
return {
list: null // 列表
}
},
// 页面渲染成功后获取数据
created() {
this.fetchData()
},
methods: {
// 加载列表数据
fetchData(page = 1) {
console.log('翻页。。。' + page)
// 异步获取远程数据（ajax）
this.page = page
hospitalSetApi.getPageList(1, 10, null).then(
response => {
this.list = response.data.records
}
)
}
}
}
</script>