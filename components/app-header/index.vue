<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="content-left">
        <NuxtLink to="/" class="link">
          <span>OPPO官网</span>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="content-right">
        <NuxtLink to="/" class="link download">
          <span>下载OPPO商城App</span>
          <div class="app">
            <img src="@/assets/images/pinia.png" alt="" class="encode">
            <div class="name">扫码下载OPPO商城App</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/login" class="link">
          <span>登录</span>
        </NuxtLink>
        <NuxtLink to="/register" class="link">
          <span>注册</span>
        </NuxtLink>
        <NuxtLink to="/" class="link">
          <span>购物车</span>
          <span>(0)</span>
        </NuxtLink>
      </div>
    </div>
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
.app-header {
  background-color: #000;
  height: $appHeaderHeight;
  // 吸顶
  @include elementSticky(0, 100);

  .link span {
    opacity: 0.8;
  }

  .content {
    height: 100%;
    @include normalFlex();

    .content-left {
      @include normalFlex();
      justify-content: flex-start;
      align-items: center;

      .link {
        color: #fff;
        font-style: 12px;
        margin-right: 24px;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .content-right {
      @include normalFlex();
      justify-content: flex-end;
      align-items: center;

      .link {
        color: white;
        text-decoration: none;
        line-height: 14px;
        padding: 0 14px;
        border-right: 1px solid #fff;
        cursor: pointer;
      }

      .link:last-child {
        border-right: none;
      }

      .download {
        position: relative;

        .app {
          display: none;
          position: absolute;
          top: 25px;
          left: 0;
          padding: 8px;
          box-shadow: 0 4px 8px 0rgb(0 0 0 / 10%);
          z-index: 1000;
        }
      }

      .encode {
        width: 140px;
        height: 140px;
      }

      .name {
        color: #000;
        margin-top: 2px;
      }

      /* 当经过.download .app变为block */
      .download:hover .app {
        display: block;
      }
    }
  }
}
</style>