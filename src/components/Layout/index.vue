<template>
  <el-container>
    <el-header class="top-header" style="height: 8rem;">
      <img :src="logo" alt="ElementUI" class="page-logo">
      <header-menu></header-menu>
    </el-header>
    <el-container style="margin-top: 8rem;">
      <el-aside class="aside-menu">
        <aside-left></aside-left>
      </el-aside>
      <el-main style="margin-left: 30rem;">
        <bread-crumb></bread-crumb>
        <records-list></records-list>
      </el-main>
    </el-container>
    <el-footer class="footer-bottom">
      <h3 style="line-height: 6rem;">Footer</h3>
    </el-footer>
  </el-container>
</template>
<script>
import Logo from '@/assets/images/element-ui-logo.svg'
import HeaderMenu from '@/components/HeaderMenu'
import AsideLeft from '@/components/AsideLeft'
import BreadCrumb from '@/components/Breadcrumb'
import RecordsList from '@/views/List'
export default {
  name: 'container',
  data () {
    return {
      logo: Logo
    }
  },
  components: {
    HeaderMenu,
    AsideLeft,
    BreadCrumb,
    RecordsList
  }
}
</script>
<style scoped>
  .top-header {
    width: 100%;
    position: fixed;
    color: aliceblue;
    line-height: 4rem;
    background-color: rgb(44, 47, 50);
    z-index: 9;
  }
  .page-logo {
    float: left;
    margin-top: 1.85rem;
  }
  .footer-bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    color: aliceblue;
    vertical-align: middle;
    line-height: 3.6rem;
    background-color: rgb(44, 47, 50);
    z-index: 9;
  }
  .aside-menu {
    position: fixed;
    height: 100%;
    border-right: 1px solid #e6e6e6;
  }
</style>
