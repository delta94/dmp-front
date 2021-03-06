import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: "Fira Sans", "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }

  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none;
    overflow-x: hidden;
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: solid 4px #ff6d7f;
  }

  /* .ant-menu-item .anticon, .ant-menu-submenu-title .anticon {
    position: relative;
    top: -3px;
  } */

  .anticon {
    position: relative;
    top: -3px;
  }

  .ant-dropdown-menu {
    padding: 10px 10px;
  }

  .ant-form-item .anticon {
    position: relative;
    top: -1px;
  }

  .ant-input-prefix {
    margin-right: 8px;
  }

  .ant-modal-title {
    font-size: 1.2rem;
  }

  .ant-modal-close-x {
    font-size: 18px;
  }

  .ant-form-item-control-input .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: auto;
    padding: 8px 11px;
  }

  .ant-list-vertical .ant-list-item {
    margin-bottom: 20px;
  }

  .ant-list-split .ant-list-item {
    border-bottom: 1px solid #ddd;
  }

  .d-block {
    display: block;
    width: 100%;
  }

  .ant-timeline {
    display: block;
    width: 100%;
  }

  .ant-page-header {
    padding: 16px 0px !important;
  }

  .mt-0 {
    margin-top: 0px;
  }

  .mt-1 {
    margin-top: 10px;
  }

  .mt-2 {
    margin-top: 20px;
  }

  .mt-4 {
    margin-top: 40px;
  }

  .mb-0 {
    margin-bottom: 0px;
  }

  .mb-1 {
    margin-bottom: 10px;
  }

  .mb-2 {
    margin-bottom: 20px;
  }

  .pb-1 {
    padding-bottom: 10px;
  }

  .pb-2 {
    padding-bottom: 20px;
  }

  .ant-timeline-item-content {
    top: -7px;
  }

  a.ant-btn {
    line-height: 2.5715 !important;
  }

  .ant-form-item-control-input
  .ant-select-single:not(.ant-select-customize-input)
  .ant-select-selector
  {
    padding: 12px 11px;
  }

  .ant-list-vertical .ant-list-item-meta-title {
    font-size: 16px !important;
  }

  .ant-select-selection-search {
    display: flex;
    align-items: center;
  }

  .border-b {
    border-bottom: solid 1px #eee;
  }

  .text-right {
    text-align: right;
  }
`;
