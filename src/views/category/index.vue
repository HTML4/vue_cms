<template>
  <div class="app-container">
    <page-header :title="headerTitle" :count="headerCount">
      <el-form :inline="true" :model="formInline" size="mini" class="right">
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
      </el-form>
    </page-header>
    <el-table
      row-key="id"
      :data="tableData"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="hide" label="隐藏">
        <template slot-scope="scope">
          {{ scope.row.hide ? "是" : "否" }}
        </template>
      </el-table-column>

      <el-table-column prop="operate" label="操作">
        <template>
          <el-button type="text" size="mini">内容</el-button>
          <el-button type="text" size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'Category',
  components: {
    PageHeader
  },
  data() {
    return {
      headerTitle: '栏目标题',
      headerCount: 1,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          hide: 1
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [
                {
                  id: 310,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }
              ]
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
    }
  }
}
</script>
