import React from 'react'
import { BaseProps } from '../../piConstant'
import { generateLozengeTemplate } from './lozenge.generator'

export class PiLozengeProps extends BaseProps {
  appearance: any
  isBold?: boolean
  children: React.ReactNode = 'Hello'
  maxWidth?: number | string
  className?: string
}

/**
 *
 * @param props this component takes PiLozengeProps as input
 * @returns  returns component based on library type
 */
export default function PiLozenge(props: PiLozengeProps) {
  const newprops = new PiLozengeProps()
  return generateLozengeTemplate({ ...newprops, ...props })
}
