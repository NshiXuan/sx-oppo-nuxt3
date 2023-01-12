<template>
  <div class="section-category">
    <!-- 段标题 -->
    <SectionTitle :title="category.title" />
    <!-- 段内容 !代表必有内容 -->
    <GridView :category-url="category.url" :productDetailss="category.productDetailss" />
  </div>
</template>

<script setup lang="ts">
import { ICategory } from '@/store/home';

export interface IProps {
  category?: ICategory,
}

const props = withDefaults(defineProps<IProps>(), {
  category: () => ({})
})
</script>

<style lang="scss" scoped>

</style>