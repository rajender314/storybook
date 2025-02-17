import React, { Fragment, useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiBackSectionProps } from './backSection'
import PiThemeContext from '../../themeContext'
import { PiBackClass } from './backSection.css'
import { PiBackIcon } from '../icon/back.icon'
import { PiTypography } from '..'
import { useLocation } from '../../utils/location'

/**
 *
 * @param props as  PiBackProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateBackTemplate({
  libraryType,
  ...props
}: PiBackSectionProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiBackProps
 * @returns Atlaskit Profile Section template
 */
function AtlasKitTemplate({ ...props }: PiBackSectionProps) {
  const theme = useContext(PiThemeContext)
  const { navigate } = useLocation();
  return (
    <div className={PiBackClass(theme)}>
      <div
        className='Back-main'
        onClick={() => navigate(props.backOptions.route)}
      >
        <PiBackIcon />
      </div>
      <div className='label'>
        <PiTypography component='h4'>{props.backOptions.name}</PiTypography>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Default Profile Section  template
 */
function DefaultTemplate() {
  return (
    <Fragment>
      <div></div>
    </Fragment>
  )
}
