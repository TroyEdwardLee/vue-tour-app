<template>
  <div style="margin-bottom: 6rem;">
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
    <div class="block" style="margin-top:30px; text-align:center;">
      <el-pagination
        @size-change="pageSizeChanged"
        @current-change="pageChanged"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="sizes, total, prev, pager, next, jumper"
        class="commen-margin"
        :total="total"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'TableList',
  data () {
    return {
      pageSize: 5,
      total: 100,
      currentPage: 1
    }
  },
  created () {},
  methods: {
    truncate (row, column, val) {
      var newline = val.indexOf('\n')
      return newline > 0 ? val.slice(0, newline) : val
    },
    pageSizeChanged () {
      console.log('test')
    },
    pageChanged () {
      console.log('test')
    }
  },
  filters: {
    formatDate (row, column, date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
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
