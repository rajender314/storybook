import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import PiThemeContext from '../../themeContext'
import { PiTagProps } from './tag'
import {
  PiTagInfoClass,
  PiTagDangerClass,
  PiTagSuccessClass,
  PiTagWarningClass
} from './tag.css'

/**
 *
 * @param props as  PiTagProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateTagTemplate({ libraryType, ...props }: PiTagProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiTagProps
 * @returns Atlaskit TextField template
 */
function AtlasKitTemplate(props: PiTagProps) {
  const theme = useContext(PiThemeContext)
  const tagClass = {
    info: PiTagInfoClass(theme),
    warning: PiTagWarningClass(theme),
    success: PiTagSuccessClass(theme),
    danger: PiTagDangerClass(theme)
  }
  return (
    <div className={tagClass[props.color]}>
      <span>{props.text}</span>
    </div>
  )
}

/**
 *
 * @param props as  PiTagProps
 * @returns Default TextField template
 */
function DefaultTemplate(props: PiTagProps) {
  return <div>{props.text}</div>
}
