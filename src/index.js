import VueMSAL from './VueMSAL'

function plugin (Vue, config) {
  Vue.use(VueMSAL, config)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

const version = '__VERSION__'

// Named exports
export {
  version
}
