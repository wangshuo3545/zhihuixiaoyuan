<script lang="ts" setup>
import { ref } from 'vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import Consult from '../../../components/consult/index.vue'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
// 导航栏的高度
const navbarHeight = ref(0)
// 导航栏初始化完毕
const navbarInitFinishHandle = (info: NavbarRectInfo) => {
  console.log(11, info.height)
  navbarHeight.value = info.height
}
// 轮播图数据
const swiperData = [
  'https://t12.baidu.com/it/u=3644133820,190347652&fm=30&app=106&f=JPEG?w=640&h=427&s=B9F8F7A30B62FECE1626E77A0300D07E',
  'https://img1.baidu.com/it/u=3325325771,345372266&fm=253&fmt=auto&app=138&f=JPEG?w=553&h=300',
  'https://4557630.s21i.faiusr.com/2/1/ABUIABACGAAg49z4lgYo0O-75gIwgEA4qBU.jpg',
]

const currentSwiperIndex = ref(0)

// 当前选中的标签索引
const currentTabsIndex = ref(0)

// 选项卡数据
const tabsData = [
  {
    text: '校园通知',
  },
  {
    text: '社团活动',
  },
  {
    text: '校园圈子',
  },
  {
    text: '校园咸鱼',
  },
  {
    text: '校园兼职',
  },
]
</script>

<template>
  <TnNavbar
    fixed
    :bottom-shadow="false"
    :placeholder="false"
    frosted
    back-icon=""
    back-text=""
    home-icon=""
    home-text=""
    @init-finish="navbarInitFinishHandle"
  >
    <view class="navbar">
      <view class="search-operation">
        <TnIcon name="building" />
      </view>
      <view class="category">
        华中科技大学
        <TnIcon name="right" />
      </view>
    </view>
  </TnNavbar>
  <view class="page">
    <view class="tn-m swiper-container">
      <view class="swiper-item">
        <view class="swiper-wrapper">
          <TnSwiper :data="swiperData" loop autoplay :interval="10000">
            <template #default="{ data, active }">
              <view class="swiper-data animation" :class="[{ active }]">
                <image class="image" :src="data" mode="aspectFill" />
              </view>
            </template>
          </TnSwiper>
        </view>
      </view>
    </view>
    <view class="tn-m">
      <view class="category1">
        <view class="category-item">
          <view class="icon">
            <TnIcon name="bankcard-fill" color="#aaaaff" size="60" />
          </view>
          <view class="title">校园卡</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="payment-wechat" color="#55aaff" size="60" />
          </view>
          <view class="title">云缴费</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="cardbag-fill" color="#00b3b3" size="60" />
          </view>
          <view class="title">我的饭卡</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="book" color="#aa55ff" size="60" />
          </view>
          <view class="title">课程表</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="education" color="#55aaff" size="60" />
          </view>
          <view class="title">考试成绩</view>
        </view>
      </view>
      <view class="category1">
        <view class="category-item">
          <view class="icon">
            <TnIcon name="company-fill" color="#5555ff" size="60" />
          </view>
          <view class="title">图书馆</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="mansion" color="#55aaff" size="60" />
          </view>
          <view class="title">体育馆</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="image-text-fill" color="#ff55ff" size="60" />
          </view>
          <view class="title">我的请假</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="trophy-fill" color="#ff5500" size="60" />
          </view>
          <view class="title">社团活动</view>
        </view>

        <view class="category-item">
          <view class="icon">
            <TnIcon name="menu-circle-fill" color="#55aaff" size="60" />
          </view>
          <view class="title">全部</view>
        </view>
      </view>
    </view>

    <view class="tn-m title-container">
      <view class="title-item">
        <TnTitle
          size="lg"
          title="我的学习计划"
          sub-title="My Study Plan"
          mode="subTitle"
          color="#444444"
        />
      </view>
    </view>
    <view class="tn-ml">
      <scroll-view class="scroll-view" scroll-x>
        <view class="product-item">
          <view class="tn-body tn-gradient-bg__blue-light tn-bg-image">
            <view class="tn-text-bold tn-text-md"
              >下一节课：马克思主义原理</view
            >
            <view class="tn-text-md tn-pt-sm tn-gray-dark_text"
              >距离上课还有2小时</view
            >
            <view class="tn-text-md tn-pt-sm tn-gray-dark_text">
              <TnIcon name="location-fill" color="#55aaff" />教学楼A区305室
            </view>
          </view>
        </view>
        <view class="product-item">
          <view class="tn-body tn-gradient-bg__bluepurple-light tn-bg-image">
            <view class="tn-text-bold tn-text-md">去图书馆学习</view>
            <view class="tn-text-md tn-pt-sm tn-gray-dark_text"
              >距离预约还有1.5小时</view
            >
            <view class="tn-text-md tn-pt-sm tn-gray-dark_text">
              <TnIcon name="location-fill" color="#55aaff" />图书馆3楼3014座
            </view>
          </view>
        </view>
        <view class="product-item">
          <view class="tn-body tn-gradient-bg__cool-14 tn-bg-image">
            <view class="tn-text-bold tn-text-md">月考考试</view>
            <view class="tn-text-md tn-pt-sm tn-white_text"
              >距离月考还有4天</view
            >
            <view class="tn-text-md tn-pt-sm tn-white_text">
              <TnIcon name="time" color="#ffffff" />2024-06-15 8:30
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- <view class=" ">
			<view class="tabs-container">
				<view class="tabs-item">
					<TnTabs v-model="currentTabsIndex" :bar="false" :bottom-shadow="false" active-color="#66B3FF">
						<TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
					</TnTabs>
				</view>
			</view>
		</view> -->
    <view class="tn-mt tn-ml tn-mr title-container">
      <view class="title-item">
        <TnTitle
          size="lg"
          title="社团活动"
          sub-title="Club Activities"
          mode="subTitle"
          color="#444444"
        />
      </view>
    </view>
    <Consult />

    <!-- <view class="tn-tabbar-height" /> -->
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
