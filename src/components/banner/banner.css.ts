import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'
import {PiAppearanceType} from './banner'



function getAppearanceStyles(appearance: PiAppearanceType, props: ThemeContextType) {
  switch (appearance) {
    case 'warning': {
      return props.warningBGColor;
    }
    case 'error': {
      return props.dangerColor;
    }
    case 'announcement': {
      return props.announceBGColor;
    }
    default: {
      return props.warningBGColor;
    }
  }
}



export const PiBannerClass = (
  props: ThemeContextType,
  appearance: any
) => css`
  .css-1lo6yt6{
    background-color: ${getAppearanceStyles(appearance, props)} !important;
    color: ${props.white};
    size: 14px;
    
    font-weight:800 !important;
    div{
      font-weight:800 !important;
    }
  }
`