<template>
  <div class="server">
    <h2>server</h2>
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