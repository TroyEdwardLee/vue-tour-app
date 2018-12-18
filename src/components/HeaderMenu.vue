<template>
    <ul class="header-menu">
      <li>{{$t('pageElText.switchThemeTxt')}}</li>
      <li>{{$t('pageElText.downloadTheme')}}</li>
      <li>{{$t('pageElText.help')}}</li>
      <li>
        <span @click="handleChangeLanguage" class="header-lang"
          :class="{'is-active': language === 'zh'}"
          date-key="zh">中文</span>
        <span>/</span>
        <span @click="handleChangeLanguage" class="header-lang"
          :class="{'is-active': language === 'en'}"
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
      language: Cookies.get('language') || 'zh',
      menusList: [
        {name: this.$t('pageElText.recordsListTxt'), id: 'recordsList'},
        {name: this.$t('pageElText.recordContentTxt'), id: 'recordContent'},
        {name: this.$t('pageElText.otherContentTxt'), id: 'content'}
      ]
    }
  },
  methods: {
    getSelectedMenuTxt (aMenus) {
      let oMenuDomId = document.querySelector('.menu-ul>.is-active').getAttribute('id')
      let oMenu = this._.find(aMenus, (oMenu) => {
        return oMenuDomId === oMenu.id
      })
      this.$store.commit('updateBreadcrumbs', oMenu)
    },
    handleChangeLanguage (event) {
      let language = event.currentTarget.getAttribute('date-key')
      this.language = language
      this.$i18n.locale = language
      this.$store.commit('setLanguage', language)
      let menusList = [
        {name: this.$t('pageElText.recordsListTxt'), id: 'recordsList'},
        {name: this.$t('pageElText.recordContentTxt'), id: 'recordContent'},
        {name: this.$t('pageElText.otherContentTxt'), id: 'content'}
      ]
      this.$store.commit('updateMenus', menusList)
      this.getSelectedMenuTxt(menusList)
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
