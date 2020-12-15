<template>
  <!-- operation -->
  <div style="margin: 0px 0px 14px">
    <a-button type="primary" @click="addRouter">
      <SvgIcon iconClass="add" :style="{ width: '16px', height: '16px' }" />
      新增路由
    </a-button>
  </div>
  <!-- table -->
  <div class="sysConfig">
    <a-table :columns="columns" :data-source="data" :rowKey="(record) => record.path">
      <template #icon="{ record }">
        <SvgIcon :iconClass="record.mate.icon" />
      </template>
      <template #action="{ record, index }">
        <a @click="edit(record, index)">编辑</a>
      </template>
    </a-table>
  </div>
  <!-- 新增路由 -->
  <a-modal v-model:visible="visible" title="新增路由" :maskClosable="false">
    <template #footer>
      <div style="text-align: center">
        <a-button key="back" @click="handleCancel"> 取 消 </a-button>
        <a-button key="submit" type="primary" @click="handleOk"> 提 交 </a-button>
      </div>
    </template>
    <div>
      <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="父级路由">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-form-item label="Activity zone">
          <a-select v-model:value="form.region" placeholder="please select your zone" >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Activity time">
          <a-date-picker v-model:value="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%" />
        </a-form-item>
        <a-form-item label="Instant delivery">
          <a-switch v-model:checked="form.delivery" />
        </a-form-item>
        <a-form-item label="Activity type">
          <a-checkbox-group v-model:value="form.type">
            <a-checkbox value="1" name="type"> Online </a-checkbox>
            <a-checkbox value="2" name="type"> Promotion </a-checkbox>
            <a-checkbox value="3" name="type"> Offline </a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources">
          <a-radio-group v-model:value="form.resource">
            <a-radio value="1"> Sponsor </a-radio>
            <a-radio value="2"> Venue </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form">
          <a-input v-model:value="form.desc" type="textarea" />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
import { sysConfigColumn, sysConfigData } from "@/utils/tableColumn.js";
export default {
  name: "sysConfig",
  setup() {},
  data() {
    return {
      // table 列属性
      columns: sysConfigColumn,
      // table 数据
      data: sysConfigData,
      // 对话框显示与隐藏
      visible: false,
      // add router from
      form: {},
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
  },
  methods: {
    // 编辑
    edit(row, index) {
      console.log(row, index);
    },
    // 新增路由按钮事件
    addRouter() {
      this.visible = true;
    },
    // 取消的回调
    handleCancel() {
      this.visible = false;
    },
    // 提交的回调
    handleOk() {},
  },
};
</script>

<style scoped lang="scss">
</style>