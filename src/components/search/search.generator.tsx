import React, { Fragment, useContext } from 'react'
import { default as AtlasTextfield, TextFieldProps } from '@atlaskit/textfield'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiSearchProps } from './search'
import PiThemeContext from '../../themeContext'
import { PiSearchClass } from './search.css'
import { PiSearchIcon } from '../icon/search.icon'
import { PiNewCloseIcon } from '../icon/new_close.icon'
// import { PiCrossIcon } from '../icon/cross.icon'

/**
 *
 * @param props as  PiSearchProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSearchTemplate({
  libraryType,
  ...props
}: PiSearchProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiSearchProps
 * @returns Atlaskit TextField template
 */
function AtlasKitTemplate({
  onValueChange,
  onClear,
  value,
  ...props
}: PiSearchProps) {
  const theme = useContext(PiThemeContext)

  return (
    <div
      className={`new-global-search ${PiSearchClass(theme)} ${props.className}`}
    >
      <Fragment>
        <div className='Search-svg'>
          <PiSearchIcon />
        </div>
        <AtlasTextfield
          value={value}
          {...(props as TextFieldProps)}
          onChange={onValueChange}
        />
        {value && (
          // <div className='Cross-svg close-icon-container' onClick={onClear}>
          //  <PiNewCloseIcon />
          // </div>

          <div
            style={{
              padding: '10px',
              paddingLeft: '0px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
            onClick={onClear}
          >
            <PiNewCloseIcon />
          </div>
        )}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiSearchProps
 * @returns Default TextField template
 */
function DefaultTemplate() {
  return <div style={{ display: 'flex', flexDirection: 'column' }} />
}
