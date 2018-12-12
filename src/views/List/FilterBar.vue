<template>
  <el-form label-position="left" :inline="true" :model="formInline" class="query-form">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FilterBar',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
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
