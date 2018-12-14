<template>
  <div>
    <h3>Record Content</h3>
  </div>
</template>

<script>
export default {
  name: 'RecordContent',
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
  components: {}
}
</script>
