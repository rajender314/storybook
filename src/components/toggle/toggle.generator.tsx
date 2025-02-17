import React, { Fragment, useContext } from 'react'
import Toggle from '@atlaskit/toggle'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiToggleProps } from './toggle'
import PiTypography from '../typography'
import { PiToggleClass } from './toggle.css'
import PiThemeContext from '../../themeContext'

/**
 *
 * @param props as  PiToggleProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateToggleTemplate({
  libraryType,
  ...props
}: PiToggleProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiToggleProps
 * @returns Atlaskit Toggle template
 */
function AtlasKitTemplate({
  onChange,
  size,
  isChecked,
  name,
  isDisabled,
  label,
  helpText,
  direction
}: PiToggleProps) {
  const theme = useContext(PiThemeContext);
  return (
    <div className={PiToggleClass(theme, direction)}>
      {label && <PiTypography component="label">{label}</PiTypography>}
      <Fragment>
      <Toggle
      size={size}
      onChange={onChange}
      isChecked={isChecked}
      name={name}
      isDisabled={isDisabled}
    />
        {helpText && <PiTypography>{helpText}</PiTypography>}
      </Fragment>
    </div>
    
  )
}

/**
 *
 * @param props as  PiToggleProps
 * @returns Default Toggle template
 */
function DefaultTemplate(props: PiToggleProps) {
  return (
    <Fragment>
      <span>{props.name}</span>
    </Fragment>
  )
}
