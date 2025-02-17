import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiActionIconProps } from './actionicons'
import PiThemeContext from '../../themeContext'
import { PiActionIconClass } from './actionicons.css'
import { PiDownloadIcon } from '../icon/download.icon'
import {PiPrintIcon} from '../icon/print.icon'
import { PiFilterIcon  } from '../icon/filter.icon'
import { PiSortIcon } from '../icon/sort.icon'
import { PiMailIcon } from '../icon/mail.icon'
import { PiMoreIcon } from '../icon/more.icon'

/**
 *
 * @param props as  PiActionIconProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateActionIconTemplate({
  libraryType,
  ...props
}: PiActionIconProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiActionIconProps
 * @returns ActionIcon template
 */
function AtlasKitTemplate({appearance, ...props}: PiActionIconProps) {
  const theme = useContext(PiThemeContext)
  return (
    
      <button {...props} className={PiActionIconClass(theme)}>
      {getIcon(appearance)}
      <span className="icon-text">{props.icontext}</span>
      </button>
      
  )
}

function getIcon(appearance: any) {
  switch (appearance) {
    case 'download': {
      return <PiDownloadIcon />
    }
    case 'print': {
      return <PiPrintIcon />
    }
    case 'sort': {
      return <PiSortIcon />
    }
    case 'filter': {
      return <PiFilterIcon />
    }
    case 'mail': {
      return <PiMailIcon />
    }
    case 'more': {
      return <PiMoreIcon />
    }
    default: {
      return <PiDownloadIcon />
    }
  }
}

/**
 *
 * @param props as  PiActionIconProps
 * @returns Default Action Icon template
 */
function defaultTemplate() {
  return <div ></div>
}
