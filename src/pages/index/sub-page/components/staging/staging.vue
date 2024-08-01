<script lang="ts" setup>
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
</script>

<template>
  <TnNavbar
    fixed
    :bottom-shadow="false"
    :placeholder="false"
    frosted
    bg-color="#ffffff00"
    back-icon=""
    back-text=""
    home-icon=""
    home-text=""
  >
    <view class="navbar">
      <view class="category tn-text-bold tn-text-lg tn-pb"> 工作台 </view>
    </view>
  </TnNavbar>
  <view class="mine-fixed" />
  <view class="page">
    <view class="page-container">
      <view class="tn-w-full tn-flex tn-flex-row">
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="folder-fill" color="#A5AFFF" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">共享文件</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="moments" color="#6DD6C7" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">朋友圈素材</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="inventory" color="#82CDFF" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">获客文章</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="image-fill" color="#FA9FA7" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">获客海报</text>
          </view>
        </view>
      </view>
      <view class="tn-w-full tn-flex tn-flex-row tn-mt">
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="video-square-fill" color="#4DC2FE" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">获客视频</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="write-feather-fill" color="#F6CE8F" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">获客表单</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="plane-fill" color="#8691F3" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">微传单</text>
          </view>
        </view>
        <view class="flex-item tn-flex-1 tn-flex-column">
          <view class="icon4__item--icon tn-flex">
            <TnIcon name="gift" color="#FD7C88" />
          </view>
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">营销活动</text>
          </view>
        </view>
      </view>

      <view class="tn-m tn-body_bg tn-p tn-shadow-sm tn-radius">
        <view class="tn-mb">
          <text class="tn-text-lg">订单数据</text>
        </view>
        <view class="tn-w-full tn-flex tn-flex-row">
          <view class="flex-item tn-flex-1 tn-flex-column">
            <view class="tn-text-bold tn-text-xl">1808</view>
            <view class="tn-text-md tn-ml-sm tn-mt-xs">本月订单</view>
          </view>
          <view class="flex-item tn-flex-1 tn-flex-column">
            <view class="tn-text-bold tn-text-xl">1105</view>
            <view class="tn-text-md tn-ml-sm tn-mt-xs">待发货</view>
          </view>
          <view class="flex-item tn-flex-1 tn-flex-column">
            <view class="tn-text-bold tn-text-xl">254</view>
            <view class="tn-text-md tn-ml-sm tn-mt-xs">待收货</view>
          </view>
        </view>
      </view>

      <view class="tn-m tn-body_bg tn-p tn-shadow-sm tn-radius">
        <view class="tn-mb">
          <text class="tn-text-lg">基本功能</text>
        </view>

        <view class="category">
          <view class="category-item">
            <view class="icon">
              <TnIcon name="statistics" />
            </view>
            <view class="title">数据看板</view>
          </view>
          <view class="category-item">
            <view class="icon">
              <TnIcon name="expand" />
            </view>
            <view class="title">任务中心</view>
          </view>
          <view class="category-item">
            <view class="icon">
              <TnIcon name="flag" />
            </view>
            <view class="title">标准营销</view>
          </view>
          <view class="category-item">
            <view class="icon">
              <TnIcon name="video-square" />
            </view>
            <view class="title">直播</view>
          </view>
        </view>
      </view>

      <view class="tn-m tn-body_bg tn-p tn-shadow-sm tn-radius">
        <view class="tn-mb">
          <text class="tn-text-lg">今日访客</text>
        </view>
        <view v-for="i in 3" :key="i" class="tn-mb-xs">
          <view class="swipe-item-content tn-mb">
            <view class="avatar">
              <image
                src="https://img2.baidu.com/it/u=3904576940,647717226&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
                mode="aspectFill"
              />
            </view>
            <view class="content">
              <view class="top">
                <view class="nickname">刘亚盟 </view>
                <view class="date">7月2日</view>
              </view>
              <view class="bottom">
                <view class="message">
                  <text class="tn-text-ellipsis-1"> 查看了商品 浏览2次 </text>
                </view>
              </view>
            </view>
          </view>
          <view class="tn-strip-bottom-min tn-mt tn-mb" />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
