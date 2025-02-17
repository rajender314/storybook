import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Tooltip, { TooltipPrimitive } from '@atlaskit/tooltip'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiTooltipProps } from './tooltip'

/**
 *
 * @param props as  PiTooltipProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateTooltipTemplate({
  libraryType,
  ...props
}: PiTooltipProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate(props)
  }
}

const InlineDialog = styled(TooltipPrimitive)`
  background: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #bbbfc6;
  padding: 0px 6px;
  color: #2e374a;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Inter';
  font-weight: 500;
  max-width: 500px;
`

/**
 *
 * @param props as  PiTooltipProps
 * @returns Atlaskit Tooltip template
 */
function AtlasKitTemplate({ children, ...props }: PiTooltipProps) {
  return (
    <Tooltip component={InlineDialog} {...props}>
      {children}
    </Tooltip>
  )
}

/**
 *
 * @param props as  PiTooltipProps
 * @returns Default template
 */
function defaultTemplate(props: PiTooltipProps) {
  return <Fragment>{props.children}</Fragment>
}
