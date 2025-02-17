import React, { Fragment, useContext } from 'react'
// import { default as AtlasTextfield, TextFieldProps } from '@atlaskit/textfield'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import PiThemeContext from '../../themeContext'
import { PiSideDrawerProps } from './sideDrawer'
import { PiSideDrawerClass } from './sideDrawer.css'


/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSideDrawerTemplate({ libraryType, ...props }: PiSideDrawerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Atlaskit TextField template
 */

function AtlasKitTemplate({width, ...props }: PiSideDrawerProps) {

  const theme = useContext(PiThemeContext)
  let drawerClasses = 'side-drawer'
       if(props.isOpen) {
          drawerClasses = 'side-drawer open'
       }

  return (
    
    <div className={PiSideDrawerClass(theme, width) }>
      {props.isOpen &&  <Fragment>
        <div className={drawerClasses}>
        {props.children}
      </div>
      <div className="backdrop" onClick={props.onBackdropClose}></div>
      </Fragment>
      }
    </div>
  )
}

/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Default TextField template
 */
function DefaultTemplate() {
  return (
    <div></div>
  )
}
