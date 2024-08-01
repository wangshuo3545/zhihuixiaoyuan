<script lang="ts" setup>
import { ref } from 'vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import TnIndexList from '@tuniao/tnui-vue3-uniapp/components/index-list/src/index-list.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import TnAvatar from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.vue'
import IndexListItem from './components/index-list-item.vue'
import { useGenerateListData } from './composables'
const { navBarInfo, systemScreenInfo } = useUniAppSystemRectInfo()
const { listData } = useGenerateListData()

const categoryList = [
  {
    id: '1',
    name: '消息通知',
  },
  {
    id: '2',
    name: '通讯录',
  },
]

// 当前选中的分类索引
const currentCategoryIndex = ref(0)
</script>

<template>
  <TnNavbar
    fixed
    :bottom-shadow="false"
    :placeholder="false"
    back-icon=""
    back-text=""
    home-icon=""
    home-text=""
    bg-color="#ffffff75"
    @init-finish="navbarInitFinishHandle"
  >
    <view class="navbar">
      <view class="search-operation">
        <TnIcon name="totop-fill" />
      </view>
      <view class="category">
        <TnTabs
          v-model="currentCategoryIndex"
          bg-color="transparent"
          :bottom-shadow="false"
          :bar="false"
          :scroll="false"
          height="auto"
          active-color="#080808"
          font-size="34"
        >
          <TnTabsItem
            v-for="(item, index) in categoryList"
            :key="index"
            :title="item.name"
          />
        </TnTabs>
      </view>
    </view>
  </TnNavbar>

  <view class="page">
    <view v-if="currentCategoryIndex === 0">
      <view class="category1 tn-p">
        <view class="category-item">
          <view class="icon">
            <TnAvatar url="../../../../../../static/6.png" size="lg" />
          </view>
          <view class="title">喜 欢</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnAvatar url="../../../../../../static/50.png" size="lg" />
          </view>
          <view class="title">评 论</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnAvatar url="../../../../../../static/4.png" size="lg" />
          </view>
          <view class="title">收 藏</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnAvatar url="../../../../../../static/5.png" size="lg" />
          </view>
          <view class="title">点 赞</view>
        </view>
      </view>

      <view class="page1">
        <view class="bejings tn-radius tn-mt-sm tn-p">
          <view class="swipe-item-content">
            <view class="avatar">
              <image
                src="https://q8.itc.cn/q_70/images03/20240413/6e2fab2f1ed34135be857cf8471d66f1.jpeg"
                mode="aspectFill"
              />
            </view>
            <view class="content">
              <view class="top">
                <view class="nickname">高等数学(群聊) </view>
                <view class="date tn-p-xs tn-radius">昨天12:23</view>
              </view>
              <view class="bottom">
                <view class="message">
                  <text class="tn-text-ellipsis-1">请同学们提交作业</text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <view class="bejings tn-radius tn-mt-sm tn-p">
          <view class="swipe-item-content">
            <view class="avatar">
              <image
                src="https://q7.itc.cn/q_70/images03/20240423/6d236fae5c8f44ed9b60d977f32debb7.jpeg"
                mode="aspectFill"
              />
            </view>
            <view class="content">
              <view class="top">
                <view class="nickname">开心果 </view>
                <view class="date tn-p-xs tn-radius">昨天12:28</view>
              </view>
              <view class="bottom">
                <view class="message">
                  <text class="tn-text-ellipsis-1">你好同学</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="bejings tn-radius tn-mt-sm tn-p">
          <view class="swipe-item-content">
            <view class="avatar">
              <image
                src="https://img0.baidu.com/it/u=276954453,228814154&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
                mode="aspectFill"
              />
            </view>
            <view class="content">
              <view class="top">
                <view class="nickname">夏日新 </view>
                <view class="date tn-p-xs tn-radius">昨天9:28</view>
              </view>
              <view class="bottom">
                <view class="message">
                  <text class="tn-text-ellipsis-1">你好同学</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="currentCategoryIndex === 1">
      <TnIndexList :data="listData" :sticky-offset-top="0" :height="0">
        <template #default="{ data }">
          <IndexListItem
            :avatar="data.avatar"
            :nickname="data.nickname"
            :department="data.department"
          />
        </template>
      </TnIndexList>
    </view>
    <view class="tn-tabbar-height" />
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
