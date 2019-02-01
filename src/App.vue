<script>
import { mapMutations } from 'vuex'

import wxAsync from '@/utils/wxAsync'
import { fetchOpenIdFromCode } from '@/api/wxchat'

export default {
  onLaunch() {
    wxAsync.showLoading()
    wxAsync.getSetting()
      .then(async ({ authSetting }) => {
        console.log(authSetting['scope.userInfo'])
        if (authSetting['scope.userInfo']) {
          const { userInfo } = await wxAsync.getUserInfo()
          this.updateUserInfo({ userInfo })
        }
        wxAsync.hideLoading()
      })
  },
  methods: {
    ...mapMutations([
      'updateUserInfo'
    ])
  }
}
</script>

<style lang="scss">
@import "@/style/icons.scss";
@import "@/style/index.scss";

div {
  box-sizing: border-box;
}

page {
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &.btn-primary {
    background-color: $color-theme;
    color: white;
    border: 1px solid $border-color;
  }
}



</style>
