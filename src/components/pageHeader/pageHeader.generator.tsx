import React from 'react'
import PageHeader from '@atlaskit/page-header'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiPageHeaderProps } from './pageHeader'
import { PiPageHeaderClass } from './pageHeader.css'

/**
 *
 * @param props as  PiPageHeaderProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatePageHeaderTemplate({
  libraryType,
  ...props
}: PiPageHeaderProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiPageHeaderProps
 * @returns Page Header template
 */
function AtlasKitTemplate({ ...props }: PiPageHeaderProps) {
  return (
    <div className={PiPageHeaderClass()}>
      <PageHeader {...props}>{props.children}</PageHeader>
    </div>
  )
}

/**
 *
 * @param props as  PiPageHeaderProps
 * @returns Default Page Header template
 */
function defaultTemplate() {
  return <div></div>
}
