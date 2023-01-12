<template>
  <div class="grid-view">
    <div class="view-item first" v-if="categoryUrl">
      <img :src="categoryUrl" alt="category">
    </div>

    <template v-for="(item, index) in productDetailss" :key="item.id">
      <div class="view-item">
        <!-- 插槽 实现item自定义 默认为GridViewItem -->
        <slot>
          <GridViewItem :productDetail="item" />
        </slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { IProductDetail } from '~~/store/home';

export interface IProps {
  productDetailss?: IProductDetail[],
  categoryUrl?: string
}

const props = withDefaults(defineProps<IProps>(), {
  productDetailss: () => [],
  categoryUrl: ''
})
</script>

<style lang="scss" scoped>
.grid-view {
  width: $contentWidth + 18px;
  @include normalFlex();
  flex-wrap: wrap; // 换行
  justify-content: flex-start;

  .view-item {
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    height: $gridItemHeight;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }

  .first {
    width: 40%;

    &>img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;

      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>