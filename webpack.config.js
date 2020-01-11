const webpack = require('webpack');
const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {GenerateSW} = require('workbox-webpack-plugin');
let mode;

const assets = [
  {
    from: 'src/assets',
    to: 'assets/'
  },
  {
    from: 'public/img',
    to: 'img/'
  }
];
const prodPlugins = [
  new WebpackPwaManifest({
    name: 'LitElement - Slick-Router Starter',
    short_name: 'LitElement-Starter',
    description: '',
    background_color: '#fff',
    theme_color: '#2196f3',
    start_url: "/",
    icons: [
      {
        src: resolve('src/assets/icon.png'),
        sizes: [192, 512] // multiple sizes
      }
    ]
  }),
  new GenerateSW({
    swDest: 'sw.js',
    include: [/\.html$/, /\.js$/, /\.css$/, /\.jpg$/, /\.png$/, /\.ico$/, /\.json$/],
    runtimeCaching: [{
      urlPattern: new RegExp('https://i.imgur.com'),
      handler: 'StaleWhileRevalidate'
    }]
  }),
];

const devPlugins = [
  new CleanWebpackPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }
  }),
  new CopyWebpackPlugin([...assets], {
    ignore: ['.DS_Store']
  })
];


module.exports = ({mode, presets}) => {

  let activePlugins = [];
  if (mode === "production") {
    activePlugins = [...devPlugins, ...prodPlugins];
  } else if (mode === "development") {
    activePlugins = devPlugins;
  }

  return webpackMerge(
    {
      mode,
      output: {
        filename: '[name].[chunkhash:8].js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              plugins: [
                ["@babel/plugin-proposal-decorators", {"legacy": true}],
                ["@babel/plugin-proposal-class-properties", {"loose": true}],
                '@babel/plugin-syntax-dynamic-import',

              ],
              presets: [
                [
                  '@babel/env',
                  {
                    targets: [
                      'last 1 Chrome major versions',

                    ],
                    useBuiltIns: false,
                  },
                ],
              ],
            }
          }
        ]
      },
      plugins: activePlugins
    },
  );
};
