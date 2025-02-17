import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiTimePickerClass = (props: ThemeContextType) => css`
  width: 100%;
  .css-1a7rm5r-control {
    background-color: ${props.primaryDisabledBG};
    border: 2px solid ${props.primaryColor};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    height:48px;
    border-radius:4px;
    &:hover {
      background: ${props.inputHoverBG};
      border: 2px solid ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border: 2px solid ${props.inputFocusBorder};
    }
  }
  .css-qyxenl-control {
    height:48px;
    border-radius:4px;
    &:hover {
      background: ${props.inputHoverBG};
      border: 2px solid ${props.inputHoverBorder};
    }
    margin: 4px 0px 8px 0px;
    background: ${props.white};
    border: 2px solid ${props.inputFocusBorder};
    font-size: 14px;
  }

  .css-5ww0s7 .css-1a7rm5r-control {
    font-size: 14px;
  }
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${props.inputHoverBG};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${props.inputFocusBorder};
    color: ${props.white};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${props.inputFocusBorder};
    color: ${props.white};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-otwtzu-option{
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-otwtzu-option:active {
    background-color: ${props.inputHoverBG};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-12fvnfc-option:active {
    background-color: ${props.inputHoverBG};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
`
