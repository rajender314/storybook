import React,{useContext} from 'react'
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { BreadCrumbItemProps, PiBreadCrumbProps } from './breadcrumbs'
import PiThemeContext from '../../themeContext'
import { PiBreadCrumbClass } from './breadcrumbs.css'

/**
 *
 * @param props as  PiBreadCrumbProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateBreadCrumbTemplate({
  libraryType,
  ...props
}: PiBreadCrumbProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiBreadCrumbProps
 * @returns BreadCrumb template
 */
function AtlasKitTemplate({ ...props }: PiBreadCrumbProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiBreadCrumbClass(theme)}>
    <Breadcrumbs {...props}>
      {props.items.map((item:BreadCrumbItemProps,index:number) => {
        return <BreadcrumbsItem href={item.href} text={item.label} key={index}/>
      })}
    </Breadcrumbs>
    </div>
  )
}

/**
 *
 * @param props as  PiAvatarProps
 * @returns Default BreadCrumb template
 */
function defaultTemplate() {
  return <div></div>
}
