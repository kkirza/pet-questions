const path = require('path')
const HTMLPlugin = require('html-webpack-plugin') // в HTML public автоматически добавляет <script> нужных js файлов из папки src
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // удаляет старые версии захешированных файлов в папке public
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin( {
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}