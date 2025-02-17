import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiQuoteNameClass = (props: ThemeContextType) => css`
  display: flex;
  align-items: center;
  padding: 0px;
  .avatar{
    flex-direction: column;
  }
  .quote-block{
    margin-left: 14px;
    
    .label-text{
      color: ${props.lablelDescription};
      margin: 0px;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
  
    .description{
      color: ${props.labelColor};
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  
}
`
