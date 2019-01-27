<template>
  <div class="table-outer">
    <el-col :span="24" class="filter-bar">
      <el-form :inline="true"
        :model="filters"
        size="mini"
        @submit.native.prevent>
        <el-form-item>
          <el-input v-model="filters.searchParam" placeholder="请输入检索值..."
            @keyup.enter.native="handleQuery" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="handleQuery" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button
            type="primary"
            plain
            size="mini"
            @click="openAddHandle()"
            icon="el-icon-plus"
          >新增</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            size="mini"
            @click="handleBatchRemove()"
            icon="el-icon-delete"
            :disabled="selectedTasks.length === 0"
          >批量删除</el-button>
        </el-form-item> -->
      </el-form>
    </el-col>
    <el-table
      :data="websiteList"
      :style="{ width: '100%' }"
      border>
      <el-table-column
        prop="name"
        label="Name"
        width="200">
      </el-table-column>
      <el-table-column
        prop="url"
        label="Url">
      </el-table-column>
      <el-table-column
        prop="alexa"
        label="Alexa"
        width="180">
      </el-table-column>
      <el-table-column
        prop="country"
        label="Country"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fuzzyWebsitesInfo } from '@/api/apiLocal'
export default {
  name: 'OtherContent',
  data () {
    return {
      websiteList: [],
      filters: {
        searchParam: ''
      }
    }
  },
  mounted () {
    this.getWebsites()
  },
  methods: {
    getWebsites () {
      this.handleQuery()
    },
    handleQuery () {
      let param = { keyword: this.filters.searchParam }
      fuzzyWebsitesInfo(param).then((res) => {
        if (res.status) {
          this.websiteList = res.data.data
        } else {
          this.$notify.error({
            title: '错误',
            message: res.message
          })
        }
      }).catch((err) => {
        this.$notify.error({
          title: '错误',
          message: err.message
        })
      })
      console.log(123)
    }
  },
  components: {} // 注册
}
</script>

<style scoped>
  .table-outer {
    margin-top: 2rem;
  }
  .filter-bar {
    background: #f2f2f2;
    padding: 1.5rem;
    padding-bottom: 0;
    margin: 0 0 1rem 0;
    text-align: left;
  }
</style>
