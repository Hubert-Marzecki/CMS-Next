const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
require('dotenv').config();

module.exports = {


  env: {
    API_URL: process.env.API_URL
  },



    webpack: (config, options) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
    return config
    }
}


// config webpack to resolve aliases for those elements. It will make easier to call out own compoenets end public - can expand
