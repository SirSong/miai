/* global wx */
export default [
  'login',
  'getUserInfo',
  'showModal',
  'chooseImage',
  'downloadFile',
  'uploadFile',
  'canvasToTempFilePath',
  'saveImageToPhotosAlbum',
  'scanCode',
  'openLocation',
  'getLocation',
  'makePhoneCall',
  'getSetting',
  'requestPayment',
  'authorize',
  'getShareInfo',
  'setClipboardData',
].reduce((wxAsync, fn) => ({
  ...wxAsync,
  [fn]: (params = {}) =>
    new Promise((resolve, reject) => {
      params.success = res => resolve(res)
      params.fail = err => reject(err)
      wx[fn](params)
    }),
}), {
  getStorageSync: wx.getStorageSync,
  setStorageSync: wx.setStorageSync,
  removeStorageSync: wx.removeStorageSync,
  createMapContext: wx.createMapContext,
  showLoading: wx.showLoading,
  hideLoading: wx.hideLoading
})
