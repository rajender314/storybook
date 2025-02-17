import { BaseProps } from '../../piConstant'
import { generateAddressTemplate } from './multi-address.generator'

export type AddressElements = {
  id?: number
  address1?: string
  address2?: string
  street?: string
  city?: string
  state?: string
  country?: string
  zip?: number
}
export type AddressTypeProps = {
  billing: AddressElements
  shipping: AddressElements
}
export class PiAddressProps extends BaseProps {
  billingLabel: string
  shippingLabel: string
  data: AddressTypeProps
}

/**
 *
 * @param props this component takes PiAddressProps as input
 * @returns  returns component based on library type
 */
export default function PiMultiAddress(props: PiAddressProps) {
  const newprops = new PiAddressProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
