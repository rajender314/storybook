import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiDateTimePickerClass = (props: ThemeContextType) => css`
  width: 100%;
  /*.css-e1g8km {
    background-color: ${props.primaryDisabledBG};
    border: 2px solid ${props.primaryColor};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
      background: ${props.inputHoverBG};
      border: 2px solid ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border: 2px solid ${props.inputFocusBorder};
    }
  }*/
  /*.pi-date-time-picker {*/
  & > div {
    border: 2px solid ${props.primaryColor};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    border-radius: 4px;
    height: 36px;
    align-items: center;
    background-color: ${props.fieldBgColor};
    &:hover {
      background: ${props.white};
      border: 2px solid ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border: 2px solid ${props.inputFocusBorder};
    }
  }
  /*}*/

  .date-time-picker-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
      label {
        color: #4e586d;
      }
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  .css-18vb16q {
    margin: 4px 0px 8px 0px;
    background: ${props.white};
    border: 2px solid ${props.inputFocusBorder};
    font-size: 14px;
    border-radius: 4px;
  }
  .css-mqv3ay-Date[data-focused] {
    border: 1px solid #134c85;
    background-color: #134c85;
    color: #fff;
  }
  .css-mqv3ay-Date[data-today] {
    background-color: ${props.inputHoverBG};
    border: 1px solid ${props.inputHoverBG};
    color: ${props.primaryBG};
  }
  .css-mqv3ay-Date[data-today]::after {
    display: none;
  }
  .css-mqv3ay-Date[data-prev-selected] {
    background-color: #fff;
  }
  .css-mqv3ay-Date[data-selected] {
    background-color: #134c85;
    color: #fff;
    border: 1px solid #134c85;
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
  .css-1k3jsfu-control {
    min-height: 48px;
  }
  .css-v77w53-control {
    min-height: 48px;
  }
  .css-otwtzu-option {
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
