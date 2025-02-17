import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiCheckboxClass = (props: ThemeContextType) => css`
  .css-hk3wth-Checkbox:checked + svg {
    --checkbox-background-color: ${props.primaryBG};
    --checkbox-border-color: ${props.primaryBG};
    --checkbox-tick-color: ${props.white};
  }
  .css-163zesm-LabelText {
    font-size: 14px;
  }
 
`
