<template>
  <div>
    <button @click="nextPage">next page</button>
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
    nextPages() {
      wx.navigateTo({ url: '/pages/makeStepTwo/main' })
    }
  }
}
</script>

<style>

</style>
