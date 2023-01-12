<template>
  <div class="layout">
    <!-- header -->
    <AppHeader></AppHeader>

    <!-- navbar -->
    <Navbar :navbars="navbars" />

    <!-- 页面内容占位符 -->
    <slot></slot>

    <!-- footer -->
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore)
homeStore.fetchHomeInfoData("oppo") // 触发action
</script>