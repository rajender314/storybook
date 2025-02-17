import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiDropdownMenuProps, DropdownElements } from './dropdownmenu'
import PiThemeContext from '../../themeContext'
import { PiDropdownMenuClass } from './dropdownmenu.css'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup
} from '@atlaskit/dropdown-menu'

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAddressTemplate({
  libraryType,
  ...props
}: PiDropdownMenuProps) {
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
function AtlasKitTemplate({ ...props }: PiDropdownMenuProps) {
  const theme = useContext(PiThemeContext)
  console.log(props)

  return (
    <div className={PiDropdownMenuClass(theme)}>
      <DropdownMenu trigger={props.label}>
        {props.items.length
          ? props.items.map((value: DropdownElements) => {
              if (value.display) {
                return (
                  <DropdownItemGroup>
                    <DropdownItem
                      onClick={() => props.onOpenChange(value)}
                      key={value.id}
                      isSelected={value.isSelected}
                    >
                      {value.name}
                    </DropdownItem>
                  </DropdownItemGroup>
                )
              } else {
                return null
              }
            })
          : null}
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
