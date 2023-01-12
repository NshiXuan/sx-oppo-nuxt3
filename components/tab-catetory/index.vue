<template>
  <div class="tab-category">
    <div class="category-item" v-for="(item, index) in categorys" :key="item.id" @click="handleItemClick(item)">
      <img class="pic" :src="item.picStr" alt="">
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICategory } from '@/store/home';

export interface IProps {
  categorys?: ICategory[],
}

const props = withDefaults(defineProps<IProps>(), {
  categorys: () => []
})

const emits = defineEmits<{
  (e: 'itemClick', item: ICategory): void
}>()

function handleItemClick(item: ICategory) {
  emits('itemClick', item)
}
</script>

<style lang="scss" scoped>
.tab-category {
  margin-top: 40px;
  @include normalFlex();
  align-items: center;

  .category-item {
    height: 100%;
    cursor: pointer;

    .pic {
      width: 80px;
      height: 80px;
    }

    .title {
      margin-top: 16px;
      font-style: 16px;
      text-align: center;
      height: 24px;
      max-width: 120px;
    }
  }

}
</style>