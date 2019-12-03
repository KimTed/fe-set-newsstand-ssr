const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');

const browserConfig = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'  //SSR 할때 /dist/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader : 'babel-loader',
                    options : {
                        configFile : path.resolve(__dirname, './.babelrc.client.js')
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/shared/index.html' }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new webpack.DefinePlugin({
            __IS_BROWSER__ : true
        })
    ],
    optimization: {
        splitChunks: {
            chunks:'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                },
            }
        }
    }

}

const serverConfig = {
    entry: "./src/server/index.js",
    target:'node',
    externals : [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "dist-server"),
        filename: "index.js",
        publicPath: '/dist/' 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader : 'babel-loader',
                    options : {
                        configFile : path.resolve(__dirname, './.babelrc.server.js')
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            __IS_BROWSER__ : false 
        })
    ],
}

//module.exports = [browserConfig, serverConfig]
module.exports = browserConfig