<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:41:42
 * @Description: 客户审批list
 * @LastEditors: your name
 * @LastEditTime: 2021-08-04 17:46:12
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
        <div
          v-for="item in list.data"
          :key="item"
          class="list-cell"
        >
          <div>
            <span class="title">张丽娟 / 3栋3单元2209</span>
            <span class="inline-block rounded-2px p-4px text-12px">我发起</span>
          </div>
          <div class="info-1">
            <span>业主资料录入错误</span>
          </div>
          <div class="info-2"><span>项目-D项目负责人-非高端（张三）</span></div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'dashboard',
  setup() {
    const list = reactive({
      data: [],
      loading: false,
      finished: false,
      refreshing: false
    })

    const onLoad = () => {
      setTimeout(() => {
        if (list.refreshing) {
          list.data = []
          list.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          list.data.push(list.data.length + 1)
        }
        list.loading = false

        if (list.data.length >= 40) {
          list.finished = true
        }
      }, 1000)
    }

    const onRefresh = () => {
      // 清空列表数据
      list.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      list.loading = true
      onLoad()
    }

    return {
      list,
      onLoad,
      onRefresh
    }
  }
}
</script>

<style lang="less" scoped>
.list-cell {
  @apply h-165px bg-white p-10px mt-12px rounded-8px overflow-hidden relative;
}
.title {
  @apply text-18px font-semibold h-28px leading-28px
  color: #222222;
}
.info-1 {
  @apply text-16px h-28px leading-28px
  color: #222222;
}
.info-2 {
  @apply text-16px h-28px leading-28px
  color: #8b8f9a;
}
</style>
