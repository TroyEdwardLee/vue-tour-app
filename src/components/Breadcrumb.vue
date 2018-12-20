<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{$t('pageElText.homeTxt')}}</el-breadcrumb-item>
      <transition name="component-fade" mode="out-in">
        <el-breadcrumb-item v-for="breadCrumb in breadCrumbs" :key="breadCrumb.id">
          {{ breadCrumb.name }}
        </el-breadcrumb-item>
      </transition>
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
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .4s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
