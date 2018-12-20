<template>
  <div style="margin-bottom: 6rem;">
    <component :is="componentId"></component>
    <el-table
      v-loading="isLoading"
      :data="tableData.commitsData"
      height="275"
      border
      style="width: 100%">
      <el-table-column
        :label="$t('pageElText.commitShaTxt')"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-tickets"></i>
          <a class="commit-sha-link" :href="scope.row.html_url" target="_blank">{{ scope.row.sha | spliceStr }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="commit.author.name"
        :label="$t('pageElText.committerTxt')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="repository.full_name"
        :label="$t('pageElText.repositoryTxt')"
        width="180">
      </el-table-column>
      <el-table-column
        :label="$t('pageElText.dateRangeTxt')"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.commit.author.date | formatDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="commit.message"
        :formatter="truncate"
        :label="$t('pageElText.descTxt')">
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top:30px; text-align:center;">
      <el-pagination
        @size-change="pageSizeChanged"
        @current-change="pageChanged"
        :current-page="requestParam.page"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="requestParam.per_page"
        layout="sizes, total, prev, pager, next, jumper"
        class="commen-margin"
        :total="Number(tableData.total)"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TagSuccess from '@/components/TagSuccess'
// import moment from 'moment'
export default {
  name: 'TableList',
  data () {
    return {
      componentId: null
    }
  },
  methods: {
    truncate (row, column, val) {
      var newline = val.indexOf('\n')
      return newline > 0 ? val.slice(0, newline) : val
    },
    getCommitsData () {
      let _this = this
      this.$store.commit('updateLoadingStatus', true)
      this.$store.dispatch('getRecords', this.requestParam).then(
        (response) => {
          _this.componentId = TagSuccess
          _this.$store.commit('updateLoadingStatus', false)
          _this.$store.commit('updateRecords', response)
        }
      ).catch(() => {
        _this.$store.commit('updateLoadingStatus', false)
        _this.$store.commit('updateRecords', [])
      })
    },
    pageSizeChanged (size) {
      this.componentId = null
      this.requestParam.per_page = size
      this.$store.commit('updateRequestParam', this._.cloneDeep(this.requestParam))
      this.getCommitsData()
    },
    pageChanged (currentPage) {
      this.requestParam.page = currentPage
      this.componentId = null
      this.$store.commit('updateRequestParam', this._.cloneDeep(this.requestParam))
      this.getCommitsData()
    }
  },
  filters: {
    formatDate (date) {
      return date.split('.')[0].replace('T', ' ')
      // return moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    spliceStr (str) {
      return `${str.slice(0, 8)}...`
    }
  },
  computed: {
    ...mapGetters(['tableData', 'isLoading', 'requestParam'])
  }
}
</script>
<style scoped>
  .commit-sha-link {
    color: #0366d6;
    text-decoration: none;
  }
  .commit-sha-link::after {
    color: #0366d6;
  }
</style>
