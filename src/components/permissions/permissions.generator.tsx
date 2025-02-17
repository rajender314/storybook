import React, { useContext, useEffect, useState } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiPermissionsProps } from './permissions'
import PiThemeContext from '../../themeContext'
import { PiPermissionsClass } from './permissions.css'
// import PiToggle from '../toggle'
// import PiCheckbox from '../checkbox'
import {
  getCheckboxTemplate,
  getRadioTemplate,
  getToggleTemplate,
  getSelectTemplate
} from './permissions.template'
// import PiButton from '../button'

/**
 *
 * @param props as  PiPermissionsProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatePermissionsTemplate({
  libraryType,
  ...props
}: PiPermissionsProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiPermissionsProps
 * @returns Permissions template
 */
function AtlasKitTemplate({
  values,
  inputObject,
  onValueChange
}: PiPermissionsProps) {
  const theme = useContext(PiThemeContext)
  let [permList, setpermList]: any = useState([])
  let [permValues, setpermValues]: any = useState({})
  useEffect(() => {
    permList = inputObject
    setpermList(permList)
    permValues = values
    setpermValues(permValues)
  }, [inputObject, values])
  return (
    <div className={`${PiPermissionsClass(theme)} pipermission-wrapper`}>
      {permList && permList.type == 'header' ? (
        <div className='header'>
          <h2 className='label-text'>{permList.name}</h2>
          <span className='element'>
            {getElement(permList, permValues, onValueChange)}
          </span>
        </div>
      ) : (
        <div>
          <div className='role-parent-title'>
            <span className='label-text'>{permList.name}</span>
            <span className='element'>
              {getElement(permList, permValues, onValueChange)}
            </span>
          </div>
          <div className='permission-outer-border'>
            {permList.children
              ? permList.children.map((childElements: any, i: number) => {
                  if (childElements.children) {
                    return (
                      <div
                        className='permissions-box'
                        style={{ margin: '2px 30px' }}
                      >
                        <div className='permission'>
                          <span className='label-text'>
                            {childElements.name}
                          </span>
                          <span className='element'>
                            {getElement(
                              childElements,
                              permValues,
                              onValueChange
                            )}
                          </span>
                        </div>
                        {childElements.children && childElements.allow_child
                          ? childElements.children.map(
                              (child: any, i: number) => {
                                return (
                                  <div key={i} className='child-permissions'>
                                    <span className='label-text'>
                                      {child.name}
                                    </span>
                                    <span className='element'>
                                      {getElement(
                                        child,
                                        permValues,
                                        onValueChange
                                      )}
                                    </span>
                                  </div>
                                )
                              }
                            )
                          : null}
                      </div>
                    )
                  } else {
                    return (
                      <div key={i} className='child-permissions'>
                        <span className='label-text'>{childElements.name}</span>
                        <span className='element'>
                          {getElement(childElements, permValues, onValueChange)}
                        </span>
                      </div>
                    )
                  }
                })
              : null}
          </div>
        </div>
      )}
    </div>
  )
}

function getElement(permList: any, values: any, onValueChange: any) {
  switch (permList.type) {
    case 'toggle': {
      return getToggleTemplate(permList, values, 'regular', onValueChange)
    }
    case 'header': {
      return getToggleTemplate(permList, values, 'large', onValueChange)
    }
    case 'checkbox': {
      return getCheckboxTemplate(permList, values, onValueChange)
    }
    case 'radio':
      return getRadioTemplate(permList, values, onValueChange)
    case 'select':
      return getSelectTemplate(permList, values, onValueChange)
    case 'button': {
      return (
        <div className='toggle-button'>
          {getRadioTemplate(permList, values, onValueChange)}
        </div>
      )
    }
    default: {
      return <div />
    }
  }
}

/**
 *
 * @param props as  PiPermissionsProps
 * @returns Default Permissions template
 */
function defaultTemplate() {
  return <div />
}
