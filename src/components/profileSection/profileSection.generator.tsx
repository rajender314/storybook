import React, { Fragment } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { ProfileProps, PiProfileSectionProps } from './profileSection'
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup
} from '@atlaskit/dropdown-menu'
import Button from '@atlaskit/button'
import PiAvatar from '../avatar'
import { PiProfileArrowIcon } from '../icon/profileArrow.icon'
import { PiProfileSectionClass } from './profileSection.css'

/**
 *
 * @param props as  PiSelectProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateProfileTemplate({
  libraryType,
  ...props
}: PiProfileSectionProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Atlaskit Profile Section template
 */
function AtlasKitTemplate({ ...props }: PiProfileSectionProps) {
  console.log(props.userImage)
  const userImg = props.userImage
  // const [userImg, setUserImg]: any = useState(null)

  // useEffect(() => {
  //  setUserImg(props.userImage)
  // }, [])
  return (
    <div>
      {/* {  console.log(props.userImage} */}
      <DropdownMenu
        {...props}
        trigger={({ triggerRef, ...props }) => (
          <Button
            style={{ backgroundColor: 'transparent' }}
            {...props}
            ref={triggerRef}
          >
            <div className={PiProfileSectionClass()}>
              {userImg && (
                <img
                  className='user_image'
                  src={userImg}
                  style={{
                    height: '35px',
                    width: '35px',
                    borderRadius: '50px'
                  }}
                  alt='loading'
                />
              )}
              {!userImg && <PiAvatar size='medium' />}
              <span className='down-arrow'>
                <PiProfileArrowIcon />
              </span>
            </div>
          </Button>
        )}
      >
        <DropdownItemGroup>
          {props.items.map((item: ProfileProps, i: number) => {
            return (
              <DropdownItem onClick={() => props.onClick(item)} key={i}>
                {item.name}
              </DropdownItem>
            )
          })}
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  )
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Default Profile Section  template
 */
function DefaultTemplate() {
  return (
    <Fragment>
      <div />
    </Fragment>
  )
}
