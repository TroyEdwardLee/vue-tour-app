<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>项目</el-breadcrumb-item>
    <el-breadcrumb-item>页面一</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      activedItem: '',
      menus: [
        {name: '页面1', id: 'menu1'},
        {name: '页面2', id: 'menu2'},
        {name: '页面3', id: 'menu3'}
      ]
    }
  }
}
</script>
