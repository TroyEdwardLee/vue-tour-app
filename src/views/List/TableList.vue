<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="commit.author.date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit.author.name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit.author.email"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TableList',
  data () {
    return {}
  },
  created () {},
  methods: {},
  computed: {
    ...mapGetters(['tableData'])
  },
  watch: {}
}
</script>
