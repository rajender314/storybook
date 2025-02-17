import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'
import {PiAppearanceType} from './sectionMessage'



function getAppearanceStyles(appearance: PiAppearanceType, props: ThemeContextType) {
  switch (appearance) {
    case 'error': {
      return error(props);
    }
    case 'information': {
      return info(props);
    }
    case 'discovery': {
      return discovery(props);
    }
    case 'success': {
      return success(props);
    }
    case 'warning': {
      return warning(props);
    }
    default: {
      return info(props);
    }
  }
}

const error = (props:ThemeContextType) => css`
background-color: ${props.dangerBGColor} !important;
`

const info = (props:ThemeContextType) => css`
background-color: ${props.infoBGColor} !important;
`

const discovery = (props:ThemeContextType) => css`
background-color: ${props.tabHeaderBG} !important;
`

const success = (props:ThemeContextType) => css`
background-color: ${props.successBGColor} !important;
`

const warning = (props:ThemeContextType) => css`
background-color: ${props.warningoxBGColor} !important;
`



export const PiSestionMessageClass = (
  props: ThemeContextType,
  appearance: any
) => css`
  section{
    padding: 16px;
    ${getAppearanceStyles(appearance, props)}
    div:nth-child(1){
      width:32px;
    }
    h1{
      color: #2E374A;
      font-size: 18px;
      font-weight:bold;
      margin:0px !important;
    }
    p{
      color: #4E586D;
      
    }
  }
  
`