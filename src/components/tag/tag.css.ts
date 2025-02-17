import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiTagInfoClass = (props: ThemeContextType) => css`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${props.infoBGColor};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props.infoColor}
    }
}
`

export const PiTagWarningClass = (props: ThemeContextType) => css`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: #FFE8C3;
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props.warningColor}
    }
}
`

export const PiTagSuccessClass = (props: ThemeContextType) => css`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${props.successBGColor};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props.successColor}
    }
}
`

export const PiTagDangerClass = (props: ThemeContextType) => css`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${props.dangerBGColor};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props.dangerColor}
    }
}
`
