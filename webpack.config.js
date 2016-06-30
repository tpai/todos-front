var webpack = require('webpack');
var path = require('path');
require('dotenv').config();

module.exports = {
    devTool: 'source-map',
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: 'www/',
        colors: true,
        inline: true,
        hot: true
    },
    entry: {
      'www/bundle': 'entry'
    },
    resolve: {
        root: [ path.resolve('./src') ],
        extensions: ['', '.js', '.vue']
    },
    output: {
        path: './',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel"]
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
            __API_ADDRESS__: JSON.stringify(process.env.API_ADDRESS || 'http://localhost:8080')
        })
    ]
}
