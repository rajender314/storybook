import { BaseProps } from '../../piConstant'
import { generatePermissionsListTemplate } from './permissionslist.generator'

export type InputProps = {
  name: string
  type: string
  options: Array<any>
  children: Array<any>
  [x: string]: string | object | Array<any> | number | boolean | null
}
export class PiPermissionsListProps extends BaseProps {
  inputObject: Array<InputProps> = []
  values: any
  onValueChange: (e: object, obj?: any, val?: any) => void
}

/**
 *
 * @param props this component takes PiPermissionsProps as input
 * @returns  returns component based on library type
 */
export default function PiPermissionsList(props: PiPermissionsListProps) {
  const newprops = new PiPermissionsListProps()
  return generatePermissionsListTemplate({ ...newprops, ...props })
}
