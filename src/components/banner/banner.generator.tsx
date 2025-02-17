import React, { useContext } from 'react'
import AtlasBanner from '@atlaskit/banner'
import PiThemeContext from '../../themeContext'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiBannerProps } from './banner'
import { PiBannerClass } from './banner.css'
import ErrorIcon from '@atlaskit/icon/glyph/error'
import WarningIcon from '@atlaskit/icon/glyph/warning'

/**
 *
 * @param props as  PiBannerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateBannerTemplate({
  libraryType,
  ...props
}: PiBannerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiBannerProps
 * @returns Banner template
 */
function AtlasKitTemplate({ ...props }: PiBannerProps) {
  const theme = useContext(PiThemeContext)
  const appearance = props.appearance
  return (
    <div className={PiBannerClass(theme, appearance)}>
      <AtlasBanner {...props} icon={getIcon(appearance)}>
        {props.children}
      </AtlasBanner>
    </div>
  )
}

/**
 *
 * @param props as  PiBannerProps
 * @returns Default Banner template
 */
function defaultTemplate() {
  return <div></div>
}

function getIcon(appearance: any) {
  switch (appearance) {
    case 'warning': {
      return <WarningIcon label='' secondaryColor='inherit' />
    }
    case 'error': {
      return <ErrorIcon label='' secondaryColor='inherit' />
    }
    case 'announcement': {
      return ''
    }
    default: {
      return <WarningIcon label='' secondaryColor='inherit' />
    }
  }
}
