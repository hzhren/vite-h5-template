<!--
 * @Author: hzhren
 * @Date: 2021-08-04 15:49:16
 * @Description: tag
 * @LastEditors: your name
 * @LastEditTime: 2021-08-04 16:05:27
-->
<template>
  <div class="p-4px text-12px" :class="{}">{{text}}</div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    text: {
      type: String,
      default: '已审批'
    }
  }
}
</script>

<style>

</style>
