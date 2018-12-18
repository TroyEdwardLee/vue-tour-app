<template>
    <ul class="menu-ul" ref="menu-ul">
      <li v-for="menu in menus"
        :key="menu.id"
        :id="menu.id"
        :class="{'is-active': activedItem === menu.id}"
        @click="handleClickSideItem(menu.id, $event)">
        {{ menu.name }}
      </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderMenu',
  data () {
    return {
      menusList: [
        {name: this.$t('pageElText.recordsListTxt'), id: 'recordsList'},
        {name: this.$t('pageElText.recordContentTxt'), id: 'recordContent'},
        {name: this.$t('pageElText.otherContentTxt'), id: 'content'}
      ]
    }
  },
  created () {
    this.$store.commit('updateMenus', this.menusList)
    this.$store.commit('updateBreadcrumbs', this.breadCrumb)
  },
  methods: {
    route (routeName) {
      this.$router.push({
        name: routeName
      })
    },
    handleClickSideItem (routeName, event) {
      this.activedItem = routeName
      this.$store.commit('updateBreadcrumbs', {
        name: event.currentTarget.innerText,
        id: routeName
      })
      this.route(routeName)
    }
  },
  computed: {
    ...mapGetters(['menus']),
    activedItem: {
      get () {
        let [sFlag = 'recordsList'] = [this.$route.name]
        return sFlag
      },
      set (newValue) {
        return newValue
      }
    },
    breadCrumb: {
      get () {
        let _this = this
        let oBC = {
          name: this.menus.find((obj) => {
            return obj.id === _this.$route.name
          }).name,
          id: this.$route.name
        }
        return oBC
      },
      set (oBreadcrumb) {
        return oBreadcrumb
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    font-size: 1.4rem;
    position: relative;
    width: 100%;
    height: 100%;
    list-style-type: none;
  }
  li {
    color: #303133;
    text-align: left;
    vertical-align: middle;
    line-height: 6rem;
    padding-left: 2rem;
    cursor: pointer;
    transition: border-color .3s, background-color .3s, color .3s;
  }
  li:hover {
    background-color: #ecf5ff;
  }
  li.is-active {
    background-color: #ecf5ff;
    color: #409eff;
  }
</style>
