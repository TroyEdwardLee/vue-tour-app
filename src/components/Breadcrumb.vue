<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{$t('pageElText.homeTxt')}}</el-breadcrumb-item>
      <el-breadcrumb-item v-for="breadCrumb in breadCrumbs" :key="breadCrumb.id">
        {{ breadCrumb.name }}
      </el-breadcrumb-item>
    <!-- <transition-group name="breadcrumb">
    </transition-group> -->
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
<style scoped>
  .el-breadcrumb__inner {
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
  }
</style>
