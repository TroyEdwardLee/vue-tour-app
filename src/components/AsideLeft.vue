<template>
    <ul class="menu-ul">
      <li v-for="menu in menus"
        :key="menu.id"
        :class="{'is-active': activedItem === menu.id}"
        @click="activedItem = menu.id">
        {{ menu.name }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      activedItem: '',
      menus: [
        {name: '页面1', id: 'menu1'},
        {name: '页面2', id: 'menu2'},
        {name: '页面3', id: 'menu3'}
      ]
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
    margin: 0;
    padding: 0;
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
