import React from 'react'
import { BaseProps } from '../../piConstant'
import { generateTooltipTemplate } from './tooltip.generator'

export class PiTooltipProps extends BaseProps {
  content: string = ''
  position?: any
  component?: any
  children: React.ReactNode
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function PiTooltip(props: PiTooltipProps) {
  const newprops = new PiTooltipProps()
  return generateTooltipTemplate({ ...newprops, ...props })
}
