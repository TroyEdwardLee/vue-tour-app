<template>
  <el-container>
    <el-header class="top-header" style="height: 8rem;">
      <img :src="logo" alt="ElementUI" class="page-logo">
      <header-menu></header-menu>
    </el-header>
    <el-container>
      <el-aside class="aside-menu">
        <aside-left></aside-left>
      </el-aside>
      <el-main>
        <bread-crumb></bread-crumb>
      </el-main>
    </el-container>
    <el-footer class="footer-bottom">
      <h3>Footer</h3>
    </el-footer>
  </el-container>
</template>
<script>
import Logo from '@/assets/images/element-ui-logo.svg'
import HeaderMenu from '@/components/HeaderMenu'
import AsideLeft from '@/components/AsideLeft'
import BreadCrumb from '@/components/Breadcrumb'
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
    BreadCrumb
  }
}
</script>
<style scoped>
  .top-header {
    color: aliceblue;
    line-height: 4rem;
    background-color: rgb(44, 47, 50);
  }
  .page-logo {
    float: left;
    margin-top: 1.85rem;
  }
  .footer-bottom {
    color: aliceblue;
    vertical-align: middle;
    line-height: 3.6rem;
    background-color: rgb(44, 47, 50);
  }
  .aside-menu {
    height: 100%;
    border-right: 1px solid #e6e6e6;
  }
</style>
