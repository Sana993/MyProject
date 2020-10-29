const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: '[name]_build.js',
        path: path.resolve(__dirname, 'prod')
    },
    module: {
        rules: [
           {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
           },
           {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
           },
           {
               test: /\.css$/,
               use: [MiniCssExtractPlugin.loader, 'css-loader']

           },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index_build.html',
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
}
