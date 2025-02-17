import React, { Fragment, useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiIdProps } from './idComponent'
import PiThemeContext from '../../themeContext'
import { PiIdClass } from './idComponent.css'
import { PiTypography } from '..'

/**
 *
 * @param props as  PiIdProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateIdComponentTemplate({
  libraryType,
  ...props
}: PiIdProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiIdProps
 * @returns Atlaskit ID template
 */
function AtlasKitTemplate({ ...props }: PiIdProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiIdClass(theme)}>
      <div className='label'>
        <PiTypography component='h4'>{props.label}</PiTypography>
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
