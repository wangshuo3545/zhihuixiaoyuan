<script lang="ts" setup>
import PageContainer from './components/page-container/index.vue'
import { useSubPage } from './composables'
import ArticleSimpleItem from '@/components/article-simple-item/index.vue'

const { newsData, navArticleDetail } = useSubPage()
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <PageContainer>
    <view class="tn-page">
      <view
        v-for="(item, index) in newsData"
        :key="index"
        class="news-item"
        @tap.stop="navArticleDetail"
      >
        <ArticleSimpleItem
          :title="item.title"
          :desc="item.desc"
          :image="item.mainImage"
          :tag="item.tags[0]"
          :view-count="item.hotCount"
          :like-count="item.likeCount"
        />
      </view>
    </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
.page {
  margin-top: 60rpx;
}
</style>
