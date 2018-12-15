<template>
  <el-table
    v-loading="isLoading"
    :data="tableData"
    height="275"
    border
    style="width: 100%">
    <el-table-column
      label="版本号"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-tickets"></i>
        <a :href="scope.row.html_url" target="_blank">{{ scope.row.sha | spliceStr }}</a>
      </template>
    </el-table-column>
    <el-table-column
      prop="commit.author.name"
      label="提交者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="repository.full_name"
      label="仓库"
      width="180">
    </el-table-column>
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{ scope.row.commit.author.date | formatDate }}</span>
      </template>
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
import moment from 'moment'
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
  filters: {
    formatDate (row, column, date) {
      return moment(date).format('YYYY-MM-DD')
    },
    spliceStr (str) {
      return `${str.slice(0, 8)}...`
    }
  },
  computed: {
    ...mapGetters(['tableData', 'isLoading'])
  }
}
</script>
<style scoped>
  a {
    color: #0366d6;
    text-decoration: none;
  }
  a::after {
    color: #0366d6;
  }
</style>
