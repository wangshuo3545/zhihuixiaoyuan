<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnGraphicCard from 'tnuiv3p-tn-graphic-card/index.vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import TnCommentList from 'tnuiv3p-tn-comment-list/index.vue'
import TnInput from '@tuniao/tnui-vue3-uniapp/components/input/src/input.vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import { useCommentList } from './composables'
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

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

const {
  commentListRef,
  commentData,
  openReplyPopup,
  replyContent,
  replyCommentNickname,
  showMoreClickHandle,
  replyClickHandle,
  replyDeleteHandle,
  replyCommentClickHandle,
} = useCommentList()
</script>

<template>
  <TnNavbar fixed :bottom-shadow="true" :placeholder="true">
    发布详情
  </TnNavbar>
  <view class="graphic-card-container tn-gray-light_bg">
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
        active-like
      >
        <template #briefOperation>
          <view class="custom-brief-operation">关注</view>
        </template>
      </TnGraphicCard>
    </view>

    <view class="graphic-card-item tn-white_bg">
      <view class="tn-comment-list-container">
        <TnCommentList
          ref="commentListRef"
          :data="commentData"
          @show-more="showMoreClickHandle"
          @reply="replyClickHandle"
          @delete="replyDeleteHandle"
        />
      </view>

      <TnPopup v-model="openReplyPopup" open-direction="center" width="90%">
        <view class="reply-container">
          <TnInput
            v-model="replyContent"
            type="textarea"
            :placeholder="`回复${replyCommentNickname}:`"
            height="230"
            :focus="openReplyPopup"
          />
          <view class="tn-flex justify-end tn-mt">
            <TnButton @click="replyCommentClickHandle">回 复</TnButton>
          </view>
        </view>
      </TnPopup>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
