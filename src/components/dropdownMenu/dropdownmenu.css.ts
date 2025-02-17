import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiDropdownMenuClass = (props: ThemeContextType) => css`
 display: flex;
  align-items: center;
  padding: 0px;
  .quote-block{
    /* display: flex; */

  .label-text {
    color: ${props.lablelDescription};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
   .address-data {
     display: flex;
     color: #2E374A;
     align-items: center;
     font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
   }
}
  
`
