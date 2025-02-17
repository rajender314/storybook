import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiLeftMenuClass = (props: ThemeContextType) => css`
  width: 100%;
  background: ${props.white};

  .left-menu {
    font-size: 14px;
    line-height: 20px;
  }

  .menu-option {
    width: 100%;
    height: 48px;

    .menu-item-single {
      flex-direction: row;
      padding: 14px 0px 14px 24px;
      color: ${props.textColor};
      /*border-radius: 4px;*/
      font-size: 14px;
      line-height: 20px;
      color: ${props.textColor};
      background: ${props.leftmenuBg};
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0;
      transition: all 0.3s ease;
      cursor: pointer;
      gap: 14px;
      border-radius: 4px;
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
        font-weight: 700;
        /*color: ${props.leftmenuHoverColor};*/
        background: ${props.leftmenuHoverBg};
      }

      &.active {
        font-weight: 700;
        color: ${props.leftmenuHoverColor};
        background: ${props.leftmenuHoverBg};
      }

      .custom-icon {
        margin: 1px 2px 0 0;
      }
    }

    .menu-item {
      flex-direction: row;

      height: 100%;
      border-radius: 4px;
      font-size: 14px;
      line-height: 20px;
      color: ${props.textColor};
      background: ${props.leftmenuBg};
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;

      button {
        padding: 14px 0px 14px 24px;
        font-size: 14px;
        color: ${props.textColor};
        background-color: transparent;
        width: 100%;
        height: 100%;
        isplay: flex;
        align-items: center;
        span {
          color: ${props.textColor};
          text-align: left;
        }
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
        color: ${props.leftmenuHoverColor};
        background: ${props.leftmenuHoverBg};
        button {
          font-weight: 700;
          color: ${props.leftmenuHoverColor};
          span {
            color: ${props.leftmenuHoverColor};
            text-align: left;
          }
        }
      }

      &.active {
        button {
          font-weight: 700;
          color: ${props.leftmenuHoverColor};
          background: ${props.leftmenuHoverBg};
          span {
            color: ${props.leftmenuHoverColor};
            text-align: left;
          }
        }
        &::after {
          background-color: ${props.leftmenuHoverBg};
        }
      }

      .bottom-start {
        width: 100%;
      }
    }
  }
`
