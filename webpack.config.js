const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin')
var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].[hash].js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(ROOT_PATH, 'node_modules'),
                include: ROOT_PATH,
                use: {
                    loader: 'babel-loader',
                }

            },
            {
                test: /\.txt$/,
                use: 'raw-loader',
                exclude: path.resolve(ROOT_PATH, 'node_modules'),
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
                exclude: path.resolve(ROOT_PATH, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
                exclude: path.resolve(ROOT_PATH, 'node_modules'),
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }],
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts'],
        modules: [APP_PATH, 'node_modules', path.resolve(ROOT_PATH, 'public')],
    },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('1.0'),
        }),
        new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin([{
            from: ROOT_PATH + '/config.js',
            to: ROOT_PATH + '/dist'
        }]),
        // new DashboardPlugin(dashboard.setData)
    ]
};