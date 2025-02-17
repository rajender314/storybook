import React from 'react'
import { BaseProps } from '../../piConstant'
import { generateSectionMessageTemplate } from './sectionMessage.generator'
export type PiAppearanceType =
  | 'information'
  | 'warning'
  | 'error'
  | 'success'
  | 'discovery'

export class PiSectionMessageProps extends BaseProps {
  appearance?: 'information' | 'warning' | 'error' | 'success' | 'discovery'
  children?: React.ReactNode
  title?: string
}

/**
 *
 * @param props this component takes PiSectionMessageProps as input
 * @returns  returns component based on library type
 */
export default function PiSectionMessage(props: PiSectionMessageProps) {
  const newprops = new PiSectionMessageProps()
  return generateSectionMessageTemplate({ ...newprops, ...props })
}
