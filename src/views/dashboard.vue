<!--
 * @Author: hzhren
 * @Date: 2021-08-03 15:41:42
 * @Description: 客户审批list
 * @LastEditors: your name
 * @LastEditTime: 2021-08-26 11:06:48
-->
<template>
<navbar title="客户资料审批"></navbar>
  <van-dropdown-menu active-color="#3366FE" class="fixed z-10 w-full">
    <van-dropdown-item v-model="query1" :options="option1" />
    <van-dropdown-item v-model="query2" :options="option2" />
    <van-dropdown-item v-model="query3" :options="option3" />
  </van-dropdown-menu>
  <div class="w-full h-40px"></div>
   <van-search v-model="searchKey" placeholder="搜索" background="#F2F2F2" class="fixed w-359px ml-8px z-5">
      <template #left-icon>
        <img
          src="../assets//icon/search_icon.svg"
          class="relative w-16px h-16px top-3px"
        />
      </template>
    </van-search>
  <div class="m-auto w-359px">
    <div class="w-full h-62px"></div>
    <van-pull-refresh v-model="list.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="list.loading"
        :finished="list.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in list.data" :key="item" class="list-cell" @click="getDetail">
          <!-- <div class="cell-type bg-[#9CBEFF]">客户更名</div> -->
          <div class="cell-type bg-[#FF9CBA]">资料修改</div>
          <!-- <div class="cell-type bg-[#FFB69E]">类别调整</div> -->
          <div class="flex items-center justify-between">
            <span
              class="text-18px font-semibold h-28px leading-28px text-[#222222]"
              >张丽娟 / 3栋3单元2209</span
            >
            <span class="tag-base bg-[rgba(244,74,69,0.1)] text-[#F44A45]"
              >待审批</span
            >
            <span class="tag-base bg-[rgba(51,102,254,0.1)] text-[#3366FE]"
              >我发起</span
            >
            <span class="tag-base bg-[rgba(40,196,105,0.1)] text-[#28C469]"
              >已审批</span
            >
          </div>
          <div class="text-16px h-28px leading-28px text-[#222222] truncate">
            <span>业主资料录入错误</span>
          </div>
          <div class="text-16px h-28px leading-28px text-[#8b8f9a] truncate">
            <span>项目-D项目负责人-非高端（张三）</span>
          </div>
          <div class="h-1px bg-[#f5f5f5] w-full mb-6px"></div>
          <div
            class="
              flex flex-1
              justify-between
              text-14px text-[#8B8F9A]
              h-28px
              items-center
            "
          >
            <span class="truncate">2021-07-18 13:07 </span>
            <span class="truncate">重庆东原D7小区</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'dashboard',
  components: {
    Navbar
  },
  setup() {
    const list = reactive({
      data: [],
      loading: false,
      finished: false,
      refreshing: false
    })
    const searchKey = ref(undefined)
    const query1 = ref('a')
    const query2 = ref('a')
    const query3 = ref('a')
    const option1 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ]
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ]
    const option3 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ]
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
    /* 详情 */
    const router = useRouter()
    const getDetail = () => {
      router.push({
        path: '/customerAudit',
        query: {
          pathType: 'base'
        }
      })
    }
    return {
      list,
      searchKey,
      query1,
      query2,
      query3,
      option1,
      option2,
      option3,
      onLoad,
      onRefresh,
      getDetail
    }
  }
}
</script>
<style lang="less" scoped>
.list-cell {
  @apply box-border h-165px bg-white p-10px pt-30px mb-12px rounded-8px overflow-hidden relative;
}
.cell-type {
  @apply h-22px px-8px text-center leading-22px rounded-tl-8px rounded-br-8px text-12px text-white absolute top-0 left-0;
}
.tag-base {
  @apply rounded-2px p-4px text-12px;
}
</style>
