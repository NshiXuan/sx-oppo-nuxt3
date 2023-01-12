<template>
  <div class="secton-title"> {{ title }} </div>
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
.secton-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
}
</style>