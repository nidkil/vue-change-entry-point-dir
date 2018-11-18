export default {
  install: function (Vue, options) {
    Vue.prototype.$msal = {
      test: 'TEST'
    }
  }
}
