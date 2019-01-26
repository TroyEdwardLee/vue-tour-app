<template>
  <div style="margin-top: 2rem;">
    <el-table
      :data="websiteList"
      style="width: 100%">
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
import { getWebsitesInfo } from '@/api/apiLocal'
export default {
  name: 'OtherContent',
  data () {
    return {
      websiteList: []
    }
  },
  mounted () {
    this.getWebsites()
  },
  methods: {
    getWebsites () {
      getWebsitesInfo().then((res) => {
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
    }
  },
  components: {} // 注册
}

</script>
