import React,{useContext} from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiProfileHeaderProps } from './profileheader'
import PiThemeContext from '../../themeContext'
import { PiProfileHeaderClass } from './profileheader.css'

/**
 *
 * @param props as  PiProfileHeaderProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateProfileHeaderTemplate({
  libraryType,
  ...props
}: PiProfileHeaderProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiProfileHeaderProps
 * @returns ProfileHeader template
 */
function AtlasKitTemplate(props: PiProfileHeaderProps) {
  const theme = useContext(PiThemeContext)
  return (
      <h2 className={PiProfileHeaderClass(theme)}>{props.text}</h2>
  )
}

/**
 *
 * @param props as  PiProfileHeaderProps
 * @returns Default ProfileHeader template
 */
function defaultTemplate() {
  return <div></div>
}
