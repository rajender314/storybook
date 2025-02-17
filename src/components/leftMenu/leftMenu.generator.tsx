import React, { Fragment, useContext } from 'react'

import { ATALASLIT_LIBRARY } from '../../piConstant'
import PiThemeContext from '../../themeContext'
import { PiLeftMenuProps } from './leftMenu'
import { PiLeftMenuClass } from './leftMenu.css'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup
} from '@atlaskit/dropdown-menu'
import PiTooltip from '../tooltip'
/**
 *
 * @param props as  PiLeftMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateHeaderMenuTemplate({
  libraryType,
  ...props
}: PiLeftMenuProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiLeftMenuProps
 * @returns Header Menu template
 */
function getHeaderTemplate({ ...props }: PiLeftMenuProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiLeftMenuClass(theme)}>
      <div className='left-menu'>
        <div className='menu-option'>
          {props.options.map((option) => {
            if (option.children && option.children.length) {
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
                  <DropdownMenu trigger={option.label} placement='bottom-start'>
                    <DropdownItemGroup>
                      {option.children.map((child) => (
                        <DropdownItem
                          key={child.key}
                          onClick={() => props.onMenuClick(child)}
                        >
                          {child.label}
                        </DropdownItem>
                      ))}
                    </DropdownItemGroup>
                  </DropdownMenu>
                </div>
              )
            } else {
              return (
                <Fragment>
                  {option.display && (
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
                        <div>
                          <span className='custom-icon'>
                            <img
                              style={{
                                height: '30px',
                                width: '30px',
                                borderRadius: '50%'
                              }}
                              src={option.icon}
                            />
                          </span>
                        </div>
                      )}
                      {option.href && (
                        <div>
                          <span className='custom-icon'>
                            <img
                              src={option.href}
                              alt={option.label}
                              width='20'
                              height='20'
                            />
                          </span>
                        </div>
                      )}

                      <div className='user_info'>
                        <PiTooltip
                          content={option.label}
                          libraryType='atalskit'
                        >
                          <div className='user_name'>{option.label}</div>
                        </PiTooltip>
                        {option.email && (
                          <PiTooltip
                            content={option.email}
                            libraryType='atalskit'
                          >
                            <div className='user_email'>{option.email}</div>
                          </PiTooltip>
                        )}
                        {option.code && (
                          <PiTooltip
                            content={option.code}
                            libraryType='atalskit'
                          >
                            <div className='user_email'>{option.code}</div>
                          </PiTooltip>
                        )}
                      </div>
                    </div>
                  )}
                </Fragment>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiLeftMenuProps
 * @returns Default Editor template
 */
function defaultTemplate() {
  return <div>NO template</div>
}
