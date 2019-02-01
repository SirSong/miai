<template>
  <div class="make-panel">
    <div class="header">
      <div class="btn-group">
        <button
          class="btn btn-primary"
        >
          身份认证
        </button>
        <button
          class="btn btn-primary"
          @click="startMake"
        >开始制作</button>
      </div>
      <div class="tips">注：完成本人身份验证，制作的卡片会被更多人看到！ </div>
    </div>
    <div class="maked-list">
      <person-card
        size="large"
        edite
      />
    </div>
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard'

export default {
  components: {
    PersonCard,
  },
  methods: {
    startMake() {
      wx.navigateTo({ url: '/pages/makeStepOne/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

.make-panel {
  .header {
    width: 3.65rem;
    margin: 0 auto;
    border-bottom: 1px solid $border-color;

    .btn-group {
      display: flex;
      padding: .14rem 0 .12rem;

      button {
        width: 1.6rem;
        height: .4rem;
      }
    }

    .tips {
      margin: .13rem .15rem .12rem;
      font-size: 12px;
      color: $color-no-use;
    }
  }


  .maked-list {
    width: 3.52rem;
    margin: 0 auto;
    padding: .1rem 0;
  }
}
</style>
