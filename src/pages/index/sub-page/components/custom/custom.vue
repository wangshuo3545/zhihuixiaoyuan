<script lang="ts" setup>
import { ref } from 'vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import TnGraphicCard from 'tnuiv3p-tn-graphic-card/index.vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'
import TnListItem from '@tuniao/tnui-vue3-uniapp/components/list/src/list-item.vue'
// 导航栏的高度
const navbarHeight = ref(0)
// 导航栏初始化完毕
const navbarInitFinishHandle = (info: NavbarRectInfo) => {
  // console.log(11, info.height)
  navbarHeight.value = info.height
}

const categoryList = [
  {
    id: '1',
    name: '校园广场',
  },
  {
    id: '2',
    name: '圈子话题',
  },
]

// 当前选中的分类索引
const currentCategoryIndex = ref(0)

const graphicCardData = {
  id: 1,
  avatar:
    'https://k.sinaimg.cn/n/sinakd20114/448/w1024h1024/20240308/bf4d-05b1d259c4eb1d1b792b5f8e40c34b3e.jpg/w700d1q75cms.jpg',
  title: '图鸟组件',
  description: '2023年06月20日',
  tags: ['酷炫', '简约', 'UI组件'],
  content:
    '图鸟UI组件库是基于uniapp开发的组件库，主打酷炫、简洁、易用，是一款轻量、全面可靠的跨平台移动端组件库。现vue3版本已全新发布，欢迎大家使用。',
  images: [
    'https://resource.tuniaokj.com/images/album/xiong1.jpg',
    'https://resource.tuniaokj.com/images/advertise/1.jpg',
    'https://resource.tuniaokj.com/images/advertise/3.jpg',
    'https://resource.tuniaokj.com/images/album/xiong2.jpg',
    'https://resource.tuniaokj.com/images/album/xiong3.jpg',
  ],
  hotCount: 999,
  viewCount: 245,
  commentCount: 99,
  likeCount: 888,
  viewUserAvatars: [
    'https://resource.tuniaokj.com/images/avatar/default/1.png',
    'https://resource.tuniaokj.com/images/avatar/default/2.png',
    'https://resource.tuniaokj.com/images/avatar/default/3.png',
    'https://resource.tuniaokj.com/images/avatar/xiong.jpg',
    'https://resource.tuniaokj.com/images/avatar/default/4.png',
    'https://resource.tuniaokj.com/images/avatar/default/5.png',
    'https://resource.tuniaokj.com/images/avatar/default/6.png',
    'https://resource.tuniaokj.com/images/avatar/default/7.png',
    'https://resource.tuniaokj.com/images/avatar/default/8.png',
  ],
}
// 用于头像组数据
const avatarList: AvatarList[] = [
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/1.png',
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/2.png',
    badge: true,
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/3.png',
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/4.png',
    badge: true,
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/5.png',
  },
]
const bloggerList = [
  {
    id: 0,
    type: 'image',
    name: '表白墙',
    text: '629人关注',
    url: 'https://img.mp.itc.cn/upload/20170611/3880a840ca9c413bbdd20a20caf25a33_th.jpg',
  },
  {
    id: 1,
    type: 'image',
    name: '二手市场',
    text: '688人关注',
    url: 'https://img2.baidu.com/it/u=604831212,4041709668&fm=253&fmt=auto&app=138&f=JPEG?w=798&h=449',
  },
  {
    id: 2,
    type: 'image',
    name: '校园生活',
    text: '552人关注',
    url: 'https://img0.baidu.com/it/u=4030706186,765017001&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=1035',
  },
  {
    id: 3,
    type: 'image',
    name: '兼职专区',
    text: '105人关注',
    url: 'https://www.hbgreen.com.cn/img/89/49/89886f6df3e9937e-2092546.jpg',
  },
  {
    id: 4,
    type: 'image',
    name: '学习考试',
    text: '387人关注',
    url: 'https://img2.baidu.com/it/u=706807200,730618539&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
  },
  {
    id: 5,
    type: 'image',
    name: '热血动漫',
    text: '643人关注',
    url: 'https://pic1.zhimg.com/v2-ee2d220fa7351c238237a45dbfc876b7_r.jpg?source=1940ef5c',
  },
]
const navDemoPage = () => {
  tnNavPage('/demo-pages/graphic-card/index', 'navigateTo').catch(() => {})
}
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
        <TnIcon name="reload-planet-fill" />
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
      <view class="graphic-card-container tn-gray-light_bg">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 1)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            tag-text-color="#55aaff"
            tag-bg-color="tn-gradient-bg__blue-light"
            @more-click="navDemoPage"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 2)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            tag-text-color="#55aaff"
            tag-bg-color="tn-gradient-bg__blue-light"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 3)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            tag-text-color="#55aaff"
            tag-bg-color="tn-gradient-bg__blue-light"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 4)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            tag-text-color="#55aaff"
            tag-bg-color="tn-gradient-bg__blue-light"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            tag-text-color="#55aaff"
            tag-bg-color="tn-gradient-bg__blue-light"
          />
        </view>
      </view>
    </view>
    <view v-if="currentCategoryIndex === 1">
      <view class="tn-m title-container">
        <view class="title-item">
          <TnTitle
            size="lg"
            title="精选圈子"
            sub-title="Selected Circle"
            mode="subTitle"
            color="#222222"
          />
        </view>
      </view>
      <view class="tn-m">
        <!-- 方式16 start-->
        <view class="tn-flex tn-flex-wrap">
          <block v-for="(item, index) in bloggerList" :key="index">
            <view class="tn-mb" style="width: 33.3%" @click="tn('')">
              <view
                class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"
              >
                <view class="tn-radius tn-padding-sm">
                  <view
                    class="image-pic"
                    :style="'background-image:url(' + item.url + ')'"
                  >
                    <view class="image-circle" />
                  </view>
                  <view class="tn-text-center tn-text-bold tn-pt-xs">{{
                    item.name
                  }}</view>
                  <view
                    class="tn-text-center tn-text-xs tn-gray-dark_text tn-pt-xs"
                  >
                    {{ item.text }}
                  </view>
                </view>
              </view>
            </view>
          </block>
        </view>
        <!-- 方式16 end-->
      </view>
      <view class="tn-m title-container">
        <view class="title-item">
          <TnTitle
            size="lg"
            title="热门话题"
            sub-title="Hot Topic"
            mode="subTitle"
            color="#222222"
          />
        </view>
      </view>
      <view class="tn-m">
        <view class="list-container tn-bg-image">
          <view class="list-item">
            <TnListItem
              right-icon="right"
              custom-class="list-first-item"
              bg-color="#ffffff00"
              right-icon-color="#333"
            >
              <view class="list-content">
                <view class="icon tn-gradient-bg__cool-14 tn-white_text">
                  <TnIcon name="fire-fill" />
                </view>
                <view class="text">情感与社交</view>
              </view>
            </TnListItem>
          </view>
        </view>
        <view class="list-container tn-bg-image">
          <view class="list-item">
            <TnListItem
              right-icon="right"
              custom-class="list-first-item"
              bg-color="#ffffff00"
              right-icon-color="#333"
            >
              <view class="list-content">
                <view class="icon tn-gradient-bg__cool-13 tn-white_text">
                  <TnIcon name="eat-west-fill" />
                </view>
                <view class="text">饮食文化</view>
              </view>
            </TnListItem>
          </view>
        </view>
        <view class="list-container tn-bg-image">
          <view class="list-item">
            <TnListItem
              right-icon="right"
              custom-class="list-first-item"
              bg-color="#ffffff00"
              right-icon-color="#333"
            >
              <view class="list-content">
                <view class="icon tn-gradient-bg__cool-7 tn-white_text">
                  <TnIcon name="rocket-fill" />
                </view>
                <view class="text">课外活动</view>
              </view>
            </TnListItem>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
