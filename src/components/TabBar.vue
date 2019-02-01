<template>
  <div class="custom-tab-bar">
    <div
      v-for="(data, idx) in tab"
      :key="data.value"
      class="tab"
      :class="{active: data.value === active }"
      @click="handleTabClick(idx)"
    >
      <div :class="['icons', data.icon]" />
      <div>{{ data.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'favor',
    }
  },
  data() {
    return {
      tab: [
        {
          value: 'favor',
          text: '我的收藏',
          icon: 'icon-star',
        },
        {
          value: 'make',
          text: '我的制作',
          icon: 'icon-upload'
        },
        {
          value: 'info',
          text: '我的资料',
          icon: 'icon-user'
        },
      ]
    }
  },
  methods: {
    handleTabClick(idx) {
      this.$emit('switch', idx);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

.custom-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: .5rem;
  background-color: #fff;

  .tab {
    font-size: 10px;
    color: #8d9ea7;

    &.active {
      color: $font-theme;
    }
  }
}
</style>
