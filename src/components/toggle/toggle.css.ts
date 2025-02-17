import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiToggleClass = (props: ThemeContextType, direction: 'column' | 'row' | undefined ) => css`
  display: flex;
  flex-direction: ${direction || 'row'};
  ${direction === 'row' && "align-items: center"};

  label[data-size] {
    &:hover {
      background-color: ${props.toggleBGColor} !important;
    }
    &:focus-within {
      border: 2px solid ${props.primaryBG};
    }
  }

  label[data-checked] {
    &:hover {
      background-color: ${props.success} !important;
    }
  }
`
