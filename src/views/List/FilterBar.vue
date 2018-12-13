<template>
  <el-form label-position="left" :inline="true" :model="formInline" class="query-form">
    <el-form-item label="Tag">
      <el-tag>{{ count }}</el-tag>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="formInline.username" placeholder="审批人"></el-input>
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
        username: '',
        daterange: Array
      }
    }
  },
  methods: {
    handleSearch () {
      // console.log(this.formInline.daterange)
      this.$store.dispatch('getRecords', 'master').then(
        (response) => {
          this.$store.commit('updateRecords', response)
        }
      )
    }
  },
  computed: {
    count () {
      return this.$store.state.count
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
