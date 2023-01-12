<template>
  <div class="search">
    <input type="text" placeholder="Reno9 系列">
    <img src="@/assets/images/search.svg" alt="" class="search-svg">
  </div>
</template>

<script setup lang="ts">
export interface IProps {
  title?: string,
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss" scoped>
.search {
  height: 36px;
  width: 160px;
  @include normalFlex();
  align-items: center;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 36px;
  background-color: #f6f6f6;
  cursor: pointer;

  input {
    width: 112px;
    height: 21px;
    font-style: 14px;
    opacity: .3;
    outline: none; // 取消点击时候的边框
    border: none;
    background-color: transparent;
  }

  .search-svg {
    width: 14px;
    height: 14px;
  }
}
</style>