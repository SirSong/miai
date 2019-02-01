<template>
  <div class="wrap">
    <div
      class="main"
      :class="selectedTab"
    >
      <div class="panel">
        <favor-panel />
      </div>
      <div class="panel">
        <make-panel />
      </div>
      <div class="panel">
        <my-panel />
      </div>
    </div>
    <tab-bar
      :active="selectedTab"
      @switch="switchTab"
    />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import FavorPanel from '@/components/FavorPanel'
import MakePanel from '@/components/MakePanel'
import MyPanel from '@/components/MyPanel'

export default {
  components: {
    TabBar,
    FavorPanel,
    MyPanel,
    MakePanel
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  beforeMount() {
    this.selectedTab = 'favor'
    console.log(getApp(), this)
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = ['favor', 'make', 'user'][tab]
      this.active = tab;
    },
  },
}
</script>

<style lang="scss">
.wrap {
  height: 100%;
}

.main {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 300%;
  height: 100%;
  transition: all .3s ease-in-out;

  &.favor {
    left: 0;
  }

  &.make {
    left: -100%;
  }

  &.user {
    left: -200%;
  }

  .panel {
    width: calc(100% / 3);
    height: calc(100% - .5rem);
    background-color: #e0ebf5;
  }
}
</style>
