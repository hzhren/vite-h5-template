<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:57:33
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-09 16:18:14
-->
<template>
  <van-nav-bar
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    @click-left="onClickLeft"
  >
    <template #title><span class="font-semibold text-18px text-[#222222]">{{title}}</span></template>
    <template #left> <img src="../assets/icon/icon_back_black.svg" class="h-24px w-24px" alt="返回"></template>
  </van-nav-bar>
</template>

<script>
import { Toast } from 'vant'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  emits: [],
  setup(props, { emit }) {
    const onClickLeft = () => {
      Toast('返回')
      emit('back')
    }
    return {
      onClickLeft
    }
  }
}
</script>

<style></style>
