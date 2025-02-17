import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiToastClass = (props: ThemeContextType) => css`
  /*display: flex;
  align-items: center;
  padding: 0px;*/
  &.confirmation-container {
    width: 546px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid #dee2e6;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 20px 20px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 130px;
    right: -200%;
    z-index: 999;
    transition: all 0.75s ease;
    &.show {
      right: 24px;
    }
    .close-icon-container {
      /*background-color: #f2f7ff;*/
      display: flex;
      justify-content: center;
      align-items: center;
      /*border-radius: 50%;*/
      width: 24px;
      height: 24px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    .text-container {
      flex: 1;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: #1976d2;
      }
    }
    .text-container-header {
      font-size: 20px;
      font-weight: 600;
      color: #4e586d;
      margin-bottom: 8px;
    }
    .text-container-text {
      color: #6d7992;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .success-content {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      .tick-icon {
        width: 56px;
        height: 56px;
        background-color: #e3f2fd;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .quote-block {
    /* display: flex; */

    .label-text {
      color: ${props.lablelDescription};
      font-family: 'Inter';
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${props.lablelDescription};
      align-items: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`
