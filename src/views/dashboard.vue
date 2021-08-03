<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:41:42
 * @Description: 客户审批list
 * @LastEditors: your name
 * @LastEditTime: 2021-08-03 18:37:30
-->
<template>
<div class="w-359px m-auto">
 <van-pull-refresh v-model="list.refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="list.loading"
    :finished="list.finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <!-- <van-cell v-for="item in list.data" :key="item" :title="item" /> -->
    <div v-for="item in list.data" :key="item" class="h-165px bg-white p-10px mt-12px radius rounded-8px">{{item}}</div>
    
  </van-list>
</van-pull-refresh>
</div>
 
</template>

<script>
import { reactive } from 'vue';

export default {
  name:'dashboard',
  setup() {
    const list = reactive({
      data: [],
      loading: false,
      finished: false,
      refreshing: false,
    });

    const onLoad = () => {
      setTimeout(() => {
        if (list.refreshing) {
          list.data = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          list.data.push(list.data.length + 1);
        }
        list.loading = false;

        if (list.data.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      list.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      list.loading = true;
      onLoad();
    };

    return {
      list,
      onLoad,
      onRefresh,
    };
  },
};
</script>

<style>

</style>