import React from 'react'
import { BaseProps } from '../../piConstant'
import { generatePageHeaderTemplate } from './pageHeader.generator'

export class PiPageHeaderProps extends BaseProps {
  actions?: React.ReactElement
  bottomBar?: React.ReactElement
  breadcrumbs?: React.ReactElement
  children?: React.ReactNode
}

/**
 *
 * @param props this component takes PiPageHeaderProps as input
 * @returns  returns component based on library type
 */
export default function PiPageHeader(props: PiPageHeaderProps) {
  const newprops = new PiPageHeaderProps()
  return generatePageHeaderTemplate({ ...newprops, ...props })
}
