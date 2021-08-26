<!--
 * @Author: hzhren
 * @Date: 2021-08-09 15:07:53
 * @Description: 资料审批
 * @LastEditors: your name
 * @LastEditTime: 2021-08-26 17:14:31
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
  <div class="card sp">
    <div class="list-cell">
      <span>修改项</span><span>修改前</span><span>修改后</span>
    </div>
    <div class="list-cell">
      <span>移动电话</span><span>修改前</span><span>修改后</span>
    </div>
    <div class="list-cell">
      <span>绑定电话</span><span>修改前</span><span>修改后</span>
    </div>
    <div class="list-cell">
      <span>证件名称</span><span>修改前</span><span>修改后</span>
    </div>
  </div>
  <div class="card">
    <div class="title">审批确认</div>
  </div>
  <div class="card">
    <div class="title">审批流程</div>
  </div>
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
    return {
      pathType
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
      @apply text-[#8B8F9A] w-100px flex-none;
    }
    .text {
      @apply text-[#222222];
    }
  }
  .list-cell {
    @apply flex flex-auto !leading-40px h-40px text-14px;
    &:first-child {
      @apply text-16px;
    }
    span {
      &:first-child {
        @apply w-78px pl-16px;
      }
      &:last-child {
        @apply text-[#FF5043];
      }
      &:nth-child(2) {
        @apply w-152px;
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
</style>
