import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'
import {PiAppearanceType} from './flag'



function getAppearanceStyles(appearance: PiAppearanceType, props: ThemeContextType) {
  switch (appearance) {
    case 'error': {
      return error(props);
    }
    case 'info': {
      return info(props);
    }
    case 'normal': {
      return normal(props);
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
background-color: ${props.dangerColor};
`

const info = (props:ThemeContextType) => css`
background-color: ${props.primaryHoverBG};
`

const normal = (props:ThemeContextType) => css`
background-color: ${props.white};
`

const success = (props:ThemeContextType) => css`
background-color: ${props.success};
`

const warning = (props:ThemeContextType) => css`
background-color: ${props.warningBGColor};
`



export const PiFlagClass = (
  props: ThemeContextType,
  appearance: any
) => css`
  div[role="alert"]{
    ${getAppearanceStyles(appearance, props)}
    
    size: 14px;
  }
`

export const PiFlagDefaultClass = (
  props: ThemeContextType
) => css`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 16px;
  width: 400px;
  background: ${props.white};
  box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 4px;

  .flag-icon{
    width: 24px;
    height: 24px;
    background: ${props.white};
    margin: 0px 16px;
  }
  .flag-content{
    flex:1;
  }

  .close-icon{
    
    svg{
      width: 16px;
      height: 16px;
      background: ${props.white};
      cursor:pointer;
      &:hover{
        width:18px;
        height:18px;
      }
    }
    
  }

  p{
    line-height:20px;
    margin: 0px 0px;
  }


`