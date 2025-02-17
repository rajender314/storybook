import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiAddressClass = (props: ThemeContextType) => css`
  display: flex;
  align-items: center;
  padding: 0px;
  .quote-block {
    /* display: flex; */

    .label-text {
      color: ${props.lablelDescription};
      font-family: 'Inter';
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${props.lablelDescription};
      align-items: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`
