import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiBreadCrumbClass = (props: ThemeContextType) => css`
  width: 100%;
  .css-1isvw35-ButtonBase {
    color: ${props.breadCrumbColor};
  }
  .css-1isvw35-ButtonBase:hover {
    text-decoration: none;
    color: #2196f3 !important;
  }
  .css-1isvw35-ButtonBase:active {
    background: none;
    color: #1976D2 !important;
}
`
