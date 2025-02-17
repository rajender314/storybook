import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiProfileHeaderClass = (props: ThemeContextType) => css`
  color: ${props.lablelDescription};
  font-size:24px;
  font-weight:600;
  line-height: 36px;
}
`
