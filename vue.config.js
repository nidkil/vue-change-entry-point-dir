const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Path(s) to clean before build
let pathsToClean = [
  'dist'
]

// Clean options to use
let cleanOptions = {
  verbose: true,
  dry: false
}

module.exports = {
  chainWebpack: config => {
    // Remove the old entry and add the new one
    config
      .entry('app')
      .clear()
      .add('./src/index.js')
    config
      .resolve
      .alias
      .set('@', path.resolve(__dirname, 'src'))
  },
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
  }
}
