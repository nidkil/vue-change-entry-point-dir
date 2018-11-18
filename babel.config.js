if (process.env.NODE_ENV === 'test') {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true
  process.env.VUE_CLI_BABEL_TARGET_NODE = true
}

module.exports = {
  presets: [
    '@vue/app'
  ]
}
