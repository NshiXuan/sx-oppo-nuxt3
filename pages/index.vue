<template>
  <div class="home">
    <div class="wrapper content">
      <!-- 轮播图 -->
      <Swiper :banners="banners" />

      <!-- 分类选项 -->
      <TabCatetory :categorys="categorys" @item-click="handleItemClick" />

      <!-- 分类段 -->
      <template v-for="item in categorys" :key="item.id">
        <SectionCategory :category="item" />
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ICategory, useHomeStore } from '@/store/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

// 跳转到详情页
function handleItemClick(item: ICategory) {
  // 编程导航 不利于SEO
  return navigateTo({
    path: '/oppo-detail',
    query: {
      type: item.type // oppo air watch table
    }
  })
}
</script>

<style lang="scss" scoped>
.home {
  background-color: $bgGrayColor;
}
</style>