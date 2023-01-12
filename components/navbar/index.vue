<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink class="content-left" to="/">
        <img src="@/assets/images/logo.png" alt="" class="logo">
        <h1 class="title">OPPO手机商城</h1>
      </NuxtLink>
      <ul class="content-center">
        <template v-for="(item, index) in navbars" :key="item.id">
          <li :class="{ active: currentIndex === index }" @click="currentIndex = index">
            <NuxtLink class="link" :to="getPagePath(item)">{{ item.title }}</NuxtLink>
          </li>
        </template>
      </ul>
      <Search class="content-right"></Search>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavbar } from '@/store/home';

export interface IProps {
  navbars?: INavbar[],
}

const props = withDefaults(defineProps<IProps>(), { // 默认值
  navbars: () => []
})

const currentIndex = ref<number>(0)

// 获取导航跳转页面路径
const getPagePath = computed(() => {
  return (item: INavbar) => {
    let path = "/"
    if (item.type !== "oppo") {
      path += item.type
    }
    return path
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  /* line-height: 85px; */
  @include normalFlex();
  align-items: center;
  text-align: center;

  .content {
    @include normalFlex();
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;

      .logo {
        height: 100%;
      }

      .title {
        text-indent: -10000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      color: #000;

      .active {
        color: #3982ce;

        .link {
          color: inherit;
        }
      }
    }
  }
}
</style>