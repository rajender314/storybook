import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiPaginationClass = (props: ThemeContextType) => css`
  /*.css-bzi093-ButtonBase:hover {
    background-color: ${props.primaryBG};
  }
  .css-nhj80n-ButtonBase {
    background-color: ${props.primaryBG};
  }*/
  nav button[data-testid^='paging--current-'] {
    background-color: ${props.primaryBG};
  }
`
