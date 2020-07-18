const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    webpack: (config, options) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
    return config
    }
}
const withImages = require('next-images')
module.exports = withImages({})
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

// config webpack to resolve aliases for those elements. It will make easier to call out own compoenets end public - can expand
