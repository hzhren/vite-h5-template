<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:57:33
 * @Description: 顶部导航栏
 * @LastEditors: your name
 * @LastEditTime: 2021-08-27 01:09:55
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
import { useRouter } from 'vue-router'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  emits: ['back'],
  setup(props, { emit }) {
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
      emit('back')
    }
    return {
      onClickLeft
    }
  }
}
</script>
