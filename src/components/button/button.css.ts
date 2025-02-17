import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'
import { PiSizeType } from './button'

function getSizeStyles(size: PiSizeType | undefined) {
  switch (size) {
    case 'xs': {
      return xsFont()
    }
    case 'small': {
      return smallFont()
    }
    case 'medium': {
      return mediumFont()
    }
    case 'large': {
      return largeFont()
    }
    default: {
      return smallFont()
    }
  }
}

const xsFont = () => css`
  padding: 4px 12px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  height: 28px;
`
const smallFont = () => css`
  padding: 6px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
`
const mediumFont = () => css`
  padding: 10px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  height: 40px;
`
const largeFont = () => css`
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
`

export const PiButtonPrimaryClass = (
  props: ThemeContextType,
  size: PiSizeType | undefined
) => css`
  background: ${props.primaryBG} !important;
  min-width: 120px;
  border-radius: 6px !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center !important;
  text-align: center;
  /*line-height: unset !important;*/
  /*padding: unset !important;*/
  height: 40px !important;
  ${getSizeStyles(size)}
  color: ${props.white} !important;
  span {
    color: ${props.white} !important;
    flex-grow: unset;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 0px !important;
  }

  &:hover {
    background: ${props.primaryHoverBG} !important;
    color: ${props.white} !important;
  }
  &:focus {
    background: #1d60cc !important;
    box-shadow: none;
    transition-duration: none;
  }
  &:disabled {
    background: ${props.primaryBtnDisabledBG} !important;
    color: ${props.primaryColor} !important;
  }
  &:visited {
    background: ${props.primaryVisitedBG}!important;
  }
  &:active {
    background: #bbdefb !important;
  }

  svg {
    stroke: ${props.infoBGColor};
  }
  span {
    color: ${props.white} !important;
    &:disabled {
      color: ${props.primaryColor} !important;
    }
  }
`
export const PiButtonSecondaryClass = (
  props: ThemeContextType,
  size: PiSizeType | undefined
) => css`
  background: ${props.white} !important;
  min-width: 120px;
  border-radius: 6px !important;
  border: 2px solid #d0daec !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center !important;
  text-align: center;
  /*line-height: unset !important;*/
  height: 40px !important;
  /*padding: unset !important;*/
  ${getSizeStyles(size)}
  color: ${props.primaryBG} !important;
  span {
    color: ${props.primaryBG} !important;
    flex-grow: unset;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 0px !important;
  }

  &:hover {
    background: ${props.infoBGColor} !important;
    color: ${props.primaryBG} !important;
  }

  &:focus {
    background: #e3f2fd !important;
    box-shadow: none;
    transition-duration: none;
  }

  &:disabled {
    background: ${props.primaryDisabledBG} !important;
    color: ${props.primaryBG} !important;
    span {
      color: #8598b7 !important;
    }
  }
  &:visited {
    background: ${props.secondaryVisited} !important;
  }

  /*&:active {
    background: ${props.secondaryActiveBg} !important;
  }*/
  .css-7no60z-ButtonBase {
    color: ${props.primaryBG} !important;
  }
`

export const PiButtonLinkClass = (
  props: ThemeContextType,
  size: PiSizeType | undefined
) => css`
  background: ${props.white} !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center;
  line-height: 20px !important;
  text-align: left !important;
  padding: 0px !important;
  ${getSizeStyles(size)}
  color: ${props.primaryBG} !important;
  white-space: pre-wrap;
  span {
    white-space: normal;
    flex-grow: unset;
    color: ${props.primaryBG} !important;
  }
  &:hover {
    background: ${props.white};
    span {
      color: ${props.primaryHoverBG} !important;
      text-decoration: underline;
    }
  }

  &:focus {
    color: ${props.primaryActiveBG} !important;
  }

  &:visited {
    color: ${props.primaryVisitedBG};
  }

  &:active {
    color: #bbdefb;
  }

  &:disabled {
    color: ${props.primaryBG} !important;
  }
`
