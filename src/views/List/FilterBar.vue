<template>
  <el-form label-position="left" :inline="true" :model="formInline" class="query-form">
    <el-form-item label="提交者">
      <el-input v-model="formInline.username" placeholder="提交者..."></el-input>
    </el-form-item>
    <el-form-item label="代码库">
      <el-input v-model="formInline.repos" placeholder="username/repository..."></el-input>
    </el-form-item>
    <el-form-item label="版本号">
      <el-input v-model="formInline.commitSha" placeholder="版本号..."></el-input>
    </el-form-item>
    <el-form-item label="日期">
      <el-date-picker
        v-model="formInline.daterange"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="描述信息">
      <el-input v-model="formInline.desc" placeholder="描述信息..."></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FilterBar',
  data () {
    return {
      formInline: {
        repos: '',
        commitSha: '',
        username: '',
        daterange: Array,
        desc: ''
      }
    }
  },
  created () {
    this.handleSearch()
  },
  methods: {
    updateTableLoading (callFunc, bLoading) {
      this.$store.commit(callFunc, bLoading)
    },
    handleSearch () {
      let _this = this
      this.updateTableLoading('updateLoadingStatus', true)
      this.$store.dispatch('getRecords', this.formInline).then(
        (response) => {
          _this.updateTableLoading('updateLoadingStatus', false)
          _this.$store.commit('updateRecords', response)
        }
      ).catch(() => {
        _this.updateTableLoading('updateLoadingStatus', false)
        _this.$store.commit('updateRecords', [])
      })
    }
  },
  watch: {
    formInline: {
      handler (val, oldVal) {
        // console.log(`${val} and ${oldVal}`)
        this.$store.commit('updateRequestParam', this._.cloneDeep(val))
      },
      deep: true
    }
  }
}
</script>
<style scoped>
  .query-form {
    text-align: left;
    margin-top: 2rem;
    padding: 2.5rem 2rem 0;
    background-color: #f2f2f2;
  }
</style>
