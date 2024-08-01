<script lang="ts" setup>
import TnFooter from '@tuniao/tnui-vue3-uniapp/components/footer/src/footer.vue'
</script>

<template>
  <view class="body">
    <view class="page" style="padding-top: 160rpx">
      <!-- 用户信息 -->
      <view class="user-info">
        <view class="info-content">
          <view class="avatar">
            <image
              class="tn-image"
              src="https://q7.itc.cn/q_70/images03/20240423/6d236fae5c8f44ed9b60d977f32debb7.jpeg"
              mode="aspectFill"
            />
          </view>
          <view class="content">
            <view class="nickname">刘同学</view>
            <view class="uid">
              <view class="text">学号: 2024091456217</view>
            </view>
          </view>
        </view>
      </view>

      <view class="category">
        <view class="category-item">
          <view class="icon">
            <TnIcon name="identity-fill" color="#55aaff" size="70" />
          </view>
          <view class="title">个人信息</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="rocket-fill" color="#00C8B0" size="70" />
          </view>
          <view class="title">我的帖子</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="reload-planet-fill" color="#4CBCF2" size="70" />
          </view>
          <view class="title">我的圈子</view>
        </view>
        <view class="category-item">
          <view class="icon">
            <TnIcon name="funds-fill" color="#FFAC00" size="70" />
          </view>
          <view class="title">我的闲置</view>
        </view>
      </view>
      <view class="tn-m">
        <view class="list tn-shadow">
          <TnButton only-button open-type="contact">
            <view class="list-item">
              <view class="left">
                <view class="icon">
                  <TnIcon name="notice" color="#00C8B0" />
                </view>
                <view class="text"> 消息通知 </view>
              </view>
              <view class="right">
                <view class="icon">
                  <TnIcon name="right" />
                </view>
              </view>
            </view>
          </TnButton>
          <TnButton only-button open-type="feedback">
            <view class="list-item">
              <view class="left">
                <view class="icon">
                  <TnIcon name="star" color="#4CBCF2" />
                </view>
                <view class="text"> 我的收藏 </view>
              </view>
              <view class="right">
                <view class="icon">
                  <TnIcon name="right" />
                </view>
              </view>
            </view>
          </TnButton>
        </view>
      </view>
      <view class="tn-m">
        <view class="list tn-shadow">
          <TnButton only-button open-type="contact">
            <view class="list-item">
              <view class="left">
                <view class="icon">
                  <TnIcon name="service-simple" color="#FB6A67" />
                </view>
                <view class="text"> 在线客服 </view>
              </view>
              <view class="right">
                <view class="icon">
                  <TnIcon name="right" />
                </view>
              </view>
            </view>
          </TnButton>
          <TnButton only-button open-type="feedback">
            <view class="list-item">
              <view class="left">
                <view class="icon">
                  <TnIcon name="tip" color="#FE871B" />
                </view>
                <view class="text"> 问题反馈 </view>
              </view>
              <view class="right">
                <view class="icon">
                  <TnIcon name="right" />
                </view>
              </view>
            </view>
          </TnButton>
          <view class="list-item">
            <view class="left">
              <view class="icon">
                <TnIcon name="phone" color="#FFAC00" />
              </view>
              <view class="text"> 技术热线 </view>
            </view>
            <view class="right">
              <view class="text"> 188****8888 </view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer">
        <TnFooter :fixed="false" content="云晨科技 提供技术支持" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
