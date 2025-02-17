import React from 'react'
import { BaseProps } from '../../piConstant'
import { generateFlagTemplate } from './flag.generator'
export type PiAppearanceType = 'error' | 'info' | 'normal' | 'success' | 'warning'

export class PiFlagProps extends BaseProps {
  title: React.ReactNode | string
  id: number | string
  appearance?: PiAppearanceType = 'info'
  description?: React.ReactNode | string
  handleClose?: () => {}
}

/**
 *
 * @param props this component takes PiFlagProps as input
 * @returns  returns component based on library type
 */
export default function PiFlag(props: React.PropsWithChildren<PiFlagProps>) {
  const newprops = new PiFlagProps()
  return generateFlagTemplate({ ...newprops, ...props })
}
