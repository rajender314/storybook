import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiIdClass = (props: ThemeContextType) => css`
  width: 100%;
  display: flex;
  align-items: center;
  .Back-main {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3f2fd;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${props.inputHoverBG};
    }
    &:focus {
      background-color: ${props.white};
    }
  }
  .label {
    margin-left: 16px;
  }
  .css-1rm3tso {
    color: #000;
  }
`
