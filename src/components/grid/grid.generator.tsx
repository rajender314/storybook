import React from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import AgGridTemplate from './aggrid.template'
import { PiGridProps } from './grid'

/**
 *
 * @param props as  PiGridProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateGridTemplate({ libraryType, ...props }: PiGridProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AgGridTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

function DefaultTemplate() {
  return <div></div>
}
