<template>
  <div class="make-step-one">
    <div class="content">
      <div class="title">第一步</div>
    </div>
    <button
      class="btn btn-primary"
      @click="nextPage"
    >
      下一步
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pageStore from '@/store/makeInfo'

export default {
  computed: {
    ...mapState({
      isAuthUser: state => state.isAuthUser
    }),
    test() {
      return pageStore.state.test
    }
  },
  mounted() {
    console.log(this.isAuthUser, this.test, pageStore)
    pageStore.commit('update', 4)
    console.log(this.test);
  },
  methods: {
    nextPage() {
      wx.navigateTo({ url: '/pages/makeStepTwo/main' })
    }
  }
}
</script>

<style lang="scss" scoped>

.make-step-one {

}
</style>
