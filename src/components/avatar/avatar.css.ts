import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiAvatarClass = (props: ThemeContextType) => css`
  width: 100%;
  .css-1l72gtu-AvatarImage {
    background-color: ${props.avatarBg};
  }
  .css-ed4mf:hover::after {
    background-color: transparent !important;
  }
  .css-ed4mf:focus {
    outline: none;
    box-shadow: none;
  }
  .css-3pkws3:hover::after {
    background-color: transparent !important;
  }
  .css-3pkws3:focus {
    outline: none;
    box-shadow: none;
  }
`
