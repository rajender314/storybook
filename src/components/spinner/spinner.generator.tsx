import React from 'react'
import AtlasSpinner from '@atlaskit/spinner'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiSpinnerProps } from './spinner'

/**
 *
 * @param props as  PiSpinnerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSpinnerTemplate({
  libraryType,
  ...props
}: PiSpinnerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiSpinnerProps
 * @returns Spinner template
 */
function AtlasKitTemplate({ ...props }: PiSpinnerProps) {
  return <AtlasSpinner {...props} />
}

/**
 *
 * @param props as  PiSpinnerProps
 * @returns Default Spinner template
 */
function defaultTemplate(props: PiSpinnerProps) {
  return <div style={{ width: props.size }}></div>
}
