import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiInputClass = (props: ThemeContextType) => css`
  width: 100%;
  text-align: left;
  div {
    border-style: none;
    background-color: none;
  }
  div:hover {
    background-color: ${props.white};
  }
  input {
    margin: 4px 0 8px 0;
    padding: 11px 12px 11px 14px !important;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.125rem solid ${props.inputHoverBorder};
    border-radius: 4px;
    height:36px !important;
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
