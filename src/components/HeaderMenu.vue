<template>
    <ul class="header-menu">
      <li>{{$t('pageElText.switchThemeTxt')}}</li>
      <li>下载主题</li>
      <li>帮助</li>
      <li>
        <span @click="handleChangeLanguage" class="header-lang"
          :class="{'is-active': isClicked}"
          date-key="zh">中文</span>
        <span>/</span>
        <span @click="handleChangeLanguage" class="header-lang"
          :class="{'is-active': !isClicked}"
          date-key="en">En</span>
      </li>
    </ul>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'HeaderMenu',
  data () {
    return {
      isClicked: true,
      language: Cookies.get('language') || 'zh'
    }
  },
  methods: {
    handleChangeLanguage (event) {
      this.isClicked = !this.isClicked
      this.$i18n.locale = event.currentTarget.getAttribute('date-key')
      this.$store.commit('setLanguage', event.currentTarget.getAttribute('date-key'))
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
