<script lang="ts" setup>
import TnLazyLoad from '@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.vue'
defineProps({
  /**
   * @description 图片地址
   */
  url: String,
})
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
  <view class="product-item">
    <view class="wallpaper__item">
      <view
        class=""
        style="
          position: absolute;
          z-index: 99;
          margin-left: 10rpx;
          width: 110rpx;
        "
      >
        <view class="tag-online" style="font-size: 16rpx">
          <!-- <text class="tn-icon-circle-fill tn-color-green" /> -->
          <TnIcon name="circle-fill" color="#31e749" />
          <text class="tn-white_text" style="padding-left: 8rpx">在 线</text>
        </view>
      </view>
      <view class="item__image">
        <TnLazyLoad :src="url" mode="widthFix" />
      </view>

      <view class="item__data">
        <view class="item__title-container tn-pl-xs">
          <text class="item__title tn-color-friend clamp-text-2">生活照片</text>
        </view>
        <view class="item__tags-container tn-ml-xs">
          <view class="item__tag"> 生活 </view>
          <view class="item__tag"> 自拍 </view>
        </view>

        <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-pt-xs">
          <view class="justify-content-item tn-pl-xs">
            <view class="tn-flex tn-flex-col-center tn-flex-row-left">
              <view class="logo-pic">
                <view class="logo-image tn-pl-xs">
                  <view
                    class=""
                    :style="
                      ' background-image: url(' +
                      url +
                      '); width: 40rpx; height: 40rpx;background-size: cover; border-radius: 50%;'
                    "
                  />
                </view>
              </view>

              <view class="tn-pl-xs">
                <text class="tn-gray_text tn-text-sm clamp-text-1"
                  >夏天一笑</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.product-item {
  position: relative;
}

/* 瀑布流*/
.wallpaper__item {
  background-color: #ffffff;
  overflow: hidden;
  margin: 0 10rpx;
  margin-bottom: 40rpx;
  box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.02);
  border-radius: 10rpx;

  .item {
    /* 图片 start */
    &__image {
      width: 100%;
      height: auto;
      background-color: #ffffff;
      border: 1rpx solid #f8f7f8;
      border-radius: 10rpx;
      overflow: hidden;
    }

    /* 图片 end */

    /* 内容 start */
    &__data {
      padding: 14rpx 0rpx;
      border-radius: 20rpx !important;
    }

    /* 标题 start */
    &__title-container {
      text-align: justify;
      line-height: 38rpx;
      vertical-align: middle;
    }

    &__title {
      font-size: 30rpx;
    }

    /* 标题 end */

    /* 标签 start */
    &__tags-container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
    }

    &__tag {
      margin: 10rpx;
      color: #100b59;
      background-color: #f3f2f7;
      padding: 4rpx 14rpx 6rpx;
      border-radius: 10rpx;
      font-size: 20rpx;

      &:first-child {
        margin-left: 0rpx !important;
      }
    }

    /* 标签 end */

    /* 内容 end */
  }
}

.tag-online {
  display: inline-block;
  padding: 10rpx 14rpx 8rpx;
  margin: 20rpx 15rpx 10rpx 0;
  border-radius: 100rpx;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
