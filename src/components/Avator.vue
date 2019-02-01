<template>
  <div
    class="avator"
    :class="[size]"
  >
    <img
      v-if="avatarUrl"
      :src="avatarUrl"
      @load="imgLoad"
    />
    <div
      v-else
      class="default"
    >
      <div class="icons icon-user-avator" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal' // ['large']
    }
  },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    imgLoad() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.avator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background-color: #7ddddc;
  overflow: hidden;

  &.large {
    width: .85rem;
    height: .85rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .default {
    color: $color-no-use;

    .icons {
      font-size: .6rem;
    }
  }
}
</style>
