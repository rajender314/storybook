import { BaseProps } from '../../piConstant'
import { generateProductCardTemplate } from './productCard.generator'

export class PiProductCardProps extends BaseProps {
  params?: number | string | object 
  name: string
  description: string
  button_lable: string
  isDisabled?: boolean = false
  src: string
  onClick?: () => void
  onAddToCartHandler?: () => void
  onAddToWishListHandler?: () => void
  onCompareHandler?: () => void
}

/**
 *
 * @param props this component takes PiProductCardProps as input
 * @returns  returns component based on library type
 */
export default function PiProductCard(props: PiProductCardProps) {
  const newprops = new PiProductCardProps()
  return generateProductCardTemplate({ ...newprops, ...props })
}
