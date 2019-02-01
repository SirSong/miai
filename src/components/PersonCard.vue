<template>
  <div
    class="person-card"
    :class="{ shadow }"
  >
    <div class="content">
      <avator :size="size" />
      <div class="content-info">
        <div class="content-line">
          <div class="name">王美丽</div>
          <div class="icon-opt">
            <div
              class="icons"
              :class="[edite ? 'icon-edit' : 'icon-heart']"
              @click="handleIconClick"
            />
          </div>
        </div>
        <div class="content-line">
          <div>25岁</div>
          <div>属鸡</div>
        </div>
        <div class="content-line">
          <div>身高1米72</div>
          <div>体重132斤</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>镇中李铁梅老师的女儿</div>
      <div>由张大婶录入</div>
    </div>
  </div>
</template>

<script>
import avator from '@/components/Avator'

export default {
  components: {
    avator,
  },
  props: {
    size: {
      type: String,
      default: 'normal', // ['large']
    },
    edite: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    handleIconClick() {
      this.$emit('icon-click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.person-card {
  width: 3.52rem;
  height: 1.42rem;
  padding: .2rem .12rem .1rem .18rem;
  font-size: 14px;
  border: 1px solid $border-color;
  border-radius: .04rem;
  background-color: #fff;

  &.shadow {
    box-shadow: 1px 1px .35rem 0 $color-theme;
  }

  .content {
    display: flex;

    .content-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1 0 auto;
      margin-left: .1rem;

      .content-line {
        display: flex;
        justify-content: space-between;

        div {
          width: 50%;
          color: $font-light;
        }

        .icon-opt {
          .icons {
            float: right;
            width: .3rem;
            font-size: 20px;
            color: $color-primary;
          }
        }

        .name {
          color: $font-normal;
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
    color: $font-theme-light;

    div {
      &:last-child {
        font-size: 12px;
      }
    }
  }
}
</style>
