import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiPasswordValidator = (props: ThemeContextType) => css`
  width: 100%;
  

  p{
    display: flex;
    align-items: center;
    margin: 8px 0px;

    span{
      font-size: 12px;
      line-height: 16px;
      margin: 0px 8px;
    }
  }
  .valid svg path{
    fill:${props.passwordValide} !important;
  }
  .not-valid svg path{
    fill:${props.passwordNotValide} !important;
  }
  
`
