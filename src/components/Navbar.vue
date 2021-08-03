<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:57:33
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-03 18:32:29
-->
<template>
  <van-nav-bar
    title="客户资料审批"
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  setup() {
    const onClickLeft = () => Toast('返回');
    return {
      onClickLeft,
    };
  },
};
</script>

<style>
</style>