<!--
 * @Author: hzhren
 * @Date: 2021-08-09 15:07:53
 * @Description: 资料审批
 * @LastEditors: your name
 * @LastEditTime: 2021-08-27 02:08:48
-->
<template>
  <navbar title="基础资料修改审批" v-if="pathType === 'base'"></navbar>
  <navbar title="客户更名审批" v-else></navbar>
  <!-- 申请详情 start -->
  <div class="card">
    <div class="title">申请详情</div>
    <div class="cell">
      <div class="label">所属项目：</div>
      <div class="text">西部片区-重庆晴天</div>
    </div>
    <div class="cell sp">
      <div class="label">房屋编号:</div>
      <div class="text">
        一期-1栋-2单元-1402一期-1栋-2单元-1402一期-1栋-2单元-1402
      </div>
    </div>
    <div class="cell" v-if="pathType === 'base'">
      <div class="label">客服姓名：</div>
      <div class="text">张丽娟</div>
    </div>
  </div>
  <div class="card sp" v-if="pathType === 'base'">
    <div class="list-cell">
      <span>修改项</span><span>修改前</span><span>修改后</span>
    </div>
    <div class="list-cell">
      <span>移动电话</span><span>18725723846</span><span>17725723846</span>
    </div>
    <div class="list-cell">
      <span>绑定电话</span><span>18725723846</span><span>17725723846</span>
    </div>
    <div class="list-cell">
      <span>证件名称</span><span>身份证</span><span>护照</span>
    </div>
    <div class="list-cell">
      <span>证件号码</span><span>50021219923304912X</span><span>E50021219</span>
    </div>
    <div class="list-cell">
      <span>变更原因</span><span>客户电话录入错误</span>
    </div>
  </div>
  <div class="card sp" v-else>
    <div class="list-cell">
      <span>修改项</span><span>修改前</span><span>修改后</span>
    </div>
    <div class="list-cell">
      <span>客户姓名</span><span>张丽娟</span><span>张利娟</span>
    </div>
    <div class="list-cell">
      <span>变更原因</span><span>客户姓名录入错误</span>
    </div>
  </div>
  <div class="card">
    <div class="title">审批确认</div>
    <div>
      <div class="cell sp">
        <div class="label">审批意见:</div>
        <div class="text-[#8B8F9A]">
          <div>请输入审批意见（必填）</div>
          <div class="mt-8px">图片（可上传6张）</div>
          <div>
            <van-uploader v-model="fileList" multiple :max-count="6">
            </van-uploader>
          </div>
          <div class="mb-16px">
            <div class="btn plain" @click="submit(0)">审核不通过</div>
            <div class="btn primary" @click="submit(1)">审核通过</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="title">审批流程</div>
  </div>
  <van-dialog v-model:show="show" show-cancel-button width="270">
    <div v-if="submitType" class="dialog-text">确定审批通过吗？</div>
    <div v-else class="dialog-text">确定审批不通过吗？</div>
  </van-dialog>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'customerAudit',
  components: {
    Navbar
  },
  setup() {
    const route = useRoute()
    const pathType = ref(route.query.pathType)
    const fileList = ref([
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      { url: 'https://img.yzcdn.cn/vant/tree.jpg' }
    ])
    const submitType = ref(0)
    const show = ref(false)
    const submit = (type) => {
      submitType.value = type
      show.value = true
    }
    return {
      pathType,
      submitType,
      fileList,
      show,
      submit
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  @apply bg-white px-16px text-16px mt-8px;
  &.sp {
    @apply px-0;
  }
  .title {
    @apply text-20px text-[#222222] font-semibold pt-10px leading-30px;
  }
  .cell {
    @apply flex items-center min-h-40px leading-33px;
    &.sp {
      @apply items-start;
    }
    .label {
      @apply text-[#8B8F9A] w-80px flex-none;
    }
    .text {
      @apply text-[#222222];
    }
    .btn {
      @apply w-124px h-40px inline-block text-center leading-40px text-16px cursor-pointer;

      &.plain {
        @apply rounded-4px text-[#3366FE] border-[#3366FE] border border-solid box-border;
      }
      &.primary {
        @apply bg-[#3366FE] rounded-4px text-white ml-14px;
      }
    }
  }
  .list-cell {
    @apply flex flex-auto !leading-40px h-40px text-14px;
    &:first-child {
      @apply text-16px;
    }
    span {
      @apply pl-4px box-border;
      &:first-child {
        @apply w-78px pl-16px text-[#8B8F9A];
      }
      &:last-child {
        @apply !text-[#FF5043];
      }
      &:nth-child(2) {
        @apply w-152px text-[#222222];
      }
    }
    span + span {
      border-left: 1px solid #eeeeee;
    }
  }
  .list-cell + .list-cell {
    border-top: 1px solid #eeeeee;
  }
}
.dialog-text{
  @apply text-center m-32px;
}
</style>
