import { BaseProps } from '../../piConstant'
import { generateAvatarTemplate } from './avatar.generator'

export class PiAvatarProps extends BaseProps {
  appearance?: 'circle' | 'square' = 'circle'
  borderColor?: string
  href?: string
  isDisabled?: boolean
  presence?: 'online' | 'offline' | 'busy' | 'focus'
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  src?: string
  status?: 'approved' | 'declined' | 'locked'
  target?: '_blank' | '_self' | '_top' | '_parent'
  onClick?: () => void
  ref?: any
}

/**
 *
 * @param props this component takes PiAvatarProps as input
 * @returns  returns component based on library type
 */
export default function PiAvatar(props: PiAvatarProps) {
  const newprops = new PiAvatarProps()
  return generateAvatarTemplate({ ...newprops, ...props })
}
