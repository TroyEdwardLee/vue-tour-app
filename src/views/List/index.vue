<template>
  <div>
    <div>
      <filter-bar></filter-bar>
    </div>
    <div>
      <table-list style="margin-top: 3rem;"></table-list>
    </div>
  </div>
</template>

<script>
import FilterBar from './FilterBar'
import TableList from './TableList'
export default {
  name: 'RecordsList',
  data () {
    return {
      activedItem: '',
      menus: [
        {name: '页面1', id: 'menu1'},
        {name: '页面2', id: 'menu2'},
        {name: '页面3', id: 'menu3'}
      ]
    }
  },
  components: {
    FilterBar,
    TableList
  }
}
</script>
