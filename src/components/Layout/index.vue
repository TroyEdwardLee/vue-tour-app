<template>
  <el-container>
    <keep-alive>
      <el-header class="top-header" style="height: 8rem;">
        <vue-particles
          color="#fff"
          :particleOpacity="0.7"
          :particlesNumber="60"
          shapeType="circle"
          :particleSize="4"
          linesColor="#fff"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          class="vue-particles"
        >
        </vue-particles>
        <svg height="80" class="octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="36" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <h1 class="page-title">GitHub Commits</h1>
        <!-- <img :src="logo" alt="ElementUI" class="page-logo"> -->
        <header-menu></header-menu>
      </el-header>
    </keep-alive>
    <el-container style="margin-top: 8rem;">
      <keep-alive>
        <el-aside class="aside-menu">
          <aside-left></aside-left>
        </el-aside>
      </keep-alive>
      <el-main style="margin-left: 25rem;">
        <keep-alive>
          <bread-crumb></bread-crumb>
        </keep-alive>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
    <el-footer class="footer-bottom">
      <h3 style="line-height: 6rem;">© 2018</h3>
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
  .vue-particles{
    height: 8rem;
  }
  .fade-transform-enter-active,
  .fade-transform-leave-active {
    transition: all .2s;
  }
  .fade-transform-enter {
    transform: translateX(1rem)
  }
  .fade-transform-leave-to {
    transform: translateY(-2rem);
    opacity: 0;
  }
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
  .octicon-mark-github {
    margin-top: -8rem;
    fill: currentColor;
    float: left;
  }
  .page-title {
    font-size: 1.6rem;
    height: 8rem;
    line-height: 8rem;
    float: left;
    margin-top: -8rem;
    padding-left: 5rem;
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
    width: 25rem !important;
    height: 100%;
    border-right: 1px solid #e6e6e6;
  }
</style>
