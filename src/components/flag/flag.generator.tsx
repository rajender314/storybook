import React, { useContext } from 'react'
import SuccessIcon from '@atlaskit/icon/glyph/check-circle'
import InfoIcon from '@atlaskit/icon/glyph/info'
import ErrorIcon from '@atlaskit/icon/glyph/error'
import WarningIcon from '@atlaskit/icon/glyph/warning'
import { B300, N500, G400, R400, Y200 } from '@atlaskit/theme/colors'
import { token } from '@atlaskit/tokens'
import Flag from '@atlaskit/flag'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiFlagProps } from './flag'
import PiThemeContext from '../../themeContext'
import { PiFlagClass, PiFlagDefaultClass } from './flag.css'
import PiTypography from '../typography/typography'
import { PiWarningIcon } from '../icon/warning.icon'
import { PiCloseIcon } from '../icon/close.icon'
import { PiErrorIcon } from '../icon/error.icon'
import { PiSuccessIcon } from '../icon/success.icon'
import { PiInfoIcon } from '../icon/info.icon'
import { PiNormalIcon } from '../icon/normal.icon'

/**
 *
 * @param props as  PiFlagProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateFlagTemplate({ libraryType, ...props }: React.PropsWithChildren<PiFlagProps>) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiFlagProps
 * @returns Flag template
 */
function AtlasKitTemplate(props: PiFlagProps) {
  const atlasIcon = atlasKitIcons(props.appearance)

  const theme = useContext(PiThemeContext)
  const appearance = props.appearance

  return <div className={PiFlagClass(theme, appearance)}><Flag icon={atlasIcon} {...props} /> </div>
}

/**
 *
 * @param props as  PiFlagProps
 * @returns Atlaskit icons based on appearance
 */
function atlasKitIcons(appearance: any) {
  let flagIcon: React.ReactNode
  switch (appearance) {
    case 'info':
      flagIcon = (
        <InfoIcon
          label='Info'
          secondaryColor={token('color.iconBorder.discovery', N500)}
        />
      )

      break
    case 'success':
      flagIcon = (
        <SuccessIcon
          label='Success'
          secondaryColor={token('color.iconBorder.success', G400)}
        />
      )

      break
    case 'error':
      flagIcon = (
        <ErrorIcon
          label='Error'
          secondaryColor={token('color.iconBorder.danger', R400)}
        />
      )

      break
    case 'warning':
      flagIcon = (
        <WarningIcon
          label='Warning'
          secondaryColor={token('color.iconBorder.warning', Y200)}
        />
      )

      break
    default:
      flagIcon = (
        <InfoIcon
          primaryColor={token('color.iconBorder.discovery', B300)}
          label='Info'
        />
      )
  }
  return flagIcon
}
/**
 *
 * @param props as  PiFlagProps
 * @returns Default Flag template
 */
function defaultTemplate(props: React.PropsWithChildren<PiFlagProps>) {
  const theme = useContext(PiThemeContext)
  const atlasIcon = getDeafualtIcons(props.appearance)
  return <div className={PiFlagDefaultClass(theme)}>
    
    <div className="flag-icon">
      {atlasIcon}
    </div>
    <div className="flag-content">
      <PiTypography component="pbold">
        {props.title}
      </PiTypography>
      <PiTypography component="p">
      {props.description}
      </PiTypography>
      {props.children}
    </div>
    <div className="close-icon">
      <PiCloseIcon handleClose={props.handleClose}/>
    </div>
  </div>
}

/**
 *
 * @param props as  PiFlagProps
 * @returns Default icons based on appearance
 */
function getDeafualtIcons(appearance: any) {
  switch (appearance) {
    case 'error': {
      return <PiErrorIcon />;
    }
    case 'info': {
      return <PiInfoIcon />
    }
    case 'normal': {
      return <PiNormalIcon />
    }
    case 'success': {
      return <PiSuccessIcon />
    }
    case 'warning': {
      return <PiWarningIcon />
    }
    default: {
      return <PiInfoIcon />
    }
  }
}
