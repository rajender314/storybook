import React, { Fragment, useContext } from 'react'
import { RadioGroup as AtlasRadioGroup } from '@atlaskit/radio'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiRadioGroupProps, RadioOptionsType } from './radioGroup'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiRadioClass } from './radio.css'

/**
 *
 * @param props as  PiRadioGroupProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateRadioGroupTemplate(props: PiRadioGroupProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiRadioGroupProps
 * @returns Atlaskit Radio Group template
 */
function AtlasKitTemplate({
  libraryType,
  helpText,
  label,
  ...props
}: PiRadioGroupProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiRadioClass(theme)}>
      {label && <PiTypography>{label}</PiTypography>}
      <AtlasRadioGroup {...props} />
      {helpText && <PiTypography>{helpText}</PiTypography>}
    </div>
  )
}

/**
 *
 * @param props as  PiRadioGroupProps
 * @returns default Radio Group template
 */
function defaultTemplate(props: PiRadioGroupProps) {
  return (
    <div>
      {props.options.map((option: RadioOptionsType) => {
        return (
          <Fragment>
            <label>{option.label}</label>
            <input type='radio' value={option.value} name={props.name} />
          </Fragment>
        )
      })}
    </div>
  )
}
