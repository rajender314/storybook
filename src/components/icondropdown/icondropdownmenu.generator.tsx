import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiIconDropdownMenuProps, DropdownElements } from './icondropdownmenu'
import PiThemeContext from '../../themeContext'
import { PiIconDropdownMenuClass } from './icondropdownmenu.css'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup
} from '@atlaskit/dropdown-menu'
import { default as AtlasButton } from '@atlaskit/button'
import PiActionIcon from '../actionicons'

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAddressTemplate({
  libraryType,
  ...props
}: PiIconDropdownMenuProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns DropdownMenu template
 */
function AtlasKitTemplate({ ...props }: PiIconDropdownMenuProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div
      className={
        props.className
          ? `${PiIconDropdownMenuClass(theme)} ${props.className}`
          : `${PiIconDropdownMenuClass(theme)}`
      }
    >
      <DropdownMenu
        trigger={({ triggerRef, ...props }: any) => (
          <AtlasButton
            {...props}
            iconBefore={
              <PiActionIcon
                appearance='more'
                onClick={function noRefCheck() {}}
              />
            }
            ref={triggerRef}
          />
        )}
      >
        <DropdownItemGroup>
          {props.items.length
            ? props.items.map((value: DropdownElements) => {
                return (
                  <DropdownItem
                    onClick={() => props.onOpenChange(value)}
                    key={value.id}
                  >
                    {value.element}
                  </DropdownItem>
                )
              })
            : null}
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  )
}

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Default Spinner template
 */
function defaultTemplate() {
  return <div />
}
