<template>
  <div class="app-footer">
    <h2>app-footer</h2>
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

</style>