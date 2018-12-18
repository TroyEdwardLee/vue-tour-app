<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{$t('pageElText.homeTxt')}}</el-breadcrumb-item>
    <el-breadcrumb-item v-for="breadCrumb in breadCrumbs" :key="breadCrumb.id">
      {{ breadCrumb.name }}
    </el-breadcrumb-item>
    <!-- <el-breadcrumb-item>项目</el-breadcrumb-item>
    <el-breadcrumb-item>页面一</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Breadcrumb',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['breadCrumbs'])
  }
}
</script>
