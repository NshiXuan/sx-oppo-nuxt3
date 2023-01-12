<template>
  <div class="oppo-detail">
    <div class="wrapper content">
      <el-tabs v-model="activeName" class="oppo-tabs" @tab-click="handleClick">
        <template v-for="category in data?.data" :key="category.id">
          <el-tab-pane :label="category.title" :name="category.title">
            <GridView :product-detailss="category.productDetailss" />
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDetailInfo } from '@/service/detail';
import type { DetailProductType } from '@/service/detail';
import { ElTabs, ElTabPane } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'

const route = useRoute()
const { type } = route.query
const activeName = ref<string>('')

const { data } = await getDetailInfo(type as DetailProductType)
// activeName
activeName.value = data.value?.data[0].title as string

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.oppo-detail {
  background-color: $bgGrayColor;
  padding-bottom: 60px;
  padding-top: 8px;

  .content {
    .oppo-tabs {
      :deep(.el-tabs__header) {
        background-color: white;
      }

      :deep(.el-tabs__nav-wrap) {
        height: 48px;
        padding: 0 52px;

        /* 底部线 */
        &::after {
          background-color: white;
        }

        /* 按钮 */
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 48px;

          .el-icon,
          svg {
            width: 25px;
            height: 25px;
          }

          svg {
            position: relative;
            top: 10px;
          }
        }

        .el-tabs__nav-next+.el-tabs__nav-scroll .el-tabs__active-bar {
          left: 0;
        }

        .el-tabs__active-bar {
          background-color: $priceColor;
        }
      }

      :deep(.el-tabs__item) {
        height: 48px;
        opacity: 0.6;
        font-weight: 400;
        padding-top: 5px;
        position: relative;

        &:hover,
        &.is-active {
          color: $priceColor;
        }
      }
    }
  }
}
</style>