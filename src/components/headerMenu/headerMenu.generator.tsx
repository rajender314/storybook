import React, { useContext } from 'react'

import { ATALASLIT_LIBRARY } from '../../piConstant'
import PiThemeContext from '../../themeContext'
import { PiHeaderMenuProps } from './headerMenu'
import { PiHeaderMenuClass } from './headerMenu.css'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup
} from '@atlaskit/dropdown-menu'
import PiProfileSection from '../profileSection'
import PiDropdownMenu from '../dropdownMenu/dropdownmenu'
/**
 *
 * @param props as  PiHeaderMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateHeaderMenuTemplate({
  libraryType,
  ...props
}: PiHeaderMenuProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiHeaderMenuProps
 * @returns Header Menu template
 */
function getHeaderTemplate({ ...props }: PiHeaderMenuProps) {
  const theme = useContext(PiThemeContext)
  // let [propsData, setPropsData]: any = useState(props)

  // useEffect(() => {
  //  propsData = props
  //  setPropsData(propsData)
  //  console.log(propsData)
  // }, [props])
  console.log(props)
  return (
    <div className={PiHeaderMenuClass(theme)}>
      <div className='header-wrapper'>
        <div className='header-left'>
          <div className='logo-container'>
            <img src={props.image} alt='loading' />
          </div>
          <div className='menu-option'>
            {props.options.map((option: any) => {
              if (option.display && option.children && option.children.length) {
                return (
                  <div
                    key={option.key}
                    className={
                      props.activeKey === option.key
                        ? 'active menu-item'
                        : 'menu-item'
                    }
                  >
                    {option.icon && (
                      <span className='custom-icon'> {option.icon} </span>
                    )}
                    {option.href && (
                      <span className='custom-icon'>
                        <img
                          src={option.href}
                          alt={option.label}
                          width='20'
                          height='20'
                        />
                      </span>
                    )}
                    <DropdownMenu
                      trigger={option.label}
                      placement='bottom-start'
                    >
                      <DropdownItemGroup>
                        {/* {option.children.map((child) => (
                        <DropdownItem
                          key={child.key}
                          onClick={() => props.onMenuClick(child)}
                        >
                          {child.label}
                        </DropdownItem>
                      ))} */}
                        {option.children.map((child: any) => {
                          if (child.display) {
                            return (
                              <DropdownItem
                                key={child.key}
                                onClick={() => props.onMenuClick(child)}
                              >
                                {child.label}
                              </DropdownItem>
                            )
                          } else {
                            return null
                          }
                        })}
                      </DropdownItemGroup>
                    </DropdownMenu>
                  </div>
                )
              } else {
                if (option.display) {
                  return (
                    <div
                      key={option.key}
                      className={
                        props.activeKey === option.key
                          ? 'active menu-item-single'
                          : 'menu-item-single'
                      }
                      onClick={() => props.onMenuClick(option)}
                    >
                      {option.icon && (
                        <span className='custom-icon'> {option.icon} </span>
                      )}
                      {option.href && (
                        <span className='custom-icon'>
                          <img
                            src={option.href}
                            alt={option.label}
                            width='20'
                            height='20'
                          />
                        </span>
                      )}
                      {option.label}
                    </div>
                  )
                } else {
                  return null
                }
              }
            })}
          </div>
        </div>
        <div className='header-right'>
          {props.headerDropdownOptions &&
            props.headerDropdownOptions.length > 0 && (
              <div className='header-dropdown-view'>
                <PiDropdownMenu
                  items={props.headerDropdownOptions as any}
                  label='Create'
                  onOpenChange={props.onOpenChange as any}
                />
              </div>
            )}
          {/* TODO  Change any after PiProfileSection changed */}
          <PiProfileSection
            items={props.profileOptions as any}
            onClick={props.onProfileClick as any}
            userImage={props.userImage as any}
          />
        </div>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiHeaderMenuProps
 * @returns Default Editor template
 */
function defaultTemplate() {
  return <div>NO template</div>
}
