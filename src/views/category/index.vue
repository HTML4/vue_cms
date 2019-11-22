<template>
  <div class="app-container">
    <div class="pageHeader">
      <div class="title">
        <h3>栏目列表</h3>
        <h5>共1条</h5>
      </div>
      <el-form :inline="true" :model="formInline" size="mini" class="right">
        <el-form-item label-width="50px">
          <el-input v-model="formInline.user" placeholder="审批人" />
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

