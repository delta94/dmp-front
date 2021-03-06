/* craco.config.js */
const CracoAntDesignPlugin = require('craco-antd');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    {
      plugin: new AntdDayjsWebpackPlugin(),
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@unit': '0.825rem',
          '@primary-color': '#1a6ffc',
          '@info-color': '#1a6ffc',
          '@error-color': '#ed3047',
          '@warning-color': '#ffb843',
          '@font-family':
            '"Fira Sans", "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
          '@font-size-base': '(1.25 * @unit)',
          '@item-active-bg': '#ffffff00',
          '@item-hover-bg': '#ffffff00',
          '@border-radius-base': '(0.5 * @unit)',
          '@btn-padding-base': '0 (2 * @unit)',
          '@btn-padding-sm': '0 (1 * @unit)',
          '@btn-padding-horizontal-sm': '@btn-padding-horizontal-base',
          '@btn-height-base': '(3.5 * @unit)',
          '@btn-height-lg': '(4.2 * @unit)',
          '@btn-height-sm': '(2.8 * @unit)',
          '@layout-body-background': '#fff',
          '@layout-header-background': '#fff',
          '@layout-sider-background': '#2f184c',
          '@menu-bg': '#ffffff00',
          '@menu-item-color': '#ffffff55',
          '@menu-item-active-bg': '#ffffff00',
          '@menu-highlight-color': '#fff',
          '@dropdown-vertical-padding': '10px',
          '@dropdown-edge-child-vertical-padding': '10px',
          '@dropdown-line-height': '32px',
          '@select-dropdown-height': '54px',
          // '': '',
          // '': '',
        },
      },
    },
  ],
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig = {
        ...webpackConfig,
        plugins: [
          ...webpackConfig.plugins.filter(element => {
            if (element.options) {
              return !element.options.hasOwnProperty('ignoreOrder');
            }
            return true;
          }),
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            moduleFilename: this.moduleFilename,
            ignoreOrder: true,
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
          }),
        ],
      };
      return webpackConfig;
    },
  },
};
