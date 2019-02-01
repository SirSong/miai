<template>
  <div class="my-panel">
    <div class="header">
      <avator :avatar-url="userInfo.avatarUrl" />
      <div class="info">
        <div>昵称: {{ userInfo.nickName || '未授权' }}</div>
        <div>手机号: {{ phone || '未授权' }}</div>
      </div>
    </div>
    <div class="content">
      <button
        v-if="!isAuthUser"
        open-type="getUserInfo"
        @getuserinfo="authUserInfo"
        class="btn btn-primary"
      >点击认证</button>
      <button
        v-else
        class="btn disabled"
      >
        已认证
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Avator from '@/components/Avator'

import wxAsync from '@/utils/wxAsync'

export default {
  components: {
    Avator,
  },
  computed: {
    ...mapState([
      'isAuthUser',
      'userInfo',
    ])
  },
  methods: {
    ...mapMutations([
      'updateUserInfo'
    ]),
    async authUserInfo({ mp: { detail: { userInfo } } }) {
      wxAsync.showLoading({ title: '更新数据中...' })
      await this.updateUserInfo({ userInfo })
      wxAsync.hideLoading()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.my-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: .5rem;

  .header {
    display: flex;
    align-items: center;
    padding-left: .3rem;
    height: 1.22rem;
    background-color: $color-theme;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: .7rem;
      margin-left: .15rem;
      color: $font-light;
    }
  }

  .content {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    button {
      width: 2rem;
      height: .48rem;

      &.disabled {
        background-color: $disabled-color;
      }
    }
  }
}
</style>
