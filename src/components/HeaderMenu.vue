<template>
    <ul class="header-menu">
      <li>切换主题色</li>
      <li>下载主题</li>
      <li>帮助</li>
      <li @click="isClicked = !isClicked">
        <span class="header-lang" :class="{'is-active': isClicked}">中文</span>
        <span>/</span>
        <span class="header-lang" :class="{'is-active': !isClicked}">En</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      isClicked: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    font-size: 1.4rem;
    float: right;
    height: 100%;
    list-style-type: none;
  }
  li {
    color: aliceblue;
    float: left;
    vertical-align: middle;
    line-height: 8rem;
    padding: 0 1.0rem;
    margin: 0 1.0rem;
    cursor: pointer;
  }
  .header-menu span {
    opacity: .7;
  }
  .header-menu span[class~='is-active'] {
    opacity: 1.0;
  }
</style>
