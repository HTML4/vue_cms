<template>
  <div class="pageHeader clearfix">
    <div class="title">
      <h3>{{ title }}</h3>
      <h5>{{ count >= 0 ? `共${count}条` : null }}</h5>
    </div>
    <slot />
    <!-- <el-form :inline="true" :model="formInline" size="mini" class="right">
      <el-form-item>
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
    </el-form> -->
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      required: true,
      type: String
    },
    count: {
      required: false,
      type: Number,
      default: undefined
    }
  }
}
</script>

