import React, { useContext } from 'react'
import SectionMessage from '@atlaskit/section-message'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiSectionMessageProps } from './sectionMessage'
import PiThemeContext from '../../themeContext'
import { PiSestionMessageClass } from './sectionMessage.css'
/**
 *
 * @param props as  PiSectionMessageProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSectionMessageTemplate({
  libraryType,
  ...props
}: PiSectionMessageProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiSectionMessageProps
 * @returns SectionMessage template
 */
function AtlasKitTemplate({ ...props }: PiSectionMessageProps) {
  const theme = useContext(PiThemeContext)
  const appearance = props.appearance
  return <div className={PiSestionMessageClass(theme, appearance)}><SectionMessage {...props}>{props.children}</SectionMessage></div>
}

/**
 *
 * @param props as  PiSectionMessageProps
 * @returns Default SectionMessage template
 */
function defaultTemplate() {
  return <div></div>
}
