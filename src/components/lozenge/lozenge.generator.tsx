import React from 'react'
import AtlasLozenge from '@atlaskit/lozenge';
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiLozengeProps } from './lozenge'

/**
 *
 * @param props as  PiLozengeProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateLozengeTemplate({
  libraryType,
  ...props
}: PiLozengeProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiLozengeProps
 * @returns Lozenge template
 */
function AtlasKitTemplate({ ...props }: PiLozengeProps) {
  return <AtlasLozenge {...props} >{props.children}</AtlasLozenge>
}

/**
 *
 * @param props as  PiLozengeProps
 * @returns Default Lozenge template
 */
function defaultTemplate() {
  return <div></div>
}
