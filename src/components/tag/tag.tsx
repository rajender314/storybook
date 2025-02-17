import { BaseProps } from '../../piConstant'
import { generateTagTemplate } from './tag.generator'

type TagAppearanceType = 'default' | 'rounded'
export type TagColorType = 'info' | 'success' | 'warning' | 'danger'

export class PiTagProps extends BaseProps {
  appearance?: TagAppearanceType
  color: TagColorType = 'info'
  text: string
  href?: string
  isRemovable?: boolean
}

/**
 *
 * @param props this component takes PiTagProps as input
 * @returns  returns component based on library type
 */
export default function PiTag(props: PiTagProps) {
  const newprops = new PiTagProps()
  return generateTagTemplate({ ...newprops, ...props })
}
