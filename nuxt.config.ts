import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1.导入css 全局scss
  css: ['normalize.css', "@/assets/css/global.scss"],

  // 2.vite配置自动导入scss
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动给scss模块添加额外的数据
          additionalData: '@use "@/assets/css/variables.scss" as *;'
        }
      }
    },
    // 配置自动导入样式
    plugins: [ElementPlus()]
  },

  // 3.SEO优化
  app: {
    // 给所有的页面的head添加SEO信息
    head: {
      title: 'sx-OPPO手机商城',
      meta: [
        {
          name: 'keywords',
          content: 'OPPO商城，OPPO专区，OPPO配件，OPPO，OPPO官网商城'
        },
        {
          name: 'description',
          content: 'OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        { rel: "icon", type: 'image/x-icon', href: '/favicon.ico' }
      ],
      // 如果浏览器不支持脚本或者禁用脚本 提示需要脚本
      noscript: [{ children: "Javascript is required" }]
    }
  },

  // 4.配置pinia pinia/nuxt可以帮我们解决序列化、XSS攻击、state同步问题
  modules: ['@pinia/nuxt'],

  // 5.配置babel转换 并且在vite中配置plugins使用ElementPlus插件
  build: {
    // 在开发环境dev、生产环境pro使用babel进行语法转换
    transpile: ['element-plus/es']
  }
})
