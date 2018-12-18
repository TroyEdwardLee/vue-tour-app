<template>
  <el-form label-position="left" :inline="true" :model="formInline" class="query-form">
    <el-form-item :label="$t('pageElText.committerTxt')">
      <el-input v-model="formInline.username" :placeholder="$t('pageElText.committerTxt')"></el-input>
    </el-form-item>
    <el-form-item :label="$t('pageElText.repositoryTxt')">
      <el-input v-model="formInline.repos" :placeholder="$t('pageElText.repoPlaceholderTxt')"></el-input>
    </el-form-item>
    <el-form-item :label="$t('pageElText.commitShaTxt')">
      <el-input v-model="formInline.commitSha" :placeholder="$t('pageElText.commitShaTxt')"></el-input>
    </el-form-item>
    <el-form-item :label="$t('pageElText.dateRangeTxt')">
      <el-date-picker
        v-model="formInline.daterange"
        type="daterange"
        range-separator="-"
        :start-placeholder="$t('pageElText.dateFromTxt')"
        :end-placeholder="$t('pageElText.dateToTxt')">
      </el-date-picker>
    </el-form-item>
    <el-form-item :label="$t('pageElText.descTxt')">
      <el-input v-model="formInline.desc" :placeholder="$t('pageElText.descTxt')"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSearch">{{this.$t('buttonElTxt.searchBtnTxt')}}</el-button>
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
        daterange: [new Date(), new Date()],
        desc: '',
        page: 1,
        per_page: 5
      }
    }
  },
  created () {
    this.$store.commit('updateRequestParam', this._.cloneDeep(this.formInline))
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
      handler (val) {
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
