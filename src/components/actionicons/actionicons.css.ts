import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiActionIconClass = (props: ThemeContextType) => css`
  background: transparent;
  border: none;
  outline: none;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  svg path{
    fill: ${props.primaryBG};
  }

  .icon-text{
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-left:9px;
    color: ${props.primaryBG};
  }
  
`
