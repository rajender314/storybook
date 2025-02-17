import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiPermissionsListProps } from './permissionslist'
import PiThemeContext from '../../themeContext'
import { PiPermissionsClass } from './permissionslist.css'
import PiPermissions from '../permissions'

/**
 *
 * @param props as  PiPermissionsListProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatePermissionsListTemplate({
  libraryType,
  ...props
}: PiPermissionsListProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiPermissionsListProps
 * @returns Permissions template
 */
function AtlasKitTemplate(props: PiPermissionsListProps) {
  const theme = useContext(PiThemeContext)
  // const input = props.inputObject;

  return (
    <div className={PiPermissionsClass(theme)}>
      {props.inputObject ? (
        props.inputObject.map((data: any, i: number) => {
          return (
            <div key={i}>
              <PiPermissions
                inputObject={data}
                values={props.values}
                onValueChange={props.onValueChange}
              />
            </div>
          )
        })
      ) : (
        <div>No data found.</div>
      )}
    </div>
  )
}

/**
 *
 * @param props as  PiPermissionsProps
 * @returns Default Permissions template
 */
function defaultTemplate() {
  return <div />
}
