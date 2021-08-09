<!--
 * @Author: hzhren
 * @Date: 2021-08-09 15:07:53
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-09 17:40:03
-->
<template>
<navbar title="啦啦啦"></navbar>
  <!-- 申请详情 start -->
  <div class="bg-white px-16px text-16px mt-8px">
    <div class="text-20px text-[#222222] font-semibold pt-10px leading-30px">申请详情</div>
    <div class="flex min-h-40px leading-33px items-center">
        <div class="text-[#8B8F9A] w-100px">所属项目：</div>
        <div class="text-[#222222]">西部片区-重庆晴天</div>
    </div>
    <div class="flex min-h-40px leading-33px items-center">
        <div class="text-[#8B8F9A] w-100px">房屋编号:</div>
        <div class="text-[#222222]">一期-1栋-2单元-1402一期-1栋-2单元-1402一期-1栋-2单元-1402</div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'customerAudit',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
