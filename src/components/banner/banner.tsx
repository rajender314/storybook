import React from 'react'
import { BaseProps } from '../../piConstant'
import { generateBannerTemplate } from './banner.generator'
export type PiAppearanceType = 'warning' | 'error' | 'announcement'

export class PiBannerProps extends BaseProps {
  appearance?: 'warning' | 'error' | 'announcement'
  icon?: React.ReactChild
  isOpen?: boolean
  children: React.ReactNode = 'Hello'
}

/**
 *
 * @param props this component takes PiBannerProps as input
 * @returns  returns component based on library type
 */
export default function PiBanner(props: PiBannerProps) {
  const newprops = new PiBannerProps()
  return generateBannerTemplate({ ...newprops, ...props })
}
