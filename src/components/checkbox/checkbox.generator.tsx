import React, { Fragment, useContext } from 'react'
import { Checkbox as AtlasCheckbox } from '@atlaskit/checkbox'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiCheckboxProps } from './checkbox'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiCheckboxClass } from './checkbox.css'

/**
 *
 * @param props as  PiCheckboxProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateCheckboxTemplate(props: PiCheckboxProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiCheckboxProps
 * @returns Atlaskit Checkbox template
 */
function AtlasKitTemplate({
  libraryType,
  helpText,
  ...props
}: PiCheckboxProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiCheckboxClass(theme)}>
      <AtlasCheckbox {...props} />
      {helpText && <PiTypography>{helpText}</PiTypography>}
    </div>
  )
}

/**
 *
 * @param props as  PiCheckboxProps
 * @returns Default Checkbox template
 */
function DefaultTemplate({ ...props }: PiCheckboxProps) {
  const defaultProps = generateDefaultProps({ ...props })
  return (
    <Fragment>
      <div>
        <input type='checkbox' {...defaultProps}></input>
        <label>{props.label}</label>
      </div>

      {props.helpText && <span>{props.helpText}</span>}
    </Fragment>
  )
}

/**
 *
 * @param props as  PiCheckboxProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiCheckboxProps) {
  const defaultProps = {
    checked: props.isChecked,
    disabled: props.isDisabled,
    value: props.value,
    label: props.label,
    onChange: props.onChange,
    name: props.name
  }

  return defaultProps
}
