import React, { useContext } from 'react'
import AtlasAvatar from '@atlaskit/avatar'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiAvatarProps } from './avatar'
import PiThemeContext from '../../themeContext'
import { PiAvatarClass } from './avatar.css'

/**
 *
 * @param props as  PiAvatarProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAvatarTemplate({
  libraryType,
  ...props
}: PiAvatarProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiAvatarProps
 * @returns Avatar template
 */
function AtlasKitTemplate({ ...props }: PiAvatarProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiAvatarClass(theme)}>
      <AtlasAvatar {...props} />
    </div>
  )
}

/**
 *
 * @param props as  PiAvatarProps
 * @returns Default Avatar template
 */
function defaultTemplate(props: PiAvatarProps) {
  return <div style={{ width: props.size }}></div>
}
