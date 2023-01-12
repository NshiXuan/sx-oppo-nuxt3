<template>
  <div class="onePlus">
    <div class="wrapper content">
      <!-- 轮播图 -->
      <Swiper :banners="data?.data.banners" />

      <!-- 分类选项 -->
      <TabCatetory :categorys="data?.data.categorys" @item-click="handleItemClick" />

      <!-- 分类段 -->
      <template v-for="item in data?.data.categorys" :key="item.id">
        <SectionCategory :category="item" v-if="item.productDetailss && item.productDetailss.length" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHomeInfo } from '@/service/home';
import { ICategory } from '@/store/home';

const { data } = await getHomeInfo("onePlus")

function handleItemClick(item: ICategory) {
  console.log(item.title)
}
</script>

<style lang="scss" scoped>

</style>