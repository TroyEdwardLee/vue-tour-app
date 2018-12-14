<template>
  <el-table
    :data="tableData"
    height="275"
    border
    style="width: 100%">
    <el-table-column
      prop="sha"
      label="版本号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit.author.name"
      label="提交者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit.author.date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit.message"
      :formatter="truncate"
      label="描述">
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
  methods: {
    truncate (row, column, val) {
      var newline = val.indexOf('\n')
      return newline > 0 ? val.slice(0, newline) : val
    }
  },
  computed: {
    ...mapGetters(['tableData'])
  },
  filters: {}
}
</script>
