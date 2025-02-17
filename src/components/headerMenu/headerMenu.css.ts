import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiHeaderMenuClass = (props: ThemeContextType) => css`
  .header-wrapper {
    width: 100%;
    background: ${props.infoColor};
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left {
    display: flex;

    .logo-container {
      padding: 16px 24px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .header-right {
    display: flex;
    gap: 16px;
    > div {
      button {
        background: #2196f3;
        padding: 0;
        span {
          color: #fff;
        }
      }
    }
    .header-dropdown-view {
      button {
        padding: 0 10px;
      }
    }
  }

  .logo img {
    width: 120px;
    height: 47px;
    padding-left: 20px;
  }

  .menu-option {
    margin-left: 20px;
    display: flex;
    align-items: center;

    .menu-item-single {
      font-size: 14px;
      line-height: 20px;
      color: #bbdefb !important;
      display: flex;
      height: 100%;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0 10px;
      transition: all 0.3s ease;
      cursor: pointer;

      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        color: #ffffff !important;
      }

      &.active {
        font-weight: bold;
        color: #ffffff !important;
        &::after {
          background-color: #f2f7ff;
        }
      }
    }

    .custom-icon {
      margin-right: 4px;
    }

    .menu-item {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;

      button {
        font-size: 14px;
        color: #bbdefb !important;
        background: none;
        padding: 0;
        font-weight: 600 !important;
      }

      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        button {
          color: #ffffff !important;
        }
      }

      &.active {
        button {
          font-weight: bold;
          color: #ffffff !important;
        }
        &::after {
          background-color: #f2f7ff;
        }
      }
    }
  }
`
