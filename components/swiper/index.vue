<template>
  <div class="swiper">
    <el-carousel height="480px" indicator-position="none" @change="handleBannerChange">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img class="pic" :src="item.picStr" alt="OPPO手机">
      </el-carousel-item>
    </el-carousel>

    <ul class="dots">
      <li class="dot" v-for="(item, index) in banners" :key="item.id" :class="{ active: currentIndex === index }"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { IBanner } from '@/store/home';

export interface IProps {
  banners?: IBanner[],
}

const props = withDefaults(defineProps<IProps>(), {
  banners: () => []
})

const currentIndex = ref<number>(0)
function handleBannerChange(index: number) {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.swiper {
  padding-top: 36px;
  position: relative;

  .pic {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .dots {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.8;
    }

    .active {
      background-color: red;
      bottom: 2px solid #fff;
      width: 12px;
      height: 12px;
      position: relative;
      top: 1px;
    }
  }
}
</style>