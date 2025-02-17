import React from 'react'
import { ProgressIndicator as AtlasProgressIndicator } from '@atlaskit/progress-indicator'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiProgressIndicatorProps } from './progressIndicator'

/**
 *
 * @param props as  PiProgressIndicatorProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateProgressIndicatorTemplate({
  libraryType,
  ...props
}: PiProgressIndicatorProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiProgressIndicatorProps
 * @returns ProgressIndicator template
 */
function AtlasKitTemplate({ ...props }: PiProgressIndicatorProps) {
  return (
    <div>
      <AtlasProgressIndicator {...props} />
    </div>
  )
}

/**
 *
 * @param props as  PiProgressIndicatorProps
 * @returns Default ProgressIndicator template
 */
function defaultTemplate() {
  return <div></div>
}
