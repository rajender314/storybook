import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiSearchClass = (props: ThemeContextType) => css`
  width: 100%;
  text-align: left;
  position: relative;
  /*width: 50%;*/
  &.new-global-search {
    display: flex;
    align-items: center;
    background: #f7faff;
    border: 0.125rem solid #d0daec;
    height: 40px;
    border-radius: 4px;
    /*div > input {
      border: unset;
      background: unset;
    }*/
    > div:nth-child(2) {
      background-color: unset !important;
      border: unset !important;
    }
    .Cross-svg {
      display: none;
    }
    .Search-svg {
      position: absolute;
      left: 12px;
      top: calc(50% - 0.6em);
      color: #5c5f73;
    }
    .Cross-svg {
      position: absolute;
      right: 15px;
      top: calc(50% - 0.6em);
      color: #5c5f73;
      cursor: pointer;
    }
  }
  .close-icon-container {
    background-color: #baccea;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    svg path {
      fill: #fff;
    }
  }
  div {
    border-style: none;
    background-color: none;
  }
  .div:hover {
    background-color: ${props.white};
  }
  input {
    margin: 4px 0 8px 0;
    padding: 13px 12px 11px 35px !important;
    justify-content: center;
    align-items: center;
    height: 40px !important;
    background: unset !important;
    border: unset !important;
    box-sizing: border-box;
    border-radius: 4px;
    &:hover {
      background-color: ${props.inputHoverBG};
      border: 0.125rem solid ${props.inputHoverBorder};
    }
    &:focus {
      background-color: ${props.white};
      border: 0.125rem solid ${props.inputFocusBorder};
    }
  }
  .error > input {
    border: 0.125rem solid ${props.error};
  }

  .success > input {
    border: 0.125rem solid ${props.success};
  }
`
