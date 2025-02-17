// import { FormEventHandler } from 'react'

import { BaseProps } from '../../piConstant'
import { generateInputTemplate } from './input.generator'

export class PiInputProps2 extends BaseProps {
  label?: string
  name: string = 'inputField'
  onKeyDown?: (e: KeyboardEvent) => void
  onChange?: (e: any) => void
  helpText?: string
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isCompact?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  width?: string | number
  placeholder?: string
  type?: string = 'text'
  className?: string
  value?: string
  defaultValue?: string
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiInput2(props: PiInputProps2) {
  const newprops = new PiInputProps2()
  return generateInputTemplate({ ...newprops, ...props })
}
